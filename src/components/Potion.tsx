const Potion = ({ title }: { title: string }) => {
    return (
        <div className="card col border text-bg-dark bg-dark">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    );
};

export default Potion;