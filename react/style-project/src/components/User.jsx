const User = ({ item, clickDeleteButtonHandler }) => {
    return (
        <div key={item.id} className="component-style">
            {item.age} - {item.name}
            <button onClick={() => clickDeleteButtonHandler(item.id)}>X</button>
        </div>
    )
};

export default User;