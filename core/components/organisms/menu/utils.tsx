const isObject = <T extends object>(value: unknown): value is T => typeof value === 'object' && value !== null;

export const reactNodeIsOfType = <P extends object, T extends { (props: P): React.ReactElement | null | undefined }>(
  node: React.ReactNode,
  type: T
): node is { key: React.Key | null; type: T; props: Parameters<T>[0] } =>
  isObject<React.ReactElement>(node) && node.type === type;
