export async function getDatabaseData(client, databaseId) {
  try {
    let results = [];

    const response = await client.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        status: {
          equals: "Live",
        },
      },
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    });

    console.log(response.results.length);
    return response;
  } catch (error) {
    console.error(error);
  }
}
