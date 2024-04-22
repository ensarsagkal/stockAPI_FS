"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// app.use(findSearchSortPage):

module.exports = (req, res, next) => {
// Searching & Sorting & Pagination:

    // FILTERING: URL?filter[key1]=value1&filter[key2]=value2
    let filter = req.query?.filter || {}

    // SEARCHING: URL?search[key1]=value1&search[key2]=value2
    let search = req.query?.search || {}
    // for (let key in search) search[key] = { $regex: search[key], $options: 'i' }
    /* toString Searching: */
    let where = [];
    for (let key in search) where.push(`this.${key}.toString().includes('${search[key]}')`)
    search = where.length ? { $where: where.join(' && ') } : {}
    /* toString Searching: */

    // SORTING: URL?sort[key1]=asc&sort[key2]=desc (asc: A->Z - desc: Z->A)
    let sort = req.query?.sort || {}

    // PAGINATION: URL?page=1&limit=10
    // LIMIT:
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
    // PAGE:
    let page = Number(req.query?.page)
    page = (page > 0 ? page : 1) - 1
    // SKIP:
    let skip = Number(req.query?.skip)
    skip = skip > 0 ? skip : (page * limit)

    // Run SearchingSortingPagination engine for Model:
    res.getModelList = async function (Model, modelFilters = {}, populate = null) {

        return await Model.find({ ...modelFilters, ...filter, ...search }).sort(sort).skip(skip).limit(limit).populate(populate)
    }

    // Details:
    res.getModelListDetails = async function (Model, modelFilters = {}) {

        const data = await Model.find({ ...modelFilters, ...filter, ...search })
        const dataCount = data.length

        let details = {
            filter,
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(dataCount / limit)
            },
            totalRecords: dataCount,
        }
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
        if (details.totalRecords <= limit) details.pages = false
        return details
    }

    next()
}