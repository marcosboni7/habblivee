const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-50 to to-blue-200 py-12" data-testid="test_footer">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/logo_150.png" alt="" />
                        <h4>Radio Habblive • 2023</h4>
                    </div>
                    <p className="w-1/3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ratione corporis dolorem
                    labore aspernatur autem explicabo laudantium rerum obcaecati consequuntur laborum expedita sed qui praesentium magni dolores amet pariatur quaerat.
                    </p>
                </div>
                <div className="text-center">
                    © Todos os direitos reservados.
                </div>

            </div>
        </footer>
    );
};

export default Footer;