/* eslint-disable no-unused-vars */
import { get, post } from '/@/utils/request';

const URL = {
  publish: '/four_s/post/publish/',
  module: '/four_s/post/queryBlock/',
  user: '/four_s/post/queryUser/',
};

const MockURL = {
  publish: 'http://127.0.0.1:4523/m1/2544583-0-default/four_s/post/publish/',
  module: 'http://127.0.0.1:4523/m1/2544583-0-default/four_s/post/queryBlock/',
  user: 'http://127.0.0.1:4523/m1/2544583-0-default/four_s/post/queryUser/',
};

const publishArticle = async (userid, token, data) =>
  post({
    url: URL.publish,
    headers: {
      userid: userid,
      token: token,
    },
    data: data,
  });

// eslint-disable-next-line camelcase
const moduleArticles = async (block_id, userid, token) =>
  get({
    url: URL.module,
    // eslint-disable-next-line camelcase
    params: { block_id: block_id },
    headers: { userid: userid, token: token },
  });

const userArticles = async (userid, token) =>
  get({
    url: URL.user,
    params: { user_id: userid },
    headers: { userid: userid, token: token },
  });

export { publishArticle, moduleArticles, userArticles };
