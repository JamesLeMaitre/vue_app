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
            <h6 class="mb-0">Formulaire Article</h6>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="px-4">
              <form>
                <div class="row">
                  <h4 hidden id="idArticle"></h4>

                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Numéro<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="text"
                        id="numero"
                        name="numero"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>

                  <div id="flu" class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Désignation<span class="text-danger">&nbsp;*</span>
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic" id="stockClassik">
                      <label class="form-label"
                        >Quantité carton<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="number"
                        id="qc"
                        name="qc"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>

                  <div id="flu" class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Quantité de piece par carton<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="number"
                        id="qpc"
                        name="qpc"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>
                </div>

                <div id="flu" class="row mt-5">
                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Prix d'achat total cartons<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="number"
                        id="pac"
                        name="pac"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Prix d'achat unité carton<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="number"
                        id="pauc"
                        name="pauc"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Prix d'achat unitaire par carton<span class="text-danger"
                          >&nbsp;*</span
                        ></label
                      >
                      <input
                        type="number"
                        id="pau_c"
                        name="pau_c"
                        class="multisteps-form__input form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Prix de vente unitaire<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="number"
                        id="pvu"
                        name="pvu"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>
                </div>
                <div id="flu" class="row mt-5">
                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label"
                        >Prix de vente carton<span class="text-danger">&nbsp;*</span></label
                      >
                      <input
                        type="number"
                        id="pvc"
                        name="pvc"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>









                  <div class="col-md-3 row">
                    <div class="col-md-6 col-sm-6">
                      <div class="input-group input-group-dynamic">
                        <label class="form-label"
                          >Quantité seuil<span class="text-danger">&nbsp;*</span></label
                        >
                        <input
                          type="number"
                          id="qtesl"
                          name="qtsl"
                          class="multisteps-form__input form-control"
                          autocomplete="false"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="input-group input-group-dynamic">
                        <label class="form-label"
                          >Quantité alerte<span class="text-danger">&nbsp;*</span></label
                        >
                        <input
                          type="number"
                          id="qtealt"
                          name="qtealt"
                          class="multisteps-form__input form-control"
                          autocomplete="false"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 row">
                    <div class="col-md-6 col-sm-6">
                      <div class="input-group input-group-dynamic">
                        <label class="form-label"
                          >Remise Qte<span class="text-danger">&nbsp;*</span></label
                        >
                        <input
                          type="number"
                          id="remise"
                          name="remise"
                          class="multisteps-form__input form-control"
                          autocomplete="false"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="input-group input-group-dynamic">
                        <label class="form-label"
                          >Remise (%)<span class="text-danger">&nbsp;*</span></label
                        >
                        <input
                          type="number"
                          id="remise_price"
                          name="remise_price"
                          class="multisteps-form__input form-control"
                          autocomplete="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-5" hidden>
                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label">Qte restante</label>
                      <input
                        type="number"
                        id="qterestante"
                        name="qterestante"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="input-group input-group-dynamic">
                      <label class="form-label">Qté vendu</label>
                      <input
                        type="number"
                        id="qtevendu"
                        name="qtevendu"
                        class="multisteps-form__input form-control"
                        autocomplete="false"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6" hidden>
                  <div class="input-group input-group-dynamic">
                    <label class="form-label">QC NEW</label>
                    <input
                      type="number"
                      id="qcnew"
                      name="qcnew"
                      class="multisteps-form__input form-control"
                      autocomplete="false"
                    />
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
            <h6 class="mb-0">Collection d'articles</h6>
          </div>

          <div class="card-body">
            <div class="table-responsive p-0">
              <table class="table table-flush" id="datatable-basic">
                <thead class="thead-light">
                <tr>
                  <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                    Désignation
                  </th>
                  <th class="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">
                    PA / PV
                  </th>
                  <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                    Qté total / vendu (PCS)
                  </th>
                  <th class="text-center text-uppercase text-secondary text-sm font-weight-bolder opacity-7">
                    Qté carton / pièce par carton
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


                      <button class="btn btn-link text-danger text-gradient px-3 mb-0 supArticle"><i class="material-icons text-sm me-2">delete</i>Supprimer</button>
                      <button class="btn btn-link text-dark px-3 mb-0 editArticle"><i class="material-icons text-sm me-2">edit</i>Modifier</button>
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
