type Props = {
    src: string,
    onImageClick: (event: React.MouseEvent<HTMLElement>) => void
}

function ImageCard({src, onImageClick}: Props) {
    return (
        <>
            <img src={src} alt="fewfawfw" onClick={onImageClick}/>
        </>
        
    )
}

export default ImageCard