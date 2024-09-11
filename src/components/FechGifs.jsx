const fetchGifs = async () => {
    setState({ ...state, isLoading: true });
    try {
        // Añadir un retraso (ejemplo de 2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));

        const url = `https://api.giphy.com/v1/gifs/trending?api_key=cYa1gw5FrDZVETZGCtxLEEK4WBJMyAsA&q=${category}&limit=10`;
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }
        const { data } = await resp.json();
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        setState({
            images: gifs,
            isLoading: false
        });
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        setState({
            images: [],
            isLoading: false
        });
    }
};