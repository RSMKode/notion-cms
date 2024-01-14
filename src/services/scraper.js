import * as cheerio from "cheerio";

export async function scrape($url, $date = time()) {
  const html = await fetch(
    "https://marvel.fandom.com/wiki/Amazing_Spider-Man_Vol_1_1"
  ).then((response) => response.text());

  const $ = cheerio.load(html);
}
