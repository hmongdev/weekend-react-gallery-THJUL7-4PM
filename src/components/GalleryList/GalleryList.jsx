import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ items, getGalleryList }) {
    return (
        <>
            <div className="GalleryList-Item">
                {items.map((item) => (
                    <GalleryItem
                        key={item.id}
                        item={item}
                        getGalleryList={getGalleryList}
                    />
                ))}
            </div>
        </>
    );
}

export default GalleryList;
