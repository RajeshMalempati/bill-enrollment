import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div class="site-main main">
        <form class="form-inline">
          <header class="container">
            <h4>Bill.com enrollments for bank Operators</h4>
            <div class="container">
              <div class="row  justify-content-center">
                <div class="col-sm-4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheckDisabled" />
                    <label class="custom-control-label justify-content-start" for="customCheckDisabled">Bill.com setup for CEO Company Id</label>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="form-group form-check">
                    <div class="col-sm-5">
                      <label class="form-check-label form-control-static" for="exampleCheck1">Bill Account for the Product*</label>
                    </div>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" placeholder="Bill Account for the Product" />
                    </div>
                  </div>
                  <div>
                    <div class="form-group form-check">
                      <div class="col-sm-5">
                        <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Price Plan</label>
                      </div>
                      <div class="col-sm-7">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle col-sm-11 text-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select
                    </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  WICE to capture billing account to store in WGPR for billing. WICE to capture Subscrip[tion Level on submited form workflow routing.
               </div>
              </div>

            </div>
          </header>
          <hr class="hr-primary col-sm-10" />
          <section class="container">
            <h6>Company Setup</h6>
            <h4 class="text-success">CEO Company ID</h4>
            <div class="form-group form-check">
              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Link Bank Account for Settlements*</label>
              </div>
              <div class="col-sm-4">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle col-sm-11 text-left" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select
                    </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="custom-control custom-checkbox dropdown-item">
                      <input type="checkbox" class="custom-control-input" id="Option1" />
                      <label class="custom-control-label justify-content-start" for="Option1">Option1</label>
                    </div>
                    <div class="custom-control custom-checkbox dropdown-item">
                      <input type="checkbox" class="custom-control-input" id="Option2" />
                      <label class="custom-control-label justify-content-start" for="Option2">Option2</label>
                    </div>
                    <div class="custom-control custom-checkbox dropdown-item">
                      <input type="checkbox" class="custom-control-input" id="Option3" />
                      <label class="custom-control-label justify-content-start" for="Option3">Option3</label>
                    </div>
                    <div class="custom-control custom-checkbox dropdown-item">
                      <input type="checkbox" class="custom-control-input" id="Option3" />
                      <label class="custom-control-label justify-content-start" for="Option3">Option3</label>
                    </div>
                    <div class="custom-control custom-checkbox dropdown-item">
                      <input type="checkbox" class="custom-control-input" id="Option3" />
                      <label class="custom-control-label justify-content-start" for="Option3">Option3</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <p>WICE to capture billing account to store in WGPR for billing. WICE to capture Subscrip[tion Level on submited form workflow routing.
                </p>
                <p>WICE to capture billing account to store in WGPR for billing. WICE to capture Subscrip[tion Level on submited form workflow routing.
                </p>
              </div>
            </div>
            <div class="form-group form-check">
              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Organisation Number*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Organisation Number" />
              </div>
              <div class="col-sm-4"></div>
            </div>
            <div class="form-group form-check">
              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Address Block*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Address Block" />
              </div>
              <div class="col-sm-4">
                <p>WICE to capture billing account to store in WGPR for billing.</p>
              </div>
            </div>
            <div class="form-group form-check">
              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Tax Id*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Tax Id" />
              </div>
              <div class="col-sm-4">
               
              </div>
              <br />




              <h4 class="text-success">USER Setup</h4>

             <br />


               
              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Email Address*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Email Address" />
              </div>

              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">First Name*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="First Name" />
              </div>


              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Last Name*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
              

              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Function*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Function*" />
              </div>
              
              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Super User*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Super User*" />
              </div>

              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Payer*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Payer*" />
              </div>
              

              <div class="col-sm-3">
                <label class="form-check-label form-control-static justify-content-start" for="exampleCheck1">Accountant*</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="Accountant*" />
              </div>
              
              
              
              
              

              
              

              
              
            </div>
          </section>
        </form>


      </div>

      
    );
  }
}

export default App;
