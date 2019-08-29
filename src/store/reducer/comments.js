import { Like, ADD_COMMENT } from '../actionTypes';
const inititalState = {
  cards: [
    {
      id: '121',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'ing',
      zhanshi: [
        {
          id: '121',
          top:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          content:
            '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出-组精品向观众展示。一个是舞之精灵，美的化身; 一个 被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花?摄影师镜头下真实的杨丽萍是什么样的?25日开始的“心动"展，无疑极大地撩起了人们的好奇心', //展览内容
          authorpic:
            'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_02.jpg?raw=true',
          author:
            '肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师"。1980年代中期开始"我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。',
          product: [
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_04.jpg?raw=true" alt=""/>',
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_06.jpg?raw=true" alt=""/>',
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_08.jpg?raw=true" alt=""/>'
          ]
        }
      ],
      comments: [
        {
          id: '122',
          text: 'Good',
          postId: '122',
          touxiang:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg',
          name: '杨旭莹',
          time: '2019.08.26'
        },
        {
          id: '100',
          text: 'GoodGood',
          postId: '122',
          touxiang:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg',
          name: '杨旭莹1',
          time: '2019.08.26'
        }
      ]
    },
    {
      id: '122',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_03.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'ing',
      zhanshi: [
        {
          id: '122',
          top:
            'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u224_01.jpg?raw=true',
          content:
            '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出-组精品向观众展示。一个是舞之精灵，美的化身; 一个 被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花?摄影师镜头下真实的杨丽萍是什么样的?25日开始的“心动"展，无疑极大地撩起了人们的好奇心', //展览内容
          authorpic:
            'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u224_03.jpg?raw=true',
          author:
            '肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师"。1980年代中期开始"我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。',
          product: [
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u224_05.jpg?raw=true" alt=""/>',
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u224_07.jpg?raw=true" alt=""/>',
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u224_09.jpg?raw=true" alt=""/>',
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/u224_11.jpg?raw=true" alt=""/>'
          ]
        }
      ],
      comments: [
        {
          id: '122',
          text: 'Good',
          postId: '122',
          touxiang:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg',
          name: '杨旭莹',
          time: '2019.08.26'
        },
        {
          id: '100',
          text: 'GoodGood',
          postId: '122',
          touxiang:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg',
          name: '杨旭莹1',
          time: '2019.08.26'
        }
      ]
    },
    {
      id: '123',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_05.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'ing',
      zhanshi: [
        {
          id: '124',
          top:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          content: 'aaaaa', //展览内容
          authorpic:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          author: 'bbb',
          product:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true'
        }
      ],
      comments: [
        {
          id: '124',
          text: '评论2',
          postId: '124'
        }
      ]
    },
    {
      id: '124',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_07.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'ing',
      zhanshi: [
        {
          id: '124',
          top:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          content: 'aaaaa', //展览内容
          authorpic:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          author: 'bbb',
          product:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true'
        }
      ],
      comments: [
        {
          id: '124',
          text: '评论2',
          postId: '124'
        }
      ]
    },
    {
      id: '125',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_09.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'ing',
      zhanshi: [
        {
          id: '125',
          top:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          content: 'aaaaa', //展览内容
          authorpic:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          author: 'bbb',
          product:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true'
        }
      ],
      comments: [
        {
          id: '125',
          text: '评论2',
          postId: '125'
        }
      ]
    },
    /////////////////////////
    {
      id: '000',
      src:
        'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u68.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'will',
      zhanshi: [
        {
          id: '000',
          top:
            'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E7%99%BB%E5%BD%95/u68.jpg?raw=true',
          content:
            '本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出-组精品向观众展示。一个是舞之精灵，美的化身; 一个 被誉为中国最好的人像摄影家。两人的心灵碰撞，会擦出什么样的艺术火花?摄影师镜头下真实的杨丽萍是什么样的?25日开始的“心动"展，无疑极大地撩起了人们的好奇心', //展览内容
          authorpic:
            'https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_02.jpg?raw=true',
          author:
            '肖全，男，1959年生于四川成都，曾任深圳《街道》杂志摄影记者，被称为“中国最好的人像摄影师"。1980年代中期开始"我们这一代”拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。',
          product: [
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_04.jpg?raw=true" alt=""/>',
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_06.jpg?raw=true" alt=""/>',
            '<img src="https://github.com/yangxuying/dj/blob/master/%E8%89%BA%E9%9B%86/%E5%8E%9F%E5%9E%8B/images/%E6%8E%A8%E8%8D%90/images/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_08.jpg?raw=true" alt=""/>'
          ]
        }
      ],
      comments: [
        {
          id: '001',
          text: 'Good',
          postId: '000',
          touxiang:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg',
          name: '杨旭莹',
          time: '2019.08.26'
        },
        {
          id: '103',
          text: 'GoodGood',
          postId: '000',
          touxiang:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1864942380,1660582897&fm=26&gp=0.jpg',
          name: '杨旭莹1',
          time: '2019.08.26'
        }
      ]
    },
    {
      id: '005',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/u166_03.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'will',
      zhanshi: [
        {
          id: '005',
          top:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          content: 'aaaaa', //展览内容
          authorpic:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          author: 'bbb',
          product:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true'
        }
      ],
      comments: [
        {
          id: '007',
          text: '评论2',
          postId: '005'
        }
      ]
    },
    {
      id: '008',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/u166_05.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'will',
      zhanshi: [
        {
          id: '008',
          top:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          content: 'aaaaa', //展览内容
          authorpic:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          author: 'bbb',
          product:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true'
        }
      ],
      comments: [
        {
          id: '010',
          text: '评论2',
          postId: '008'
        }
      ]
    },
    {
      id: '009',
      src:
        'https://github.com/liu-sir666/1903/blob/master/yij_images/images/u166_07.jpg?raw=true',
      heart: 159,
      eye: 394,
      comment: 9,
      day: 10,
      type: 'will',
      zhanshi: [
        {
          id: '009',
          top:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          content: 'aaaaa', //展览内容
          authorpic:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true',
          author: 'bbb',
          product:
            'https://github.com/liu-sir666/1903/blob/master/yij_images/images/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg?raw=true'
        }
      ],
      comments: [
        {
          id: '011',
          text: '评论2',
          postId: '009'
        }
      ]
    }
  ]
};
export default (state = inititalState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'Show':
      return state;
    //
    case Like:
      if (newState.find(ele => ele.id === action.payload.postId)) {
        if (
          newState
            .find(ele => ele.id === action.payload.postId)
            .isLikeNum.indexOf(action.payload.id) > 0
        ) {
          newState.find(
            ele => ele.id === action.payload.postId
          ).isLike = !newState.find(ele => ele.id === action.payload.postId)
            .isLike;
          newState
            .find(ele => ele.id === action.payload.postId)
            .isLikeNum.filter(ele => ele !== action.payload.id);
          return newState;
        } else {
          newState.find(
            ele => ele.id === action.payload.postId
          ).isLike = !newState.find(ele => ele.id === action.payload.postId)
            .isLike;
          newState
            .find(ele => ele.id === action.payload.postId)
            .isLikeNum.push(action.payload.id);
          return newState;
        }
      } else {
        return state;
      }
    //
    case ADD_COMMENT:
      newState.cards
        .find(ele => ele.id === action.payload.postId)
        .comments.push(action.payload);
      return newState;
    default:
      return state;
  }
};
