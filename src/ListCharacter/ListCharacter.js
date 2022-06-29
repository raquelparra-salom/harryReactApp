
import { useEffect, useState } from "react";
import { Character } from "../Character"
import { Button } from "../Button/Button"

function ListCharacter() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://harry-potter-api-production.up.railway.app/personajes")
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setIsLoaded(true);
                setItems(result);
            });
    }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Howards</h1>
                    <Button />
                </header>

                {items.map(item => (
                    <Character title={item.personaje} img={item.imagen} house={item.casaDeHogwarts} />
                ))}

            </div>
        )
    }
}

export { ListCharacter }


