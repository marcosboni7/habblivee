import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md h-16" data-testid="test_header">
            <div className="flex items-center justify-between container h-full px-4 mx-auto">
                <div className="flex items-center">
                    <img src="/logo.png" alt="" />
                    <nav>
                        <ul className="flex gap-10 list-none ml-6">
                            <li>
                                <Link href="#">Home</Link>
                            </li>
                            <li>
                                <Link href="#">Notícias</Link>
                            </li>
                            <li>
                                <Link href="#">Equipe</Link>
                            </li>
                            <li>
                                <Link href="#">Valores</Link>
                            </li>
                            <li>
                                <Link href="#">Extras</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-5">
                    <button type="button" className="flex items-center border-2 border-blue-500 p-1 rounded-md">
                        <span className="bg-blue-500 py-1 px-4 rounded-md">
                            <img src="/door.svg" alt="" />
                        </span>
                        <span className="text-blue-600 px-6">Entre</span>
                    </button>
                    ou
                    <button type="button" className="flex items-center bg-blue-500 p-1 rounded-md">
                        <span className="bg-white py-1 px-4 rounded-md">
                            <img src="/user-plus.svg" alt="" />
                        </span>
                        <span className="text-white px-6">Registre-se</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;