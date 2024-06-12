# vue3

## setup 是vue3的配置项,值是一个函数

1. setup函数返回的对象中的内容 可直接模板中使用
2. setup返回this得到的一个undefined
3. setup函数会在beforeCreate之前掉用，它是领先所有钩子执行

### setup 函数返回值

 1. 可以直接返回一个函数，当返回函数的时候直接渲染（可是一个渲染函数）
 2. 返回一个对象

### setup Options API

setup data methods能不能同时写 当发生冲突的时候以谁为主?setup 能不能读取 data 的参数 或者是methods?

1. setup能和data methods同时写
2. data methods 能通过this 读取setup里定义的值，但是setup 读取不了data methods的值
3. 当data setup 都定义的同一个变量的时候 setup的值高于data

## ref

声明响应式状态,使用ref()函数来声明响应式状态

``` vue
import { ref } from 'vue'
// 当需要响应式数据的时候 使用ref
// 语法: 
const xxx = ref(初始值)
// 返回值：RefImpl的实例对象 简称ref对象/ref ref对象的value属性是响应式

```

注意：

1. ref 创建的是基本类型的响应式数据（对象类型的响应式数据也是可以的）
2. 当使用ref的时候，需要使用.value来获取值 在template中不需要.values
3. 对于let name = ref('张三') 来说name不是响应式的，name.value才是响应式的

## refactive

refactive 只能定义对象类型的响应式数据,同时也可以是深层次的对象，针对基本数据类型是不允许的
refactive 返回是的响应式对象

``` vue
import { refactive } from 'vue'
// 当需要使用对象的时候使用refactive语法:
const xxx = refactive({})
// 返回值：一个proxy的实例对象，简称：响应式对象，refactive定义的响应式数据都是深层次的
```

## ref 和 reactive 区别

当使用ref定义对象的时候 .value使用的也是refactive的返回值 可以简单理解为 非原始值将通过 reactive() 转换为响应式代理

- ref定义：基本数据类型 对象类型数据
- reactive定义：对象类型数据

:::warning 区别

1. ref创建变量的时候必须使用.value(可以使用volar插件自动添加.value)
2. reactive重新分配一个新对象，会失去响应式（Object.assign整体替换）

:::

:::info 使用规则

1. 基本的类型数据，必须使用ref
2. 响应式对象，使用ref reactive 都可以
3. 响应式对象 层级较深 推荐使用reactive

:::

```vue
import { reactive, ref } from 'vue'
// 重新分配对象
let reactiveObj = reactive({ a: 'aaa', c: 'ccc' })

// ref 版本修改对象
let refObj = ref({ a: 'aaa', c: 'ccc' })

function resetOBj() {
  Object.assign(reactiveObj, { a: 'vvvv', c: 'bbb' })
  refObj.value = { a: 'vvvv', c: 'bbb' }

}

```

## toRefs/toRef

当从一个响应式对象解构出数据的时候 当前的数据不是响应式的,如果想让其值变成响应式数据
toRefs就是把一个响应式的对象变成一个新的对象，其对象的key都是一个响应式对象,

```vue
<script setup lang="ts" name="CheShi">

import { ref, reactive } from 'vue';

const person = reactive({ name: 'cheShi', age: 18 });

const { name, age } = person;

// name和age 不是响应式的
const {name,age}=toRefs(preson)
// 这时候可以通过name.value 去修改其响应式对象

const x=toRefs(preson)
//当前的x为 {name: ObjectRefImpl, age: ObjectRefImpl}

</script>

```

### toRef 的使用

```vue
<script setup lang="ts" name="CheShi">

import { ref, reactive,toRef } from 'vue';

const person =  reactive({name:'name',age:'age'})

const age=toRef(person,'age')

age.value='18'

</script>

```

## computed计算属性

```vue
<script setup lang="ts" name="CheShi">

import { reactive,computed} from 'vue';

const person =  reactive({name:'name',age:'age'})

const nameAge = computed(() => {
  return `${person.name}---${person.age}`;
})

</script>

```

## watch

特点：VUE3中Watch 只能监视以下四种数据:

1. ref定义的数据
2. ractive定义的数据
3. 函数返回一个值（getter函数）
4. 包含上述内容的数组

### 监视基本类型的数据 当value发生改变的时候

```vue
<script setup lang="ts" name="CheShi">
import { ref, watch } from 'vue'; 

const age=ref(0)

const stopWatch=(age,(newValue,oldValue))=>{
  console.log('age', newValue,oldValue);
})

// 当发生age的值改变的时候会触发watch打印一个log

// 取消监视
 stopWatch()
</script>

```

### 使用ref定义的对象属性

监视ref定义的对象 监视对象的是地址值 若想监视对象内部属性的变化，需要开启深度监听deep注意点：

1. vue2 vue3中 修改对象的属性值时候 ，newValue和oldValue都是新值 他们修改的都是同一个对象
2. 若修改整个对象 newValue和oldValue就不是同一个对象 前提是监视响应式对象

```vue

const person = ref({ name: 'ss', age: 1 });

watch(
  person,
  (nV, oV) => {
    console.log('preson', nV, oV);
  },
  { immediate: true },
);

const handleAge = () => {
  person.value.age += 1;
};

```

### 监视reactive定义的对象

```vue

const person = reactive({ name: 'ss', age: 1 });

watch(
  person,
  (nV, oV) => {
    console.log('preson', nV, oV);
  },
  { immediate: true },
);

const handleAge = () => {
  person.age += 1;
};

const handlePerson = () => {
  Object.assign(person, { name: 'dadad', age: 11 });
};

```

当使用reactive的时候，默认是开启深度监听，隐式的开启深度监听且不能关掉

### ref 和 reaactive 定义对象类型 数据中的某个属性

如该属性值不是对象类型 需要写成函数的形式，若该属性是对象类型可直接使用也可以写成函数式，最好使用函数。

如果监视的对象属性是一个对象的话,需要监听使用函数监听 最好不要直接监听，因为当对象整个发生改变的时候 监听不到其地址属性变化。

```vue

import { reactive, watch } from 'vue';

const person = reactive({
  name: 'ss',
  age: 1,
  car: { c1: 'aaaaa', c2: 'bbbb' },
});

const handleAge = () => {
  person.age += 1;
};

const handlePerson = () => {
  Object.assign(person, { name: 'dadad', age: 11 });
};

// 监视响应式对象的某个属性，且该属性不是对象类型

watch(
  () => person.name,
  (nV, oV) => {
    console.log('name', nV, oV);
  },
);

watch(person.car, (nV, oV) => {
  console.log('car', nV, oV);
});

```

### 监视多个数据

```vue

watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})

```

## watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

```vue

import { ref, watchEffect } from 'vue';

const sum = ref(0);

watchEffect(() => {
  console.log(sum.value);
  if (sum.value === 2) console.log('object');
})

```

## 获取DOM REF

```vue
 
<div class="title" ref="title">
    <h2>中国</h2>
    <h3>深圳</h3>
</div>
  
<button @click="handleClick">测试</button>

<script setup lang="ts" name="CheShi">
import { ref, defineExpose } from 'vue';

const title = ref();
// 这里必须和ref的名称一样
const handleClick = () => { console.log('测试', title) };

defineExpose({ title });
</script>

```

## props

一个组件需要显式声明它所接受的 prop在使用 `<script setup>` 的单文件组件中，props 可以使用 defineProps() 宏来声明：

```vue
<script setup>
const props = defineProps(['foo'])

console.log(props.foo)
</script>
```

除了使用字符串数组来声明 prop 外，还可以使用对象的形式：

```vue
 <script setup>
defineProps({
  title: String,
  likes: Number
})
```

如果你正在搭配 TypeScript 使用 `<script setup>`，也可以使用类型标注来声明 props：

```javaScript
  // 当使用基于类型的声明时，我们失去了为 props 声明默认值的能力。这可以通过 withDefaults 编译器宏解决
  export interface Props {
    msg?: string
    labels?: string[]
  }
  
  const props = withDefaults(defineProps<Props>(), {
    msg: 'hello',
    labels: () => ['one', 'two']
  })
```

```vue

<script setup lang="ts">
defineProps<{
  title?: string
  likes?: number
}>()
</script>

```
