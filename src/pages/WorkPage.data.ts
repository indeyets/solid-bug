import { createRouteData } from "solid-start";
import { RouteDataFunc, RouteDataFuncArgs } from "@solidjs/router";

const defaultWork = {
  title: "Нонаккорд как гранулометрический анализ",
  description:
    "Очевидно, что дистанционное зондирование изящно иссушает сонорный журавчик. Флажолет перманентно отталкивает внетактовый соноропериод. Пластичность, как того требуют законы термодинамики, использует лирический гончарный дренаж. Поверхность раздела фаз, как бы это ни казалось парадоксальным, вероятна.",
  pages: [
    "Подзолообразование многопланово. Разносторонняя пятиступенчатая громкостная пирамида, как бы это ни казалось парадоксальным, монотонно образует алеаторически выстроенный бесконечный канон с полизеркальной векторно-голосовой структурой. Форма, в первом приближении, аналитически концентрирует желтозём. Как следует из закона сохранения массы и энергии, серпантинная волна когерентна. Педотрансферная функция, в первом приближении, варьирует межагрегатный форшлаг.\n" +
      "\n" +
      "Эрозия неустойчива. Очевидно, что исследование иссушает водонасыщенный почвообразовательный процесс только в отсутствие тепло- и массообмена с окружающей средой. Впитывание, как бы это ни казалось парадоксальным, изящно восстанавливает звукоряд. Партлювация, так или иначе, имитирует хорус. Бурозём многопланово эволюционирует в нечетный агробиогеоценоз. Профиль изящно нагревает звукорядный фузз.\n" +
      "\n" +
      "Принимая во внимание искусственность границ элементарной почвы и произвольность ее положения в пространстве почвенного покрова, доминантсептаккорд отталкивает профиль. Разносторонняя пятиступенчатая громкостная пирамида растягивает мономерный пласт. Пуантилизм, зародившийся в музыкальных микроформах начала ХХ столетия, нашел далекую историческую параллель в лице средневекового гокета, однако арпеджио приводит к появлению бурозём, и здесь мы видим ту самую каноническую секвенцию с разнонаправленным шагом отдельных звеньев.\n",
  ],
};

export const WorkPageData: RouteDataFunc = ({
  params,
  location,
  navigate,
  data,
}) => {
  console.log("WorkPagedata is called");
  const page = parseInt(location.query?.page) || 1;

  const work = createRouteData(
    async ([, workId]) => {
      const work = {
        ...defaultWork,
        title: `${defaultWork.title} - ${workId}`,
      };
      return work;
    },
    { key: () => ["work", params.workname, page] }
  );

  return { work };
};
