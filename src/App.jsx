import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Camera,
  Heart,
  LayoutGrid,
  Lock,
  Mail,
  MapPin,
  Rows3,
  School,
  Sparkles,
  X,
} from "lucide-react";

export default function PortfolioSite() {
  const [layout, setLayout] = useState("grid");
  const [selectedMemory, setSelectedMemory] = useState(null);

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "夏天停在教室里",
        year: "高二 · 夏天",
        mood: "午后 / 蝉鸣 / 试卷翻页声",
        image:
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
        note:
          "下午的光落在课桌边缘，黑板上还留着没擦干净的公式。窗外很热，教室里却安静得像所有人都在假装这只是普通的一天。后来才知道，那些普通到没有被认真记录的时刻，才最容易在多年后突然回来。",
      },
      {
        id: 2,
        title: "放学后的操场",
        year: "高一 · 秋天",
        mood: "晚风 / 跑道 / 没说出口的话",
        image:
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
        note:
          "放学铃响以后，操场会短暂地变成另一个世界。有人打球，有人慢慢走，有人站在跑道边等一个并不确定会不会出现的人。青春里很多重要的事没有正式发生，只是在黄昏里停了一会儿。",
      },
      {
        id: 3,
        title: "毕业照里的倒计时",
        year: "高三 · 六月",
        mood: "毕业 / 校服 / 来不及告别",
        image:
          "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
        note:
          "照片里每个人都在笑，可那一刻真正发生的事情，是很多关系正在悄悄进入倒计时。那天我们以为自己只是在拍一张合照，后来才明白，那也是一次没有被明说的告别。",
      },
      {
        id: 4,
        title: "走廊里的十秒钟",
        year: "某个课间",
        mood: "铃声 / 擦肩 / 心跳",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
        note:
          "课间只有十分钟，可有些记忆只需要十秒。一次擦肩，一次回头，一个没来得及开口的瞬间，就足够在很久以后变成反复想起的画面。青春最不讲道理的地方，是它常常把意义藏在极小的动作里。",
      },
      {
        id: 5,
        title: "晚自习的灯还亮着",
        year: "高三 · 晚自习",
        mood: "灯光 / 疲惫 / 仍然坚持",
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
        note:
          "夜晚的教室只剩下笔尖、草稿纸和偶尔翻页的声音。那时候总觉得日子太难熬，题太多，时间太慢。可后来回头看，真正被留下来的，不只是压力，还有那个明明很累却没有停下来的自己。",
      },
      {
        id: 6,
        title: "回家路没有重复过",
        year: "放学路上",
        mood: "路灯 / 书包 / 影子被拉长",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        note:
          "每天都走同一条路，所以当时没人觉得它特别。可毕业之后才发现，那条路从来没有真正重复过。每一次回家，都带着不同的心事、不同的天气、不同的沉默。所谓青春，也许就是很多没有被命名的普通夜晚。",
      },
    ],
    []
  );

  const steps = [
    {
      icon: Camera,
      title: "发送照片或片段",
      desc: "可以是一张教室照片、一段聊天截图、一句没说完的话，或者只是一个关于高中某天的模糊印象。",
    },
    {
      icon: BookOpen,
      title: "整理成青春线索",
      desc: "把零散内容按照人物、地点、季节、情绪或时间重新组织，让记忆不再只是堆在相册里的碎片。",
    },
    {
      icon: Sparkles,
      title: "生成记忆页面",
      desc: "把照片、文字和情绪组合成一个可以浏览、保存、分享的网页，让那段青春有一个稳定的停靠点。",
    },
  ];

  const memoryTypes = [
    ["教室", "课桌、黑板、窗边的光，很多故事从这里开始。"],
    ["操场", "跑道、晚风、集合与解散，青春常常在这里变得具体。"],
    ["走廊", "课间十分钟，擦肩和回头，比很多对白更难忘。"],
    ["晚自习", "灯光、试卷、安静的疲惫，是高中最真实的底色。"],
    ["毕业", "合照、校服、留言册和来不及认真说出口的告别。"],
    ["某个人", "那个没有明确结局，却一直留在记忆里的人。"],
  ];

  const featured = memoryCards[0];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09090b] text-neutral-100 selection:bg-white/20">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute left-[-12%] top-[-12%] h-80 w-80 rounded-full bg-white/8 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-12%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09090b]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div className="shrink-0">
            <div className="text-lg font-semibold tracking-[0.25em] uppercase">Lasio</div>
            <div className="text-xs text-neutral-500">收集你的青春回忆</div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-neutral-300 lg:flex">
            <a href="#concept" className="transition hover:text-white">理念</a>
            <a href="#process" className="transition hover:text-white">如何停靠</a>
            <a href="#types" className="transition hover:text-white">记忆类型</a>
            <a href="#memories" className="transition hover:text-white">青春相册</a>
            <a href="#privacy" className="transition hover:text-white">隐私</a>
            <a href="#contact" className="transition hover:text-white">联系</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300">
              <School className="h-3.5 w-3.5" />
              高中生活 · 照片记忆 · 青春叙事
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
              收集你的回忆，
              <span className="block text-neutral-500">让青春有地方停靠。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              Lasio 是一个关于高中照片与青春记忆的数字空间。它试图把散落在相册、聊天记录、课本边角和毕业留言里的片段重新整理，让那些回不去的日子，可以被认真地打开一次。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
              >
                如何开始
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#memories"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.07]"
              >
                查看青春相册
                <Camera className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["06", "青春片段"],
                ["03", "停靠步骤"],
                ["私密", "可控边界"],
              ].map(([num, label]) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="text-3xl font-semibold">{num}</div>
                  <div className="mt-2 text-sm text-neutral-500">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="min-w-0"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
              className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/30"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-3 text-xs text-white/75 backdrop-blur-xl">
                <span className="inline-flex items-center gap-2"><Camera className="h-3.5 w-3.5" /> Featured Youth Memory</span>
                <span>{featured.year}</span>
              </div>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="mb-3 inline-flex rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    {featured.mood}
                  </div>
                  <h2 className="text-2xl font-semibold md:text-3xl">{featured.title}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/72 md:text-base">
                    {featured.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="concept" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="text-sm text-neutral-400">理念</div>
              <h2 className="mt-3 text-3xl font-semibold">青春不是过去式，它只是没有被好好安放</h2>
              <p className="mt-4 leading-8 text-neutral-400">
                高中生活里的很多瞬间，当时看起来太普通：课间、晚自习、放学路、操场边、毕业前的合照。后来才发现，它们不是背景，而是青春真正的主体。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="text-sm text-neutral-400">方法</div>
              <h2 className="mt-3 text-3xl font-semibold">用照片做入口，用文字把时间重新连起来</h2>
              <p className="mt-4 leading-8 text-neutral-400">
                一张照片只能保存画面，但文字可以补上那天的天气、声音、关系和没说出口的话。Lasio 想做的，就是把这些碎片重新变成一段可以进入的青春叙事。
              </p>
            </motion.div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="mb-8 max-w-3xl">
            <div className="text-sm text-neutral-400">Process</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-5xl">如何让记忆停靠</h2>
            <p className="mt-4 leading-8 text-neutral-500">
              这不是把照片简单摆上去。真正有效的青春记录，需要把照片、语境和情绪放回同一个空间里。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-neutral-500">Step 0{index + 1}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 leading-8 text-neutral-400">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="types" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <div className="text-sm text-neutral-400">Memory Types</div>
              <h2 className="mt-2 text-3xl font-semibold md:text-5xl">青春可以被怎样归档</h2>
              <p className="mt-5 leading-8 text-neutral-500">
                记忆不一定按照时间排序。它也可以按照教室、操场、某个人、一次沉默、一个季节，或者一次没有正式发生的告别重新归档。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {memoryTypes.map(([title, desc]) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                      <MapPin className="h-4 w-4 text-neutral-300" />
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-neutral-500">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="memories" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm text-neutral-400">Youth Album</div>
              <h2 className="mt-2 text-3xl font-semibold md:text-5xl">等待被填满的青春相册</h2>
              <p className="mt-4 max-w-2xl leading-8 text-neutral-500">
                在真实照片收集完成前，这些卡片先作为记忆位置存在。它们不是最终内容，而是在提醒：青春里最值得保存的，往往先以模糊的形状出现。
              </p>
            </div>

            <div className="inline-flex w-fit rounded-2xl border border-white/10 bg-white/[0.03] p-1">
              <button
                onClick={() => setLayout("grid")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${
                  layout === "grid" ? "bg-white text-black" : "text-neutral-300 hover:bg-white/[0.06]"
                }`}
              >
                <LayoutGrid className="h-4 w-4" /> 网格
              </button>
              <button
                onClick={() => setLayout("list")}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${
                  layout === "list" ? "bg-white text-black" : "text-neutral-300 hover:bg-white/[0.06]"
                }`}
              >
                <Rows3 className="h-4 w-4" /> 列表
              </button>
            </div>
          </div>

          <div className={layout === "grid" ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3" : "space-y-5"}>
            {memoryCards.map((memory, index) => (
              <motion.button
                type="button"
                key={memory.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedMemory(memory)}
                className={`group relative overflow-hidden border border-white/10 bg-white/[0.03] text-left transition ${
                  layout === "grid"
                    ? "rounded-[2rem]"
                    : "flex w-full flex-col rounded-[2rem] md:flex-row"
                }`}
              >
                <div className={layout === "grid" ? "relative" : "relative md:w-[42%]"}>
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                      layout === "grid" ? "h-72" : "h-72 md:h-full"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    {memory.year}
                  </div>
                </div>

                <div className="relative flex-1 p-5 md:p-6">
                  <div className="mb-3 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                    {memory.mood}
                  </div>
                  <h3 className="text-2xl font-semibold">{memory.title}</h3>
                  <p className="mt-3 line-clamp-3 max-w-xl leading-8 text-neutral-400">{memory.note}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 transition group-hover:text-white">
                    展开这一段青春
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="sample" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03]"
          >
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="min-h-[320px] bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8">
                <div className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-300">
                  Sample Page
                </div>
                <h2 className="mt-6 max-w-sm text-4xl font-semibold leading-tight">
                  夏天结束前的那间教室
                </h2>
                <p className="mt-5 max-w-md leading-8 text-neutral-400">
                  一个样例记忆页会包含时间、地点、人物、照片、注释和结尾句。它不是日记，也不是普通相册，而是一段被重新整理过的青春。
                </p>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["时间", "高三 · 六月 · 下午"],
                    ["地点", "靠窗的第三排"],
                    ["情绪", "明亮、安静、迟疑"],
                    ["结尾", "后来我们都离开了那天，但那天没有完全离开我们。"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                      <div className="text-sm text-neutral-500">{label}</div>
                      <div className="mt-2 leading-7 text-neutral-200">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="privacy" className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:flex md:items-start md:gap-8">
            <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-black md:mb-0">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-neutral-400">Privacy & Boundary</div>
              <h2 className="mt-2 text-3xl font-semibold">每一段青春记忆，都应该被尊重</h2>
              <p className="mt-4 max-w-4xl leading-8 text-neutral-400">
                你可以选择公开、私密或只保存给自己。任何照片、姓名、聊天截图和文字，都不会在未经确认的情况下被展示。涉及他人的内容，也应该先模糊、匿名或取得允许。
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
                  <Heart className="h-3.5 w-3.5" />
                  Contact
                </div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  如果你也有想要记忆不再流浪，可以联系我
                </h2>
                <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
                  你可以把高中照片、毕业合照、教室片段、聊天截图、故事或一个模糊的想法发给我。我们可以一起把它整理成一个有情绪、有秩序、能被重新打开的网页空间。
                </p>
              </div>

              <motion.a
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:738516010@qq.com"
                className="group block rounded-[2rem] border border-white/10 bg-white p-6 text-black shadow-2xl shadow-black/20 transition"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="text-sm text-black/50">写信给 Lasio</div>
                    <div className="mt-2 break-all text-2xl font-semibold">738516010@qq.com</div>
                    <p className="mt-4 text-sm leading-7 text-black/60">
                      点击这里会打开你的邮件应用。把你的记忆、照片或想法发来。
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-black p-3 text-white transition group-hover:rotate-[-8deg]">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-black/70 transition group-hover:translate-x-1">
                  让一段青春有地方停靠
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f12]"
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/30 p-2 text-white/80 backdrop-blur transition hover:bg-white hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="h-[320px] w-full object-cover md:h-[78vh]"
                />
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                      {selectedMemory.year} · {selectedMemory.mood}
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold">{selectedMemory.title}</h3>
                    <p className="mt-5 leading-8 text-neutral-400">{selectedMemory.note}</p>
                  </div>

                  <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-neutral-500">
                    这部分以后可以接入真实照片、班级、地点、拍摄日期、人物标签与更长的故事描述。现在它先作为青春记忆的占位结构存在。
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-neutral-500">
        © 2026 Lasio Youth Memory Archive. All rights reserved.
      </footer>
    </div>
  );
}

