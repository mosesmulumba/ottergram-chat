export default function SelectedItem ({image,name}){
    return(
            <div className="selected--item">
                <p className="name">{name}</p>
                <img src={image} alt={name} width="300px" height="300px" />
            </div>
    );
}