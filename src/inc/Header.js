import logo from './../icon.svg';
export default () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} />
            </div>
            <form>
                <input type="text" placeholder="search" />
                &nbsp;
                <button>
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </header>
    );
}