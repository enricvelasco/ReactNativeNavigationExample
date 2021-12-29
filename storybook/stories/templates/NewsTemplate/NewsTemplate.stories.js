import {storiesOf} from '@storybook/react-native';
import React from 'react';
import NewsTemplate from '../../../../common/components/ui/templates/NewsTemplate';

const title = 'Id odit pariatur At commodi quidem!';
const text =
  'Lorem ipsum dolor sit amet. At galisum maiores ut commodi alias vitae perferendis quo enim numquam hic consequatur itaque. Sit nihil modi a temporibus sunt est aliquam ipsum vel doloremque sint ut obcaecati sint. In nihil cumque est accusantium maxime et optio excepturi sed eius sint in voluptas fugiat aut perferendis eligendi. Et pariatur optio quo consectetur atque eos eveniet quibusdam nam dolor ipsum eum vitae harum eum consectetur harum id dolore vero. Sit veritatis natus et incidunt unde id libero laudantium aut voluptates fuga et molestiae dolorem ut dicta iure? Et facilis beatae et quos ipsa et ratione neque rem nesciunt amet et voluptas tempora. Sit odio molestias aut porro sint non delectus dolorem vel fuga alias! Est adipisci iure cum iure aspernatur qui odit rerum. Aut doloremque culpa non voluptas fugiat vel quibusdam dolor aut nihil commodi. Nam labore inventore et odio numquam ut sunt dolores ea enim facilis. Id dolores quibusdam et labore magnam facilis enim in aliquam dolorum quo omnis natus? In officia quaerat et quaerat laborum est omnis suscipit qui ratione nisi. Et aspernatur laboriosam et assumenda sunt ex quis nihil. Ut voluptatibus delectus rem repellat magnam ex omnis porro aut odit velit ea eaque incidunt.';
const picture = 'https://picsum.photos/400';

const generateNewsList = () => {
  const arr = new Array(10).fill(null);
  return arr.map(() => ({title, description: text, imageURL: picture}));
};

const listOfNews = generateNewsList();

const ViewContainer = ({children}) => <>{children}</>;

storiesOf('Templates', module)
  .addDecorator(getStory => <ViewContainer>{getStory()}</ViewContainer>)
  .add('NewsTemplate', () => (
    <NewsTemplate list={listOfNews} posterImage={picture} />
  ));
