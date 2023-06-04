<template>
  <div class="detail">
    <div class="container">
      <div class="detail__main">
        <div class="detail__left">
          <h2 class="base-title">{{ content?.title }}</h2>
        </div>
        <div class="detail__right">
          <img
            :src="`${require('@/assets/images/newsDetail/' + content?.img)}`"
            width="740"
            height="630"
            alt="news"
          />
        </div>
      </div>
      <p class="detail__subtitle">
        <span>{{ content?.boldSubtitle }}</span>
        {{ content?.subtitle }}
      </p>
      <news-text
        v-for="(item, index) in content?.text"
        :content="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import NewsText from "@/components/news/NewsText.vue";

export default {
  components: { NewsText },
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          title: "Особенности перегородок в стиле Лофт",
          img: "1/main.jpg",
          boldSubtitle:
            "Лофт – это популярный стиль интерьера, который подходит  ля студий, однокомнатных квартир, небольших домов, жилых гаражей, офисов и т.д. ",
          subtitle:
            "            Но каждая деталь в нем должна идеально вписываться в единую стилевую\n" +
            "            концепцию. Использование неподходящих аксессуаров, мебели или\n" +
            "            техники может превратить комнату в безвкусно обставленное\n" +
            "            пространство. И понятно, что базовые элементы (ограждения, двери,\n" +
            "            окна, передвижные стены) должны быть сделаны в строгом соответствии\n" +
            "            со стилем. Стеклянные раздвижные лофт перегородки прекрасно\n" +
            "            интегрируются в подобный интерьер, т.к. стекло и необработанный\n" +
            "            кирпич, характерный для интерьеров loft, удачно дополняют друг\n" +
            "            друга.",
          text: [
            {
              title: "Особенности стиля лофт",
              text:
                "Квартира в стиле лофт обычно напоминает чердак, в котором почему-то стоит мебель и висят картины. В этом интерьере причудливо переплетаются современный промышленный дизайн и старинная архитектура. Обычно при обустройстве лофтовых помещений стараются сохранить старую кирпичную кладку, не закрывая ее панелями или обоями. Также здесь открывают все коммуникации. Трубы и провода фактически становятся частью интерьерной композиции. Любые элементы должны подчеркивать индустриальный характер ремонта. Окна должны быть большими и светлыми. \n" +
                "На них нельзя вешать шторы или занавески, но в некоторых интерьерах удается гармонично вписать жалюзи. Если квартира находится на первом этаже, то иногда окна украшают специфическими коваными решетками «под старину». Но при их установке следует подумать о безопасности. Каждая решетка должна быть оборудована замком и иметь возможность легко открываться.",
            },
            {
              list: {
                list: [
                  "Трубы и провода фактически становятся частью интерьерной композиции.",
                  "Любые элементы должны подчеркивать индустриальный характер ремонта.",
                  "Окна должны быть большими и светлыми. На них нельзя вешать шторы или занавески, но в некоторых интерьерах удается гармонично вписать жалюзи",
                  "Если квартира находится на первом этаже, то иногда окна украшают специфическими коваными решетками «под старину». Но при их установке следует подумать о безопасности. Каждая решетка должна быть оборудована замком и иметь возможность легко открываться.",
                ],
                img: "1/main.jpg",
              },
            },
            {
              text: "Само помещение обычно никак не зонируется. Т.е. по возможности убираются все стены, которые не являются несущими. Любые стены визуально уменьшают квартиру или дом, а потому они не нужны. Однако в квартире можно установить перегородки из стекла. Стеклянные конструкции идеально пропускают свет, а потому могут быть использованы в интерьере лофта. При создании лофтового помещения дизайнеры обычно сочетают между собой разные материалы: стекло, кирпич, металл, дерево и бетон. Обычно эти материалы выглядят необработанными.",
            },
          ],
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.base-title {
  text-shadow: 0px 0px 34px rgba(0, 0, 0, 0.56);
  font-size: 96px;
  line-height: 108px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 1;
  width: 800px;

  @media (max-width: 1000px) {
    font-size: 32px;
    line-height: 43px;
    letter-spacing: 1.5px;
    width: 289px;
    transform: translate(-138px, 44px);
    text-align: center;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    height: 14px;
    width: 100%;
    z-index: -1;
    background: rgba(var(--mainColor), 0.8);

    @media (max-width: 1000px) {
      height: 6px;
    }
  }
}

.detail {
  padding: 0 0 120px;
  background: var(--block-gradient);
  backdrop-filter: blur(10px);

  @media (max-width: 1000px) {
    padding: 0 0 60px;
  }

  &__subtitle {
    font-size: 16px;
    line-height: 27px;
    margin: 0 0 40px;

    @media (max-width: 1000px) {
      font-size: 12px;
      line-height: 20px;
    }

    span {
      font-weight: 600;
      font-style: italic;

      @media (max-width: 1000px) {
        display: block;
        margin-bottom: 20px;
      }
    }
  }

  &__main {
    display: flex;
    gap: 36px;
    margin-bottom: 34px;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__left {
    position: relative;
  }

  &__right {
    margin-left: auto;
    img {
      object-fit: cover;
      filter: grayscale(1);

      @media (max-width: 1000px) {
        margin-top: 100px;
        height: 280px;
        width: 100%;
      }
    }

    @media (max-width: 1000px) {
      margin-left: 0;
      width: 100%;
    }
  }
}
</style>
