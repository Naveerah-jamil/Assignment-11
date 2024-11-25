import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    let name = "Naveerah Jamil"
    let age = 16
    let qualification = "styding in First year"

    return (
        <div className="mt-10 bg-purple-300 xl:cols-2 sm:cols-2 md:cols-3">
            <ChildComponent name={name} />
            <ChildComponent age={age} />
            <ChildComponent qualification={qualification} />
        </div>
    )
}

export default ParentComponent;