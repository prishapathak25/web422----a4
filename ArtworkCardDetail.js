import useSWR from 'swr';
import { Card } from 'react-bootstrap';
import { Error } from 'next/error';

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const ArtworkCardDetail = ({ objectID }) => {

    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`, fetcher);

    if (error) {
        return <Error statusCode={404} />;
    }

    if (!data) {
        return null;
    }

    const { primaryImage, artistDisplayName, creditLine, dimensions, medium, artistWikidata_URL } = data;

    return (
        <Card style={{ width: '18rem' }}>
            {primaryImage && (
                <Card.Img variant="top" src={primaryImage} />
            )}
            <Card.Body>
                <Card.Text>
                {medium && (
                    <>
                    <strong>Medium:</strong> {medium}<br />
                    <br />
                    </>
                )}
                {artistDisplayName && (
                    <>
                    <strong>Artist:</strong> <a href={artistWikidata_URL} target="_blank" rel="noreferrer">{artistDisplayName}</a><br />
                    </>
                )}
                {!artistDisplayName && (
                    <>
                    <strong>Artist:</strong> N/A<br />
                    </>
                )}
                <strong>Credit Line:</strong> {creditLine || 'N/A'}<br />
                <strong>Dimensions:</strong> {dimensions || 'N/A'}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ArtworkCardDetail;