export async function loadMarkdown() {

    const postFiles = import.meta.glob("./md/**/*.{md,svx,svelte.md}");

    const postPromises = [];

    for (const [path, resolver] of Object.entries(postFiles)) {
        const slug = path.replace(".svx", "").replace(".md", "").replace("./", "/"); //slugFromPath(path);
        const promise = resolver().then(post => [post.metadata.id, post.default]);
        postPromises.push(promise);
    }
    const contents = await Promise.all(postPromises);
    return Object.fromEntries(contents)
}
