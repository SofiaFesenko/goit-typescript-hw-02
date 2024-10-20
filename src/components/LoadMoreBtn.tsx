type Props = {
    page: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function LoadMoreBtn({page}: Props) {
    return (
        <button type="button" onClick={page}>Load More</button>
    )
}

export default LoadMoreBtn