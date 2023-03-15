import './searchBar.css';

export default function SearchBar() {
    return (
        <div class="searchBar">
            <h2 class="heading" >Search Items</h2>
            <form id="form">
                <input type = "text" class = "inputField" placeholder ="Search Please"/>
            </form>
            <input type="button" class="search" value ="Search"/>
        </div>
    )
}