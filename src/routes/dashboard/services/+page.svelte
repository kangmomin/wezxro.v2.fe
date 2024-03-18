<script>

    /** @type {Category[]} */
    const category = []
    /** @type {Service[]} */
    const services = []
</script>

<section class="page-title">
    <div class="row justify-content-between">
        <div class="col-md-9">
            <h1 class="page-title">
                서비스 목록
            </h1>
        </div>
        <div class="col-md-3">
            <div class="form-group ">
                <select class="form-control order_by ajaxChange" data-url="/services/sort/" name="status">
                    <option value="0">전체 카테고리</option>
                    { #each category as c }
                        <option value="{ c.categoryId }">{ c.name }</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
</section>
<div class="row m-t-5" id="result_ajaxSearch">
    <div class="col-md-12 col-xl-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">테스트</h3>
                <div class="card-options">
                    <a class="card-options-collapse" data-toggle="card-collapse" href="#"><i
                            class="fe fe-chevron-up"></i></a>
                    <a class="card-options-remove" data-toggle="card-remove" href="#"><i
                            class="fe fe-x"></i></a>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover table-bordered table-vcenter card-table">
                    <thead>
                    <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">이름</th>
                        <th class="text-center">가격(₩)</th>
                        <th class="">최소 및 최대 주문 수량</th>
                        <th class="text-center">설명</th>
                    </tr>
                    </thead>
                    <tbody>
                    { #each services as s }
                        <tr class="tr_163">
                            <td class="text-center w-10p text-muted">{ s.serviceId }</td>
                            <td>
                                <div class="title">{ s.name }</div>
                            </td>
                            <td class="text-center w-5p">
                                <div>{ s.rate }</div>
                            </td>
                            <td class="text-center w-10p text-muted">{ s.min } / { s.max }</td>
                            <td class="text-center w-5p">{ s.description }</td>
                        </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>