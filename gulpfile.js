/* eslint-disable no-console */
/* ----- plugins ----- */

var gulp = require("gulp");
const zip = require("gulp-zip");
const request = require("request");
const fs = require("fs");
const open = require("opn");
// change appid to choice color
const config = {
    FB_appId: "393593374676672",
    FB_uploadAccessToken: "393593374676672|N7EuVQ7uceCoV0oCjWRDjAuDoOc"
};

/* ----- build tasks ----- */

// var exec = require("child_process").exec;
// var isDebug = false;

function archive(archivesFolder, filename) {
    return new Promise(function (resolve, reject) {
        console.log(
            "Going to create zip archive: " + archivesFolder + "/" + filename
        );
        gulp
            .src([
                __dirname + "/dist/**",
                "!" + __dirname + "/dist/archives/**",
                "!**.zip"
            ])
            .pipe(zip(filename))
            .on("error", reject)
            .pipe(gulp.dest(archivesFolder))
            .on("end", function () {
                console.log("ZIP archive created");
                resolve();
            });
    });
}

function upload(archivesFolder, filename) {
    return new Promise(function (resolve, reject) {
        console.log("Going to upload archive: " + archivesFolder + "/" + filename);
        var comment = process.argv[4] || "Uploaded via gulp task -  Vue Version"; //gulp devfb --option them-ngon-ngu

        request.post(
            {
                url: "https://graph-video.facebook.com/" + config.FB_appId + "/assets",
                formData: {
                    access_token: config.FB_uploadAccessToken,
                    type: "BUNDLE",
                    comment: comment,
                    asset: {
                        value: fs.createReadStream(
                            __dirname + "/" + archivesFolder + "/" + filename
                        ),
                        options: {
                            filename: filename,
                            contentType: "application/octet-stream"
                        }
                    }
                }
            },
            function (error, response, body) {
                if (error || !body) reject(error);
                try {
                    body = JSON.parse(response.body);
                    if (body.success) {
                        console.log("Response", JSON.stringify(body));
                        console.log("Bundle uploaded via the graph API");
                        console.log("Don't forget you need to publish the build");
                        console.log("Opening developer dashboard...");
                        open(
                            "https://developers.facebook.com/apps/" +
                            config.FB_appId +
                            "/instant-games/hosting/"
                        );
                        resolve();
                    } else {
                        reject(
                            "Upload failed. Unexpected Graph API response: " + response.body
                        );
                    }
                } catch (e) {
                    open(
                        "https://developers.facebook.com/apps/" +
                        config.FB_appId +
                        "/instant-games/hosting/"
                    );
                    reject("Upload failed. Invalid response response: " + response.body);
                }
            }
        );
    });
}

gulp.task("push", function (done) {
    const time = new Date().getTime();
    const filename = `build-${time}.zip`;
    const archivesFolder = "dist/archives";
    archive(archivesFolder, filename).then(function () {
        upload(archivesFolder, filename).then(function () {
            console.log("Success!");
            done();
        });
    });
    console.log("run through");
    done();
});
