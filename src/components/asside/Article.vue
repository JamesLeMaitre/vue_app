<script lang="ts">
import 'datatables.net-bs4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Article',
}
</script>
<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">Add New User</h6>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="px-4">
              <form>
                <div class="row">
                  <h4 hidden id="idArticle"></h4>

                  <div class="col-md-4 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Firstname<span class="text-danger">&nbsp;</span></label
                      >
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Lastname<span class="text-danger">&nbsp;*</span>
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="input-group input-group-dynamic" id="stockClassik">
                      <label class="form-label"
                        >Address<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="text"
                        id="address"
                        name="address"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>

                </div>



                <button class="btn btn-info btn-lg mt-4 btnSa" type="submit" id="addArticle">
                  Enregistrer
                </button>
                <button
                  class="btn btn-success btn-lg mt-4 addS"
                  type="submit"
                  id="addStock"
                  style="display: none"
                >
                  Ajouter stock
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header pb-0 p-3">
            <h6 class="mb-0">List of Users</h6>
          </div>

          <div class="card-body">
            <div class="table-responsive p-0">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                <tr>
                  <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                    Firstname
                  </th>
                  <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                   Lastname
                  </th>
                  <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">

                  </th>
                  <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                    Address
                  </th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
                </thead>
                <tbody>
                <tr >
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm"></h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 class="text-sm font-weight-bold mb-0" >
                    </h6>
                    <p class="text-sm text-secondary mb-0" >
                    </p>
                  </td>
                  <td class="text-center text-sm">
                    <h6 class="text-sm font-weight-bold mb-0" >

                    </h6>
                    <p class="text-sm text-secondary mb-0" >

                    </p>
                  </td>
                  <td class="text-center text-sm">
                    <h6 class="text-sm font-weight-bold mb-0" >

                    </h6>
                    <p class="text-sm text-secondary mb-0" >

                    </p>
                  </td>
                  <td class="align-content-start">
                    <div class="ms-auto text-center">


                      <button class="btn btn-link text-danger text-gradient px-3 mb-0 supArticle"><i class="material-icons text-sm me-2">delete</i>Delete</button>
                      <button class="btn btn-link text-dark px-3 mb-0 editArticle"><i class="material-icons text-sm me-2">edit</i>Edit</button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
