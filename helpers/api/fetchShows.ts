// Fetch data from external API
export async function fetchShows() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/shows`);
    const data = await res.json();

    return data;
}
