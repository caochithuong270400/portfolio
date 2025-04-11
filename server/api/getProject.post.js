import client from '../connections/hasuraClient';
export default defineEventHandler(async (event) => {
    let body = await readBody(event);

    let results = null;
    const query = `
    query {
      users {
        id
        name
        email
      }
    }
  `;
    const variables = {};
    await client.query(
        query,
        variables,
        function (req, res) {
            // callback trả về kết quả hoặc nếu có lỗi diễn ra
            if (res.status === 401)
                throw new Error('Not authorized')
        }).then(async function (body) {
            console.log(body);
            console.log('body query Login');
            if (body?.data?.users?.length > 0) {
                console.log('có data', body?.data?.users);
                results = body?.data?.users
            } else {
                console.log('k có data', body?.data);

            }
        }).catch(function (err) {
            console.log('err Insert bill false!', err)
        })

    // Xử lý dữ liệu ở đây
    return { results };
})