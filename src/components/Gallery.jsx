function Gallery() {

    function HornedBeasts({ title, imageURL, description }) {

        return (
            <>
                <h2>{title}</h2>
                <img src={imageURL} alt={title} title={title} />
                <p>{description}</p>
            </>
        );
    }

    return (
        <>
            <HornedBeasts
                title={"title of picture"}
                imageURL={"image link"}
                description={"description of link"}
            />
            <HornedBeasts
                title={"title of picture"}
                imageURL={"image link"}
                description={"description of link"}
            />
        </>
    )
}

export default Gallery