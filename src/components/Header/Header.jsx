export default function Header() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <img src="./public/budget.png" alt="..." className="mt-5 col col-2" style={{ width: '100px' }} />
            </div>
            <h1 id="header" className="text-light fw-bold">Investment Calculator</h1>
        </>
    );
}