import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ items, getGalleryList }) {
    return (
        <>
            <div>
                {items.map((image) => (
                    <GalleryItem
                        key={image.id}
                        image={image}
                        getGalleryList={getGalleryList}
                    />
                ))}
            </div>
        </>
    );
}

export default GalleryList;
