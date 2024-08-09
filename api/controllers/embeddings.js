// const { OpenAI } = require("openai");
// const { Client } = require("pg");
// const { checkEmbeddingValid } = require("./embeddings_utils.js");



// const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

// const pgEndpoint = {
//     //host: new URL(process.env.DATABASE_URL).hostname,
//     // port: process.env.PORT,
//     // database: new URL(process.env.DATABASE_URL).pathname.slice(1),
//     // user: process.env.DATABASE_USER,
//     // password: process.env.DATABASE_PASSWORD


// };


// async function main() {
//     const client = new Client(pgEndpoint);
//     await client.connect();

//     console.log("Connected to Postgres");

//     let id = 0;
//     let length = 0;
//     let totalCnt = 0;

//     do {
//         console.log(`Processing rows starting from ${id}`);

//         const res = await client.query(
//             "SELECT id, CONCAT_WS(' ', name, price, color, size, sex, material, product_type) FROM public.'Pants' " +
//             "WHERE id >= $1 and description IS NOT NULL ORDER BY id LIMIT 200", [id]);
//         length = res.rows.length;
//         let rows = res.rows;

//         if (length > 0) {
//             for (let i = 0; i < 10; i++) {
//                 const description = rows[i].description.replace(/\*|\n/g, ' ');

//                 id = rows[i].id;

//                 const embeddingResp = await openai.embeddings.create({
//                     model: "text-embedding-3-small",
//                     input: description,
//                 });

//                 if (!checkEmbeddingValid(embeddingResp))
//                     return;

//                 const res = await client.query("UPDATE public.'Pants' SET embeddings = $1 WHERE id = $2",
//                     ['[' + embeddingResp.data[0].embedding + ']', id]);

//                 totalCnt++;
//             }

//             id++;

//             console.log(`Processed ${totalCnt} rows`);
//         }
//     } while (length != 0);

//     console.log(`Finished generating embeddings for ${totalCnt} rows`);
//     process.exit(0);
// }

// main();

// module.exports = { main };