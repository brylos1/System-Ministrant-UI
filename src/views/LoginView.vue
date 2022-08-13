<template>
<div class="container-fluid login">
    <div class=" col-lg-6 background-wrapper mx-auto mt-4">
        <div class="container py-5">
            <div class="input-group mb-3 mx-auto w-75">
                <span class="input-group-text" id="basic-addon1"><font-awesome-icon icon="fa-solid fa-at" /></span>
                <input type="text" class="form-control" placeholder="Login" aria-label="Login" aria-describedby="basic-addon1">
            </div>
             <div class="input-group mb-3 mx-auto w-75">
                <span class="input-group-text" id="basic-addon1"><font-awesome-icon icon="fa-solid fa-lock" /></span>
                <input type="password" class="form-control" placeholder="Hasło" aria-label="Hasło" aria-describedby="basic-addon1">
            </div>
            <div class="d-flex justify-content-end input-group mx-auto w-75">
                <button type="button" class="btn btn-acept w-sm-25">Zaloguj</button>
            </div>
        </div>
   
    </div>

</div>
</template>
<style>
.background-wrapper, .dyzuryr .vc-container.vc-is-dark  {
    background-color: #555555;
}
.login .btn-acept{
    background-color: #F73D93;
    color: #ffffff;
}
.login .btn-acept:hover, .login .btn-acept:focus{
    background-color: #c400ae;
    color: #ffffff;
}
</style>