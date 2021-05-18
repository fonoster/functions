/*
 * Copyright (C) 2021 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonos-functions
 *
 * This file is part of Project Fonos
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import express from 'express';
import bodyParser from 'body-parser';
import functionMiddleware from './utils/middleware/functionMiddleware';
const app = express();
const defaultMaxSize = '100kb' // body-parser default

app.disable('x-powered-by');

const rawLimit = process.env.MAX_RAW_SIZE || defaultMaxSize
const jsonLimit = process.env.MAX_JSON_SIZE || defaultMaxSize

app.use(function addDefaultContentType(req, res, next) {
    // When no content-type is given, the body element is set to 
    // nil, and has been a source of contention for new users.

    if(!req.headers['content-type']) {
        req.headers['content-type'] = "text/plain"
    }
    next()
})

if (process.env.RAW_BODY === 'true') {
    app.use(bodyParser.raw({ type: '*/*' , limit: rawLimit }))
} else {
    app.use(bodyParser.text({ type : "text/*" }));
    app.use(bodyParser.json({ limit: jsonLimit}));
    app.use(bodyParser.urlencoded({ extended: true }));
}



app.post('/*', functionMiddleware);
app.get('/*', functionMiddleware);
app.patch('/*', functionMiddleware);
app.put('/*', functionMiddleware);
app.delete('/*', functionMiddleware);
app.options('/*', functionMiddleware);

const port = process.env.http_port || 3000;



module.exports = app.listen(port, () => {
    console.log(`node12 listening on port: ${port}`)
});

