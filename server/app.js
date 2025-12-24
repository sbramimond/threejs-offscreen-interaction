import express, {request} from 'express';
import expressWs from 'express-ws';

import getDetailJson from './mock/getDetail.json' with { type: 'json' };

let app = express();

expressWs(app);

app.ws('/a', ws => {
    ws.send('欢迎来到Express路由A');

    ws.on('message', (msg) => {
        console.log('路由A消息:', msg);
        ws.send(`路由A响应: ${msg}`);
    });
});


app.ws('/b', ws => {
    ws.send('欢迎来到Express路由B');

    ws.on('message', (msg) => {
        console.log('路由B消息:', msg);

        // 获取查询参数
        const query = req.query;
        ws.send(`路由B响应: ${msg} | 参数: ${JSON.stringify(query)}`);
    });
});

app.get('/apis/getDetail', (req, res) => {
    res.send(getDetailJson, 200);
});

app.listen(3000, () => {
    console.log('Express服务器启动成功，监听端口3000');
});
