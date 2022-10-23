let koalaContainer = <div className="ui items">

{/* Koala Card
 koalas are in './public/koalas.js'*/}
{koalas.map(koala => (
    <div className="item" style={{ cursor: "pointer" }}>

    {/* Koala Card Image*/}
    <div className="image">
        <img src={koala.imageURL}/>
    </div>

    {/* Koala Card Content*/}
    <div className="content">
        <div className="header">
            {koala.name}
        </div>
        <div className="description">
            <p>
                {koala.description}
            </p>
        </div>
        <div className="description">
        </div>
    </div>
</div>
))}
</div>

document.body.append(koalaContainer)