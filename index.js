import {program} from "commander";
import express from "express";
import path from "path";

program.option("-d, --directory <string>", "Specify the directory to serve.", ".");
program.option("-p, --port <number>", "Specify the port to host on.", "8080");

const options = program.parse().opts();

const directory = path.resolve(options.directory);

const application = express();

application.use(express.static(directory));
application.listen(parseInt(options.port), () => {
    console.info(`Server now serving "${directory}" listening on port ${options.port}.`);
});
