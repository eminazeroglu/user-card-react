import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Page from "../components/Page";
import UserItems from "../components/UserItems";

function Home() {

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const res = await axios.get('https://randomuser.me/api/?results=5');
        setItems(res.data.results);
    }

    useEffect(() => {
        fetchItems();
    }, [])

    return (
        <Page title="Home">
            <UserItems items={items}/>
        </Page>
    );
}

export default Home;