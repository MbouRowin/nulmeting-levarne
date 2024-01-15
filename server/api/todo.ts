export default defineEventHandler(async (event) => {
  const { apiKey } = useRuntimeConfig(event);

  return await $fetch(
    "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
    {
      headers: {
        "X-Api-Key": apiKey,
      },
    }
  );
});
