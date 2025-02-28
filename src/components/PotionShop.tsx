const PotionShop = ({ title, potions }: { title: string; potions: string[] }) => {
    return (
        <div>
            <h2 className="mb-5">{title}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {potions.map((potion, index) => (
                    <div key={index} className="card col border text-bg-dark bg-dark">
                        <div className="card-body">
                            <h5 className="card-title">{potion}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PotionShop;