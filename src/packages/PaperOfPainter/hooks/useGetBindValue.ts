/*
 * @Description: ^_^
 * @Author: sharebravery
 */
import { computed } from "vue";

export default function useGetBindValue<T>(props: T, attrs: object) {
  const getBindValue = computed(() => {
    return { ...attrs, ...props };
  });

  return { getBindValue };
}
