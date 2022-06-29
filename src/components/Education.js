const Education = () =>
{
    return (
        <section id="educationSkills" >
            {/* style="background-color: #e2edff;" */}
        <div class="container">
            <div class="row mb-3">
            <div class="col text-center">
                <h2>Education & Skills</h2>
            </div>
            </div>

            {/* <!-- Education and Skills 1 --> */}
            <div class="row justify-content-center">
            <div class="col-3 mb-3 text-center">
                <img src="darell.webp" width="200px" height="200px" class="rounded-circle img-thumbnail" alt="..." />
            </div>
            </div>

            <div class="row justify-content-evenly">
            <div class="col-md-3 mb-3">
                {/* style="width: 18rem;" */}
                <div class="card" >
                <img src="vladislav-vasilev-9qbPV3dvna0-unsplash.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Elementry</h5>
                    <p class="card-text">I was Studying at Klabat University - Elementary.</p>
                </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                {/* style="width: 18rem;" */}
                <div class="card">
                <img src="vladislav-vasilev-9qbPV3dvna0-unsplash.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Midle School</h5>
                    <p class="card-text">I was studying at Klabat University - Middle School.</p>
                </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                {/* style="width: 18rem;" */}
                <div class="card">
                <img src="vladislav-vasilev-9qbPV3dvna0-unsplash.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">High School</h5>
                    <p class="card-text">I was Studying at Klabat University - High School.</p>
                </div>
                </div>
            </div>
            </div>

            {/* <div class="row justify-content-center mb-5">
            <div class="col-md-7 shadow-sm bg-light p-3 m-3">
                <em>HTML</em>
                <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 70%">70%</div>
                </div>
                <em>JavaScript</em>
                <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 60%">60%</div>
                </div>
                <em>CSS</em>
                <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 80%">80%</div>
                </div>
                <em>Bootstrap</em>
                <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 70%">70%</div>
                </div>
            </div>
            </div> */}
            {/* <!-- Education and Skills 1 End--> */}

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L34.3,218.7C68.6,213,137,203,206,181.3C274.3,160,343,128,411,144C480,160,549,224,617,229.3C685.7,235,754,181,823,149.3C891.4,117,960,107,1029,122.7C1097.1,139,1166,181,1234,213.3C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </section>
    )
}

export default Education;