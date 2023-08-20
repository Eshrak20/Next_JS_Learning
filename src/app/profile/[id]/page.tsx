export default  function UserprofilePage({params}:any) {
    return (
        <div className="flex flex-col  items-center justify-center min-h-screen py-2 ml-2 text-3xl">
            <h1>Profile</h1>
            <hr />
            <p className="mb-4">Profile page</p>
            <span className="text-4xl text-black bg-orange-600 rounded-lg p-4"> {params.id}</span>
        </div>
    )
}