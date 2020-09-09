///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                             JS BRIDGE CLASSES                             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

export type bridge$consumer<X> = (x: X) => any;
export interface bridge$iterable<X> {
   [Symbol.iterator](): IterableIterator<X>;
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                           INTERNAL JAVA CLASSES                           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

export class Class<T> extends Object implements Serializable, GenericDeclaration, Type, AnnotatedElement {
   asSubclass<U> (clazz: Class<U>): Class<U>;
   cast (obj: Object): T;
   desiredAssertionStatus (): boolean;
   static forName (module: Module, name: string): Class;
   static forName (class_name: string): Class;
   static forName (name: string, initialize: boolean, loader: ClassLoader): Class;
   getAnnotatedInterfaces (): AnnotatedType[];
   getAnnotatedSuperclass (): AnnotatedType;
   getAnnotation<A extends Annotation> (annotation_class: Class<A>): A;
   getAnnotations (): Annotation[];
   getAnnotationsByType<A extends Annotation> (annotation_class: Class<A>): A[];
   getCanonicalName (): string;
   getClasses (): Class[];
   getClassLoader (): ClassLoader;
   getComponentType (): Class;
   getConstructor (...parameter_types: Class): Constructor<T>;
   getConstructors (): Constructor[];
   getDeclaredAnnotation<A extends Annotation> (annotation_class: Class<A>): A;
   getDeclaredAnnotations (): Annotation[];
   getDeclaredAnnotationsByType<A extends Annotation> (annotation_class: Class<A>): A[];
   getDeclaredClasses (): Class[];
   getDeclaredConstructor (...parameter_types: Class): Constructor<T>;
   getDeclaredConstructors (): Constructor[];
   getDeclaredField (name: string): Field;
   getDeclaredFields (): Field[];
   getDeclaredMethod (name: string, ...parameter_types: Class): Method;
   getDeclaredMethods (): Method[];
   getDeclaringClass (): Class;
   getEnclosingClass (): Class;
   getEnclosingConstructor (): Constructor;
   getEnclosingMethod (): Method;
   getEnumConstants (): T[];
   getField (name: string): Field;
   getFields (): Field[];
   getGenericInterfaces (): Type[];
   getGenericSuperclass (): Type;
   getInterfaces (): Class[];
   getMethod (name: string, ...parameter_types: Class): Method;
   getMethods (): Method[];
   getModifiers (): number;
   getModule (): Module;
   getName (): string;
   getPackage (): Package;
   getPackageName (): string;
   getProtectionDomain (): ProtectionDomain;
   getResource (name: string): URL;
   getResourceAsStream (name: string): InputStream;
   getSigners (): Object[];
   getSimpleName (): string;
   getSuperclass (): Class<T>;
   getTypeName (): string;
   getTypeParameters (): TypeVariable<Class<T>>[];
   isAnnotation (): boolean;
   isAnnotationPresent (annotation_class: Class<Annotation>): boolean;
   isAnonymousClass (): boolean;
   isArray (): boolean;
   isAssignableFrom (cls: Class): boolean;
   isEnum (): boolean;
   isInstance (obj: Object): boolean;
   isInterface (): boolean;
   isLocalClass (): boolean;
   isMemberClass (): boolean;
   isPrimitive (): boolean;
   isSynthetic (): boolean;
   newInstance (): T;
   toGenericString (): string;
   toString (): string;
}
export interface Collection<E> extends Iterable<E> {
   add(e: E): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: Object): boolean;
   containsAll(c: Collection): boolean;
   equals(o: Object): boolean;
   hashCode(): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   parallelStream(): Stream<E>;
   remove(o: Object): boolean;
   removeAll(c: Collection): boolean;
   removeIf(filter: Predicate<E>): boolean;
   retainAll(c: Collection): boolean;
   size(): number;
   spliterator(): Spliterator<E>;
   stream(): Stream<E>;
   toArray(): Object[];
   toArray<T>(a: T[]): T[];
}
export interface Consumer<T> extends bridge$consumer<T> {
   accept(t: T): void;
   andThen(after: Consumer<T>): Consumer<T>;
}
export class File extends Object implements Serializable, Comparable<File> {
   constructor (parent: File, child: string);
   constructor (pathname: string);
   constructor (parent: string, child: string);
   constructor (uri: URI);
   canExecute (): boolean;
   canRead (): boolean;
   canWrite (): boolean;
   compareTo (pathname: File): number;
   createNewFile (): boolean;
   static createTempFile (prefix: string, suffix: string): File;
   static createTempFile (prefix: string, suffix: string, directory: File): File;
   delete (): boolean;
   deleteOnExit (): void;
   equals (obj: Object): boolean;
   exists (): boolean;
   getAbsoluteFile (): File;
   getAbsolutePath (): string;
   getCanonicalFile (): File;
   getCanonicalPath (): string;
   getFreeSpace (): number;
   getName (): string;
   getParent (): string;
   getParentFile (): File;
   getPath (): string;
   getTotalSpace (): number;
   getUsableSpace (): number;
   hashCode (): number;
   isAbsolute (): boolean;
   isDirectory (): boolean;
   isFile (): boolean;
   isHidden (): boolean;
   lastModified (): number;
   length (): number;
   list (): string[];
   list (filter: FilenameFilter): string[];
   listFiles (): File[];
   listFiles (filter: FileFilter): File[];
   listFiles (filter: FilenameFilter): File[];
   static listRoots (): File[];
   mkdir (): boolean;
   mkdirs (): boolean;
   renameTo (dest: File): boolean;
   setExecutable (executable: boolean): boolean;
   setExecutable (executable: boolean, owner_only: boolean): boolean;
   setLastModified (time: number): boolean;
   setReadable (readable: boolean): boolean;
   setReadable (readable: boolean, owner_only: boolean): boolean;
   setReadOnly (): boolean;
   setWritable (writable: boolean): boolean;
   setWritable (writable: boolean, owner_only: boolean): boolean;
   toPath (): Path;
   toString (): string;
   toURI (): URI;
   toURL (): URL;
}
export interface Iterable<T> extends bridge$iterable<T> {
   forEach(action: Consumer<T>): void;
   iterator(): Iterator<T>;
   spliterator(): Spliterator<T>;
}
export interface Iterator<E> {
   forEachRemaining(action: Consumer<E>): void;
   hasNext(): boolean;
   next(): E;
   remove(): void;
}
export class Object {
   constructor ();
   clone (): Object;
   equals (obj: Object): boolean;
   finalize (): void;
   getClass (): Class;
   hashCode (): number;
   notify (): void;
   notifyAll (): void;
   toString (): string;
   wait (): void;
   wait (timeout: number): void;
   wait (timeout: number, nanos: number): void;
}
export interface List<E> extends Collection<E> {
   add(index: number, element: E): void;
   add(e: E): boolean;
   addAll(index: number, c: Collection<E>): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: Object): boolean;
   containsAll(c: Collection): boolean;
   static copyOf<E>(coll: Collection<E>): List<E>;
   equals(o: Object): boolean;
   get(index: number): E;
   hashCode(): number;
   indexOf(o: Object): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   lastIndexOf(o: Object): number;
   listIterator(): ListIterator<E>;
   listIterator(index: number): ListIterator<E>;
   static of<E>(): List<E>;
   static of<E>(e1: E): List<E>;
   static of<E>(...elements: E): List<E>;
   static of<E>(e1: E, e2: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): List<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): List<E>;
   remove(index: number): E;
   remove(o: Object): boolean;
   removeAll(c: Collection): boolean;
   replaceAll(operator: UnaryOperator<E>): void;
   retainAll(c: Collection): boolean;
   set(index: number, element: E): E;
   size(): number;
   sort(c: Comparator<E>): void;
   spliterator(): Spliterator<E>;
   subList(from_index: number, to_index: number): List<E>;
   toArray(): Object[];
   toArray<T>(a: T[]): T[];
}
export interface Map<K, V> {
   clear(): void;
   compute(key: K, remapping_funktion: BiFunction<K, V, V>): V;
   computeIfAbsent(key: K, mapping_funktion: Function<K, V>): V;
   computeIfPresent(key: K, remapping_funktion: BiFunction<K, V, V>): V;
   containsKey(key: Object): boolean;
   containsValue(value: Object): boolean;
   static copyOf<K, V>(map: Map<K, V>): Map<K, V>;
   static entry<K, V>(k: K, v: V): Map$Entry<K, V>;
   entrySet(): Set<Map$Entry<K, V>>;
   equals(o: Object): boolean;
   forEach(action: BiConsumer<K, V>): void;
   get(key: Object): V;
   getOrDefault(key: Object, default_value: V): V;
   hashCode(): number;
   isEmpty(): boolean;
   keySet(): Set<K>;
   merge(key: K, value: V, remapping_funktion: BiFunction<V, V, V>): V;
   static of<K, V>(): Map<K, V>;
   static of<K, V>(k1: K, v1: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): Map<K, V>;
   static of<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V,
      k9: K,
      v9: V
   ): Map<K, V>;
   static of<K, V>(
      k1: K,
      v1: V,
      k2: K,
      v2: V,
      k3: K,
      v3: V,
      k4: K,
      v4: V,
      k5: K,
      v5: V,
      k6: K,
      v6: V,
      k7: K,
      v7: V,
      k8: K,
      v8: V,
      k9: K,
      v9: V,
      k10: K,
      v10: V
   ): Map<K, V>;
   static ofEntries<K, V>(...entries: Map$Entry<K, V>): Map<K, V>;
   put(key: K, value: V): V;
   putAll(m: Map<K, V>): void;
   putIfAbsent(key: K, value: V): V;
   remove(key: Object): V;
   remove(key: Object, value: Object): boolean;
   replace(key: K, value: V): V;
   replace(key: K, old_value: V, new_value: V): boolean;
   replaceAll(funktion: BiFunction<K, V, V>): void;
   size(): number;
   values(): Collection<V>;
}
export interface Path extends Comparable<Path>, Iterable<Path>, Watchable {
   compareTo(other: Path): number;
   endsWith(other: string): boolean;
   endsWith(other: Path): boolean;
   equals(other: Object): boolean;
   getFileName(): Path;
   getFileSystem(): FileSystem;
   getName(index: number): Path;
   getNameCount(): number;
   getParent(): Path;
   getRoot(): Path;
   hashCode(): number;
   isAbsolute(): boolean;
   iterator(): Iterator<Path>;
   normalize(): Path;
   register(watcher: WatchService, ...events: WatchEvent$Kind): WatchKey;
   register(watcher: WatchService, events: WatchEvent$Kind[], ...modifiers: WatchEvent$Modifier): WatchKey;
   relativize(other: Path): Path;
   resolve(other: string): Path;
   resolve(other: Path): Path;
   resolveSibling(other: string): Path;
   resolveSibling(other: Path): Path;
   startsWith(other: string): boolean;
   startsWith(other: Path): boolean;
   subpath(begin_index: number, end_index: number): Path;
   toAbsolutePath(): Path;
   toFile(): File;
   toRealPath(...options: LinkOption): Path;
   toString(): string;
   toUri(): URI;
}
export interface Predicate<T> {
   and(other: Predicate<T>): Predicate<T>;
   static isEqual<T>(target_ref: Object): Predicate<T>;
   negate(): Predicate<T>;
   or(other: Predicate<T>): Predicate<T>;
   test(t: T): boolean;
}
export interface Set<E> extends Collection<E> {
   add(e: E): boolean;
   addAll(c: Collection<E>): boolean;
   clear(): void;
   contains(o: Object): boolean;
   containsAll(c: Collection): boolean;
   static copyOf<E>(coll: Collection<E>): Set<E>;
   equals(o: Object): boolean;
   hashCode(): number;
   isEmpty(): boolean;
   iterator(): Iterator<E>;
   static of<E>(): Set<E>;
   static of<E>(e1: E): Set<E>;
   static of<E>(...elements: E): Set<E>;
   static of<E>(e1: E, e2: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): Set<E>;
   static of<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E, e10: E): Set<E>;
   remove(o: Object): boolean;
   removeAll(c: Collection): boolean;
   retainAll(c: Collection): boolean;
   size(): number;
   spliterator(): Spliterator<E>;
   toArray(): Object[];
   toArray<T>(a: T[]): T[];
}

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                        BUKKIT/SPIGOT/PAPER CLASSES                        //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**Represents an arrow.*/
export interface AbstractArrow extends Projectile {
    /**Gets the block to which this arrow is attached.*/
    getAttachedBlock (): Block;
    /**Gets the base amount of damage this arrow will do.*/
    getDamage (): number;
    /**Gets the ItemStack for this arrow.*/
    getItemStack (): ItemStack;
    /**Gets the knockback strength for an arrow, which is the  KnockBack level  of the bow that shot it.*/
    getKnockbackStrength (): number;
    /**Gets the current pickup status of this arrow.*/
    getPickupStatus (): AbstractArrow$PickupStatus;
    /**Gets the number of times this arrow can pierce through an entity.*/
    getPierceLevel (): number;
    /**Gets whether this arrow is critical.*/
    isCritical (): boolean;
    /**Gets whether this arrow is in a block or not.*/
    isInBlock (): boolean;
    /**Gets if this arrow was shot from a crossbow.*/
    isShotFromCrossbow (): boolean;
    /**Sets whether or not this arrow should be critical.*/
    setCritical (critical: boolean): void;
    /**Sets the base amount of damage this arrow will do.*/
    setDamage (damage: number): void;
    /**Sets the knockback strength for an arrow.*/
    setKnockbackStrength (knockbackStrength: number): void;
    /**Sets the current pickup status of this arrow.*/
    setPickupStatus (status: AbstractArrow$PickupStatus): void;
    /**Sets the number of times this arrow can pierce through an entity.*/
    setPierceLevel (pierceLevel: number): void;
    /**Sets if this arrow was shot from a crossbow.*/
    setShotFromCrossbow (shotFromCrossbow: boolean): void
}

/**Represents the pickup status of this arrow.*/
export class AbstractArrow$PickupStatus extends Enum<AbstractArrow$PickupStatus> {
    /**The arrow can be picked up.*/
    static ALLOWED: AbstractArrow$PickupStatus;
    /**The arrow can only be picked up by players in creative mode.*/
    static CREATIVE_ONLY: AbstractArrow$PickupStatus;
    /**The arrow cannot be picked up.*/
    static DISALLOWED: AbstractArrow$PickupStatus
}

/**Represents a Horse-like creature.*/
export interface AbstractHorse extends Vehicle, InventoryHolder, Tameable {
    /**Gets the domestication level of this horse.*/
    getDomestication (): number;
    /**Get the object's inventory.*/
    getInventory (): AbstractHorseInventory;
    /**Gets the jump strength of this horse.*/
    getJumpStrength (): number;
    /**Gets the maximum domestication level of this horse.*/
    getMaxDomestication (): number;
    /**Sets the domestication level of this horse.*/
    setDomestication (level: number): void;
    /**Sets the jump strength of this horse.*/
    setJumpStrength (strength: number): void;
    /**Sets the maximum domestication level of this horse.*/
    setMaxDomestication (level: number): void
}

/**An interface to the inventory of an AbstractHorse.*/
export interface AbstractHorseInventory extends Inventory {
    /**Gets the item in the horse's saddle slot.*/
    getSaddle (): ItemStack;
    /**Sets the item in the horse's saddle slot.*/
    setSaddle (stack: ItemStack): void
}

/**Represents a villager NPC*/
export interface AbstractVillager extends Breedable, NPC, InventoryHolder, Merchant {
    /**Gets this villager's inventory.*/
    getInventory (): Inventory
}

export class Action extends Enum<Action> {
    /**Left-clicking the air*/
    static LEFT_CLICK_AIR: Action;
    /**Left-clicking a block*/
    static LEFT_CLICK_BLOCK: Action;
    /**Stepping onto or into a block (Ass-pressure)   Examples:    Jumping on soil  Standing on pressure plate  Triggering redstone ore  Triggering tripwire  */
    static PHYSICAL: Action;
    /**Right-clicking the air*/
    static RIGHT_CLICK_AIR: Action;
    /**Right-clicking a block*/
    static RIGHT_CLICK_BLOCK: Action
}

/**Represents an advancement that may be awarded to a player. This class is not  reference safe as the underlying advancement may be reloaded.*/
export interface Advancement extends Keyed {
    /**Get all the criteria present in this advancement.*/
    getCriteria (): Collection<String>
}

/**The individual status of an advancement for a player. This class is not  reference safe as the underlying advancement may be reloaded.*/
export interface AdvancementProgress {
    /**Mark the specified criteria as awarded at the current time.*/
    awardCriteria (criteria: String): boolean;
    /**The advancement this progress is concerning.*/
    getAdvancement (): Advancement;
    /**Gets the criteria which have been awarded.*/
    getAwardedCriteria (): Collection<String>;
    /**Get the date the specified criteria was awarded.*/
    getDateAwarded (criteria: String): Date;
    /**Get the criteria which have not been awarded.*/
    getRemainingCriteria (): Collection<String>;
    /**Check if all criteria for this advancement have been met.*/
    isDone (): boolean;
    /**Mark the specified criteria as uncompleted.*/
    revokeCriteria (criteria: String): boolean
}

/**'age' represents the different growth stages that a crop-like block can go  through.    A value of 0 indicates that the crop was freshly planted, whilst a value  equal to getMaximumAge() indicates that the crop is ripe and ready  to be harvested.*/
export interface Ageable extends BlockData {
    /**Gets the value of the 'age' property.*/
    getAge (): number;
    /**Gets the maximum allowed value of the 'age' property.*/
    getMaximumAge (): number;
    /**Sets the value of the 'age' property.*/
    setAge (age: number): void
}

/**Represents an entity that can age.*/
export interface Ageable extends Creature {
    /**Gets the age of this mob.*/
    getAge (): number;
    /**Returns true if the mob is an adult.*/
    isAdult (): boolean;
    /**Sets the age of the mob to an adult*/
    setAdult (): void;
    /**Sets the age of this mob.*/
    setAge (age: number): void;
    /**Sets the age of the mob to a baby*/
    setBaby (): void
}

/**Represents an ambient mob*/
export interface Ambient extends Mob {

}

/**'power' represents the redstone power level currently being emitted or  transmitted via this block.    May not be over 9000 or getMaximumPower() (usually 15).*/
export interface AnaloguePowerable extends BlockData {
    /**Gets the maximum allowed value of the 'power' property.*/
    getMaximumPower (): number;
    /**Gets the value of the 'power' property.*/
    getPower (): number;
    /**Sets the value of the 'power' property.*/
    setPower (power: number): void
}

/**Represents an Animal.*/
export interface Animals extends Breedable {
    /**Get the UUID of the entity that caused this entity to enter the  Breedable.canBreed() state.*/
    getBreedCause (): UUID;
    /**Get the amount of ticks remaining for this entity in love mode.*/
    getLoveModeTicks (): number;
    /**Get whether or not this entity is in love mode and will produce  offspring with another entity in love mode.*/
    isLoveMode (): boolean;
    /**Set the UUID of the entity that caused this entity to enter the  Breedable.canBreed() state.*/
    setBreedCause (uuid: UUID): void;
    /**Set the amount of ticks for which this entity should be in love mode.*/
    setLoveModeTicks (ticks: number): void
}

export interface AnimalTamer {
    /**This is the name of the specified AnimalTamer.*/
    getName (): String;
    /**This is the UUID of the specified AnimalTamer.*/
    getUniqueId (): UUID
}

/**Called when an anvil is damaged from being used*/
export class AnvilDamagedEvent extends InventoryEvent implements Cancellable {
    /**Gets the new state of damage on the anvil*/
    getDamageState (): AnvilDamagedEvent$DamageState;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the primary Inventory involved in this transaction*/
    getInventory (): AnvilInventory;
    /**Gets if anvil is breaking on this use*/
    isBreaking (): boolean;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets if anvil is breaking on this use*/
    setBreaking (breaking: boolean): void;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the new state of damage on the anvil*/
    setDamageState (damageState: AnvilDamagedEvent$DamageState): void
}

/**Represents the amount of damage on an anvil block*/
export class AnvilDamagedEvent$DamageState extends Enum<AnvilDamagedEvent$DamageState> {
    static BROKEN: AnvilDamagedEvent$DamageState;
    static CHIPPED: AnvilDamagedEvent$DamageState;
    static DAMAGED: AnvilDamagedEvent$DamageState;
    static FULL: AnvilDamagedEvent$DamageState
}

/**Interface to the inventory of an Anvil.*/
export interface AnvilInventory extends Inventory {
    /**Gets the item in the left input slot.*/
    getFirstItem (): ItemStack;
    /**Get the maximum experience cost (in levels) to be allowed by the current  repair.*/
    getMaximumRepairCost (): number;
    /**Get the name to be applied to the repaired item.*/
    getRenameText (): String;
    /**Get the experience cost (in levels) to complete the current repair.*/
    getRepairCost (): number;
    /**Gets the item in the result slot.*/
    getResult (): ItemStack;
    /**Gets the item in the right input slot.*/
    getSecondItem (): ItemStack;
    /**Sets the item in the left input slot.*/
    setFirstItem (firstItem: ItemStack): void;
    /**Set the maximum experience cost (in levels) to be allowed by the current  repair.*/
    setMaximumRepairCost (levels: number): void;
    /**Set the experience cost (in levels) to complete the current repair.*/
    setRepairCost (levels: number): void;
    /**Sets the item in the result slot.*/
    setResult (result: ItemStack): void;
    /**Sets the item in the right input slot.*/
    setSecondItem (secondItem: ItemStack): void
}

/**Represents an area effect cloud which will imbue a potion effect onto  entities which enter it.*/
export interface AreaEffectCloud extends Entity {
    /**Adds a custom potion effect to this cloud.*/
    addCustomEffect (effect: PotionEffect, overwrite: boolean): boolean;
    /**Removes all custom potion effects from this cloud.*/
    clearCustomEffects (): void;
    /**Returns the potion data about the base potion*/
    getBasePotionData (): PotionData;
    /**Gets the color of this cloud.*/
    getColor (): Color;
    /**Gets an immutable list containing all custom potion effects applied to  this cloud.*/
    getCustomEffects (): List<PotionEffect>;
    /**Gets the duration which this cloud will exist for (in ticks).*/
    getDuration (): number;
    /**Gets the amount that the duration of this cloud will decrease by when it  applies an effect to an entity.*/
    getDurationOnUse (): number;
    /**Gets the particle which this cloud will be composed of*/
    getParticle (): Particle;
    /**Gets the initial radius of the cloud.*/
    getRadius (): number;
    /**Gets the amount that the radius of this cloud will decrease by when it  applies an effect to an entity.*/
    getRadiusOnUse (): number;
    /**Gets the amount that the radius of this cloud will decrease by each tick.*/
    getRadiusPerTick (): number;
    /**Gets the time that an entity will be immune from subsequent exposure.*/
    getReapplicationDelay (): number;
    /**Retrieve the original source of this cloud.*/
    getSource (): ProjectileSource;
    /**Gets the time which an entity has to be exposed to the cloud before the  effect is applied.*/
    getWaitTime (): number;
    /**Checks for a specific custom potion effect type on this cloud.*/
    hasCustomEffect (type: PotionEffectType): boolean;
    /**Checks for the presence of custom potion effects.*/
    hasCustomEffects (): boolean;
    /**Removes a custom potion effect from this cloud.*/
    removeCustomEffect (type: PotionEffectType): boolean;
    /**Sets the underlying potion data*/
    setBasePotionData (data: PotionData): void;
    /**Sets the color of this cloud.*/
    setColor (color: Color): void;
    /**Sets the duration which this cloud will exist for (in ticks).*/
    setDuration (duration: number): void;
    /**Sets the amount that the duration of this cloud will decrease by when it  applies an effect to an entity.*/
    setDurationOnUse (duration: number): void;
    /**Sets the particle which this cloud will be composed of*/
    setParticle (particle: Particle): void;
    /**Sets the particle which this cloud will be composed of*/
    setParticle <T>(particle: Particle, data: T): void;
    /**Sets the initial radius of the cloud.*/
    setRadius (radius: number): void;
    /**Sets the amount that the radius of this cloud will decrease by when it  applies an effect to an entity.*/
    setRadiusOnUse (radius: number): void;
    /**Gets the amount that the radius of this cloud will decrease by each tick.*/
    setRadiusPerTick (radius: number): void;
    /**Sets the time that an entity will be immune from subsequent exposure.*/
    setReapplicationDelay (delay: number): void;
    /**Set the original source of this cloud.*/
    setSource (source: ProjectileSource): void;
    /**Sets the time which an entity has to be exposed to the cloud before the  effect is applied.*/
    setWaitTime (waitTime: number): void
}

/**Called when a lingering potion applies it's effects. Happens  once every 5 ticks*/
export class AreaEffectCloudApplyEvent extends EntityEvent implements Cancellable {
    /**Retrieves a mutable list of the effected entities*/
    getAffectedEntities (): List<LivingEntity>;
    /**Returns the Entity involved in this event*/
    getEntity (): AreaEffectCloud;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

export interface ArmoredHorseInventory extends AbstractHorseInventory {
    /**Gets the item in the horse's armor slot.*/
    getArmor (): ItemStack;
    /**Sets the item in the horse's armor slot.*/
    setArmor (stack: ItemStack): void
}

export interface ArmorStand extends LivingEntity {
    /**Disable specific slots, adding them  to the currently disabled slots   This makes it so a player is unable to interact with the Armor Stand to place, remove, or replace an item in the given slot(s)  Note: Once a slot is disabled, the only way to get an item back it to break the armor stand.*/
    addDisabledSlots (...slots: EquipmentSlot[]): void;
    /**Locks the equipment slot with the specified  locking mechanism.*/
    addEquipmentLock (slot: EquipmentSlot, lockType: ArmorStand$LockType): void;
    /**Tests if this armor stand can move.*/
    canMove (): boolean;
    /**Tests if this armor stand can tick.*/
    canTick (): boolean;
    /**Returns the armor stand's body's current pose as a  EulerAngle.*/
    getBodyPose (): EulerAngle;
    /**Get the list of disabled slots*/
    getDisabledSlots (): Set<EquipmentSlot>;
    /**Returns the armor stand's head's current pose as a  EulerAngle.*/
    getHeadPose (): EulerAngle;
    /**Returns the item the armor stand has  equip in the given equipment slot*/
    getItem (slot: EquipmentSlot): ItemStack;
    /**Returns the armor stand's left arm's current pose as a  EulerAngle.*/
    getLeftArmPose (): EulerAngle;
    /**Returns the armor stand's left leg's current pose as a  EulerAngle.*/
    getLeftLegPose (): EulerAngle;
    /**Returns the armor stand's right arm's current pose as a  EulerAngle.*/
    getRightArmPose (): EulerAngle;
    /**Returns the armor stand's right leg's current pose as a  EulerAngle.*/
    getRightLegPose (): EulerAngle;
    /**Returns whether this armor stand has arms.*/
    hasArms (): boolean;
    /**Returns whether the armor stand has a base plate.*/
    hasBasePlate (): boolean;
    /**Returns if the ArmorStand has the specified  locking mechanism.*/
    hasEquipmentLock (slot: EquipmentSlot, lockType: ArmorStand$LockType): boolean;
    /**Returns whether this armor stand is a marker, meaning it has a very small  collision box.*/
    isMarker (): boolean;
    /**Check if a specific slot is disabled*/
    isSlotDisabled (slot: EquipmentSlot): boolean;
    /**Returns whether this armor stand is scaled down.*/
    isSmall (): boolean;
    /**Returns whether the armor stand should be visible or not.*/
    isVisible (): boolean;
    /**Remove the given slots from the disabled  slots list, enabling them.*/
    removeDisabledSlots (...slots: EquipmentSlot[]): void;
    /**Remove a locking mechanism.*/
    removeEquipmentLock (slot: EquipmentSlot, lockType: ArmorStand$LockType): void;
    /**Sets whether this armor stand has arms.*/
    setArms (arms: boolean): void;
    /**Sets whether the armor stand has a base plate.*/
    setBasePlate (basePlate: boolean): void;
    /**Sets the armor stand's body's current pose as a  EulerAngle.*/
    setBodyPose (pose: EulerAngle): void;
    /**Sets if this armor stand can move.*/
    setCanMove (move: boolean): void;
    /**Sets if this armor stand can tick.*/
    setCanTick (tick: boolean): void;
    /**Set the disabled slots   This makes it so a player is unable to interact with the Armor Stand to place, remove, or replace an item in the given slot(s)  Note: Once a slot is disabled, the only way to get an item back it to break the armor stand.*/
    setDisabledSlots (...slots: EquipmentSlot[]): void;
    /**Sets the armor stand's head's current pose as a  EulerAngle.*/
    setHeadPose (pose: EulerAngle): void;
    /**Sets the item the armor stand has  equip in the given equipment slot*/
    setItem (slot: EquipmentSlot, item: ItemStack): void;
    /**Sets the armor stand's left arm's current pose as a  EulerAngle.*/
    setLeftArmPose (pose: EulerAngle): void;
    /**Sets the armor stand's left leg's current pose as a  EulerAngle.*/
    setLeftLegPose (pose: EulerAngle): void;
    /**Sets whether this armor stand is a marker, meaning it has a very small  collision box.*/
    setMarker (marker: boolean): void;
    /**Sets the armor stand's right arm's current pose as a  EulerAngle.*/
    setRightArmPose (pose: EulerAngle): void;
    /**Sets the armor stand's right leg's current pose as a  EulerAngle.*/
    setRightLegPose (pose: EulerAngle): void;
    /**Sets whether this armor stand is scaled down.*/
    setSmall (small: boolean): void;
    /**Sets whether the armor stand should be visible or not.*/
    setVisible (visible: boolean): void
}

/**Represents types of locking mechanisms for ArmorStand equipment.*/
export class ArmorStand$LockType extends Enum<ArmorStand$LockType> {
    /**Prevents adding the respective equipment - players cannot replace the  empty slot with a new item, but can swap items between themselves and  the ArmorStand.*/
    static ADDING: ArmorStand$LockType;
    /**Prevents adding or changing the respective equipment - players cannot  replace the empty slot with a new item or swap the items between  themselves and the ArmorStand.*/
    static ADDING_OR_CHANGING: ArmorStand$LockType;
    /**Prevents removing or changing the respective equipment - players  cannot take an item from the slot or swap the items between  themselves and the ArmorStand.*/
    static REMOVING_OR_CHANGING: ArmorStand$LockType
}

export interface ArmorStandMeta extends ItemMeta {
    /**Gets whether this ArmorStand should have no base plate when spawned*/
    hasNoBasePlate (): boolean;
    /**Gets whether the ArmorStand should be invisible when spawned*/
    isInvisible (): boolean;
    /**Gets whether this ArmorStand will be a marker when spawned  The exact details of this flag are an implementation detail*/
    isMarker (): boolean;
    /**Gets whether this ArmorStand will be small when spawned*/
    isSmall (): boolean;
    /**Sets that this ArmorStand should be invisible when spawned*/
    setInvisible (invisible: boolean): void;
    /**Sets that this ArmorStand should be a marker when spawned  The exact details of this flag are an implementation detail*/
    setMarker (marker: boolean): void;
    /**Sets that this ArmorStand should have no base plate when spawned*/
    setNoBasePlate (noBasePlate: boolean): void;
    /**Sets that this ArmorStand should show arms when spawned*/
    setShowArms (showArms: boolean): void;
    /**Sets that this ArmorStand should be small when spawned*/
    setSmall (small: boolean): void;
    /**Gets whether this ArmorStand should show arms when spawned*/
    shouldShowArms (): boolean
}

export interface Arrow extends AbstractArrow {
    /**Adds a custom potion effect to this arrow.*/
    addCustomEffect (effect: PotionEffect, overwrite: boolean): boolean;
    /**Removes all custom potion effects from this arrow.*/
    clearCustomEffects (): void;
    /**Returns the potion data about the base potion*/
    getBasePotionData (): PotionData;
    /**Gets the color of this arrow.*/
    getColor (): Color;
    /**Gets an immutable list containing all custom potion effects applied to  this arrow.*/
    getCustomEffects (): List<PotionEffect>;
    /**Checks for a specific custom potion effect type on this arrow.*/
    hasCustomEffect (type: PotionEffectType): boolean;
    /**Checks for the presence of custom potion effects.*/
    hasCustomEffects (): boolean;
    /**Removes a custom potion effect from this arrow.*/
    removeCustomEffect (type: PotionEffectType): boolean;
    /**Sets the underlying potion data*/
    setBasePotionData (data: PotionData): void;
    /**Sets the color of this arrow.*/
    setColor (color: Color): void
}

/**Called when an arrow enters or exists an entity's body.*/
export class ArrowBodyCountChangeEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    getHandlers (): HandlerList;
    /**Get the new amount of arrows in the entity's body.*/
    getNewAmount (): number;
    /**Gets the old amount of arrows in the entity's body.*/
    getOldAmount (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Whether the event was called because the entity was reset.*/
    isReset (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the final amount of arrows in the entity's body.*/
    setNewAmount (newAmount: number): void
}

/**Represents the art on a painting*/
export class Art extends Enum<Art> implements Keyed {
    static ALBAN: Art;
    static AZTEC: Art;
    static AZTEC2: Art;
    static BOMB: Art;
    static BURNING_SKULL: Art;
    static BUST: Art;
    static COURBET: Art;
    static CREEBET: Art;
    static DONKEY_KONG: Art;
    static FIGHTERS: Art;
    static GRAHAM: Art;
    static KEBAB: Art;
    static MATCH: Art;
    static PIGSCENE: Art;
    static PLANT: Art;
    static POINTER: Art;
    static POOL: Art;
    static SEA: Art;
    static SKELETON: Art;
    static SKULL_AND_ROSES: Art;
    static STAGE: Art;
    static SUNSET: Art;
    static VOID: Art;
    static WANDERER: Art;
    static WASTELAND: Art;
    static WITHER: Art
}

export class ASMEventExecutorGenerator extends Object {
    static generateEventExecutor (m: Method, name: String): number[];
    static generateName (): String
}

/**This event will sometimes fire synchronously, depending on how it was  triggered.    The constructor provides a boolean to indicate if the event was fired  synchronously or asynchronously. When asynchronous, this event can be  called from any thread, sans the main thread, and has limited access to the  API.    If a player is the direct cause of this event by an incoming packet, this  event will be asynchronous. If a plugin triggers this event by compelling a  player to chat, this event will be synchronous.    Care should be taken to check Event.isAsynchronous() and treat the event  appropriately.*/
export class AsyncPlayerChatEvent extends PlayerEvent implements Cancellable {
    /**Gets the format to use to display this chat message.*/
    getFormat (): String;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the message that the player is attempting to send.*/
    getMessage (): String;
    /**Gets a set of recipients that this chat message will be displayed to.*/
    getRecipients (): Set<Player>;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the format to use to display this chat message.*/
    setFormat (format: String): void;
    /**Sets the message that the player will send.*/
    setMessage (message: String): void
}

/**Stores details for players attempting to log in.    This event is asynchronous, and not run using main thread.*/
export class AsyncPlayerPreLoginEvent extends Event {
    /**Allows the player to log in*/
    allow (): void;
    /**Disallows the player from logging in, with the given reason*/
    disallow (result: AsyncPlayerPreLoginEvent$Result, message: String): void;
    /**Gets the player IP address.*/
    getAddress (): InetAddress;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the current kick message that will be used if getResult() !=  Result.ALLOWED*/
    getKickMessage (): String;
    /**Gets the current result of the login, as an enum*/
    getLoginResult (): AsyncPlayerPreLoginEvent$Result;
    /**Gets the player's name.*/
    getName (): String;
    /**Gets the PlayerProfile of the player logging in*/
    getPlayerProfile (): PlayerProfile;
    /**Gets the player's unique ID.*/
    getUniqueId (): UUID;
    /**Sets the kick message to display if getResult() != Result.ALLOWED*/
    setKickMessage (message: String): void;
    /**Sets the new result of the login, as an enum*/
    setLoginResult (result: AsyncPlayerPreLoginEvent$Result): void;
    setPlayerProfile (profile: PlayerProfile): void
}

/**Basic kick reasons for communicating to plugins*/
export class AsyncPlayerPreLoginEvent$Result extends Enum<AsyncPlayerPreLoginEvent$Result> {
    /**The player is allowed to log in*/
    static ALLOWED: AsyncPlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, due to them being banned*/
    static KICK_BANNED: AsyncPlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, due to the server being full*/
    static KICK_FULL: AsyncPlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, for reasons undefined*/
    static KICK_OTHER: AsyncPlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, due to them not being on the  white list*/
    static KICK_WHITELIST: AsyncPlayerPreLoginEvent$Result
}

/**Allows plugins to compute tab completion results asynchronously. If this event provides completions, then the standard synchronous process will not be fired to populate the results. However, the synchronous TabCompleteEvent will fire with the Async results.   Only 1 process will be allowed to provide completions, the Async Event, or the standard process.*/
export class AsyncTabCompleteEvent extends Event implements Cancellable {
    /**Return the entire buffer which formed the basis of this completion.*/
    getBuffer (): String;
    /**The list of completions which will be offered to the sender, in order.*/
    getCompletions (): List<String>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getLocation (): Location;
    /**Get the sender completing this command.*/
    getSender (): CommandSender;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    isCommand (): boolean;
    /**If true, the standard process of calling Command.tabComplete(CommandSender, String, String[])  or current player names will not be called.*/
    isHandled (): boolean;
    /**Will provide no completions, and will not fire the synchronous process*/
    setCancelled (cancelled: boolean): void;
    /**Set the completions offered, overriding any already set.*/
    setCompletions (completions: List<String>): void;
    /**Sets whether or not to consider the completion request handled.*/
    setHandled (handled: boolean): void
}

/**'attached' denotes whether a tripwire hook or string forms a complete  tripwire circuit and is ready to trigger.    Updating the property on a tripwire hook will change the texture to indicate  a connected string, but will not have any effect when used on the tripwire  string itself. It may however still be used to check whether the string forms  a circuit.*/
export interface Attachable extends BlockData {
    /**Gets the value of the 'attached' property.*/
    isAttached (): boolean;
    /**Sets the value of the 'attached' property.*/
    setAttached (attached: boolean): void
}

/**Indicates that a block can be attached to another block*/
export interface Attachable extends Directional {
    /**Gets the face that this block is attached on*/
    getAttachedFace (): BlockFace
}

/**Represents an object which may contain attributes.*/
export interface Attributable {
    /**Gets the specified attribute instance from the object.*/
    getAttribute (attribute: Attribute): AttributeInstance
}

/**Types of attributes which may be present on an Attributable.*/
export class Attribute extends Enum<Attribute> implements Keyed {
    /**Armor bonus of an Entity.*/
    static GENERIC_ARMOR: Attribute;
    /**Armor durability bonus of an Entity.*/
    static GENERIC_ARMOR_TOUGHNESS: Attribute;
    /**Attack damage of an Entity.*/
    static GENERIC_ATTACK_DAMAGE: Attribute;
    /**Attack knockback of an Entity.*/
    static GENERIC_ATTACK_KNOCKBACK: Attribute;
    /**Attack speed of an Entity.*/
    static GENERIC_ATTACK_SPEED: Attribute;
    /**Flying speed of an Entity.*/
    static GENERIC_FLYING_SPEED: Attribute;
    /**Range at which an Entity will follow others.*/
    static GENERIC_FOLLOW_RANGE: Attribute;
    /**Resistance of an Entity to knockback.*/
    static GENERIC_KNOCKBACK_RESISTANCE: Attribute;
    /**Luck bonus of an Entity.*/
    static GENERIC_LUCK: Attribute;
    /**Maximum health of an Entity.*/
    static GENERIC_MAX_HEALTH: Attribute;
    /**Movement speed of an Entity.*/
    static GENERIC_MOVEMENT_SPEED: Attribute;
    /**Strength with which a horse will jump.*/
    static HORSE_JUMP_STRENGTH: Attribute;
    /**Chance of a zombie to spawn reinforcements.*/
    static ZOMBIE_SPAWN_REINFORCEMENTS: Attribute
}

/**Represents a mutable instance of an attribute and its associated modifiers  and values.*/
export interface AttributeInstance {
    /**Add a modifier to this instance.*/
    addModifier (modifier: AttributeModifier): void;
    /**The attribute pertaining to this instance.*/
    getAttribute (): Attribute;
    /**Base value of this instance before modifiers are applied.*/
    getBaseValue (): number;
    /**Gets the default value of the Attribute attached to this instance.*/
    getDefaultValue (): number;
    /**Get all modifiers present on this instance.*/
    getModifiers (): Collection<AttributeModifier>;
    /**Get the value of this instance after all associated modifiers have been  applied.*/
    getValue (): number;
    /**Remove a modifier from this instance.*/
    removeModifier (modifier: AttributeModifier): void;
    /**Set the base value of this instance.*/
    setBaseValue (value: number): void
}

/**Concrete implementation of an attribute modifier.*/
export class AttributeModifier extends Object implements ConfigurationSerializable {
    static deserialize (args: Map<String,Object>): AttributeModifier;
    equals (other: Object): boolean;
    /**Get the amount by which this modifier will apply its AttributeModifier.Operation.*/
    getAmount (): number;
    /**Get the name of this modifier.*/
    getName (): String;
    /**Get the operation this modifier will apply.*/
    getOperation (): AttributeModifier$Operation;
    /**Get the EquipmentSlot this AttributeModifier is active on,  or null if this modifier is applicable for any slot.*/
    getSlot (): EquipmentSlot;
    /**Get the unique ID for this modifier.*/
    getUniqueId (): UUID;
    hashCode (): number;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    toString (): String
}

/**Enumerable operation to be applied.*/
export class AttributeModifier$Operation extends Enum<AttributeModifier$Operation> {
    /**Adds (or subtracts) the specified amount to the base value.*/
    static ADD_NUMBER: AttributeModifier$Operation;
    /**Adds this scalar of amount to the base value.*/
    static ADD_SCALAR: AttributeModifier$Operation;
    /**Multiply amount by this value, after adding 1 to it.*/
    static MULTIPLY_SCALAR_1: AttributeModifier$Operation
}

export class AuthorNagException extends RuntimeException {
    getMessage (): String
}

/**Represents a mutually perpendicular axis in 3D Cartesian coordinates. In  Minecraft the x, z axes lie in the horizontal plane, whilst the y axis points  upwards.*/
export class Axis extends Enum<Axis> {
    /**The x axis.*/
    static X: Axis;
    /**The y axis.*/
    static Y: Axis;
    /**The z axis.*/
    static Z: Axis
}

/**'leaves' represents the size of the leaves on this bamboo block.*/
export interface Bamboo extends Ageable, Sapling {
    /**Gets the value of the 'leaves' property.*/
    getLeaves (): Bamboo$Leaves;
    /**Sets the value of the 'leaves' property.*/
    setLeaves (leaves: Bamboo$Leaves): void
}

/**Bamboo leaf size.*/
export class Bamboo$Leaves extends Enum<Bamboo$Leaves> {
    /**Large leaves.*/
    static LARGE: Bamboo$Leaves;
    /**No leaves.*/
    static NONE: Bamboo$Leaves;
    /**Small leaves.*/
    static SMALL: Bamboo$Leaves
}

/**A single entry from a ban list. This may represent either a player ban or  an IP ban.    Ban entries include the following properties:    Property information        Property      Description        Target Name / IP Address      The target name or IP address        Creation Date      The creation date of the ban        Source      The source of the ban, such as a player, console, plugin, etc        Expiration Date      The expiration date of the ban        Reason      The reason for the ban        Unsaved information is not automatically written to the implementation's  ban list, instead, the save() method must be called to write the  changes to the ban list. If this ban entry has expired (such as from an  unban) and is no longer found in the list, the save() call will  re-add it to the list, therefore banning the victim specified.    Likewise, changes to the associated BanList or other entries may or  may not be reflected in this entry.*/
export interface BanEntry {
    /**Gets the date this ban entry was created.*/
    getCreated (): Date;
    /**Gets the date this ban expires on, or null for no defined end date.*/
    getExpiration (): Date;
    /**Gets the reason for this ban.*/
    getReason (): String;
    /**Gets the source of this ban.*/
    getSource (): String;
    /**Gets the target involved.*/
    getTarget (): String;
    /**Saves the ban entry, overwriting any previous data in the ban list.*/
    save (): void;
    /**Sets the date this ban entry was created.*/
    setCreated (created: Date): void;
    /**Sets the date this ban expires on.*/
    setExpiration (expiration: Date): void;
    /**Sets the reason for this ban.*/
    setReason (reason: String): void;
    /**Sets the source of this ban.*/
    setSource (source: String): void
}

/**A ban list, containing bans of some BanList.Type.*/
export interface BanList {
    /**Adds a ban to the this list.*/
    addBan (target: String, reason: String, expires: Date, source: String): BanEntry;
    /**Gets a set containing every BanEntry in this list.*/
    getBanEntries (): Set<BanEntry>;
    /**Gets a BanEntry by target.*/
    getBanEntry (target: String): BanEntry;
    /**Gets if a BanEntry exists for the target, indicating an active  ban status.*/
    isBanned (target: String): boolean;
    /**Removes the specified target from this list, therefore indicating a  "not banned" status.*/
    pardon (target: String): void
}

/**Represents a ban-type that a BanList may track.*/
export class BanList$Type extends Enum<BanList$Type> {
    /**Banned player IP addresses*/
    static IP: BanList$Type;
    /**Banned player names*/
    static NAME: BanList$Type
}

/**Represents a captured state of a banner.*/
export interface Banner extends TileState {
    /**Adds a new pattern on top of the existing  patterns*/
    addPattern (pattern: Pattern): void;
    /**Returns the base color for this banner*/
    getBaseColor (): DyeColor;
    /**Returns the pattern at the specified index*/
    getPattern (i: number): Pattern;
    /**Returns a list of patterns on this banner*/
    getPatterns (): List<Pattern>;
    /**Returns the number of patterns on this  banner*/
    numberOfPatterns (): number;
    /**Removes the pattern at the specified index*/
    removePattern (i: number): Pattern;
    /**Sets the base color for this banner.*/
    setBaseColor (color: DyeColor): void;
    /**Sets the pattern at the specified index*/
    setPattern (i: number, pattern: Pattern): void;
    /**Sets the patterns used on this banner*/
    setPatterns (patterns: List<Pattern>): void
}

export interface BannerMeta extends ItemMeta {
    /**Adds a new pattern on top of the existing  patterns*/
    addPattern (pattern: Pattern): void;
    /**Returns the pattern at the specified index*/
    getPattern (i: number): Pattern;
    /**Returns a list of patterns on this banner*/
    getPatterns (): List<Pattern>;
    /**Returns the number of patterns on this  banner*/
    numberOfPatterns (): number;
    /**Removes the pattern at the specified index*/
    removePattern (i: number): Pattern;
    /**Sets the pattern at the specified index*/
    setPattern (i: number, pattern: Pattern): void;
    /**Sets the patterns used on this banner*/
    setPatterns (patterns: List<Pattern>): void
}

export class BarColor extends Enum<BarColor> {
    static BLUE: BarColor;
    static GREEN: BarColor;
    static PINK: BarColor;
    static PURPLE: BarColor;
    static RED: BarColor;
    static WHITE: BarColor;
    static YELLOW: BarColor
}

export class BarFlag extends Enum<BarFlag> {
    /**Creates fog around the world.*/
    static CREATE_FOG: BarFlag;
    /**Darkens the sky like during fighting a wither.*/
    static DARKEN_SKY: BarFlag;
    /**Tells the client to play the Ender Dragon boss music.*/
    static PLAY_BOSS_MUSIC: BarFlag
}

/**Represents a captured state of a Barrel.*/
export interface Barrel extends Container, Lootable, Lidded {

}

export class BarStyle extends Enum<BarStyle> {
    /**Splits the boss bar into 10 segments*/
    static SEGMENTED_10: BarStyle;
    /**Splits the boss bar into 12 segments*/
    static SEGMENTED_12: BarStyle;
    /**Splits the boss bar into 20 segments*/
    static SEGMENTED_20: BarStyle;
    /**Splits the boss bar into 6 segments*/
    static SEGMENTED_6: BarStyle;
    /**Makes the boss bar solid (no segments)*/
    static SOLID: BarStyle
}

/**Represents a Bat*/
export interface Bat extends Ambient {
    /**Checks the current waking state of this bat.*/
    isAwake (): boolean;
    /**This method modifies the current waking state of this bat.*/
    setAwake (state: boolean): void
}

/**Called when a bat attempts to sleep or wake up from its slumber.    If a Bat Toggle Sleep event is cancelled, the Bat will not toggle its sleep  state.*/
export class BatToggleSleepEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get whether or not the bat is attempting to awaken.*/
    isAwake (): boolean;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a captured state of a beacon.*/
export interface Beacon extends TileState, Lockable, Nameable {
    /**Returns the list of players within the beacon's range of effect.*/
    getEntitiesInRange (): Collection<LivingEntity>;
    /**Returns the primary effect set on the beacon*/
    getPrimaryEffect (): PotionEffect;
    /**Returns the secondary effect set on the beacon.*/
    getSecondaryEffect (): PotionEffect;
    /**Returns the tier of the beacon pyramid (0-4).*/
    getTier (): number;
    /**Set the primary effect on this beacon, or null to clear.*/
    setPrimaryEffect (effect: PotionEffectType): void;
    /**Set the secondary effect on this beacon, or null to clear.*/
    setSecondaryEffect (effect: PotionEffectType): void
}

/**Called when a beacon effect is being applied to a player.*/
export class BeaconEffectEvent extends BlockEvent implements Cancellable {
    /**Gets the potion effect being applied.*/
    getEffect (): PotionEffect;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the player who the potion effect is being applied to.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Gets whether the effect is a primary beacon effect.*/
    isPrimary (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void;
    /**Sets the potion effect that will be applied.*/
    setEffect (effect: PotionEffect): void
}

/**Interface to the inventory of a Beacon.*/
export interface BeaconInventory extends Inventory {
    /**Get the item powering the beacon.*/
    getItem (): ItemStack;
    /**Set the item powering the beacon.*/
    setItem (item: ItemStack): void
}

/**Similar to Bisected, 'part' denotes which half of the bed this block  corresponds to.    'occupied' property is a quick flag to check if a player is currently  sleeping in this bed block.*/
export interface Bed extends Directional {
    /**Gets the value of the 'part' property.*/
    getPart (): Bed$Part;
    /**Gets the value of the 'occupied' property.*/
    isOccupied (): boolean;
    /**Sets the value of the 'part' property.*/
    setPart (part: Bed$Part): void
}

/**Horizontal half of a bed.*/
export class Bed$Part extends Enum<Bed$Part> {
    /**The foot is the lower half of the bed.*/
    static FOOT: Bed$Part;
    /**The head is the upper part of the bed containing the pillow.*/
    static HEAD: Bed$Part
}

/**Represents a Bee.*/
export interface Bee extends Animals {
    /**Get the bee's anger level.*/
    getAnger (): number;
    /**Get the amount of ticks the bee cannot enter the hive for.*/
    getCannotEnterHiveTicks (): number;
    /**Get the bee's flower location.*/
    getFlower (): Location;
    /**Get the bee's hive location.*/
    getHive (): Location;
    /**Get if the bee has nectar.*/
    hasNectar (): boolean;
    /**Get if the bee has stung.*/
    hasStung (): boolean;
    /**Set the bee's new anger level.*/
    setAnger (anger: number): void;
    /**Set the amount of ticks the bee cannot enter a hive for.*/
    setCannotEnterHiveTicks (ticks: number): void;
    /**Set the bee's flower location.*/
    setFlower (location: Location): void;
    /**Set if the bee has nectar.*/
    setHasNectar (nectar: boolean): void;
    /**Set if the bee has stung.*/
    setHasStung (stung: boolean): void;
    /**Set the bee's hive location.*/
    setHive (location: Location): void
}

/**Represents a captured state of a bee hive.*/
export interface Beehive extends EntityBlockStorage<Bee> {
    /**Get the hive's flower location.*/
    getFlower (): Location;
    /**Check if the hive is sedated due to smoke from a nearby campfire.*/
    isSedated (): boolean;
    /**Set the hive's flower location.*/
    setFlower (location: Location): void
}

/**'honey_level' represents the amount of honey stored in the hive.*/
export interface Beehive extends Directional {
    /**Gets the value of the 'honey_level' property.*/
    getHoneyLevel (): number;
    /**Gets the maximum allowed value of the 'honey_level' property.*/
    getMaximumHoneyLevel (): number;
    /**Sets the value of the 'honey_level' property.*/
    setHoneyLevel (honeyLevel: number): void
}

/**Represents a captured state of Bell.*/
export interface Bell extends TileState {

}

/**'attachment' denotes how the bell is attached to its block.*/
export interface Bell extends Directional, Powerable {
    /**Gets the value of the 'attachment' property.*/
    getAttachment (): Bell$Attachment;
    /**Sets the value of the 'attachment' property.*/
    setAttachment (attachment: Bell$Attachment): void
}

/**What the bell is attached to.*/
export class Bell$Attachment extends Enum<Bell$Attachment> {
    /**Placed on ceiling.*/
    static CEILING: Bell$Attachment;
    /**Placed between two walls.*/
    static DOUBLE_WALL: Bell$Attachment;
    /**Placed on floor.*/
    static FLOOR: Bell$Attachment;
    /**Placed on one wall.*/
    static SINGLE_WALL: Bell$Attachment
}

/**Called when a bell is rung.*/
export class BellRingEvent extends BlockEvent implements Cancellable {
    /**Gets the entity that rang the bell.*/
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Holds all accepted Biomes in the default server*/
export class Biome extends Enum<Biome> implements Keyed {
    static BADLANDS: Biome;
    static BADLANDS_PLATEAU: Biome;
    static BAMBOO_JUNGLE: Biome;
    static BAMBOO_JUNGLE_HILLS: Biome;
    static BASALT_DELTAS: Biome;
    static BEACH: Biome;
    static BIRCH_FOREST: Biome;
    static BIRCH_FOREST_HILLS: Biome;
    static COLD_OCEAN: Biome;
    static CRIMSON_FOREST: Biome;
    static DARK_FOREST: Biome;
    static DARK_FOREST_HILLS: Biome;
    static DEEP_COLD_OCEAN: Biome;
    static DEEP_FROZEN_OCEAN: Biome;
    static DEEP_LUKEWARM_OCEAN: Biome;
    static DEEP_OCEAN: Biome;
    static DEEP_WARM_OCEAN: Biome;
    static DESERT: Biome;
    static DESERT_HILLS: Biome;
    static DESERT_LAKES: Biome;
    static END_BARRENS: Biome;
    static END_HIGHLANDS: Biome;
    static END_MIDLANDS: Biome;
    static ERODED_BADLANDS: Biome;
    static FLOWER_FOREST: Biome;
    static FOREST: Biome;
    static FROZEN_OCEAN: Biome;
    static FROZEN_RIVER: Biome;
    static GIANT_SPRUCE_TAIGA: Biome;
    static GIANT_SPRUCE_TAIGA_HILLS: Biome;
    static GIANT_TREE_TAIGA: Biome;
    static GIANT_TREE_TAIGA_HILLS: Biome;
    static GRAVELLY_MOUNTAINS: Biome;
    static ICE_SPIKES: Biome;
    static JUNGLE: Biome;
    static JUNGLE_EDGE: Biome;
    static JUNGLE_HILLS: Biome;
    static LUKEWARM_OCEAN: Biome;
    static MODIFIED_BADLANDS_PLATEAU: Biome;
    static MODIFIED_GRAVELLY_MOUNTAINS: Biome;
    static MODIFIED_JUNGLE: Biome;
    static MODIFIED_JUNGLE_EDGE: Biome;
    static MODIFIED_WOODED_BADLANDS_PLATEAU: Biome;
    static MOUNTAIN_EDGE: Biome;
    static MOUNTAINS: Biome;
    static MUSHROOM_FIELD_SHORE: Biome;
    static MUSHROOM_FIELDS: Biome;
    static NETHER_WASTES: Biome;
    static OCEAN: Biome;
    static PLAINS: Biome;
    static RIVER: Biome;
    static SAVANNA: Biome;
    static SAVANNA_PLATEAU: Biome;
    static SHATTERED_SAVANNA: Biome;
    static SHATTERED_SAVANNA_PLATEAU: Biome;
    static SMALL_END_ISLANDS: Biome;
    static SNOWY_BEACH: Biome;
    static SNOWY_MOUNTAINS: Biome;
    static SNOWY_TAIGA: Biome;
    static SNOWY_TAIGA_HILLS: Biome;
    static SNOWY_TAIGA_MOUNTAINS: Biome;
    static SNOWY_TUNDRA: Biome;
    static SOUL_SAND_VALLEY: Biome;
    static STONE_SHORE: Biome;
    static SUNFLOWER_PLAINS: Biome;
    static SWAMP: Biome;
    static SWAMP_HILLS: Biome;
    static TAIGA: Biome;
    static TAIGA_HILLS: Biome;
    static TAIGA_MOUNTAINS: Biome;
    static TALL_BIRCH_FOREST: Biome;
    static TALL_BIRCH_HILLS: Biome;
    static THE_END: Biome;
    static THE_VOID: Biome;
    static WARM_OCEAN: Biome;
    static WARPED_FOREST: Biome;
    static WOODED_BADLANDS_PLATEAU: Biome;
    static WOODED_HILLS: Biome;
    static WOODED_MOUNTAINS: Biome
}

/**'half' denotes which half of a two block tall material this block is.    In game it may be referred to as either (top, bottom) or (upper, lower).*/
export interface Bisected extends BlockData {
    /**Gets the value of the 'half' property.*/
    getHalf (): Bisected$Half;
    /**Sets the value of the 'half' property.*/
    setHalf (half: Bisected$Half): void
}

/**The half of a vertically bisected block.*/
export class Bisected$Half extends Enum<Bisected$Half> {
    /**The bottom half of the block, normally with the lower y coordinate.*/
    static BOTTOM: Bisected$Half;
    /**The top half of the block, normally with the higher y coordinate.*/
    static TOP: Bisected$Half
}

/**Represents a captured state of a blast furnace.*/
export interface BlastFurnace extends Furnace {

}

/**Represents a campfire recipe.*/
export class BlastingRecipe extends CookingRecipe<BlastingRecipe> {

}

/**Represents a Blaze monster*/
export interface Blaze extends Monster {

}

/**Represents a block. This is a live object, and only one Block may exist for  any given location in a world. The state of the block may change  concurrently to your own handling of it; use block.getState() to get a  snapshot state of a block which will not be modified.     Note that parts of this class which require access to the world at large  (i.e. lighting and power) may not be able to be safely accessed during world  generation when used in cases like BlockPhysicsEvent!!!!*/
export interface Block extends Metadatable {
    /**Simulate bone meal application to this block (if possible).*/
    applyBoneMeal (face: BlockFace): boolean;
    /**Breaks the block and spawns items as if a player had digged it regardless  of the tool.*/
    breakNaturally (): boolean;
    /**Breaks the block and spawns items as if a player had digged it with a  specific tool*/
    breakNaturally (tool: ItemStack): boolean;
    /**Breaks the block and spawns items as if a player had digged it with a  specific tool*/
    breakNaturally (tool: ItemStack, triggerEffect: boolean): boolean;
    /**Returns the biome that this block resides in*/
    getBiome (): Biome;
    /**Gets the complete block data for this block*/
    getBlockData (): BlockData;
    /**Returns this block's coordinates packed into a long value.*/
    getBlockKey (): number;
    /**Returns the specified block coordinates packed into a long value*/
    static getBlockKey (x: number, y: number, z: number): number;
    /**Returns the x component from the packed value.*/
    static getBlockKeyX (packed: number): number;
    /**Returns the y component from the packed value.*/
    static getBlockKeyY (packed: number): number;
    /**Returns the z component from the packed value.*/
    static getBlockKeyZ (packed: number): number;
    /**Returns the redstone power being provided to this block*/
    getBlockPower (): number;
    /**Returns the redstone power being provided to this block face*/
    getBlockPower (face: BlockFace): number;
    /**Gets the approximate bounding box for this block.*/
    getBoundingBox (): BoundingBox;
    /**Gets the chunk which contains this block*/
    getChunk (): Chunk;
    /**Returns a list of items which would drop by destroying this block*/
    getDrops (): Collection<ItemStack>;
    /**Returns a list of items which would drop by destroying this block with  a specific tool*/
    getDrops (tool: ItemStack): Collection<ItemStack>;
    /**Returns a list of items which would drop by the entity destroying this  block with a specific tool*/
    getDrops (tool: ItemStack, entity: Entity): Collection<ItemStack>;
    /**Gets the face relation of this block compared to the given block.*/
    getFace (block: Block): BlockFace;
    /**Gets the humidity of the biome of this block*/
    getHumidity (): number;
    /**Get the amount of light at this block from nearby blocks.*/
    getLightFromBlocks (): number;
    /**Get the amount of light at this block from the sky.*/
    getLightFromSky (): number;
    /**Gets the light level between 0-15*/
    getLightLevel (): number;
    /**Gets the Location of the block*/
    getLocation (): Location;
    /**Stores the location of the block in the provided Location object.*/
    getLocation (loc: Location): Location;
    /**Returns the reaction of the block when moved by a piston*/
    getPistonMoveReaction (): PistonMoveReaction;
    /**Gets the block at the given offsets*/
    getRelative (modX: number, modY: number, modZ: number): Block;
    /**Gets the block at the given face*/
    getRelative (face: BlockFace): Block;
    /**Gets the block at the given distance of the given face*/
    getRelative (face: BlockFace, distance: number): Block;
    /**Gets the BlockSoundGroup for this block.*/
    getSoundGroup (): BlockSoundGroup;
    /**Captures the current state of this block.*/
    getState (): BlockState;
    getState (useSnapshot: boolean): BlockState;
    /**Gets the temperature of this block.*/
    getTemperature (): number;
    /**Return the translation key for the Block, so the client can translate it into the active  locale when using a TranslatableComponent.*/
    getTranslationKey (): String;
    /**Gets the type of this block*/
    getType (): Material;
    /**Gets the world which contains this Block*/
    getWorld (): World;
    /**Gets the x-coordinate of this block*/
    getX (): number;
    /**Gets the y-coordinate of this block*/
    getY (): number;
    /**Gets the z-coordinate of this block*/
    getZ (): number;
    /**Returns true if the block face is being indirectly powered by Redstone.*/
    isBlockFaceIndirectlyPowered (face: BlockFace): boolean;
    /**Returns true if the block face is being powered by Redstone.*/
    isBlockFacePowered (face: BlockFace): boolean;
    /**Returns true if the block is being indirectly powered by Redstone.*/
    isBlockIndirectlyPowered (): boolean;
    /**Returns true if the block is being powered by Redstone.*/
    isBlockPowered (): boolean;
    /**Checks if this block is empty.*/
    isEmpty (): boolean;
    /**Checks if this block is liquid.*/
    isLiquid (): boolean;
    /**Checks if this block is passable.*/
    isPassable (): boolean;
    /**Performs a ray trace that checks for collision with this specific block  in its current state using its precise collision shape.*/
    rayTrace (start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    /**Sets the biome that this block resides in*/
    setBiome (bio: Biome): void;
    /**Sets the complete data for this block*/
    setBlockData (data: BlockData): void;
    /**Sets the complete data for this block     Note that applyPhysics = false is not in general safe.*/
    setBlockData (data: BlockData, applyPhysics: boolean): void;
    /**Sets the type of this block*/
    setType (type: Material): void;
    /**Sets the type of this block     Note that applyPhysics = false is not in general safe.*/
    setType (type: Material, applyPhysics: boolean): void
}

/**Called when a block is broken by a player.    If you wish to have the block drop experience, you must set the experience  value above 0. By default, experience will be set in the event if:    The player is not in creative or adventure mode  The player can loot the block (ie: does not destroy it completely, by      using the correct tool)  The player does not have silk touch  The block drops experience in vanilla Minecraft      Note:  Plugins wanting to simulate a traditional block drop should set the block  to air and utilize their own methods for determining what the default drop  for the block being broken is and what to do about it, if anything.    If a Block Break event is cancelled, the block will not break and  experience will not drop.*/
export class BlockBreakEvent extends BlockExpEvent implements Cancellable {
    /**Gets the Player that is breaking the block involved in this event.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Gets whether or not the block will drop items.*/
    isDropItems (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets whether or not the block will drop items as it normally would.*/
    setDropItems (dropItems: boolean): void
}

/**Called when a block is destroyed as a result of being burnt by fire.    If a Block Burn event is cancelled, the block will not be destroyed as a  result of being burnt by fire.*/
export class BlockBurnEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the block which ignited this block.*/
    getIgnitingBlock (): Block;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when we try to place a block, to see if we can build it here or not.    Note:    The Block returned by getBlock() is the block we are trying to place      on, not the block we are trying to place.  If you want to figure out what is being placed, use getMaterial() instead.  */
export class BlockCanBuildEvent extends BlockEvent {
    /**Gets the BlockData that we are trying to place.*/
    getBlockData (): BlockData;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Material that we are trying to place.*/
    getMaterial (): Material;
    /**Gets the player who placed the block involved in this event.*/
    getPlayer (): Player;
    /**Gets whether or not the block can be built here.*/
    isBuildable (): boolean;
    /**Sets whether the block can be built here or not.*/
    setBuildable (cancel: boolean): void
}

/**A delegate for handling block changes. This serves as a direct interface  between generation algorithms in the server implementation and utilizing  code.*/
export interface BlockChangeDelegate {
    /**Get the block data at the location.*/
    getBlockData (x: number, y: number, z: number): BlockData;
    /**Gets the height of the world.*/
    getHeight (): number;
    /**Checks if the specified block is empty (air) or not.*/
    isEmpty (x: number, y: number, z: number): boolean;
    /**Set a block data at the specified coordinates.*/
    setBlockData (x: number, y: number, z: number, blockData: BlockData): boolean
}

export interface BlockCommandSender extends CommandSender {
    /**Returns the block this command sender belongs to*/
    getBlock (): Block
}

/**Called when an ItemStack is successfully cooked in a block.*/
export class BlockCookEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the resultant ItemStack for this event*/
    getResult (): ItemStack;
    /**Gets the smelted ItemStack for this event*/
    getSource (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the resultant ItemStack for this event*/
    setResult (result: ItemStack): void
}

/**Called when a block is damaged by a player.    If a Block Damage event is cancelled, the block will not be damaged.*/
export class BlockDamageEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets if the block is set to instantly break when damaged by the player.*/
    getInstaBreak (): boolean;
    /**Gets the ItemStack for the item currently in the player's hand.*/
    getItemInHand (): ItemStack;
    /**Gets the player damaging the block involved in this event.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets if the block should instantly break when damaged by the player.*/
    setInstaBreak (bool: boolean): void
}

export interface BlockData extends Cloneable {
    /**Returns a copy of this BlockData.*/
    clone (): BlockData;
    /**Gets a string, which when passed into a method such as  Server.createBlockData(java.lang.String) will unambiguously  recreate this instance.*/
    getAsString (): String;
    /**Gets a string, which when passed into a method such as  Server.createBlockData(java.lang.String) will recreate this or a  similar instance where unspecified states (if any) may be optionally  omitted.*/
    getAsString (hideUnspecified: boolean): String;
    /**Get the Material represented by this block data.*/
    getMaterial (): Material;
    /**Checks if the specified BlockData matches this block data.*/
    matches (data: BlockData): boolean;
    /**Merges all explicitly set states from the given data with this BlockData.*/
    merge (data: BlockData): BlockData
}

export interface BlockDataMeta extends ItemMeta {
    /**Returns the currently attached block data for this item or creates a new  one if one doesn't exist.*/
    getBlockData (material: Material): BlockData;
    /**Returns whether the item has block data currently attached to it.*/
    hasBlockData (): boolean;
    /**Attaches a copy of the passed block data to the item.*/
    setBlockData (blockData: BlockData): void
}

/**Fired anytime the server intends to 'destroy' a block through some triggering reason.  This does not fire anytime a block is set to air, but only with more direct triggers such  as physics updates, pistons, Entities changing blocks, commands set to "Destroy".   This event is associated with the game playing a sound effect at the block in question, when  something can be described as "intend to destroy what is there",   Events such as leaves decaying, pistons retracting (where the block is moving), does NOT fire this event.*/
export class BlockDestroyEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getNewState (): BlockData;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    playEffect (): boolean;
    /**If the event is cancelled, the block will remain in its previous state.*/
    setCancelled (cancel: boolean): void;
    setPlayEffect (playEffect: boolean): void;
    willDrop (): boolean
}

/**Called when an equippable item is dispensed from a block and equipped on a  nearby entity.    If a Block Dispense Armor event is cancelled, the equipment will not be  equipped on the target entity.*/
export class BlockDispenseArmorEvent extends BlockDispenseEvent {
    /**Get the living entity on which the armor was dispensed.*/
    getTargetEntity (): LivingEntity
}

/**Called when an item is dispensed from a block.    If a Block Dispense event is cancelled, the block will not dispense the  item.*/
export class BlockDispenseEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item that is being dispensed.*/
    getItem (): ItemStack;
    /**Gets the velocity.*/
    getVelocity (): Vector;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the item being dispensed.*/
    setItem (item: ItemStack): void;
    /**Sets the velocity of the item being dispensed.*/
    setVelocity (vel: Vector): void
}

/**Called if a block broken by a player drops an item.   If the block break is cancelled, this event won't be called.   If isDropItems in BlockBreakEvent is set to false, this event won't be  called.   This event will also be called if the player breaks a multi block structure,  for example a torch on top of a stone. Both items will have an event call.   The Block is already broken as this event is called, so #getBlock() will be  AIR in most cases. Use #getBlockState() for more Information about the broken  block.*/
export class BlockDropItemEvent extends BlockEvent implements Cancellable {
    /**Gets the BlockState of the block involved in this event before it was  broken.*/
    getBlockState (): BlockState;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets list of the Item drops caused by the block break.*/
    getItems (): List<Item>;
    /**Gets the Player that is breaking the block involved in this event.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a block related event.*/
export class BlockEvent extends Event {
    /**Gets the block involved in this event.*/
    getBlock (): Block
}

/**An event that's called when a block yields experience.*/
export class BlockExpEvent extends BlockEvent {
    /**Get the experience dropped by the block after the event has processed*/
    getExpToDrop (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Set the amount of experience dropped by the block after the event has  processed*/
    setExpToDrop (exp: number): void
}

/**Called when a block explodes*/
export class BlockExplodeEvent extends BlockEvent implements Cancellable {
    /**Returns the list of blocks that would have been removed or were removed  from the explosion event.*/
    blockList (): List<Block>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the percentage of blocks to drop from this explosion*/
    getYield (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the percentage of blocks to drop from this explosion*/
    setYield (yield: number): void
}

/**Represents the face of a block*/
export class BlockFace extends Enum<BlockFace> {
    static DOWN: BlockFace;
    static EAST: BlockFace;
    static EAST_NORTH_EAST: BlockFace;
    static EAST_SOUTH_EAST: BlockFace;
    static NORTH: BlockFace;
    static NORTH_EAST: BlockFace;
    static NORTH_NORTH_EAST: BlockFace;
    static NORTH_NORTH_WEST: BlockFace;
    static NORTH_WEST: BlockFace;
    static SELF: BlockFace;
    static SOUTH: BlockFace;
    static SOUTH_EAST: BlockFace;
    static SOUTH_SOUTH_EAST: BlockFace;
    static SOUTH_SOUTH_WEST: BlockFace;
    static SOUTH_WEST: BlockFace;
    static UP: BlockFace;
    static WEST: BlockFace;
    static WEST_NORTH_WEST: BlockFace;
    static WEST_SOUTH_WEST: BlockFace
}

/**Called when a block fades, melts or disappears based on world conditions    Examples:    Snow melting due to being near a light source.  Ice melting due to being near a light source.  Fire burning out after time, without destroying fuel block.  Coral fading to dead coral due to lack of water  Turtle Egg bursting when a turtle hatches      If a Block Fade event is cancelled, the block will not fade, melt or  disappear.*/
export class BlockFadeEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the state of the block that will be fading, melting or  disappearing.*/
    getNewState (): BlockState;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called with the block changes resulting from a player fertilizing a given  block with bonemeal. Will be called after the applicable  StructureGrowEvent.*/
export class BlockFertilizeEvent extends BlockEvent implements Cancellable {
    /**Gets a list of all blocks changed by the fertilization.*/
    getBlocks (): List<BlockState>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the player that triggered the fertilization.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Called when a block is formed or spreads based on world conditions.    Use BlockSpreadEvent to catch blocks that actually spread and don't  just "randomly" form.    Examples:    Snow forming due to a snow storm.  Ice forming in a snowy Biome like Taiga or Tundra.   Obsidian / Cobblestone forming due to contact with water.   Concrete forming due to mixing of concrete powder and water.      If a Block Form event is cancelled, the block will not be formed.*/
export class BlockFormEvent extends BlockGrowEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Represents events with a source block and a destination block, currently  only applies to liquid (lava and water) and teleporting dragon eggs.    If a Block From To event is cancelled, the block will not move (the liquid  will not flow).*/
export class BlockFromToEvent extends BlockEvent implements Cancellable {
    /**Gets the BlockFace that the block is moving to.*/
    getFace (): BlockFace;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Convenience method for getting the faced Block.*/
    getToBlock (): Block;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a block grows naturally in the world.    Examples:    Wheat  Sugar Cane  Cactus  Watermelon  Pumpkin  Turtle Egg      If a Block Grow event is cancelled, the block will not grow.*/
export class BlockGrowEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the state of the block where it will form or spread to.*/
    getNewState (): BlockState;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a block is ignited. If you want to catch when a Player places  fire, you need to use BlockPlaceEvent.    If a Block Ignite event is cancelled, the block will not be ignited.*/
export class BlockIgniteEvent extends BlockEvent implements Cancellable {
    /**Gets the cause of block ignite.*/
    getCause (): BlockIgniteEvent$IgniteCause;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the block which ignited this block*/
    getIgnitingBlock (): Block;
    /**Gets the entity who ignited this block*/
    getIgnitingEntity (): Entity;
    /**Gets the player who ignited this block*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**An enum to specify the cause of the ignite*/
export class BlockIgniteEvent$IgniteCause extends Enum<BlockIgniteEvent$IgniteCause> {
    /**Block ignition caused by a flaming arrow.*/
    static ARROW: BlockIgniteEvent$IgniteCause;
    /**Block ignition caused by an Ender Crystal.*/
    static ENDER_CRYSTAL: BlockIgniteEvent$IgniteCause;
    /**Block ignition caused by explosion.*/
    static EXPLOSION: BlockIgniteEvent$IgniteCause;
    /**Block ignition caused by an entity using a fireball.*/
    static FIREBALL: BlockIgniteEvent$IgniteCause;
    /**Block ignition caused by a player or dispenser using flint-and-steel.*/
    static FLINT_AND_STEEL: BlockIgniteEvent$IgniteCause;
    /**Block ignition caused by lava.*/
    static LAVA: BlockIgniteEvent$IgniteCause;
    /**Block ignition caused by lightning.*/
    static LIGHTNING: BlockIgniteEvent$IgniteCause;
    /**Block ignition caused by dynamic spreading of fire.*/
    static SPREAD: BlockIgniteEvent$IgniteCause
}

/**Represents a block inventory holder - either a BlockState, or a regular  Block.*/
export interface BlockInventoryHolder extends InventoryHolder {
    /**Gets the block associated with this holder.*/
    getBlock (): Block
}

/**This class performs ray tracing and iterates along blocks on a line*/
export class BlockIterator extends Object implements Iterator<Block> {
    /**Returns true if the iteration has more elements*/
    hasNext (): boolean;
    /**Returns the next Block in the trace*/
    next (): Block;
    remove (): void
}

/**Fired when a single block placement action of a player triggers the  creation of multiple blocks(e.g. placing a bed block). The block returned  by BlockPlaceEvent.getBlockPlaced() and its related methods is the block where  the placed block would exist if the placement only affected a single  block.*/
export class BlockMultiPlaceEvent extends BlockPlaceEvent {
    /**Gets a list of blockstates for all blocks which were replaced by the  placement of the new blocks.*/
    getReplacedBlockStates (): List<BlockState>
}

/**Thrown when a block physics check is called.    This event is a high frequency event, it may be called thousands of times per  a second on a busy server. Plugins are advised to listen to the event with  caution and only perform lightweight checks when using it.    In addition to this, cancelling the event is liable to leave the world in an  inconsistent state. For example if you use the event to leave a block  floating in mid air when that block has a requirement to be attached to  something, there is no guarantee that the floating block will persist across  server restarts or map upgrades.    Plugins should also note that where possible this event may only called for  the "root" block of physics updates in order to limit event spam. Physics  updates that cause other blocks to change their state may not result in an  event for each of those blocks (usually adjacent). If you are concerned about  monitoring these changes then you should check adjacent blocks yourself.*/
export class BlockPhysicsEvent extends BlockEvent implements Cancellable {
    /**Gets the type of block that changed, causing this event*/
    getChangedType (): Material;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the source block that triggered this event.*/
    getSourceBlock (): Block;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a piston block is triggered*/
export class BlockPistonEvent extends BlockEvent implements Cancellable {
    /**Return the direction in which the piston will operate.*/
    getDirection (): BlockFace;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Returns true if the Piston in the event is sticky.*/
    isSticky (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Called when a piston extends*/
export class BlockPistonExtendEvent extends BlockPistonEvent {
    /**Get an immutable list of the blocks which will be moved by the  extending.*/
    getBlocks (): List<Block>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when a piston retracts*/
export class BlockPistonRetractEvent extends BlockPistonEvent {
    /**Get an immutable list of the blocks which will be moved by the  extending.*/
    getBlocks (): List<Block>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when a block is placed by a player.    If a Block Place event is cancelled, the block will not be placed.*/
export class BlockPlaceEvent extends BlockEvent implements Cancellable {
    /**Gets the value whether the player would be allowed to build here.*/
    canBuild (): boolean;
    /**Gets the block that this block was placed against*/
    getBlockAgainst (): Block;
    /**Clarity method for getting the placed block.*/
    getBlockPlaced (): Block;
    /**Gets the BlockState for the block which was replaced.*/
    getBlockReplacedState (): BlockState;
    /**Gets the hand which placed the block*/
    getHand (): EquipmentSlot;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item in the player's hand when they placed the block.*/
    getItemInHand (): ItemStack;
    /**Gets the player who placed the block involved in this event.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the canBuild state of this event.*/
    setBuild (canBuild: boolean): void;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**A block populator is responsible for generating a small area of blocks.    For example, generating glowstone inside the nether or generating dungeons  full of treasure*/
export class BlockPopulator extends Object {
    /**Populates an area of blocks at or around the given chunk.*/
    populate (world: World, random: Random, source: Chunk): void
}

export interface BlockProjectileSource extends ProjectileSource {
    /**Gets the block this projectile source belongs to.*/
    getBlock (): Block
}

/**Called when a redstone current changes*/
export class BlockRedstoneEvent extends BlockEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new current of this block*/
    getNewCurrent (): number;
    /**Gets the old current of this block*/
    getOldCurrent (): number;
    /**Sets the new current of this block*/
    setNewCurrent (newCurrent: number): void
}

/**Event fired when a dispenser shears a nearby sheep.*/
export class BlockShearEntityEvent extends BlockEvent implements Cancellable {
    /**Gets the entity that was sheared.*/
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item used to shear this sheep.*/
    getTool (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Represents the sounds that a Block makes in certain situations    The sound group includes break, step, place, hit, and fall sounds.*/
export interface BlockSoundGroup {
    /**Gets the sound that plays when breaking this block*/
    getBreakSound (): Sound;
    /**Gets the sound that plays when this block falls*/
    getFallSound (): Sound;
    /**Gets the sound that plays when hitting this block*/
    getHitSound (): Sound;
    /**Gets the sound that plays when placing this block*/
    getPlaceSound (): Sound;
    /**Gets the sound that plays when stepping on this block*/
    getStepSound (): Sound
}

/**Called when a block spreads based on world conditions.    Use BlockFormEvent to catch blocks that "randomly" form instead of  actually spread.    Examples:    Mushrooms spreading.  Fire spreading.      If a Block Spread event is cancelled, the block will not spread.*/
export class BlockSpreadEvent extends BlockFormEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the source block involved in this event.*/
    getSource (): Block
}

/**Represents a captured state of a block, which will not change  automatically.    Unlike Block, which only one object can exist per coordinate, BlockState  can exist multiple times for any given Block. Note that another plugin may  change the state of the block and you will not know, or they may change the  block to another type entirely, causing your BlockState to become invalid.*/
export interface BlockState extends Metadatable {
    /**Gets the block represented by this block state.*/
    getBlock (): Block;
    /**Gets the data for this block state.*/
    getBlockData (): BlockData;
    /**Gets the chunk which contains the block represented by this block state.*/
    getChunk (): Chunk;
    /**Gets the metadata for this block state.*/
    getData (): MaterialData;
    /**Gets the current light level of the block represented by this block state.*/
    getLightLevel (): number;
    /**Gets the location of this block state.*/
    getLocation (): Location;
    /**Stores the location of this block state in the provided Location object.*/
    getLocation (loc: Location): Location;
    /**Gets the type of this block state.*/
    getType (): Material;
    /**Gets the world which contains the block represented by this block state.*/
    getWorld (): World;
    /**Gets the x-coordinate of this block state.*/
    getX (): number;
    /**Gets the y-coordinate of this block state.*/
    getY (): number;
    /**Gets the z-coordinate of this block state.*/
    getZ (): number;
    /**Returns whether this state is placed in the world.*/
    isPlaced (): boolean;
    /**Sets the data for this block state.*/
    setBlockData (data: BlockData): void;
    /**Sets the metadata for this block state.*/
    setData (data: MaterialData): void;
    /**Sets the type of this block state.*/
    setType (type: Material): void;
    /**Attempts to update the block represented by this state, setting it to  the new values as defined by this state.*/
    update (): boolean;
    /**Attempts to update the block represented by this state, setting it to  the new values as defined by this state.*/
    update (force: boolean): boolean;
    /**Attempts to update the block represented by this state, setting it to  the new values as defined by this state.*/
    update (force: boolean, applyPhysics: boolean): boolean
}

export interface BlockStateMeta extends ItemMeta {
    /**Returns the currently attached block state for this  item or creates a new one if one doesn't exist.*/
    getBlockState (): BlockState;
    /**Returns whether the item has a block state currently  attached to it.*/
    hasBlockState (): boolean;
    /**Attaches a copy of the passed block state to the item.*/
    setBlockState (blockState: BlockState): void
}

/**A vector with a hash function that floors the X, Y, Z components, a la  BlockVector in WorldEdit. BlockVectors can be used in hash sets and  hash maps. Be aware that BlockVectors are mutable, but it is important  that BlockVectors are never changed once put into a hash set or hash map.*/
export class BlockVector extends Vector {
    /**Get a new block vector.*/
    clone (): BlockVector;
    static deserialize (args: Map<String,Object>): BlockVector;
    /**Checks if another object is equivalent.*/
    equals (obj: Object): boolean;
    /**Returns a hash code for this vector.*/
    hashCode (): number
}

/**Represents a boat entity.*/
export interface Boat extends Vehicle {
    /**Gets the wood type of the boat.*/
    getWoodType (): TreeSpecies;
    /**Sets the wood type of the boat.*/
    setWoodType (species: TreeSpecies): void
}

/**Represents a book (Material.WRITABLE_BOOK or Material.WRITTEN_BOOK) that can have a title, an author, and pages.*/
export interface BookMeta extends ItemMeta {
    /**Adds new pages to the end of the book.*/
    addPage (...pages: String[]): void;
    clone (): BookMeta;
    /**Gets the author of the book.*/
    getAuthor (): String;
    /**Gets the generation of the book.*/
    getGeneration (): BookMeta$Generation;
    /**Gets the specified page in the book.*/
    getPage (page: number): String;
    /**Gets the number of pages in the book.*/
    getPageCount (): number;
    /**Gets all the pages in the book.*/
    getPages (): List<String>;
    /**Gets the title of the book.*/
    getTitle (): String;
    /**Checks for the existence of an author in the book.*/
    hasAuthor (): boolean;
    /**Checks for the existence of generation level in the book.*/
    hasGeneration (): boolean;
    /**Checks for the existence of pages in the book.*/
    hasPages (): boolean;
    /**Checks for the existence of a title in the book.*/
    hasTitle (): boolean;
    /**Sets the author of the book.*/
    setAuthor (author: String): void;
    /**Sets the generation of the book.*/
    setGeneration (generation: BookMeta$Generation): void;
    /**Sets the specified page in the book.*/
    setPage (page: number, data: String): void;
    /**Clears the existing book pages, and sets the book to use the provided  pages.*/
    setPages (...pages: String[]): void;
    /**Clears the existing book pages, and sets the book to use the provided  pages.*/
    setPages (pages: List<String>): void;
    /**Sets the title of the book.*/
    setTitle (title: String): boolean;
    spigot (): BookMeta$Spigot
}

/**Represents the generation (or level of copying) of a written book*/
export class BookMeta$Generation extends Enum<BookMeta$Generation> {
    /**Book that was copied from a copy of an original.*/
    static COPY_OF_COPY: BookMeta$Generation;
    /**Book that was copied from an original.*/
    static COPY_OF_ORIGINAL: BookMeta$Generation;
    /**Book written into a book-and-quill.*/
    static ORIGINAL: BookMeta$Generation;
    /**Unused; unobtainable by players.*/
    static TATTERED: BookMeta$Generation
}

export class BookMeta$Spigot extends Object {
    /**Adds new pages to the end of the book.*/
    addPage (...pages: BaseComponent[][]): void;
    /**Gets the specified page in the book.*/
    getPage (page: number): BaseComponent[];
    /**Gets all the pages in the book.*/
    getPages (): List<BaseComponent[]>;
    /**Sets the specified page in the book.*/
    setPage (page: number, ...data: BaseComponent[]): void;
    /**Clears the existing book pages, and sets the book to use the provided  pages.*/
    setPages (pages: List<BaseComponent[]>): void;
    /**Clears the existing book pages, and sets the book to use the provided  pages.*/
    setPages (...pages: BaseComponent[][]): void
}

/**BooleanPrompt is the base class for any prompt that requires a boolean  response from the user.*/
export class BooleanPrompt extends ValidatingPrompt {
    /**Override this method to perform some action with the user's boolean  response.*/
    acceptValidatedInput (context: ConversationContext, input: boolean): Prompt;
    /**Override this method to accept and processes the validated input from  the user.*/
    acceptValidatedInput (context: ConversationContext, input: String): Prompt;
    /**Override this method to check the validity of the player's input.*/
    isInputValid (context: ConversationContext, input: String): boolean
}

/**Represents the Boss Entity.*/
export interface Boss extends Entity {
    /**Returns the BossBar of the Boss*/
    getBossBar (): BossBar
}

export interface BossBar {
    /**Add an optional flag to this boss bar*/
    addFlag (flag: BarFlag): void;
    /**Adds the player to this boss bar causing it to display on their screen.*/
    addPlayer (player: Player): void;
    /**Returns the color of this boss bar*/
    getColor (): BarColor;
    /**Returns all players viewing this boss bar*/
    getPlayers (): List<Player>;
    /**Returns the progress of the bar between 0.0 and 1.0*/
    getProgress (): number;
    /**Returns the style of this boss bar*/
    getStyle (): BarStyle;
    /**Returns the title of this boss bar*/
    getTitle (): String;
    /**Returns whether this boss bar as the passed flag set*/
    hasFlag (flag: BarFlag): boolean;
    /**Return if the boss bar is displayed to attached players.*/
    isVisible (): boolean;
    /**Removes all players from this boss bar*/
    removeAll (): void;
    /**Remove an existing flag on this boss bar*/
    removeFlag (flag: BarFlag): void;
    /**Removes the player from this boss bar causing it to be removed from their  screen.*/
    removePlayer (player: Player): void;
    /**Sets the color of this boss bar.*/
    setColor (color: BarColor): void;
    /**Sets the progress of the bar.*/
    setProgress (progress: number): void;
    /**Sets the bar style of this boss bar*/
    setStyle (style: BarStyle): void;
    /**Sets the title of this boss bar*/
    setTitle (title: String): void;
    /**Set if the boss bar is displayed to attached players.*/
    setVisible (visible: boolean): void
}

/**A mutable axis aligned bounding box (AABB).    This basically represents a rectangular box (specified by minimum and maximum  corners) that can for example be used to describe the position and extents of  an object (such as an entity, block, or rectangular region) in 3D space. Its  edges and faces are parallel to the axes of the cartesian coordinate system.    The bounding box may be degenerate (one or more sides having the length 0).    Because bounding boxes are mutable, storing them long term may be dangerous  if they get modified later. If you want to keep around a bounding box, it may  be wise to call clone() in order to get a copy.*/
export class BoundingBox extends Object implements Cloneable, ConfigurationSerializable {
    /**Creates a copy of this bounding box.*/
    clone (): BoundingBox;
    /**Checks if this bounding box contains the specified position.*/
    contains (x: number, y: number, z: number): boolean;
    /**Checks if this bounding box fully contains the given bounding box.*/
    contains (other: BoundingBox): boolean;
    /**Checks if this bounding box contains the specified position.*/
    contains (position: Vector): boolean;
    /**Checks if this bounding box fully contains the bounding box that is  defined by the given corners.*/
    contains (min: Vector, max: Vector): boolean;
    /**Copies another bounding box.*/
    copy (other: BoundingBox): BoundingBox;
    static deserialize (args: Map<String,Object>): BoundingBox;
    equals (obj: Object): boolean;
    /**Expands this bounding box uniformly by the given value in all directions.*/
    expand (expansion: number): BoundingBox;
    /**Expands this bounding box uniformly by the given values in both positive  and negative directions.*/
    expand (x: number, y: number, z: number): BoundingBox;
    /**Expands this bounding box in the specified direction.*/
    expand (dirX: number, dirY: number, dirZ: number, expansion: number): BoundingBox;
    /**Expands this bounding box by the given values in the corresponding  directions.*/
    expand (negativeX: number, negativeY: number, negativeZ: number, positiveX: number, positiveY: number, positiveZ: number): BoundingBox;
    /**Expands this bounding box in the direction specified by the given block  face.*/
    expand (blockFace: BlockFace, expansion: number): BoundingBox;
    /**Expands this bounding box uniformly by the given values in both positive  and negative directions.*/
    expand (expansion: Vector): BoundingBox;
    /**Expands this bounding box in the specified direction.*/
    expand (direction: Vector, expansion: number): BoundingBox;
    /**Expands this bounding box in the specified direction.*/
    expandDirectional (dirX: number, dirY: number, dirZ: number): BoundingBox;
    /**Expands this bounding box in the specified direction.*/
    expandDirectional (direction: Vector): BoundingBox;
    /**Gets the center of the bounding box.*/
    getCenter (): Vector;
    /**Gets the x coordinate of the center of the bounding box.*/
    getCenterX (): number;
    /**Gets the y coordinate of the center of the bounding box.*/
    getCenterY (): number;
    /**Gets the z coordinate of the center of the bounding box.*/
    getCenterZ (): number;
    /**Gets the height of the bounding box.*/
    getHeight (): number;
    /**Gets the maximum corner as vector.*/
    getMax (): Vector;
    /**Gets the maximum x value.*/
    getMaxX (): number;
    /**Gets the maximum y value.*/
    getMaxY (): number;
    /**Gets the maximum z value.*/
    getMaxZ (): number;
    /**Gets the minimum corner as vector.*/
    getMin (): Vector;
    /**Gets the minimum x value.*/
    getMinX (): number;
    /**Gets the minimum y value.*/
    getMinY (): number;
    /**Gets the minimum z value.*/
    getMinZ (): number;
    /**Gets the volume of the bounding box.*/
    getVolume (): number;
    /**Gets the width of the bounding box in the x direction.*/
    getWidthX (): number;
    /**Gets the width of the bounding box in the z direction.*/
    getWidthZ (): number;
    hashCode (): number;
    /**Resizes this bounding box to represent the intersection of this and the  given bounding box.*/
    intersection (other: BoundingBox): BoundingBox;
    /**Creates a new 1x1x1 sized bounding box containing the given block.*/
    static of (block: Block): BoundingBox;
    /**Creates a new bounding box using the coordinates of the given blocks as  corners.*/
    static of (corner1: Block, corner2: Block): BoundingBox;
    /**Creates a new bounding box using the given center and extents.*/
    static of (center: Location, x: number, y: number, z: number): BoundingBox;
    /**Creates a new bounding box using the coordinates of the given locations  as corners.*/
    static of (corner1: Location, corner2: Location): BoundingBox;
    /**Creates a new bounding box using the given center and extents.*/
    static of (center: Vector, x: number, y: number, z: number): BoundingBox;
    /**Creates a new bounding box using the coordinates of the given vectors as  corners.*/
    static of (corner1: Vector, corner2: Vector): BoundingBox;
    /**Checks if this bounding box overlaps with the given bounding box.*/
    overlaps (other: BoundingBox): boolean;
    /**Checks if this bounding box overlaps with the bounding box that is  defined by the given corners.*/
    overlaps (min: Vector, max: Vector): boolean;
    /**Calculates the intersection of this bounding box with the specified line  segment.*/
    rayTrace (start: Vector, direction: Vector, maxDistance: number): RayTraceResult;
    /**Resizes this bounding box.*/
    resize (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): BoundingBox;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    /**Shifts this bounding box by the given amounts.*/
    shift (shiftX: number, shiftY: number, shiftZ: number): BoundingBox;
    /**Shifts this bounding box by the given amounts.*/
    shift (shift: Location): BoundingBox;
    /**Shifts this bounding box by the given amounts.*/
    shift (shift: Vector): BoundingBox;
    toString (): String;
    /**Expands this bounding box to contain (or border) the specified position.*/
    union (posX: number, posY: number, posZ: number): BoundingBox;
    /**Expands this bounding box to contain (or border) the specified position.*/
    union (position: Location): BoundingBox;
    /**Expands this bounding box to contain both this and the given bounding  box.*/
    union (other: BoundingBox): BoundingBox;
    /**Expands this bounding box to contain (or border) the specified position.*/
    union (position: Vector): BoundingBox
}

/**Represents an entity that can age and breed.*/
export interface Breedable extends Ageable {
    /**Return the ability to breed of the animal.*/
    canBreed (): boolean;
    /**Gets the current agelock.*/
    getAgeLock (): boolean;
    /**Lock the age of the animal, setting this will prevent the animal from  maturing or getting ready for mating.*/
    setAgeLock (lock: boolean): void;
    /**Set breedability of the animal, if the animal is a baby and set to  breed it will instantly grow up.*/
    setBreed (breed: boolean): void
}

/**Interface to the inventory of a Brewing Stand.*/
export interface BrewerInventory extends Inventory {
    /**Get the current fuel for brewing.*/
    getFuel (): ItemStack;
    /**Gets the block or entity belonging to the open inventory*/
    getHolder (): BrewingStand;
    /**Get the current ingredient for brewing.*/
    getIngredient (): ItemStack;
    /**Set the current fuel for brewing.*/
    setFuel (fuel: ItemStack): void;
    /**Set the current ingredient for brewing.*/
    setIngredient (ingredient: ItemStack): void
}

/**Called when the brewing of the contents inside the Brewing Stand is  complete.*/
export class BrewEvent extends BlockEvent implements Cancellable {
    /**Gets the contents of the Brewing Stand.*/
    getContents (): BrewerInventory;
    /**Gets the remaining fuel level.*/
    getFuelLevel (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a captured state of a brewing stand.*/
export interface BrewingStand extends Container {
    /**How much time is left in the brewing cycle.*/
    getBrewingTime (): number;
    /**Get the level of current fuel for brewing.*/
    getFuelLevel (): number;
    /**Gets the inventory of the block represented by this block state.*/
    getInventory (): BrewerInventory;
    /**Gets the captured inventory snapshot of this container.*/
    getSnapshotInventory (): BrewerInventory;
    /**Set the time left before brewing completes.*/
    setBrewingTime (brewTime: number): void;
    /**Set the level of current fuel for brewing.*/
    setFuelLevel (level: number): void
}

/**Interface to the 'has_bottle_0', 'has_bottle_1', 'has_bottle_2' flags on a  brewing stand which indicate which bottles are rendered on the outside.    Stand may have 0, 1... getMaximumBottles()-1 bottles.*/
export interface BrewingStand extends BlockData {
    /**Get the indexes of all the bottles present on this block.*/
    getBottles (): Set<Integer>;
    /**Get the maximum amount of bottles present on this stand.*/
    getMaximumBottles (): number;
    /**Checks if the stand has the following bottle*/
    hasBottle (bottle: number): boolean;
    /**Set whether the stand has this bottle present.*/
    setBottle (bottle: number, has: boolean): void
}

/**Called when an ItemStack is about to increase the fuel level of a brewing  stand.*/
export class BrewingStandFuelEvent extends BlockEvent implements Cancellable {
    /**Gets the ItemStack of the fuel before the amount was subtracted.*/
    getFuel (): ItemStack;
    /**Gets the fuel power for this fuel.*/
    getFuelPower (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Gets whether the brewing stand's fuel will be reduced / consumed or not.*/
    isConsuming (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets whether the brewing stand's fuel will be reduced / consumed or not.*/
    setConsuming (consuming: boolean): void;
    /**Sets the fuel power for this fuel.*/
    setFuelPower (fuelPower: number): void
}

/**Event triggered for server broadcast messages such as from  Server.broadcast(String, String).   This event behaves similarly to AsyncPlayerChatEvent in that it  should be async if fired from an async thread. Please see that event for  further information.*/
export class BroadcastMessageEvent extends ServerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the message to broadcast.*/
    getMessage (): String;
    /**Gets a set of recipients that this chat message will be displayed to.*/
    getRecipients (): Set<CommandSender>;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void;
    /**Set the message to broadcast.*/
    setMessage (message: String): void
}

export class BroadcastPermissions extends Object {
    static registerPermissions (parent: Permission): Permission
}

/**'drag' indicates whether a force will be applied on entities moving through  this block.*/
export interface BubbleColumn extends BlockData {
    /**Gets the value of the 'drag' property.*/
    isDrag (): boolean;
    /**Sets the value of the 'drag' property.*/
    setDrag (drag: boolean): void
}

export class BufferedCommandSender extends Object implements MessageCommandSender {
    getBuffer (): String;
    reset (): void;
    /**Sends this sender a message*/
    sendMessage (message: String): void
}

/**Represents the Bukkit core, for version and Server singleton handling*/
export class Bukkit extends Object {
    /**Adds a recipe to the crafting manager.*/
    static addRecipe (recipe: Recipe): boolean;
    /**Get an iterator through all advancements.*/
    static advancementIterator (): Iterator<Advancement>;
    /**Bans the specified address from the server.*/
    static banIP (address: String): void;
    /**Broadcasts the specified message to every user with the given  permission name.*/
    static broadcast (message: String, permission: String): number;
    /**Sends the component to all online players.*/
    static broadcast (component: BaseComponent): void;
    /**Sends an array of components as a single message to all online players.*/
    static broadcast (...components: BaseComponent[]): void;
    /**Broadcast a message to all players.*/
    static broadcastMessage (message: String): number;
    /**Clears the list of crafting recipes.*/
    static clearRecipes (): void;
    /**Creates a new BlockData instance with material and properties  parsed from provided data.*/
    static createBlockData (data: String): BlockData;
    /**Creates a new BlockData instance for the specified Material, with  all properties initialized to unspecified defaults.*/
    static createBlockData (material: Material): BlockData;
    /**Creates a new BlockData instance for the specified Material, with  all properties initialized to unspecified defaults, except for those  provided in data.*/
    static createBlockData (material: Material, data: String): BlockData;
    /**Creates a new BlockData instance for the specified Material, with  all properties initialized to unspecified defaults.*/
    static createBlockData (material: Material, consumer: Consumer<BlockData>): BlockData;
    /**Creates a boss bar instance to display to players.*/
    static createBossBar (title: String, color: BarColor, style: BarStyle, ...flags: BarFlag[]): BossBar;
    /**Creates a boss bar instance to display to players.*/
    static createBossBar (key: NamespacedKey, title: String, color: BarColor, style: BarStyle, ...flags: BarFlag[]): KeyedBossBar;
    /**Create a ChunkData for use in a generator.*/
    static createChunkData (world: World): ChunkGenerator$ChunkData;
    /**Create a new explorer map targeting the closest nearby structure of a  given StructureType.*/
    static createExplorerMap (world: World, location: Location, structureType: StructureType): ItemStack;
    /**Create a new explorer map targeting the closest nearby structure of a  given StructureType.*/
    static createExplorerMap (world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
    /**Creates an empty inventory of type InventoryType.CHEST with the  specified size.*/
    static createInventory (owner: InventoryHolder, size: number): Inventory;
    /**Creates an empty inventory of type InventoryType.CHEST with the  specified size and title.*/
    static createInventory (owner: InventoryHolder, size: number, title: String): Inventory;
    /**Creates an empty inventory with the specified type.*/
    static createInventory (owner: InventoryHolder, type: InventoryType): Inventory;
    /**Creates an empty inventory with the specified type and title.*/
    static createInventory (owner: InventoryHolder, type: InventoryType, title: String): Inventory;
    /**Create a new map with an automatically assigned ID.*/
    static createMap (world: World): MapView;
    /**Creates an empty merchant.*/
    static createMerchant (title: String): Merchant;
    /**Creates a PlayerProfile for the specified name, with UUID as null*/
    static createProfile (name: String): PlayerProfile;
    /**Creates a PlayerProfile for the specified uuid, with name as null*/
    static createProfile (uuid: UUID): PlayerProfile;
    /**Creates a PlayerProfile for the specified name/uuid   Both UUID and Name can not be null at same time.*/
    static createProfile (uuid: UUID, name: String): PlayerProfile;
    /**Create a ChunkData for use in a generator, that is populated by the vanilla generator for that world*/
    static createVanillaChunkData (world: World, x: number, z: number): ChunkGenerator$ChunkData;
    /**Creates or loads a world with the given name using the specified  options.*/
    static createWorld (creator: WorldCreator): World;
    /**Dispatches a command on this server, and executes it if found.*/
    static dispatchCommand (sender: CommandSender, commandLine: String): boolean;
    /**Get the advancement specified by this key.*/
    static getAdvancement (key: NamespacedKey): Advancement;
    /**Gets whether this server allows the End or not.*/
    static getAllowEnd (): boolean;
    /**Gets whether this server allows flying or not.*/
    static getAllowFlight (): boolean;
    /**Gets whether this server allows the Nether or not.*/
    static getAllowNether (): boolean;
    /**Gets user-specified limit for number of ambient mobs that can spawn in  a chunk.*/
    static getAmbientSpawnLimit (): number;
    /**Gets user-specified limit for number of animals that can spawn in a  chunk.*/
    static getAnimalSpawnLimit (): number;
    /**Get the average tick time (in millis)*/
    static getAverageTickTime (): number;
    /**Gets a ban list for the supplied type.*/
    static getBanList (type: BanList$Type): BanList;
    /**Gets a set containing all banned players.*/
    static getBannedPlayers (): Set<OfflinePlayer>;
    /**Gets the KeyedBossBar specified by this key.*/
    static getBossBar (key: NamespacedKey): KeyedBossBar;
    /**Gets an unmodifiable iterator through all persistent bossbars.*/
    static getBossBars (): Iterator<KeyedBossBar>;
    /**Gets the Bukkit version that this server is running.*/
    static getBukkitVersion (): String;
    /**Gets a list of command aliases defined in the server properties.*/
    static getCommandAliases (): Map<String,String[]>;
    /**Gets the active CommandMap*/
    static getCommandMap (): CommandMap;
    /**Gets the value of the connection throttle setting.*/
    static getConnectionThrottle (): number;
    /**Gets a ConsoleCommandSender that may be used as an input source  for this server.*/
    static getConsoleSender (): ConsoleCommandSender;
    static getCurrentTick (): number;
    /**Gets the default GameMode for new players.*/
    static getDefaultGameMode (): GameMode;
    /**Gets an entity on the server by its UUID*/
    static getEntity (uuid: UUID): Entity;
    /**Get generate-structures setting.*/
    static getGenerateStructures (): boolean;
    /**Gets the HelpMap providing help topics for this server.*/
    static getHelpMap (): HelpMap;
    /**Gets the idle kick timeout.*/
    static getIdleTimeout (): number;
    /**Get the IP that this server is bound to, or empty string if not  specified.*/
    static getIp (): String;
    /**Gets a set containing all current IPs that are banned.*/
    static getIPBans (): Set<String>;
    /**Gets the instance of the item factory (for ItemMeta).*/
    static getItemFactory (): ItemFactory;
    /**Returns the primary logger associated with this server instance.*/
    static getLogger (): Logger;
    /**Gets the specified LootTable.*/
    static getLootTable (key: NamespacedKey): LootTable;
    /**Get the maximum amount of players which can login to this server.*/
    static getMaxPlayers (): number;
    /**Gets the Messenger responsible for this server.*/
    static getMessenger (): Messenger;
    /**Gets the version of game this server implements*/
    static getMinecraftVersion (): String;
    /**Returns the MobGoals manager*/
    static getMobGoals (): MobGoals;
    /**Gets user-specified limit for number of monsters that can spawn in a  chunk.*/
    static getMonsterSpawnLimit (): number;
    /**Gets the message that is displayed on the server list.*/
    static getMotd (): String;
    /**Gets the name of this server implementation.*/
    static getName (): String;
    /**Gets the player by the given UUID, regardless if they are offline or  online.*/
    static getOfflinePlayer (id: UUID): OfflinePlayer;
    /**Gets every player that has ever played on this server.*/
    static getOfflinePlayers (): OfflinePlayer[];
    /**Gets whether the Server is in online mode or not.*/
    static getOnlineMode (): boolean;
    /**Gets a view of all currently logged in players.*/
    static getOnlinePlayers (): Collection<Player>;
    /**Gets a set containing all player operators.*/
    static getOperators (): Set<OfflinePlayer>;
    static getPermissionMessage (): String;
    /**Gets a player object by the given username.*/
    static getPlayer (name: String): Player;
    /**Gets the player with the given UUID.*/
    static getPlayer (id: UUID): Player;
    /**Gets the player with the exact given name, case insensitive.*/
    static getPlayerExact (name: String): Player;
    /**Gets the unique ID of the player currently known as the specified player name  In Offline Mode, will return an Offline UUID*/
    static getPlayerUniqueId (playerName: String): UUID;
    /**Gets a PluginCommand with the given name or alias.*/
    static getPluginCommand (name: String): PluginCommand;
    /**Gets the plugin manager for interfacing with plugins.*/
    static getPluginManager (): PluginManager;
    /**Get the game port that the server runs on.*/
    static getPort (): number;
    /**Get the Recipe for the given key.*/
    static getRecipe (recipeKey: NamespacedKey): Recipe;
    /**Get a list of all recipes for a given item.*/
    static getRecipesFor (result: ItemStack): List<Recipe>;
    /**Gets the scheduler for managing scheduled events.*/
    static getScheduler (): BukkitScheduler;
    /**Gets the instance of the scoreboard manager.*/
    static getScoreboardManager (): ScoreboardManager;
    /**Gets the current Server singleton*/
    static getServer (): Server;
    /**Gets an instance of the server's default server-icon.*/
    static getServerIcon (): CachedServerIcon;
    /**Gets a services manager.*/
    static getServicesManager (): ServicesManager;
    /**Gets the default message that is displayed when the server is stopped.*/
    static getShutdownMessage (): String;
    /**Gets the radius, in blocks, around each worlds spawn point to protect.*/
    static getSpawnRadius (): number;
    /**Gets a tag which has already been defined within the server.*/
    static getTag <T extends Keyed>(registry: String, tag: NamespacedKey, clazz: Class<T>): Tag<T>;
    /**Gets a all tags which have been defined within the server.*/
    static getTags <T extends Keyed>(registry: String, clazz: Class<T>): Iterable<Tag<T>>;
    /**Gets the default ticks per ambient mob spawns value.*/
    static getTicksPerAmbientSpawns (): number;
    /**Gets default ticks per animal spawns value.*/
    static getTicksPerAnimalSpawns (): number;
    /**Gets the default ticks per monster spawns value.*/
    static getTicksPerMonsterSpawns (): number;
    /**Gets the default ticks per water ambient mob spawns value.*/
    static getTicksPerWaterAmbientSpawns (): number;
    /**Gets the default ticks per water mob spawns value.*/
    static getTicksPerWaterSpawns (): number;
    /**Get a sample of the servers last tick times (in nanos)*/
    static getTickTimes (): number[];
    /**Gets the current server TPS*/
    static getTPS (): number[];
    /**Gets the name of the update folder.*/
    static getUpdateFolder (): String;
    /**Gets the update folder.*/
    static getUpdateFolderFile (): File;
    /**Gets the version string of this server implementation.*/
    static getVersion (): String;
    /**Get the view distance from this server.*/
    static getViewDistance (): number;
    /**Gets the current warning state for the server.*/
    static getWarningState (): Warning$WarningState;
    /**Gets user-specified limit for number of water ambient mobs that can spawn  in a chunk.*/
    static getWaterAmbientSpawnLimit (): number;
    /**Gets user-specified limit for number of water animals that can spawn in  a chunk.*/
    static getWaterAnimalSpawnLimit (): number;
    /**Gets a list of whitelisted players.*/
    static getWhitelistedPlayers (): Set<OfflinePlayer>;
    /**Gets the world with the given name.*/
    static getWorld (name: String): World;
    /**Gets the world from the given Unique ID.*/
    static getWorld (uid: UUID): World;
    /**Gets the folder that contains all of the various Worlds.*/
    static getWorldContainer (): File;
    /**Gets a list of all worlds on this server.*/
    static getWorlds (): List<World>;
    /**Get world type (level-type setting) for default world.*/
    static getWorldType (): String;
    /**Gets whether this server has a whitelist or not.*/
    static hasWhitelist (): boolean;
    /**Gets whether the server is in hardcore mode or not.*/
    static isHardcore (): boolean;
    /**Checks the current thread against the expected primary thread for the  server.*/
    static isPrimaryThread (): boolean;
    /**Checks if the server is in the process of being shutdown.*/
    static isStopping (): boolean;
    /**Creates a cached server-icon for the specific image.*/
    static loadServerIcon (image: BufferedImage): CachedServerIcon;
    /**Loads an image from a file, and returns a cached image for the specific  server-icon.*/
    static loadServerIcon (file: File): CachedServerIcon;
    /**Attempts to match any players with the given name, and returns a list  of all possibly matches.*/
    static matchPlayer (name: String): List<Player>;
    /**Get an iterator through the list of crafting recipes.*/
    static recipeIterator (): Iterator<Recipe>;
    /**Reloads the server, refreshing settings and plugin information.*/
    static reload (): void;
    /**Reload the Command Aliases in commands.yml*/
    static reloadCommandAliases (): boolean;
    /**Reload only the Minecraft data for the server.*/
    static reloadData (): void;
    /**Reload the Permissions in permissions.yml*/
    static reloadPermissions (): void;
    /**Reloads the whitelist from disk.*/
    static reloadWhitelist (): void;
    /**Removes a KeyedBossBar specified by this key.*/
    static removeBossBar (key: NamespacedKey): boolean;
    /**Remove a recipe from the server.*/
    static removeRecipe (key: NamespacedKey): boolean;
    /**Resets the list of crafting recipes to the default.*/
    static resetRecipes (): void;
    /**Writes loaded players to disk.*/
    static savePlayers (): void;
    /**Selects entities using the given Vanilla selector.*/
    static selectEntities (sender: CommandSender, selector: String): List<Entity>;
    /**Sets the default GameMode for new players.*/
    static setDefaultGameMode (mode: GameMode): void;
    /**Set the idle kick timeout.*/
    static setIdleTimeout (threshold: number): void;
    /**Set the maximum amount of players which can login to this server.*/
    static setMaxPlayers (maxPlayers: number): void;
    /**Attempts to set the Server singleton.*/
    static setServer (server: Server): void;
    /**Sets the radius, in blocks, around each worlds spawn point to protect.*/
    static setSpawnRadius (value: number): void;
    /**Sets if the server is whitelisted.*/
    static setWhitelist (value: boolean): void;
    /**Shutdowns the server, stopping everything.*/
    static shutdown (): void;
    static spigot (): Server$Spigot;
    /**Checks if player names should be suggested when a command returns null as  their tab completion result.*/
    static suggestPlayerNamesWhenNullTabCompletions (): boolean;
    /**Unbans the specified address from the server.*/
    static unbanIP (address: String): void;
    /**Unloads a world with the given name.*/
    static unloadWorld (name: String, save: boolean): boolean;
    /**Unloads the given world.*/
    static unloadWorld (world: World, save: boolean): boolean
}

export class BukkitCommand extends Command {

}

/**This class is designed to be used in conjunction with the ConfigurationSerializable API. It translates objects back to their  original implementation after being serialized by BukkitObjectInputStream.    Behavior of implementations extending this class is not guaranteed across  future versions.*/
export class BukkitObjectInputStream extends ObjectInputStream {
    resolveObject (obj: Object): Object
}

/**This class is designed to be used in conjunction with the ConfigurationSerializable API. It translates objects to an internal  implementation for later deserialization using BukkitObjectInputStream.    Behavior of implementations extending this class is not guaranteed across  future versions.*/
export class BukkitObjectOutputStream extends ObjectOutputStream {
    replaceObject (obj: Object): Object
}

/**This class is provided as an easy way to handle scheduling tasks.*/
export class BukkitRunnable extends Object implements Runnable {
    /**Attempts to cancel this task.*/
    cancel (): void;
    /**Gets the task id for this runnable.*/
    getTaskId (): number;
    /**Returns true if this task has been cancelled.*/
    isCancelled (): boolean;
    /**Schedules this in the Bukkit scheduler to run on next tick.*/
    runTask (plugin: Plugin): BukkitTask;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskAsynchronously (plugin: Plugin): BukkitTask;
    /**Schedules this to run after the specified number of server ticks.*/
    runTaskLater (plugin: Plugin, delay: number): BukkitTask;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskLaterAsynchronously (plugin: Plugin, delay: number): BukkitTask;
    /**Schedules this to repeatedly run until cancelled, starting after the  specified number of server ticks.*/
    runTaskTimer (plugin: Plugin, delay: number, period: number): BukkitTask;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskTimerAsynchronously (plugin: Plugin, delay: number, period: number): BukkitTask
}

export interface BukkitScheduler {
    /**Calls a method on the main thread and returns a Future object.*/
    callSyncMethod <T>(plugin: Plugin, task: Callable<T>): Future<T>;
    /**Removes task from scheduler.*/
    cancelTask (taskId: number): void;
    /**Removes all tasks associated with a particular plugin from the  scheduler.*/
    cancelTasks (plugin: Plugin): void;
    /**Returns a list of all active workers.*/
    getActiveWorkers (): List<BukkitWorker>;
    /**Returns a list of all pending tasks.*/
    getPendingTasks (): List<BukkitTask>;
    /**Check if the task currently running.*/
    isCurrentlyRunning (taskId: number): boolean;
    /**Check if the task queued to be run later.*/
    isQueued (taskId: number): boolean;
    /**Returns a task that will run on the next server tick.*/
    runTask (plugin: Plugin, task: Runnable): BukkitTask;
    /**Returns a task that will run on the next server tick.*/
    runTask (plugin: Plugin, task: Consumer<BukkitTask>): void;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskAsynchronously (plugin: Plugin, task: Runnable): BukkitTask;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskAsynchronously (plugin: Plugin, task: Consumer<BukkitTask>): void;
    /**Returns a task that will run after the specified number of server  ticks.*/
    runTaskLater (plugin: Plugin, task: Runnable, delay: number): BukkitTask;
    /**Returns a task that will run after the specified number of server  ticks.*/
    runTaskLater (plugin: Plugin, task: Consumer<BukkitTask>, delay: number): void;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskLaterAsynchronously (plugin: Plugin, task: Runnable, delay: number): BukkitTask;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskLaterAsynchronously (plugin: Plugin, task: Consumer<BukkitTask>, delay: number): void;
    /**Returns a task that will repeatedly run until cancelled, starting after  the specified number of server ticks.*/
    runTaskTimer (plugin: Plugin, task: Runnable, delay: number, period: number): BukkitTask;
    /**Returns a task that will repeatedly run until cancelled, starting after  the specified number of server ticks.*/
    runTaskTimer (plugin: Plugin, task: Consumer<BukkitTask>, delay: number, period: number): void;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskTimerAsynchronously (plugin: Plugin, task: Runnable, delay: number, period: number): BukkitTask;
    /**Asynchronous tasks should never access any API in Bukkit.*/
    runTaskTimerAsynchronously (plugin: Plugin, task: Consumer<BukkitTask>, delay: number, period: number): void;
    /**Schedules a once off task to occur as soon as possible.*/
    scheduleSyncDelayedTask (plugin: Plugin, task: Runnable): number;
    /**Schedules a once off task to occur after a delay.*/
    scheduleSyncDelayedTask (plugin: Plugin, task: Runnable, delay: number): number;
    /**Schedules a repeating task.*/
    scheduleSyncRepeatingTask (plugin: Plugin, task: Runnable, delay: number, period: number): number
}

/**Represents a task being executed by the scheduler*/
export interface BukkitTask {
    /**Will attempt to cancel this task.*/
    cancel (): void;
    /**Returns the Plugin that owns this task.*/
    getOwner (): Plugin;
    /**Returns the taskId for the task.*/
    getTaskId (): number;
    /**Returns true if this task has been cancelled.*/
    isCancelled (): boolean;
    /**Returns true if the Task is a sync task.*/
    isSync (): boolean
}

/**Represents a worker thread for the scheduler. This gives information about  the Thread object for the task, owner of the task and the taskId.    Workers are used to execute async tasks.*/
export interface BukkitWorker {
    /**Returns the Plugin that owns this task.*/
    getOwner (): Plugin;
    /**Returns the taskId for the task being executed by this worker.*/
    getTaskId (): number;
    /**Returns the thread for the worker.*/
    getThread (): Thread
}

/**This is a cached version of a server-icon. It's internal representation  and implementation is undefined.*/
export interface CachedServerIcon {
    getData (): String;
    isEmpty (): boolean
}

export class CachedSizeConcurrentLinkedQueue<E> extends ConcurrentLinkedQueue<E> {
    add (e: E): boolean;
    poll (): E;
    size (): number
}

/**'bites' represents the amount of bites which have been taken from this slice  of cake.    A value of 0 indicates that the cake has not been eaten, whilst a value of  getMaximumBites() indicates that it is all gone :(*/
export interface Cake extends BlockData {
    /**Gets the value of the 'bites' property.*/
    getBites (): number;
    /**Gets the maximum allowed value of the 'bites' property.*/
    getMaximumBites (): number;
    /**Sets the value of the 'bites' property.*/
    setBites (bites: number): void
}

/**Represents a captured state of a campfire.*/
export interface Campfire extends TileState {
    /**Get cook time.*/
    getCookTime (index: number): number;
    /**Get cook time total.*/
    getCookTimeTotal (index: number): number;
    getItem (index: number): ItemStack;
    getSize (): number;
    /**Set cook time.*/
    setCookTime (index: number, cookTime: number): void;
    /**Set cook time.*/
    setCookTimeTotal (index: number, cookTimeTotal: number): void;
    setItem (index: number, item: ItemStack): void
}

/**'signal_fire' denotes whether the fire is extra smokey due to having a hay  bale placed beneath it.*/
export interface Campfire extends Directional, Lightable, Waterlogged {
    /**Gets the value of the 'signal_fire' property.*/
    isSignalFire (): boolean;
    /**Sets the value of the 'signal_fire' property.*/
    setSignalFire (signalFire: boolean): void
}

/**Represents a campfire recipe.*/
export class CampfireRecipe extends CookingRecipe<CampfireRecipe> {

}

export interface Cancellable {
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Interface to the inventory of a Cartography table.*/
export interface CartographyInventory extends Inventory {

}

/**Meow.*/
export interface Cat extends Tameable, Sittable {
    /**Gets the current type of this cat.*/
    getCatType (): Cat$Type;
    /**Get the collar color of this cat*/
    getCollarColor (): DyeColor;
    /**Sets the current type of this cat.*/
    setCatType (type: Cat$Type): void;
    /**Set the collar color of this cat*/
    setCollarColor (color: DyeColor): void
}

/**Represents the various different cat types there are.*/
export class Cat$Type extends Enum<Cat$Type> {
    static ALL_BLACK: Cat$Type;
    static BLACK: Cat$Type;
    static BRITISH_SHORTHAIR: Cat$Type;
    static CALICO: Cat$Type;
    static JELLIE: Cat$Type;
    static PERSIAN: Cat$Type;
    static RAGDOLL: Cat$Type;
    static RED: Cat$Type;
    static SIAMESE: Cat$Type;
    static TABBY: Cat$Type;
    static WHITE: Cat$Type
}

export class CauldronLevelChangeEvent extends BlockEvent implements Cancellable {
    /**Get entity which did this.*/
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getNewLevel (): number;
    getOldLevel (): number;
    getReason (): CauldronLevelChangeEvent$ChangeReason;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void;
    setNewLevel (newLevel: number): void
}

export class CauldronLevelChangeEvent$ChangeReason extends Enum<CauldronLevelChangeEvent$ChangeReason> {
    /**Player cleaning their armor.*/
    static ARMOR_WASH: CauldronLevelChangeEvent$ChangeReason;
    /**Player cleaning their banner.*/
    static BANNER_WASH: CauldronLevelChangeEvent$ChangeReason;
    /**Player filling the cauldron by emptying their bottle.*/
    static BOTTLE_EMPTY: CauldronLevelChangeEvent$ChangeReason;
    /**Player emptying the cauldron by filling their bottle.*/
    static BOTTLE_FILL: CauldronLevelChangeEvent$ChangeReason;
    /**Player filling the cauldron by emptying their bucket.*/
    static BUCKET_EMPTY: CauldronLevelChangeEvent$ChangeReason;
    /**Player emptying the cauldron by filling their bucket.*/
    static BUCKET_FILL: CauldronLevelChangeEvent$ChangeReason;
    /**Evaporating due to biome dryness.*/
    static EVAPORATE: CauldronLevelChangeEvent$ChangeReason;
    /**Entity being extinguished.*/
    static EXTINGUISH: CauldronLevelChangeEvent$ChangeReason;
    /**Unknown.*/
    static UNKNOWN: CauldronLevelChangeEvent$ChangeReason
}

/**Represents a Spider.*/
export interface CaveSpider extends Spider {

}

export interface Chain extends Orientable, Waterlogged {

}

/**Thrown if a Plugin Channel is too long.*/
export class ChannelNameTooLongException extends RuntimeException {

}

/**Thrown if a Plugin attempts to send a message on an unregistered channel.*/
export class ChannelNotRegisteredException extends RuntimeException {

}

/**All supported color values for chat*/
export class ChatColor extends Enum<ChatColor> {
    /**Represents aqua*/
    static AQUA: ChatColor;
    /**Represents black*/
    static BLACK: ChatColor;
    /**Represents blue*/
    static BLUE: ChatColor;
    /**Makes the text bold.*/
    static BOLD: ChatColor;
    /**Represents dark blue (aqua)*/
    static DARK_AQUA: ChatColor;
    /**Represents dark blue*/
    static DARK_BLUE: ChatColor;
    /**Represents dark gray*/
    static DARK_GRAY: ChatColor;
    /**Represents dark green*/
    static DARK_GREEN: ChatColor;
    /**Represents dark purple*/
    static DARK_PURPLE: ChatColor;
    /**Represents dark red*/
    static DARK_RED: ChatColor;
    /**Represents gold*/
    static GOLD: ChatColor;
    /**Represents gray*/
    static GRAY: ChatColor;
    /**Represents green*/
    static GREEN: ChatColor;
    /**Makes the text italic.*/
    static ITALIC: ChatColor;
    /**Represents light purple*/
    static LIGHT_PURPLE: ChatColor;
    /**Represents magical characters that change around randomly*/
    static MAGIC: ChatColor;
    /**Represents red*/
    static RED: ChatColor;
    /**Resets all previous chat colors or formats.*/
    static RESET: ChatColor;
    /**Makes a line appear through the text.*/
    static STRIKETHROUGH: ChatColor;
    /**Makes the text appear underlined.*/
    static UNDERLINE: ChatColor;
    /**Represents white*/
    static WHITE: ChatColor;
    /**Represents yellow*/
    static YELLOW: ChatColor
}

/**The ChatPaginator takes a raw string of arbitrary length and breaks it down  into an array of strings appropriate for displaying on the Minecraft player  console.*/
export class ChatPaginator extends Object {
    /**Breaks a raw string up into pages using the default width and height.*/
    static paginate (unpaginatedString: String, pageNumber: number): ChatPaginator$ChatPage;
    /**Breaks a raw string up into pages using a provided width and height.*/
    static paginate (unpaginatedString: String, pageNumber: number, lineLength: number, pageHeight: number): ChatPaginator$ChatPage;
    /**Breaks a raw string up into a series of lines.*/
    static wordWrap (rawString: String, lineLength: number): String[]
}

export class ChatPaginator$ChatPage extends Object {
    getLines (): String[];
    getPageNumber (): number;
    getTotalPages (): number
}

/**Represents a captured state of a chest.*/
export interface Chest extends Container, LootableBlockInventory, Lidded {
    /**Gets the inventory of the chest block represented by this block state.*/
    getBlockInventory (): Inventory
}

/**'type' represents which part of a double chest this block is, or if it is a  single chest.*/
export interface Chest extends Directional, Waterlogged {
    /**Gets the value of the 'type' property.*/
    getType (): Chest$Type;
    /**Sets the value of the 'type' property.*/
    setType (type: Chest$Type): void
}

/**Type of this chest block.    NB: Left and right are relative to the chest itself, i.e opposite to what  a player placing the appropriate block would see.*/
export class Chest$Type extends Enum<Chest$Type> {
    /**The chest is the left hand side of a double chest and shares a 54  block inventory with the chest to its right.*/
    static LEFT: Chest$Type;
    /**The chest is the right hand side of a double chest and shares a 54  block inventory with the chest to its left.*/
    static RIGHT: Chest$Type;
    /**The chest is not linked to any others and contains only one 27 slot  inventory.*/
    static SINGLE: Chest$Type
}

/**Represents Horse-like creatures which can carry an inventory.*/
export interface ChestedHorse extends AbstractHorse {
    /**Gets whether the horse has a chest equipped.*/
    isCarryingChest (): boolean;
    /**Sets whether the horse has a chest equipped.*/
    setCarryingChest (chest: boolean): void
}

/**Represents a Chicken.*/
export interface Chicken extends Animals {

}

/**Represents a chunk of blocks*/
export interface Chunk {
    /**Adds a plugin ticket for this chunk, loading this chunk if it is not  already loaded.*/
    addPluginChunkTicket (plugin: Plugin): boolean;
    /**Tests if this chunk contains the specified block.*/
    contains (block: BlockData): boolean;
    /**Gets a block from this chunk*/
    getBlock (x: number, y: number, z: number): Block;
    getChunkKey (): number;
    static getChunkKey (x: number, z: number): number;
    static getChunkKey (loc: Location): number;
    /**Capture thread-safe read-only snapshot of chunk data*/
    getChunkSnapshot (): ChunkSnapshot;
    /**Capture thread-safe read-only snapshot of chunk data*/
    getChunkSnapshot (includeMaxblocky: boolean, includeBiome: boolean, includeBiomeTempRain: boolean): ChunkSnapshot;
    /**Get a list of all entities in the chunk.*/
    getEntities (): Entity[];
    /**Gets the amount of time in ticks that this chunk has been inhabited.*/
    getInhabitedTime (): number;
    /**Retrieves a collection specifying which plugins have tickets for this  chunk.*/
    getPluginChunkTickets (): Collection<Plugin>;
    /**Get a list of all tile entities in the chunk.*/
    getTileEntities (): BlockState[];
    /**Get a list of all tile entities in the chunk.*/
    getTileEntities (useSnapshot: boolean): BlockState[];
    /**Gets the world containing this chunk*/
    getWorld (): World;
    /**Gets the X-coordinate of this chunk*/
    getX (): number;
    /**Gets the Z-coordinate of this chunk*/
    getZ (): number;
    /**Gets whether the chunk at the specified chunk coordinates is force  loaded.*/
    isForceLoaded (): boolean;
    /**Checks if the chunk is loaded.*/
    isLoaded (): boolean;
    /**Checks if this chunk can spawn slimes without being a swamp biome.*/
    isSlimeChunk (): boolean;
    /**Loads the chunk.*/
    load (): boolean;
    /**Loads the chunk.*/
    load (generate: boolean): boolean;
    /**Removes the specified plugin's ticket for this chunk*/
    removePluginChunkTicket (plugin: Plugin): boolean;
    /**Sets whether the chunk at the specified chunk coordinates is force  loaded.*/
    setForceLoaded (forced: boolean): void;
    /**Sets the amount of time in ticks that this chunk has been inhabited.*/
    setInhabitedTime (ticks: number): void;
    /**Unloads and optionally saves the Chunk*/
    unload (): boolean;
    /**Unloads and optionally saves the Chunk*/
    unload (save: boolean): boolean
}

/**Represents a Chunk related event*/
export class ChunkEvent extends WorldEvent {
    /**Gets the chunk being loaded/unloaded*/
    getChunk (): Chunk
}

/**A chunk generator is responsible for the initial shaping of an entire  chunk. For example, the nether chunk generator should shape netherrack and  soulsand.   By default only one thread will call  generateChunkData(org.bukkit.World, java.util.Random, int, int, org.bukkit.generator.ChunkGenerator.BiomeGrid)  at a time, although this may not necessarily be the main server thread.   If your generator is capable of fully asynchronous generation, then  isParallelCapable() should be overridden accordingly to allow  multiple concurrent callers.   Some aspects of world generation can be delegated to the Vanilla generator.  The methods shouldGenerateCaves(), shouldGenerateDecorations(),  shouldGenerateMobs() and shouldGenerateStructures() can be  overridden to enable this.*/
export class ChunkGenerator extends Object {
    /**Tests if the specified location is valid for a natural spawn position*/
    canSpawn (world: World, x: number, z: number): boolean;
    /**Create a ChunkData for a world.*/
    createChunkData (world: World): ChunkGenerator$ChunkData;
    /**Create a ChunkData for use in a generator, that is populated by the vanilla generator for that world*/
    createVanillaChunkData (world: World, x: number, z: number): ChunkGenerator$ChunkData;
    /**Shapes the chunk for the given coordinates.*/
    generateChunkData (world: World, random: Random, x: number, z: number, biome: ChunkGenerator$BiomeGrid): ChunkGenerator$ChunkData;
    /**Gets a list of default BlockPopulators to apply to a given  world*/
    getDefaultPopulators (world: World): List<BlockPopulator>;
    /**Gets a fixed spawn location to use for a given world.*/
    getFixedSpawnLocation (world: World, random: Random): Location;
    /**Gets if this ChunkGenerator is parallel capable.*/
    isParallelCapable (): boolean;
    /**Gets if the server should generate Vanilla caves after this  ChunkGenerator.*/
    shouldGenerateCaves (): boolean;
    /**Gets if the server should generate Vanilla decorations after this  ChunkGenerator.*/
    shouldGenerateDecorations (): boolean;
    /**Gets if the server should generate Vanilla mobs after this  ChunkGenerator.*/
    shouldGenerateMobs (): boolean;
    /**Gets if the server should generate Vanilla structures after this  ChunkGenerator.*/
    shouldGenerateStructures (): boolean
}

/**Interface to biome section for chunk to be generated: initialized with  default values for world type and seed.    Custom generator is free to access and tailor values during  generateBlockSections() or generateExtBlockSections().*/
export interface ChunkGenerator$BiomeGrid {
    /**Get biome at x, z within chunk being generated*/
    getBiome (x: number, y: number, z: number): Biome;
    /**Set biome at x, z within chunk being generated*/
    setBiome (x: number, y: number, z: number, bio: Biome): void
}

/**Data for a Chunk.*/
export interface ChunkGenerator$ChunkData {
    /**Get the type and data of the block at x, y, z.*/
    getBlockData (x: number, y: number, z: number): BlockData;
    /**Get the maximum height for the chunk.*/
    getMaxHeight (): number;
    /**Get the type of the block at x, y, z.*/
    getType (x: number, y: number, z: number): Material;
    /**Get the type and data of the block at x, y, z.*/
    getTypeAndData (x: number, y: number, z: number): MaterialData;
    /**Set the block at x,y,z in the chunk data to material.*/
    setBlock (x: number, y: number, z: number, blockData: BlockData): void;
    /**Set the block at x,y,z in the chunk data to material.*/
    setBlock (x: number, y: number, z: number, material: Material): void;
    /**Set the block at x,y,z in the chunk data to material.*/
    setBlock (x: number, y: number, z: number, material: MaterialData): void;
    /**Set a region of this chunk from xMin, yMin, zMin (inclusive) to xMax,  yMax, zMax (exclusive) to material.*/
    setRegion (xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, blockData: BlockData): void;
    /**Set a region of this chunk from xMin, yMin, zMin (inclusive)  to xMax, yMax, zMax (exclusive) to material.*/
    setRegion (xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, material: Material): void;
    /**Set a region of this chunk from xMin, yMin, zMin (inclusive)  to xMax, yMax, zMax (exclusive) to material.*/
    setRegion (xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number, material: MaterialData): void
}

/**Called when a chunk is loaded*/
export class ChunkLoadEvent extends ChunkEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets if this chunk was newly created or not.*/
    isNewChunk (): boolean
}

/**Thrown when a new chunk has finished being populated.    If your intent is to populate the chunk using this event, please see BlockPopulator*/
export class ChunkPopulateEvent extends ChunkEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Represents a static, thread-safe snapshot of chunk of blocks.    Purpose is to allow clean, efficient copy of a chunk data to be made, and  then handed off for processing in another thread (e.g. map rendering)*/
export interface ChunkSnapshot {
    /**Tests if this snapshot contains the specified block.*/
    contains (block: BlockData): boolean;
    /**Get biome at given coordinates*/
    getBiome (x: number, y: number, z: number): Biome;
    /**Get block data for block at corresponding coordinate in the chunk*/
    getBlockData (x: number, y: number, z: number): BlockData;
    /**Get light level emitted by block at corresponding coordinate in the  chunk*/
    getBlockEmittedLight (x: number, y: number, z: number): number;
    /**Get sky light level for block at corresponding coordinate in the chunk*/
    getBlockSkyLight (x: number, y: number, z: number): number;
    /**Get block type for block at corresponding coordinate in the chunk*/
    getBlockType (x: number, y: number, z: number): Material;
    /**Get world full time when chunk snapshot was captured*/
    getCaptureFullTime (): number;
    /**Gets the highest non-air coordinate at the given coordinates*/
    getHighestBlockYAt (x: number, z: number): number;
    /**Get raw biome temperature at given coordinates*/
    getRawBiomeTemperature (x: number, y: number, z: number): number;
    /**Gets name of the world containing this chunk*/
    getWorldName (): String;
    /**Gets the X-coordinate of this chunk*/
    getX (): number;
    /**Gets the Z-coordinate of this chunk*/
    getZ (): number;
    /**Test if section is empty*/
    isSectionEmpty (sy: number): boolean
}

/**Called when a chunk is unloaded*/
export class ChunkUnloadEvent extends ChunkEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Return whether this chunk will be saved to disk.*/
    isSaveChunk (): boolean;
    /**Set whether this chunk will be saved to disk.*/
    setSaveChunk (saveChunk: boolean): void
}

export interface ClassDefiner {
    /**Define a class*/
    defineClass (parentLoader: ClassLoader, name: String, data: number[]): Class<X>;
    static getInstance (): ClassDefiner;
    /**Returns if the defined classes can bypass access checks*/
    isBypassAccessChecks (): boolean
}

/**What the client did to trigger this action (not the result).*/
export class ClickType extends Enum<ClickType> {
    /**Holding Ctrl while pressing the "Drop" key (defaults to Q).*/
    static CONTROL_DROP: ClickType;
    /**Any action done with the Creative inventory open.*/
    static CREATIVE: ClickType;
    /**Pressing the left mouse button twice in quick succession.*/
    static DOUBLE_CLICK: ClickType;
    /**The "Drop" key (defaults to Q).*/
    static DROP: ClickType;
    /**The left (or primary) mouse button.*/
    static LEFT: ClickType;
    /**The middle mouse button, or a "scrollwheel click".*/
    static MIDDLE: ClickType;
    /**One of the number keys 1-9, correspond to slots on the hotbar.*/
    static NUMBER_KEY: ClickType;
    /**The right mouse button.*/
    static RIGHT: ClickType;
    /**Holding shift while pressing the left mouse button.*/
    static SHIFT_LEFT: ClickType;
    /**Holding shift while pressing the right mouse button.*/
    static SHIFT_RIGHT: ClickType;
    /**The "swap item with offhand" key (defaults to F).*/
    static SWAP_OFFHAND: ClickType;
    /**A type of inventory manipulation not yet recognized by Bukkit.*/
    static UNKNOWN: ClickType;
    /**Clicking the left mouse button on the grey area around the inventory.*/
    static WINDOW_BORDER_LEFT: ClickType;
    /**Clicking the right mouse button on the grey area around the inventory.*/
    static WINDOW_BORDER_RIGHT: ClickType
}

export class ClientOption<T> extends Object {
    getType (): Class<T>
}

export class ClientOption$ChatVisibility extends Enum<ClientOption$ChatVisibility> {
    static FULL: ClientOption$ChatVisibility;
    static HIDDEN: ClientOption$ChatVisibility;
    static SYSTEM: ClientOption$ChatVisibility;
    static UNKNOWN: ClientOption$ChatVisibility
}

/**Represents the two types of coal*/
export class CoalType extends Enum<CoalType> {
    static CHARCOAL: CoalType;
    static COAL: CoalType
}

export interface Cocoa extends Ageable, Directional {

}

export class CocoaPlant$CocoaPlantSize extends Enum<CocoaPlant$CocoaPlantSize> {
    static LARGE: CocoaPlant$CocoaPlantSize;
    static MEDIUM: CocoaPlant$CocoaPlantSize;
    static SMALL: CocoaPlant$CocoaPlantSize
}

/**Represents a cod fish.*/
export interface Cod extends Fish {

}

/**A container for a color palette. This class is immutable; the set methods  return a new color. The color names listed as fields are HTML4 standards,  but subject to change.*/
export class Color extends Object implements ConfigurationSerializable {
    /**Gets the color as an BGR integer.*/
    asBGR (): number;
    /**Gets the color as an RGB integer.*/
    asRGB (): number;
    static deserialize (map: Map<String,Object>): Color;
    equals (o: Object): boolean;
    /**Creates a new color object from an integer that contains the blue,  green, and red bytes in the lowest order 24 bits.*/
    static fromBGR (bgr: number): Color;
    /**Creates a new Color object from a blue, green, and red*/
    static fromBGR (blue: number, green: number, red: number): Color;
    /**Creates a new color object from an integer that contains the red,  green, and blue bytes in the lowest order 24 bits.*/
    static fromRGB (rgb: number): Color;
    /**Creates a new Color object from a red, green, and blue*/
    static fromRGB (red: number, green: number, blue: number): Color;
    /**Gets the blue component*/
    getBlue (): number;
    /**Gets the green component*/
    getGreen (): number;
    /**Gets the red component*/
    getRed (): number;
    hashCode (): number;
    /**Creates a new color with its RGB components changed as if it was dyed  with the colors passed in, replicating vanilla workbench dyeing*/
    mixColors (...colors: Color[]): Color;
    /**Creates a new color with its RGB components changed as if it was dyed  with the colors passed in, replicating vanilla workbench dyeing*/
    mixDyes (...colors: DyeColor[]): Color;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    /**Creates a new Color object with specified component*/
    setBlue (blue: number): Color;
    /**Creates a new Color object with specified component*/
    setGreen (green: number): Color;
    /**Creates a new Color object with specified component*/
    setRed (red: number): Color;
    toString (): String
}

/**An object that can be colored.*/
export interface Colorable {
    /**Gets the color of this object.*/
    getColor (): DyeColor;
    /**Sets the color of this object to the specified DyeColor.*/
    setColor (color: DyeColor): void
}

/**Represents a Command, which executes various tasks upon user input*/
export class Command extends Object {
    static broadcastCommandMessage (source: CommandSender, message: String): void;
    static broadcastCommandMessage (source: CommandSender, message: String, sendToSource: boolean): void;
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, commandLabel: String, args: String[]): boolean;
    /**Returns a list of active aliases of this command*/
    getAliases (): List<String>;
    /**Gets a brief description of this command*/
    getDescription (): String;
    /**Returns the label for this command*/
    getLabel (): String;
    /**Returns the name of this command*/
    getName (): String;
    /**Gets the permission required by users to be able to perform this  command*/
    getPermission (): String;
    /**Returns a message to be displayed on a failed permission check for this  command*/
    getPermissionMessage (): String;
    getTimingName (): String;
    /**Gets an example usage of this command*/
    getUsage (): String;
    /**Returns the current registered state of this command*/
    isRegistered (): boolean;
    /**Registers this command to a CommandMap.*/
    register (commandMap: CommandMap): boolean;
    /**Sets the list of aliases to request on registration for this command.*/
    setAliases (aliases: List<String>): Command;
    /**Sets a brief description of this command.*/
    setDescription (description: String): Command;
    /**Sets the label of this command.*/
    setLabel (name: String): boolean;
    /**Sets the name of this command.*/
    setName (name: String): boolean;
    /**Sets the permission required by users to be able to perform this  command*/
    setPermission (permission: String): void;
    /**Sets the message sent when a permission check fails*/
    setPermissionMessage (permissionMessage: String): Command;
    /**Sets the example usage of this command*/
    setUsage (usage: String): Command;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[]): List<String>;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[], location: Location): List<String>;
    /**Tests the given CommandSender to see if they can perform this  command.*/
    testPermission (target: CommandSender): boolean;
    /**Tests the given CommandSender to see if they can perform this  command.*/
    testPermissionSilent (target: CommandSender): boolean;
    toString (): String;
    /**Unregisters this command from the passed CommandMap applying any  outstanding changes*/
    unregister (commandMap: CommandMap): boolean
}

/**Represents a captured state of a command block.*/
export interface CommandBlock extends TileState {
    /**Gets the command that this CommandBlock will run when powered.*/
    getCommand (): String;
    /**Gets the name of this CommandBlock.*/
    getName (): String;
    /**Sets the command that this CommandBlock will run when powered.*/
    setCommand (command: String): void;
    /**Sets the name of this CommandBlock.*/
    setName (name: String): void
}

/**'conditional' denotes whether this command block is conditional or not, i.e.  will only execute if the preceeding command block also executed successfully.*/
export interface CommandBlock extends Directional {
    /**Gets the value of the 'conditional' property.*/
    isConditional (): boolean;
    /**Sets the value of the 'conditional' property.*/
    setConditional (conditional: boolean): void
}

/**Thrown when an unhandled exception occurs during the execution of a Command*/
export class CommandException extends RuntimeException {

}

/**Represents a class which contains a single method for executing commands*/
export interface CommandExecutor {
    /**Executes the given command, returning its success.*/
    onCommand (sender: CommandSender, command: Command, label: String, args: String[]): boolean
}

export interface CommandMap {
    /**Clears all registered commands.*/
    clearCommands (): void;
    /**Looks for the requested command and executes it if found.*/
    dispatch (sender: CommandSender, cmdLine: String): boolean;
    /**Gets the command registered to the specified name*/
    getCommand (name: String): Command;
    /**Return a Map of known commands*/
    getKnownCommands (): Map<String,Command>;
    /**Registers a command.*/
    register (label: String, fallbackPrefix: String, command: Command): boolean;
    /**Registers a command.*/
    register (fallbackPrefix: String, command: Command): boolean;
    /**Registers all the commands belonging to a certain plugin.*/
    registerAll (fallbackPrefix: String, commands: List<Command>): void;
    /**Looks for the requested command and executes an appropriate  tab-completer if found.*/
    tabComplete (sender: CommandSender, cmdLine: String): List<String>;
    /**Looks for the requested command and executes an appropriate  tab-completer if found.*/
    tabComplete (sender: CommandSender, cmdLine: String, location: Location): List<String>
}

export interface CommandMinecart extends Minecart {
    /**Gets the command that this CommandMinecart will run when activated.*/
    getCommand (): String;
    /**Sets the command that this CommandMinecart will run when activated.*/
    setCommand (command: String): void;
    /**Sets the name of this CommandMinecart.*/
    setName (name: String): void
}

export class CommandPermissions extends Object {
    static registerPermissions (parent: Permission): Permission
}

export interface CommandSender extends Permissible {
    /**Gets the name of this command sender*/
    getName (): String;
    /**Returns the server instance that this command is running on*/
    getServer (): Server;
    /**Sends this sender a message*/
    sendMessage (message: String): void;
    /**Sends this sender multiple messages*/
    sendMessage (messages: String[]): void;
    /**Sends the component to the sender*/
    sendMessage (component: BaseComponent): void;
    /**Sends an array of components as a single message to the sender*/
    sendMessage (...components: BaseComponent[]): void;
    spigot (): CommandSender$Spigot
}

export class CommandSender$Spigot extends Object {
    /**Sends this sender a chat component.*/
    sendMessage (component: BaseComponent): void;
    /**Sends an array of components as a single message to the sender.*/
    sendMessage (...components: BaseComponent[]): void
}

/**Represents a captured state of an on / off comparator.*/
export interface Comparator extends TileState {

}

/**'mode' indicates what mode this comparator will operate in.*/
export interface Comparator extends Directional, Powerable {
    /**Gets the value of the 'mode' property.*/
    getMode (): Comparator$Mode;
    /**Sets the value of the 'mode' property.*/
    setMode (mode: Comparator$Mode): void
}

/**The mode in which a comparator will operate in.*/
export class Comparator$Mode extends Enum<Comparator$Mode> {
    /**The default mode, similar to a transistor.*/
    static COMPARE: Comparator$Mode;
    /**Alternate subtraction mode.*/
    static SUBTRACT: Comparator$Mode
}

/**Represents a compass that can track a specific location.*/
export interface CompassMeta extends ItemMeta {
    clone (): CompassMeta;
    /**Gets the location that this compass will point to.*/
    getLodestone (): Location;
    /**Checks if this compass has been paired to a lodestone.*/
    hasLodestone (): boolean;
    /**Gets if this compass is tracking a specific lodestone.*/
    isLodestoneTracked (): boolean;
    /**Sets the location this lodestone compass will point to.*/
    setLodestone (lodestone: Location): void;
    /**Sets if this compass is tracking a specific lodestone.*/
    setLodestoneTracked (tracked: boolean): void
}

/**Represents a single part of a ComplexLivingEntity*/
export interface ComplexEntityPart extends Entity {
    /**Gets the parent ComplexLivingEntity of this part.*/
    getParent (): ComplexLivingEntity
}

/**Represents a complex living entity - one that is made up of various smaller  parts*/
export interface ComplexLivingEntity extends LivingEntity {
    /**Gets a list of parts that belong to this complex entity*/
    getParts (): Set<ComplexEntityPart>
}

/**Represents a complex recipe which has imperative server-defined behavior, eg  armor dyeing.   Note: Since a complex recipe has dynamic outputs, Recipe.getResult() will  sometimes return an AIR ItemStack.*/
export interface ComplexRecipe extends Recipe, Keyed {

}

/**Represents a captured state of a conduit.*/
export interface Conduit extends TileState {

}

/**Represents a source of configurable options and settings*/
export interface Configuration extends ConfigurationSection {
    /**Sets the default value of the given path as provided.*/
    addDefault (path: String, value: Object): void;
    /**Sets the default values of the given paths as provided.*/
    addDefaults (defaults: Map<String,Object>): void;
    /**Sets the default values of the given paths as provided.*/
    addDefaults (defaults: Configuration): void;
    /**Gets the source Configuration for this configuration.*/
    getDefaults (): Configuration;
    /**Gets the ConfigurationOptions for this Configuration.*/
    options (): ConfigurationOptions;
    /**Sets the source of all default values for this Configuration.*/
    setDefaults (defaults: Configuration): void
}

/**Various settings for controlling the input and output of a Configuration*/
export class ConfigurationOptions extends Object {
    /**Returns the Configuration that this object is responsible for.*/
    configuration (): Configuration;
    /**Checks if the Configuration should copy values from its default  Configuration directly.*/
    copyDefaults (): boolean;
    /**Sets if the Configuration should copy values from its default  Configuration directly.*/
    copyDefaults (value: boolean): ConfigurationOptions;
    /**Gets the char that will be used to separate ConfigurationSections*/
    pathSeparator (): char;
    /**Sets the char that will be used to separate ConfigurationSections*/
    pathSeparator (value: char): ConfigurationOptions
}

/**Represents a section of a Configuration*/
export interface ConfigurationSection {
    /**Sets the default value in the root at the given path as provided.*/
    addDefault (path: String, value: Object): void;
    /**Checks if this ConfigurationSection contains the given path.*/
    contains (path: String): boolean;
    /**Checks if this ConfigurationSection contains the given path.*/
    contains (path: String, ignoreDefault: boolean): boolean;
    /**Creates an empty ConfigurationSection at the specified path.*/
    createSection (path: String): ConfigurationSection;
    /**Creates a ConfigurationSection at the specified path, with  specified values.*/
    createSection (path: String, map: Map<X,X>): ConfigurationSection;
    /**Gets the requested Object by path.*/
    get (path: String): Object;
    /**Gets the requested Object by path, returning a default value if not  found.*/
    get (path: String, def: Object): Object;
    /**Gets the requested boolean by path.*/
    getBoolean (path: String): boolean;
    /**Gets the requested boolean by path, returning a default value if not  found.*/
    getBoolean (path: String, def: boolean): boolean;
    /**Gets the requested List of Boolean by path.*/
    getBooleanList (path: String): List<Boolean>;
    /**Gets the requested List of Byte by path.*/
    getByteList (path: String): List<Byte>;
    /**Gets the requested List of Character by path.*/
    getCharacterList (path: String): List<Character>;
    /**Gets the requested Color by path.*/
    getColor (path: String): Color;
    /**Gets the requested Color by path, returning a default value if  not found.*/
    getColor (path: String, def: Color): Color;
    /**Gets the requested ConfigurationSection by path.*/
    getConfigurationSection (path: String): ConfigurationSection;
    /**Gets the path of this ConfigurationSection from its root Configuration*/
    getCurrentPath (): String;
    /**Gets the equivalent ConfigurationSection from the default  Configuration defined in getRoot().*/
    getDefaultSection (): ConfigurationSection;
    /**Gets the requested double by path.*/
    getDouble (path: String): number;
    /**Gets the requested double by path, returning a default value if not  found.*/
    getDouble (path: String, def: number): number;
    /**Gets the requested List of Double by path.*/
    getDoubleList (path: String): List<Double>;
    /**Gets the requested List of Float by path.*/
    getFloatList (path: String): List<Float>;
    /**Gets the requested int by path.*/
    getInt (path: String): number;
    /**Gets the requested int by path, returning a default value if not found.*/
    getInt (path: String, def: number): number;
    /**Gets the requested List of Integer by path.*/
    getIntegerList (path: String): List<Integer>;
    /**Gets the requested ItemStack by path.*/
    getItemStack (path: String): ItemStack;
    /**Gets the requested ItemStack by path, returning a default value  if not found.*/
    getItemStack (path: String, def: ItemStack): ItemStack;
    /**Gets a set containing all keys in this section.*/
    getKeys (deep: boolean): Set<String>;
    /**Gets the requested List by path.*/
    getList (path: String): List<X>;
    /**Gets the requested List by path, returning a default value if not  found.*/
    getList (path: String, def: List<X>): List<X>;
    /**Gets the requested Location by path.*/
    getLocation (path: String): Location;
    /**Gets the requested Location by path, returning a default value if  not found.*/
    getLocation (path: String, def: Location): Location;
    /**Gets the requested long by path.*/
    getLong (path: String): number;
    /**Gets the requested long by path, returning a default value if not  found.*/
    getLong (path: String, def: number): number;
    /**Gets the requested List of Long by path.*/
    getLongList (path: String): List<Long>;
    /**Gets the requested List of Maps by path.*/
    getMapList (path: String): List<Map<X,X>>;
    /**Gets the name of this individual ConfigurationSection, in the  path.*/
    getName (): String;
    /**Gets the requested object at the given path.*/
    getObject <T>(path: String, clazz: Class<T>): T;
    /**Gets the requested object at the given path, returning a default value if  not found   If the Object does not exist then the specified default value will  returned regardless of if a default has been identified in the root  Configuration.*/
    getObject <T>(path: String, clazz: Class<T>, def: T): T;
    /**Gets the requested OfflinePlayer by path.*/
    getOfflinePlayer (path: String): OfflinePlayer;
    /**Gets the requested OfflinePlayer by path, returning a default  value if not found.*/
    getOfflinePlayer (path: String, def: OfflinePlayer): OfflinePlayer;
    /**Gets the parent ConfigurationSection that directly contains  this ConfigurationSection.*/
    getParent (): ConfigurationSection;
    /**Gets the root Configuration that contains this ConfigurationSection*/
    getRoot (): Configuration;
    /**Gets the requested ConfigurationSerializable object at the given  path.*/
    getSerializable <T extends ConfigurationSerializable>(path: String, clazz: Class<T>): T;
    /**Gets the requested ConfigurationSerializable object at the given  path, returning a default value if not found   If the Object does not exist then the specified default value will  returned regardless of if a default has been identified in the root  Configuration.*/
    getSerializable <T extends ConfigurationSerializable>(path: String, clazz: Class<T>, def: T): T;
    /**Gets the requested List of Short by path.*/
    getShortList (path: String): List<Short>;
    /**Gets the requested String by path.*/
    getString (path: String): String;
    /**Gets the requested String by path, returning a default value if not  found.*/
    getString (path: String, def: String): String;
    /**Gets the requested List of String by path.*/
    getStringList (path: String): List<String>;
    /**Gets a Map containing all keys and their values for this section.*/
    getValues (deep: boolean): Map<String,Object>;
    /**Gets the requested Vector by path.*/
    getVector (path: String): Vector;
    /**Gets the requested Vector by path, returning a default value if  not found.*/
    getVector (path: String, def: Vector): Vector;
    /**Checks if the specified path is a boolean.*/
    isBoolean (path: String): boolean;
    /**Checks if the specified path is a Color.*/
    isColor (path: String): boolean;
    /**Checks if the specified path is a ConfigurationSection.*/
    isConfigurationSection (path: String): boolean;
    /**Checks if the specified path is a double.*/
    isDouble (path: String): boolean;
    /**Checks if the specified path is an int.*/
    isInt (path: String): boolean;
    /**Checks if the specified path is an ItemStack.*/
    isItemStack (path: String): boolean;
    /**Checks if the specified path is a List.*/
    isList (path: String): boolean;
    /**Checks if the specified path is a Location.*/
    isLocation (path: String): boolean;
    /**Checks if the specified path is a long.*/
    isLong (path: String): boolean;
    /**Checks if the specified path is an OfflinePlayer.*/
    isOfflinePlayer (path: String): boolean;
    /**Checks if this ConfigurationSection has a value set for the  given path.*/
    isSet (path: String): boolean;
    /**Checks if the specified path is a String.*/
    isString (path: String): boolean;
    /**Checks if the specified path is a Vector.*/
    isVector (path: String): boolean;
    /**Sets the specified path to the given value.*/
    set (path: String, value: Object): void
}

/**Represents an object that may be serialized.    These objects MUST implement one of the following, in addition to the  methods as defined by this interface:    A static method "deserialize" that accepts a single Map<  String, Object> and returns the class.  A static method "valueOf" that accepts a single Map<String, Object> and returns the class.  A constructor that accepts a single Map<String,  Object>.    In addition to implementing this interface, you must register the class  with ConfigurationSerialization.registerClass(Class).*/
export interface ConfigurationSerializable {
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>
}

/**Utility class for storing and retrieving classes for Configuration.*/
export class ConfigurationSerialization extends Object {
    deserialize (args: Map<String,X>): ConfigurationSerializable;
    /**Attempts to deserialize the given arguments into a new instance of the  given class.*/
    static deserializeObject (args: Map<String,X>): ConfigurationSerializable;
    /**Attempts to deserialize the given arguments into a new instance of the  given class.*/
    static deserializeObject (args: Map<String,X>, clazz: Class<X>): ConfigurationSerializable;
    deserializeViaCtor (ctor: Constructor<X>, args: Map<String,X>): ConfigurationSerializable;
    deserializeViaMethod (method: Method, args: Map<String,X>): ConfigurationSerializable;
    /**Gets the correct alias for the given ConfigurationSerializable  class*/
    static getAlias (clazz: Class<X>): String;
    /**Attempts to get a registered ConfigurationSerializable class by  its alias*/
    static getClassByAlias (alias: String): Class<ConfigurationSerializable>;
    getConstructor (): Constructor<ConfigurationSerializable>;
    getMethod (name: String, isStatic: boolean): Method;
    /**Registers the given ConfigurationSerializable class by its  alias*/
    static registerClass (clazz: Class<X>): void;
    /**Registers the given alias to the specified ConfigurationSerializable class*/
    static registerClass (clazz: Class<X>, alias: String): void;
    /**Unregisters any aliases for the specified ConfigurationSerializable class*/
    static unregisterClass (clazz: Class<X>): void;
    /**Unregisters the specified alias to a ConfigurationSerializable*/
    static unregisterClass (alias: String): void
}

export interface ConsoleCommandSender extends CommandSender, Conversable {

}

/**Represents an operation that accepts a single input argument and returns no  result.*/
export interface Consumer<T> {
    /**Performs this operation on the given argument.*/
    accept (t: T): void
}

/**Represents a captured state of a container block.*/
export interface Container extends TileState, BlockInventoryHolder, Lockable, Nameable {
    /**Gets the inventory of the block represented by this block state.*/
    getInventory (): Inventory;
    /**Gets the captured inventory snapshot of this container.*/
    getSnapshotInventory (): Inventory
}

/**The Conversable interface is used to indicate objects that can have  conversations.*/
export interface Conversable {
    /**Abandons an active conversation.*/
    abandonConversation (conversation: Conversation): void;
    /**Abandons an active conversation.*/
    abandonConversation (conversation: Conversation, details: ConversationAbandonedEvent): void;
    /**Accepts input into the active conversation.*/
    acceptConversationInput (input: String): void;
    /**Enters into a dialog with a Conversation object.*/
    beginConversation (conversation: Conversation): boolean;
    /**Tests to see of a Conversable object is actively engaged in a  conversation.*/
    isConversing (): boolean;
    /**Sends this sender a message raw*/
    sendRawMessage (message: String): void
}

/**The Conversation class is responsible for tracking the current state of a  conversation, displaying prompts to the user, and dispatching the user's  response to the appropriate place. Conversation objects are not typically  instantiated directly. Instead a ConversationFactory is used to  construct identical conversations on demand.    Conversation flow consists of a directed graph of Prompt objects.  Each time a prompt gets input from the user, it must return the next prompt  in the graph. Since each Prompt chooses the next Prompt, complex  conversation trees can be implemented where the nature of the player's  response directs the flow of the conversation.    Each conversation has a ConversationPrefix that prepends all output  from the conversation to the player. The ConversationPrefix can be used to  display the plugin name or conversation status as the conversation evolves.    Each conversation has a timeout measured in the number of inactive seconds  to wait before abandoning the conversation. If the inactivity timeout is  reached, the conversation is abandoned and the user's incoming and outgoing  chat is returned to normal.    You should not construct a conversation manually. Instead, use the ConversationFactory for access to all available options.*/
export class Conversation extends Object {
    /**Abandons and resets the current conversation.*/
    abandon (): void;
    /**Abandons and resets the current conversation.*/
    abandon (details: ConversationAbandonedEvent): void;
    /**Passes player input into the current prompt.*/
    acceptInput (input: String): void;
    /**Adds a ConversationAbandonedListener.*/
    addConversationAbandonedListener (listener: ConversationAbandonedListener): void;
    /**Displays the first prompt of this conversation and begins redirecting  the user's chat responses.*/
    begin (): void;
    /**Gets the list of ConversationCancellers*/
    getCancellers (): List<ConversationCanceller>;
    /**Returns the Conversation's ConversationContext.*/
    getContext (): ConversationContext;
    /**Gets the entity for whom this conversation is mediating.*/
    getForWhom (): Conversable;
    /**Gets the ConversationPrefix that prepends all output from this  conversation.*/
    getPrefix (): ConversationPrefix;
    /**Returns Returns the current state of the conversation.*/
    getState (): Conversation$ConversationState;
    /**Gets the status of local echo for this conversation.*/
    isLocalEchoEnabled (): boolean;
    /**Gets the modality of this conversation.*/
    isModal (): boolean;
    /**Displays the next user prompt and abandons the conversation if the next  prompt is null.*/
    outputNextPrompt (): void;
    /**Removes a ConversationAbandonedListener.*/
    removeConversationAbandonedListener (listener: ConversationAbandonedListener): void;
    /**Sets the status of local echo for this conversation.*/
    setLocalEchoEnabled (localEchoEnabled: boolean): void
}

export class Conversation$ConversationState extends Enum<Conversation$ConversationState> {
    static ABANDONED: Conversation$ConversationState;
    static STARTED: Conversation$ConversationState;
    static UNSTARTED: Conversation$ConversationState
}

/**ConversationAbandonedEvent contains information about an abandoned  conversation.*/
export class ConversationAbandonedEvent extends EventObject {
    /**Gets the object that caused the conversation to be abandoned.*/
    getCanceller (): ConversationCanceller;
    /**Gets the abandoned conversation's conversation context.*/
    getContext (): ConversationContext;
    /**Indicates how the conversation was abandoned - naturally as part of the  prompt chain or prematurely via a ConversationCanceller.*/
    gracefulExit (): boolean
}

export interface ConversationAbandonedListener extends EventListener {
    /**Called whenever a Conversation is abandoned.*/
    conversationAbandoned (abandonedEvent: ConversationAbandonedEvent): void
}

/**A ConversationCanceller is a class that cancels an active Conversation. A Conversation can have more than one ConversationCanceller.*/
export interface ConversationCanceller extends Cloneable {
    /**Cancels a conversation based on user input.*/
    cancelBasedOnInput (context: ConversationContext, input: String): boolean;
    /**Allows the ConversationFactory to duplicate this  ConversationCanceller when creating a new Conversation.*/
    clone (): ConversationCanceller;
    /**Sets the conversation this ConversationCanceller can optionally cancel.*/
    setConversation (conversation: Conversation): void
}

/**A ConversationContext provides continuity between nodes in the prompt graph  by giving the developer access to the subject of the conversation and a  generic map for storing values that are shared between all Prompt  invocations.*/
export class ConversationContext extends Object {
    /**Gets the underlying sessionData map.*/
    getAllSessionData (): Map<Object,Object>;
    /**Gets the subject of the conversation.*/
    getForWhom (): Conversable;
    /**Gets the plugin that owns this conversation.*/
    getPlugin (): Plugin;
    /**Gets session data shared between all Prompt invocations.*/
    getSessionData (key: Object): Object;
    /**Sets session data shared between all Prompt invocations.*/
    setSessionData (key: Object, value: Object): void
}

/**A ConversationFactory is responsible for creating a Conversation  from a predefined template. A ConversationFactory is typically created when  a plugin is instantiated and builds a Conversation each time a user  initiates a conversation with the plugin. Each Conversation maintains its  own state and calls back as needed into the plugin.    The ConversationFactory implements a fluid API, allowing parameters to be  set as an extension to the constructor.*/
export class ConversationFactory extends Object {
    /**Adds a ConversationAbandonedListener to all conversations  constructed by this factory.*/
    addConversationAbandonedListener (listener: ConversationAbandonedListener): ConversationFactory;
    /**Constructs a Conversation in accordance with the defaults set  for this factory.*/
    buildConversation (forWhom: Conversable): Conversation;
    /**Prevents this factory from creating a conversation for non-player  Conversable objects.*/
    thatExcludesNonPlayersWithMessage (playerOnlyMessage: String): ConversationFactory;
    /**Adds a ConversationCanceller to constructed conversations.*/
    withConversationCanceller (canceller: ConversationCanceller): ConversationFactory;
    /**Sets the player input that, when received, will immediately terminate  the conversation.*/
    withEscapeSequence (escapeSequence: String): ConversationFactory;
    /**Sets the first prompt to use in all generated conversations.*/
    withFirstPrompt (firstPrompt: Prompt): ConversationFactory;
    /**Sets any initial data with which to populate the conversation context  sessionData map.*/
    withInitialSessionData (initialSessionData: Map<Object,Object>): ConversationFactory;
    /**Sets the local echo status for all Conversations created by  this factory.*/
    withLocalEcho (localEchoEnabled: boolean): ConversationFactory;
    /**Sets the modality of all Conversations created by this factory.*/
    withModality (modal: boolean): ConversationFactory;
    /**Sets the ConversationPrefix that prepends all output from all  generated conversations.*/
    withPrefix (prefix: ConversationPrefix): ConversationFactory;
    /**Sets the number of inactive seconds to wait before automatically  abandoning all generated conversations.*/
    withTimeout (timeoutSeconds: number): ConversationFactory
}

/**A ConversationPrefix implementation prepends all output from the  conversation to the player. The ConversationPrefix can be used to display  the plugin name or conversation status as the conversation evolves.*/
export interface ConversationPrefix {
    /**Gets the prefix to use before each message to the player.*/
    getPrefix (context: ConversationContext): String
}

/**Represents a cooking recipe.*/
export class CookingRecipe<T extends CookingRecipe> extends Object implements Recipe, Keyed {
    /**Get the cooking time for this recipe in ticks.*/
    getCookingTime (): number;
    /**Get the experience given by this recipe.*/
    getExperience (): number;
    /**Get the group of this recipe.*/
    getGroup (): String;
    /**Get the input material.*/
    getInput (): ItemStack;
    /**Get the input choice.*/
    getInputChoice (): RecipeChoice;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Get the result of this recipe.*/
    getResult (): ItemStack;
    /**Set the cooking time for this recipe in ticks.*/
    setCookingTime (cookingTime: number): void;
    /**Sets the experience given by this recipe.*/
    setExperience (experience: number): void;
    /**Set the group of this recipe.*/
    setGroup (group: String): void;
    /**Sets the input of this cooking recipe.*/
    setInput (input: Material): CookingRecipe;
    /**Sets the input of this cooking recipe.*/
    setInputChoice (input: RecipeChoice): T
}

export interface CoralWallFan extends Directional, Waterlogged {

}

export class Counter<T> extends ForwardingMap<T,Long> {
    decrement (key: T): number;
    decrement (key: T, amount: number): number;
    delegate (): Map<T,Long>;
    getCount (key: T): number;
    increment (key: T): number;
    increment (key: T, amount: number): number
}

/**Represents a Cow.*/
export interface Cow extends Animals {

}

/**Interface to the crafting inventories*/
export interface CraftingInventory extends Inventory {
    /**Get the contents of the crafting matrix.*/
    getMatrix (): ItemStack[];
    /**Get the current recipe formed on the crafting inventory, if any.*/
    getRecipe (): Recipe;
    /**Check what item is in the result slot of this crafting inventory.*/
    getResult (): ItemStack;
    /**Replace the contents of the crafting matrix*/
    setMatrix (contents: ItemStack[]): void;
    /**Set the item in the result slot of the crafting inventory.*/
    setResult (newResult: ItemStack): void
}

/**Called when the recipe of an Item is completed inside a crafting matrix.*/
export class CraftItemEvent extends InventoryClickEvent {
    /**Gets the primary Inventory involved in this transaction*/
    getInventory (): CraftingInventory;
    getRecipe (): Recipe
}

/**Represents a Creature. Creatures are non-intelligent monsters or animals  which have very simple abilities.*/
export interface Creature extends Mob {

}

/**Represents a captured state of a creature spawner.*/
export interface CreatureSpawner extends TileState {
    /**Get the spawner's delay.*/
    getDelay (): number;
    /**Set the new maximum amount of similar entities that are allowed to be  within spawning range of this spawner.*/
    getMaxNearbyEntities (): number;
    /**The maximum spawn delay amount (in ticks).*/
    getMaxSpawnDelay (): number;
    /**The minimum spawn delay amount (in ticks).*/
    getMinSpawnDelay (): number;
    /**Get the maximum distance(squared) a player can be in order for this  spawner to be active.*/
    getRequiredPlayerRange (): number;
    /**Get how many mobs attempt to spawn.*/
    getSpawnCount (): number;
    /**Get the spawner's creature type.*/
    getSpawnedType (): EntityType;
    /**Get the radius around which the spawner will attempt to spawn mobs in.*/
    getSpawnRange (): number;
    /**Check if spawner is activated (a player is close enough)*/
    isActivated (): boolean;
    /**Resets the spawn delay timer within the min/max range*/
    resetTimer (): void;
    /**Set the spawner's delay.*/
    setDelay (delay: number): void;
    /**Set the maximum number of similar entities that are allowed to be within  spawning range of this spawner.*/
    setMaxNearbyEntities (maxNearbyEntities: number): void;
    /**Set the maximum spawn delay amount (in ticks).*/
    setMaxSpawnDelay (delay: number): void;
    /**Set the minimum spawn delay amount (in ticks).*/
    setMinSpawnDelay (delay: number): void;
    /**Set the maximum distance (squared) a player can be in order for this  spawner to be active.*/
    setRequiredPlayerRange (requiredPlayerRange: number): void;
    /**Set how many mobs attempt to spawn.*/
    setSpawnCount (spawnCount: number): void;
    /**Set the spawner's creature type.*/
    setSpawnedType (creatureType: EntityType): void;
    /**Set the new spawn range.*/
    setSpawnRange (spawnRange: number): void
}

/**Called when a creature is spawned into a world.    If a Creature Spawn event is cancelled, the creature will not spawn.*/
export class CreatureSpawnEvent extends EntitySpawnEvent {
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    /**Gets the reason for why the creature is being spawned.*/
    getSpawnReason (): CreatureSpawnEvent$SpawnReason
}

/**An enum to specify the type of spawning*/
export class CreatureSpawnEvent$SpawnReason extends Enum<CreatureSpawnEvent$SpawnReason> {
    /**When a bee is released from a beehive/bee nest*/
    static BEEHIVE: CreatureSpawnEvent$SpawnReason;
    /**When an animal breeds to create a child*/
    static BREEDING: CreatureSpawnEvent$SpawnReason;
    /**When an iron golem is spawned by being built*/
    static BUILD_IRONGOLEM: CreatureSpawnEvent$SpawnReason;
    /**When a snowman is spawned by being built*/
    static BUILD_SNOWMAN: CreatureSpawnEvent$SpawnReason;
    /**When a wither boss is spawned by being built*/
    static BUILD_WITHER: CreatureSpawnEvent$SpawnReason;
    /**Deprecated. no longer called, chunks are generated with entities  already existing.*/
    static CHUNK_GEN: CreatureSpawnEvent$SpawnReason;
    /**When a villager is cured from infection*/
    static CURED: CreatureSpawnEvent$SpawnReason;
    /**When a creature is spawned by plugins*/
    static CUSTOM: CreatureSpawnEvent$SpawnReason;
    /**When an entity is missing a SpawnReason*/
    static DEFAULT: CreatureSpawnEvent$SpawnReason;
    /**When a creature is spawned by a dispenser dispensing an egg*/
    static DISPENSE_EGG: CreatureSpawnEvent$SpawnReason;
    /**When a creature is spawned by another entity drowning*/
    static DROWNED: CreatureSpawnEvent$SpawnReason;
    /**When a creature spawns from an egg*/
    static EGG: CreatureSpawnEvent$SpawnReason;
    /**When an entity is spawned as a result of ender pearl usage*/
    static ENDER_PEARL: CreatureSpawnEvent$SpawnReason;
    /**When eg an effect cloud is spawned as a result of a creeper exploding*/
    static EXPLOSION: CreatureSpawnEvent$SpawnReason;
    /**When a zombie infects a villager*/
    static INFECTION: CreatureSpawnEvent$SpawnReason;
    /**When an entity spawns as a jockey of another entity (mostly spider  jockeys)*/
    static JOCKEY: CreatureSpawnEvent$SpawnReason;
    /**When a creature spawns because of a lightning strike*/
    static LIGHTNING: CreatureSpawnEvent$SpawnReason;
    /**When an entity spawns as a mount of another entity (mostly chicken  jockeys)*/
    static MOUNT: CreatureSpawnEvent$SpawnReason;
    /**When something spawns from natural means*/
    static NATURAL: CreatureSpawnEvent$SpawnReason;
    /**When a creature is spawned by nether portal*/
    static NETHER_PORTAL: CreatureSpawnEvent$SpawnReason;
    /**When an ocelot has a baby spawned along with them*/
    static OCELOT_BABY: CreatureSpawnEvent$SpawnReason;
    /**When an entity is spawned as part of a patrol*/
    static PATROL: CreatureSpawnEvent$SpawnReason;
    /**When an entity is spawned as part of a raid*/
    static RAID: CreatureSpawnEvent$SpawnReason;
    /**When an entity calls for reinforcements*/
    static REINFORCEMENTS: CreatureSpawnEvent$SpawnReason;
    /**When an cow is spawned by shearing a mushroom cow*/
    static SHEARED: CreatureSpawnEvent$SpawnReason;
    /**When an entity is spawned as a result of the entity it is being  perched on jumping or being damaged*/
    static SHOULDER_ENTITY: CreatureSpawnEvent$SpawnReason;
    /**When a silverfish spawns from a block*/
    static SILVERFISH_BLOCK: CreatureSpawnEvent$SpawnReason;
    /**When a slime splits*/
    static SLIME_SPLIT: CreatureSpawnEvent$SpawnReason;
    /**When a creature spawns from a spawner*/
    static SPAWNER: CreatureSpawnEvent$SpawnReason;
    /**When a creature spawns from a Spawner Egg*/
    static SPAWNER_EGG: CreatureSpawnEvent$SpawnReason;
    /**When an entity spawns as a trap for players approaching*/
    static TRAP: CreatureSpawnEvent$SpawnReason;
    /**When an iron golem is spawned to defend a village*/
    static VILLAGE_DEFENSE: CreatureSpawnEvent$SpawnReason;
    /**When a zombie is spawned to invade a village*/
    static VILLAGE_INVASION: CreatureSpawnEvent$SpawnReason
}

/**Represents a Creeper*/
export interface Creeper extends Monster {
    /**Makes this Creeper explode instantly.*/
    explode (): void;
    /**Get the explosion radius in which this Creeper's explosion will affect.*/
    getExplosionRadius (): number;
    /**Get the number of ticks this creeper has been ignited (armed to explode)*/
    getFuseTicks (): number;
    /**Get the maximum fuse ticks for this Creeper, where the maximum ticks  is the amount of time in which a creeper is allowed to be in the  primed state before exploding.*/
    getMaxFuseTicks (): number;
    /**Ignites this Creeper, beginning its fuse.*/
    ignite (): void;
    /**Check if creeper is ignited or not (armed to explode)*/
    isIgnited (): boolean;
    /**Checks if this Creeper is powered (Electrocuted)*/
    isPowered (): boolean;
    /**Set the explosion radius in which this Creeper's explosion will affect.*/
    setExplosionRadius (radius: number): void;
    /**Set whether creeper is ignited or not (armed to explode)*/
    setIgnited (ignited: boolean): void;
    /**Set the maximum fuse ticks for this Creeper, where the maximum ticks  is the amount of time in which a creeper is allowed to be in the  primed state before exploding.*/
    setMaxFuseTicks (ticks: number): void;
    /**Sets the Powered status of this Creeper*/
    setPowered (value: boolean): void
}

/**Called when a Creeper is ignite flag is changed (armed/disarmed to explode).*/
export class CreeperIgniteEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Creeper;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    isIgnited (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    setIgnited (ignited: boolean): void
}

/**Called when a Creeper is struck by lightning.    If a Creeper Power event is cancelled, the Creeper will not be powered.*/
export class CreeperPowerEvent extends EntityEvent implements Cancellable {
    /**Gets the cause of the creeper being (un)powered.*/
    getCause (): CreeperPowerEvent$PowerCause;
    /**Returns the Entity involved in this event*/
    getEntity (): Creeper;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the lightning bolt which is striking the Creeper.*/
    getLightning (): LightningStrike;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**An enum to specify the cause of the change in power*/
export class CreeperPowerEvent$PowerCause extends Enum<CreeperPowerEvent$PowerCause> {
    /**Power change caused by a lightning bolt*/
    static LIGHTNING: CreeperPowerEvent$PowerCause;
    /**Power change caused by something else (probably a plugin)*/
    static SET_OFF: CreeperPowerEvent$PowerCause;
    /**Power change caused by something else (probably a plugin)*/
    static SET_ON: CreeperPowerEvent$PowerCause
}

/**Criteria names which trigger an objective to be modified by actions in-game*/
export class Criterias extends Object {

}

/**Represents the different growth states of crops*/
export class CropState extends Enum<CropState> {
    /**First growth stage*/
    static GERMINATED: CropState;
    /**Fourth growth stage*/
    static MEDIUM: CropState;
    /**Ripe stage*/
    static RIPE: CropState;
    /**State when first seeded*/
    static SEEDED: CropState;
    /**Third growth stage*/
    static SMALL: CropState;
    /**Fifth growth stage*/
    static TALL: CropState;
    /**Second growth stage*/
    static VERY_SMALL: CropState;
    /**Almost ripe stage*/
    static VERY_TALL: CropState
}

export interface CrossbowMeta extends ItemMeta {
    /**Adds a charged projectile to this item.*/
    addChargedProjectile (item: ItemStack): void;
    /**Returns an immutable list of the projectiles charged on this item.*/
    getChargedProjectiles (): List<ItemStack>;
    /**Returns whether the item has any charged projectiles.*/
    hasChargedProjectiles (): boolean;
    /**Sets the projectiles charged on this item.*/
    setChargedProjectiles (projectiles: List<ItemStack>): void
}

/**Represents an Entity that has health and can take damage.*/
export interface Damageable extends Entity {
    /**Deals the given amount of damage to this entity.*/
    damage (amount: number): void;
    /**Deals the given amount of damage to this entity, from a specified  entity.*/
    damage (amount: number, source: Entity): void;
    /**Gets the entity's absorption amount.*/
    getAbsorptionAmount (): number;
    /**Gets the entity's health from 0 to getMaxHealth(), where 0 is dead.*/
    getHealth (): number;
    /**Sets the entity's absorption amount.*/
    setAbsorptionAmount (amount: number): void;
    /**Sets the entity's health from 0 to getMaxHealth(), where 0 is  dead.*/
    setHealth (health: number): void
}

/**Represents an item that has durability and can take damage.*/
export interface Damageable {
    clone (): Damageable;
    /**Gets the damage*/
    getDamage (): number;
    /**Checks to see if this item has damage*/
    hasDamage (): boolean;
    /**Sets the damage*/
    setDamage (damage: number): void
}

/**'inverted' denotes whether this daylight detector is in the inverted mode,  i.e. activates in the absence of light rather than presence."*/
export interface DaylightDetector extends AnaloguePowerable {
    /**Gets the value of the 'inverted' property.*/
    isInverted (): boolean;
    /**Sets the value of the 'inverted' property.*/
    setInverted (inverted: boolean): void
}

/**Represents a captured state of a (possibly inverted) daylight detector.*/
export interface DaylightDetector extends TileState {

}

export class DefaultPermissions extends Object {
    static registerCorePermissions (): void;
    static registerPermission (name: String, desc: String): Permission;
    static registerPermission (name: String, desc: String, parent: Permission): Permission;
    static registerPermission (name: String, desc: String, def: PermissionDefault): Permission;
    static registerPermission (name: String, desc: String, def: PermissionDefault, children: Map<String,Boolean>): Permission;
    static registerPermission (name: String, desc: String, def: PermissionDefault, children: Map<String,Boolean>, parent: Permission): Permission;
    static registerPermission (name: String, desc: String, def: PermissionDefault, parent: Permission): Permission;
    static registerPermission (perm: Permission): Permission;
    static registerPermission (perm: Permission, withLegacy: boolean): Permission;
    static registerPermission (perm: Permission, parent: Permission): Permission
}

/**Represents the various difficulty levels that are available.*/
export class Difficulty extends Enum<Difficulty> {
    /**Hostile mobs spawn, enemies deal less damage than on normal difficulty,  the hunger bar does deplete and starving deals up to 5 hearts of  damage.*/
    static EASY: Difficulty;
    /**Hostile mobs spawn, enemies deal greater damage than on normal  difficulty, the hunger bar does deplete and starving can kill players.*/
    static HARD: Difficulty;
    /**Hostile mobs spawn, enemies deal normal amounts of damage, the hunger  bar does deplete and starving deals up to 9.5 hearts of damage.*/
    static NORMAL: Difficulty;
    /**Players regain health over time, hostile mobs don't spawn, the hunger  bar does not deplete.*/
    static PEACEFUL: Difficulty
}

/**'facing' represents the face towards which the block is pointing.    Some blocks may not be able to face in all directions, use  getFaces() to get all possible directions for this block.*/
export interface Directional extends BlockData {
    /**Gets the faces which are applicable to this block.*/
    getFaces (): Set<BlockFace>;
    /**Gets the value of the 'facing' property.*/
    getFacing (): BlockFace;
    /**Sets the value of the 'facing' property.*/
    setFacing (facing: BlockFace): void
}

export interface Directional {
    /**Gets the direction this block is facing*/
    getFacing (): BlockFace;
    /**Sets the direction that this block is facing in*/
    setFacingDirection (face: BlockFace): void
}

/**Similar to Powerable, 'triggered' indicates whether or not the  dispenser is currently activated.*/
export interface Dispenser extends Directional {
    /**Gets the value of the 'triggered' property.*/
    isTriggered (): boolean;
    /**Sets the value of the 'triggered' property.*/
    setTriggered (triggered: boolean): void
}

/**Represents a captured state of a dispenser.*/
export interface Dispenser extends Container, Nameable, LootableBlockInventory {
    /**Attempts to dispense the contents of the dispenser.*/
    dispense (): boolean;
    /**Gets the BlockProjectileSource object for the dispenser.*/
    getBlockProjectileSource (): BlockProjectileSource
}

/**Locations for displaying objectives to the player*/
export class DisplaySlot extends Enum<DisplaySlot> {
    static BELOW_NAME: DisplaySlot;
    static PLAYER_LIST: DisplaySlot;
    static SIDEBAR: DisplaySlot
}

export interface Dolphin extends WaterMob {

}

/**Represents a Donkey - variant of ChestedHorse.*/
export interface Donkey extends ChestedHorse {

}

/**'hinge' indicates which hinge this door is attached to and will rotate around  when opened.*/
export interface Door extends Bisected, Directional, Openable, Powerable {
    /**Gets the value of the 'hinge' property.*/
    getHinge (): Door$Hinge;
    /**Sets the value of the 'hinge' property.*/
    setHinge (hinge: Door$Hinge): void
}

/**The hinge of a door.*/
export class Door$Hinge extends Enum<Door$Hinge> {
    /**Door is attached to the left side.*/
    static LEFT: Door$Hinge;
    /**Door is attached to the right side.*/
    static RIGHT: Door$Hinge
}

/**Represents a double chest.*/
export class DoubleChest extends Object implements InventoryHolder {
    /**Get the object's inventory.*/
    getInventory (): Inventory;
    getLeftSide (): InventoryHolder;
    getLeftSide (useSnapshot: boolean): InventoryHolder;
    getLocation (): Location;
    getRightSide (): InventoryHolder;
    getRightSide (useSnapshot: boolean): InventoryHolder;
    getWorld (): World;
    getX (): number;
    getY (): number;
    getZ (): number
}

/**Interface to the inventory of a Double Chest.*/
export interface DoubleChestInventory extends Inventory {
    /**Gets the block or entity belonging to the open inventory*/
    getHolder (): DoubleChest;
    /**Get the left half of this double chest.*/
    getLeftSide (): Inventory;
    /**Get the right side of this double chest.*/
    getRightSide (): Inventory
}

/**Represents a dragon battle state for a world with an end environment.*/
export interface DragonBattle {
    /**Generate the end portal.*/
    generateEndPortal (withPortals: boolean): boolean;
    /**Get the boss bar to be displayed for this dragon battle.*/
    getBossBar (): BossBar;
    /**Get the EnderDragon active in this battle.*/
    getEnderDragon (): EnderDragon;
    /**Get the location of the end portal.*/
    getEndPortalLocation (): Location;
    /**Get this battle's current respawn phase.*/
    getRespawnPhase (): DragonBattle$RespawnPhase;
    /**Check whether or not the first dragon has been killed already.*/
    hasBeenPreviouslyKilled (): boolean;
    /**Initiate a respawn sequence to summon the dragon as though a player has  placed 4 end crystals on the portal.*/
    initiateRespawn (): void;
    /**Reset the crystals located on the obsidian pillars (remove their beam  targets and invulnerability).*/
    resetCrystals (): void;
    /**Set the dragon's respawn phase.*/
    setRespawnPhase (phase: DragonBattle$RespawnPhase): boolean
}

/**Represents a phase in the dragon respawn process.*/
export class DragonBattle$RespawnPhase extends Enum<DragonBattle$RespawnPhase> {
    /**The end of the respawn sequence.*/
    static END: DragonBattle$RespawnPhase;
    /**No respawn is in progress.*/
    static NONE: DragonBattle$RespawnPhase;
    /**The crystal beams remain directed upwards.*/
    static PREPARING_TO_SUMMON_PILLARS: DragonBattle$RespawnPhase;
    /**The crystal beams are directed upwards into the sky.*/
    static START: DragonBattle$RespawnPhase;
    /**All crystals (including those from the pillars) are aimed towards the  sky.*/
    static SUMMONING_DRAGON: DragonBattle$RespawnPhase;
    /**The crystal beams are directed from pillar to pillar, regenerating  their crystals if necessary.*/
    static SUMMONING_PILLARS: DragonBattle$RespawnPhase
}

export interface DragonFireball extends Fireball {

}

/**Represents the effect of a drag that will be applied to an Inventory in an  InventoryDragEvent.*/
export class DragType extends Enum<DragType> {
    /**The cursor is split evenly across all selected slots, not to exceed the  Material's max stack size, with the remainder going to the cursor.*/
    static EVEN: DragType;
    /**One item from the cursor is placed in each selected slot.*/
    static SINGLE: DragType
}

/**Represents a captured state of a dropper.*/
export interface Dropper extends Container, LootableBlockInventory {
    /**Tries to drop a randomly selected item from the dropper's inventory,  following the normal behavior of a dropper.*/
    drop (): void
}

/**Drowned zombie.*/
export interface Drowned extends Zombie, RangedEntity {

}

/**All supported color values for dyes and cloth*/
export class DyeColor extends Enum<DyeColor> {
    /**Represents black dye.*/
    static BLACK: DyeColor;
    /**Represents blue dye.*/
    static BLUE: DyeColor;
    /**Represents brown dye.*/
    static BROWN: DyeColor;
    /**Represents cyan dye.*/
    static CYAN: DyeColor;
    /**Represents gray dye.*/
    static GRAY: DyeColor;
    /**Represents green dye.*/
    static GREEN: DyeColor;
    /**Represents light blue dye.*/
    static LIGHT_BLUE: DyeColor;
    /**Represents light gray dye.*/
    static LIGHT_GRAY: DyeColor;
    /**Represents lime dye.*/
    static LIME: DyeColor;
    /**Represents magenta dye.*/
    static MAGENTA: DyeColor;
    /**Represents orange dye.*/
    static ORANGE: DyeColor;
    /**Represents pink dye.*/
    static PINK: DyeColor;
    /**Represents purple dye.*/
    static PURPLE: DyeColor;
    /**Represents red dye.*/
    static RED: DyeColor;
    /**Represents white dye.*/
    static WHITE: DyeColor;
    /**Represents yellow dye.*/
    static YELLOW: DyeColor
}

/**A list of effects that the server is able to send to players.*/
export class Effect extends Enum<Effect> {
    /**The sound played when an anvil breaks*/
    static ANVIL_BREAK: Effect;
    /**The sound played when an anvil lands after  falling*/
    static ANVIL_LAND: Effect;
    /**The sound played when an anvil is used*/
    static ANVIL_USE: Effect;
    /**Sound played by a bat taking off*/
    static BAT_TAKEOFF: Effect;
    /**Sound of blaze firing.*/
    static BLAZE_SHOOT: Effect;
    /**Sound of a bow firing.*/
    static BOW_FIRE: Effect;
    /**The sound played by brewing stands when brewing*/
    static BREWING_STAND_BREW: Effect;
    /**The sound played when a chorus flower dies*/
    static CHORUS_FLOWER_DEATH: Effect;
    /**The sound played when a chorus flower grows*/
    static CHORUS_FLOWER_GROW: Effect;
    /**A click sound.*/
    static CLICK1: Effect;
    /**An alternate click sound.*/
    static CLICK2: Effect;
    /**Sound of a door closing.*/
    static DOOR_CLOSE: Effect;
    /**Sound of a door opening.*/
    static DOOR_TOGGLE: Effect;
    /**The sound/particles used by the enderdragon's breath  attack.*/
    static DRAGON_BREATH: Effect;
    /**The sound/particles caused by a end gateway spawning*/
    static END_GATEWAY_SPAWN: Effect;
    /**An ender eye signal; a visual effect.*/
    static ENDER_SIGNAL: Effect;
    /**The sound of an enderdragon growling*/
    static ENDERDRAGON_GROWL: Effect;
    /**Sound of an enderdragon firing*/
    static ENDERDRAGON_SHOOT: Effect;
    /**The sound played when launching an endereye*/
    static ENDEREYE_LAUNCH: Effect;
    /**Sound of fire being extinguished.*/
    static EXTINGUISH: Effect;
    /**Sound of a door closing.*/
    static FENCE_GATE_CLOSE: Effect;
    /**Sound of a door opening.*/
    static FENCE_GATE_TOGGLE: Effect;
    /**The sound played when launching a firework*/
    static FIREWORK_SHOOT: Effect;
    /**Sound of ghast firing.*/
    static GHAST_SHOOT: Effect;
    /**Sound of ghast shrieking.*/
    static GHAST_SHRIEK: Effect;
    /**Visual effect of an instant splash potion breaking.*/
    static INSTANT_POTION_BREAK: Effect;
    /**Sound of a door closing.*/
    static IRON_DOOR_CLOSE: Effect;
    /**Sound of a door opening.*/
    static IRON_DOOR_TOGGLE: Effect;
    /**Sound of a door closing.*/
    static IRON_TRAPDOOR_CLOSE: Effect;
    /**Sound of a door opening.*/
    static IRON_TRAPDOOR_TOGGLE: Effect;
    /**The flames seen on a mobspawner; a visual effect.*/
    static MOBSPAWNER_FLAMES: Effect;
    /**The sound played when traveling through a portal*/
    static PORTAL_TRAVEL: Effect;
    /**Visual effect of a splash potion breaking.*/
    static POTION_BREAK: Effect;
    /**A song from a record.*/
    static RECORD_PLAY: Effect;
    /**A visual smoke effect.*/
    static SMOKE: Effect;
    /**Sound of a block breaking.*/
    static STEP_SOUND: Effect;
    /**Sound of a trapdoor closing.*/
    static TRAPDOOR_CLOSE: Effect;
    /**Sound of a trapdoor opening.*/
    static TRAPDOOR_TOGGLE: Effect;
    /**Particles displayed when a villager grows a plant, data  is the number of particles*/
    static VILLAGER_PLANT_GROW: Effect;
    /**The sound played when a wither breaks a block*/
    static WITHER_BREAK_BLOCK: Effect;
    /**Sound of a wither shooting*/
    static WITHER_SHOOT: Effect;
    /**Sound of zombies chewing on iron doors.*/
    static ZOMBIE_CHEW_IRON_DOOR: Effect;
    /**Sound of zombies chewing on wooden doors.*/
    static ZOMBIE_CHEW_WOODEN_DOOR: Effect;
    /**The sound played when a villager is converted by  a zombie*/
    static ZOMBIE_CONVERTED_VILLAGER: Effect;
    /**Sound of zombies destroying a door.*/
    static ZOMBIE_DESTROY_DOOR: Effect;
    /**The sound played when a zombie infects a target*/
    static ZOMBIE_INFECT: Effect
}

/**Represents the type of an effect.*/
export class Effect$Type extends Enum<Effect$Type> {
    static SOUND: Effect$Type;
    static VISUAL: Effect$Type
}

/**Represents a thrown egg.*/
export interface Egg extends ThrowableProjectile {

}

/**Represents an ElderGuardian - variant of Guardian.*/
export interface ElderGuardian extends Guardian {

}

/**Interface to the inventory of an Enchantment Table.*/
export interface EnchantingInventory extends Inventory {
    /**Get the item being enchanted.*/
    getItem (): ItemStack;
    /**Get the secondary item being used for the enchant.*/
    getSecondary (): ItemStack;
    /**Set the item being enchanted.*/
    setItem (item: ItemStack): void;
    /**Set the secondary item being used for the enchant.*/
    setSecondary (item: ItemStack): void
}

/**Represents a captured state of an enchanting table.*/
export interface EnchantingTable extends TileState, Nameable {

}

/**Called when an ItemStack is successfully enchanted (currently at  enchantment table)*/
export class EnchantItemEvent extends InventoryEvent implements Cancellable {
    /**Gets the block being used to enchant the item*/
    getEnchantBlock (): Block;
    /**Gets the player enchanting the item*/
    getEnchanter (): Player;
    /**Get map of enchantment (levels, keyed by type) to be added to item  (modify map returned to change values).*/
    getEnchantsToAdd (): Map<Enchantment,Integer>;
    /**Gets the cost (minimum level) which is displayed as a number on the right  hand side of the enchantment offer.*/
    getExpLevelCost (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item to be enchanted (can be modified)*/
    getItem (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the cost (minimum level) which is displayed as a number on the right  hand side of the enchantment offer.*/
    setExpLevelCost (level: number): void;
    /**Which button was pressed to initiate the enchanting.*/
    whichButton (): number
}

/**The various type of enchantments that may be added to armour or weapons*/
export class Enchantment extends Object implements Keyed {
    /**Checks if this Enchantment may be applied to the given ItemStack.*/
    canEnchantItem (item: ItemStack): boolean;
    /**Check if this enchantment conflicts with another enchantment.*/
    conflictsWith (other: Enchantment): boolean;
    equals (obj: Object): boolean;
    /**Gets the Enchantment at the specified key*/
    static getByKey (key: NamespacedKey): Enchantment;
    /**Gets the type of ItemStack that may fit this Enchantment.*/
    getItemTarget (): EnchantmentTarget;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Gets the maximum level that this Enchantment may become.*/
    getMaxLevel (): number;
    /**Gets the level that this Enchantment should start at*/
    getStartLevel (): number;
    hashCode (): number;
    /**Checks if this is accepting Enchantment registrations.*/
    static isAcceptingRegistrations (): boolean;
    /**Checks if this enchantment is a treasure enchantment.*/
    isTreasure (): boolean;
    /**Registers an enchantment with the given ID and object.*/
    static registerEnchantment (enchantment: Enchantment): void;
    /**Stops accepting any enchantment registrations*/
    static stopAcceptingRegistrations (): void;
    toString (): String;
    /**Gets an array of all the registered Enchantments*/
    static values (): Enchantment[]
}

/**A class for the available enchantment offers in the enchantment table.*/
export class EnchantmentOffer extends Object {
    /**Gets the cost (minimum level) which is displayed as a number on the right  hand side of the enchantment offer.*/
    getCost (): number;
    /**Get the type of the enchantment.*/
    getEnchantment (): Enchantment;
    /**Gets the level of the enchantment.*/
    getEnchantmentLevel (): number;
    /**Sets the cost (minimum level) which is displayed as a number on the right  hand side of the enchantment offer.*/
    setCost (cost: number): void;
    /**Sets the type of the enchantment.*/
    setEnchantment (enchantment: Enchantment): void;
    /**Sets the level of the enchantment.*/
    setEnchantmentLevel (enchantmentLevel: number): void
}

/**EnchantmentMeta is specific to items that can store enchantments, as  opposed to being enchanted. Material.ENCHANTED_BOOK is an example  of an item with enchantment storage.*/
export interface EnchantmentStorageMeta extends ItemMeta {
    /**Stores the specified enchantment in this item meta.*/
    addStoredEnchant (ench: Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
    clone (): EnchantmentStorageMeta;
    /**Checks for the level of the stored enchantment.*/
    getStoredEnchantLevel (ench: Enchantment): number;
    /**Gets a copy the stored enchantments in this ItemMeta.*/
    getStoredEnchants (): Map<Enchantment,Integer>;
    /**Checks if the specified enchantment conflicts with any enchantments in  this ItemMeta.*/
    hasConflictingStoredEnchant (ench: Enchantment): boolean;
    /**Checks for storage of the specified enchantment.*/
    hasStoredEnchant (ench: Enchantment): boolean;
    /**Checks for the existence of any stored enchantments.*/
    hasStoredEnchants (): boolean;
    /**Remove the specified stored enchantment from this item meta.*/
    removeStoredEnchant (ench: Enchantment): boolean
}

/**Represents the applicable target for a Enchantment*/
export class EnchantmentTarget extends Enum<EnchantmentTarget> {
    /**Deprecated. this target no longer exists in Vanilla*/
    static ALL: EnchantmentTarget;
    /**Allows the Enchantment to be placed on armor*/
    static ARMOR: EnchantmentTarget;
    /**Allows the Enchantment to be placed on feet slot armor*/
    static ARMOR_FEET: EnchantmentTarget;
    /**Allows the Enchantment to be placed on head slot armor*/
    static ARMOR_HEAD: EnchantmentTarget;
    /**Allows the Enchantment to be placed on leg slot armor*/
    static ARMOR_LEGS: EnchantmentTarget;
    /**Allows the Enchantment to be placed on torso slot armor*/
    static ARMOR_TORSO: EnchantmentTarget;
    /**Allows the Enchantment to be placed on bows.*/
    static BOW: EnchantmentTarget;
    /**Allows the enchantment to be placed on items with durability.*/
    static BREAKABLE: EnchantmentTarget;
    /**Allow the Enchantment to be placed on crossbows.*/
    static CROSSBOW: EnchantmentTarget;
    /**Allows the Enchantment to be placed on fishing rods.*/
    static FISHING_ROD: EnchantmentTarget;
    /**Allows the Enchantment to be placed on tools (spades, pickaxe, axes)*/
    static TOOL: EnchantmentTarget;
    /**Allow the Enchantment to be placed on tridents.*/
    static TRIDENT: EnchantmentTarget;
    /**Allow the Enchantment to be placed on vanishing items.*/
    static VANISHABLE: EnchantmentTarget;
    /**Allows the Enchantment to be placed on weapons (swords)*/
    static WEAPON: EnchantmentTarget;
    /**Allows the enchantment to be placed on wearable items.*/
    static WEARABLE: EnchantmentTarget
}

/**A simple wrapper for ease of selecting Enchantments*/
export class EnchantmentWrapper extends Enchantment {
    /**Checks if this Enchantment may be applied to the given ItemStack.*/
    canEnchantItem (item: ItemStack): boolean;
    /**Check if this enchantment conflicts with another enchantment.*/
    conflictsWith (other: Enchantment): boolean;
    /**Gets the enchantment bound to this wrapper*/
    getEnchantment (): Enchantment;
    /**Gets the type of ItemStack that may fit this Enchantment.*/
    getItemTarget (): EnchantmentTarget;
    /**Gets the maximum level that this Enchantment may become.*/
    getMaxLevel (): number;
    /**Gets the unique name of this enchantment*/
    getName (): String;
    /**Gets the level that this Enchantment should start at*/
    getStartLevel (): number;
    /**Checks if this enchantment is a cursed enchantment    Cursed enchantments are found the same way treasure enchantments are*/
    isCursed (): boolean;
    /**Checks if this enchantment is a treasure enchantment.*/
    isTreasure (): boolean
}

export interface EnderChest extends Directional, Waterlogged {

}

/**Represents a captured state of an ender chest.*/
export interface EnderChest extends TileState {

}

/**A crystal that heals nearby EnderDragons*/
export interface EnderCrystal extends Entity {
    /**Gets the location that this end crystal is pointing its beam to.*/
    getBeamTarget (): Location;
    /**Return whether or not this end crystal is showing the  bedrock slate underneath it.*/
    isShowingBottom (): boolean;
    /**Sets the location that this end crystal is pointing to.*/
    setBeamTarget (location: Location): void;
    /**Sets whether or not this end crystal is showing the  bedrock slate underneath it.*/
    setShowingBottom (showing: boolean): void
}

/**Represents an Ender Dragon*/
export interface EnderDragon extends ComplexLivingEntity, Boss, Mob {
    /**Get the current time in ticks relative to the start of this dragon's  death animation.*/
    getDeathAnimationTicks (): number;
    /**Get the DragonBattle associated with this EnderDragon.*/
    getDragonBattle (): DragonBattle;
    /**Gets the current phase that the dragon is performing.*/
    getPhase (): EnderDragon$Phase;
    /**Sets the next phase for the dragon to perform.*/
    setPhase (phase: EnderDragon$Phase): void
}

/**Represents a phase or action that an Ender Dragon can perform.*/
export class EnderDragon$Phase extends Enum<EnderDragon$Phase> {
    /**The dragon will attack with dragon breath at its current location.*/
    static BREATH_ATTACK: EnderDragon$Phase;
    /**The dragon will charge a player.*/
    static CHARGE_PLAYER: EnderDragon$Phase;
    /**The dragon will circle outside the ring of pillars if ender  crystals remain or inside the ring if not.*/
    static CIRCLING: EnderDragon$Phase;
    /**The dragon will fly to the vicinity of the portal and die.*/
    static DYING: EnderDragon$Phase;
    /**The dragon will fly towards the empty portal (approaching  from the other side, if applicable).*/
    static FLY_TO_PORTAL: EnderDragon$Phase;
    /**The dragon will hover at its current location, not performing any actions.*/
    static HOVER: EnderDragon$Phase;
    /**The dragon will land on on the portal.*/
    static LAND_ON_PORTAL: EnderDragon$Phase;
    /**The dragon will leave the portal.*/
    static LEAVE_PORTAL: EnderDragon$Phase;
    /**The dragon will roar before performing a breath attack.*/
    static ROAR_BEFORE_ATTACK: EnderDragon$Phase;
    /**The dragon will search for a player to attack with dragon breath.*/
    static SEARCH_FOR_BREATH_ATTACK_TARGET: EnderDragon$Phase;
    /**The dragon will fly towards a targeted player and shoot a  fireball when within 64 blocks.*/
    static STRAFING: EnderDragon$Phase
}

/**Called when an EnderDragon switches controller phase.*/
export class EnderDragonChangePhaseEvent extends EntityEvent implements Cancellable {
    /**Gets the current phase that the dragon is in.*/
    getCurrentPhase (): EnderDragon$Phase;
    /**Returns the Entity involved in this event*/
    getEntity (): EnderDragon;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new phase that the dragon will switch to.*/
    getNewPhase (): EnderDragon$Phase;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the new phase for the ender dragon.*/
    setNewPhase (newPhase: EnderDragon$Phase): void
}

/**Fired when a DragonFireball collides with a block/entity and spawns an AreaEffectCloud*/
export class EnderDragonFireballHitEvent extends EntityEvent implements Cancellable {
    getAreaEffectCloud (): AreaEffectCloud;
    /**The fireball involved in this event*/
    getEntity (): DragonFireball;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**The living entities hit by fireball   May be null if no entities were hit*/
    getTargets (): Collection<LivingEntity>;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Fired when an EnderDragon spawns an AreaEffectCloud by shooting flames*/
export class EnderDragonFlameEvent extends EntityEvent implements Cancellable {
    getAreaEffectCloud (): AreaEffectCloud;
    /**The enderdragon involved in this event*/
    getEntity (): EnderDragon;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents an ender dragon part*/
export interface EnderDragonPart extends ComplexEntityPart, Damageable {
    /**Gets the parent ComplexLivingEntity of this part.*/
    getParent (): EnderDragon
}

/**Fired when an EnderDragon shoots a fireball*/
export class EnderDragonShootFireballEvent extends EntityEvent implements Cancellable {
    /**The enderdragon shooting the fireball*/
    getEntity (): EnderDragon;
    getFireball (): DragonFireball;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents an Enderman.*/
export interface Enderman extends Monster {
    /**Gets the data of the block that the Enderman is carrying.*/
    getCarriedBlock (): BlockData;
    /**Gets the id and data of the block that the Enderman is carrying.*/
    getCarriedMaterial (): MaterialData;
    /**Sets the data of the block that the Enderman is carrying.*/
    setCarriedBlock (blockData: BlockData): void;
    /**Sets the id and data of the block that the Enderman is carrying.*/
    setCarriedMaterial (material: MaterialData): void;
    /**Try to teleport the enderman to a random nearby location.*/
    teleportRandomly (): boolean
}

/**Fired when an Enderman determines if it should attack a player or not.  Starts off cancelled if the player is wearing a pumpkin head or is not looking  at the Enderman, according to Vanilla rules.*/
export class EndermanAttackPlayerEvent extends EntityEvent implements Cancellable {
    /**The enderman considering attacking*/
    getEntity (): Enderman;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**The player the Enderman is considering attacking*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Cancels if the Enderman will attack this player*/
    setCancelled (cancel: boolean): void
}

export class EndermanEscapeEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Enderman;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getReason (): EndermanEscapeEvent$Reason;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Cancels the escape.*/
    setCancelled (cancel: boolean): void
}

export class EndermanEscapeEvent$Reason extends Enum<EndermanEscapeEvent$Reason> {
    /**The enderman has teleported away due to a critical hit*/
    static CRITICAL_HIT: EndermanEscapeEvent$Reason;
    /**Specific case for CRITICAL_HIT where the enderman is taking rain damage*/
    static DROWN: EndermanEscapeEvent$Reason;
    /**The enderman has teleported away due to indirect damage (ranged)*/
    static INDIRECT: EndermanEscapeEvent$Reason;
    /**The enderman has stopped attacking and ran away*/
    static RUNAWAY: EndermanEscapeEvent$Reason;
    /**The enderman has teleported away due to the player staring at it during combat*/
    static STARE: EndermanEscapeEvent$Reason
}

export interface Endermite extends Monster {
    /**Gets whether this Endermite was spawned by a player.*/
    isPlayerSpawned (): boolean;
    /**Sets whether this Endermite was spawned by a player.*/
    setPlayerSpawned (playerSpawned: boolean): void
}

/**Represents a thrown Ender Pearl entity*/
export interface EnderPearl extends ThrowableProjectile {

}

/**Represents an EnderSignal, which is created upon throwing an ender eye.*/
export interface EnderSignal extends Entity {
    /**Gets the amount of time this entity has been alive (in ticks).*/
    getDespawnTimer (): number;
    /**Gets if the EnderSignal should drop an item on death.  If true, it will drop an item.*/
    getDropItem (): boolean;
    /**Get the ItemStack to be displayed while in the air and to be  dropped on death.*/
    getItem (): ItemStack;
    /**Get the location this EnderSignal is moving towards.*/
    getTargetLocation (): Location;
    /**Set how long this entity has been alive (in ticks).*/
    setDespawnTimer (timer: number): void;
    /**Sets if the EnderSignal should drop an item on death; or if it should  shatter.*/
    setDropItem (drop: boolean): void;
    /**Set the ItemStack to be displayed while in the air and to be  dropped on death.*/
    setItem (item: ItemStack): void;
    /**Set the Location this EnderSignal is moving towards.*/
    setTargetLocation (location: Location): void
}

/**Represents a captured state of an end gateway.*/
export interface EndGateway extends TileState {
    /**Gets the age in ticks of the gateway.*/
    getAge (): number;
    /**Gets the location that entities are teleported to when  entering the gateway portal.*/
    getExitLocation (): Location;
    /**Gets whether this gateway will teleport entities directly to  the exit location instead of finding a nearby location.*/
    isExactTeleport (): boolean;
    /**Sets the age in ticks of the gateway.*/
    setAge (age: number): void;
    /**Sets whether this gateway will teleport entities directly to  the exit location instead of finding a nearby location.*/
    setExactTeleport (exact: boolean): void;
    /**Sets the exit location that entities are teleported to when  they enter the gateway portal.*/
    setExitLocation (location: Location): void
}

/**'eye' denotes whether this end portal frame has been activated by having an  eye of ender placed in it.*/
export interface EndPortalFrame extends Directional {
    /**Gets the value of the 'eye' property.*/
    hasEye (): boolean;
    /**Sets the value of the 'eye' property.*/
    setEye (eye: boolean): void
}

/**Represents a base entity in the world*/
export interface Entity extends Metadatable, CommandSender, Nameable, PersistentDataHolder {
    /**Add a passenger to the vehicle.*/
    addPassenger (passenger: Entity): boolean;
    /**Add a tag to this entity.*/
    addScoreboardTag (tag: String): boolean;
    /**Eject any passenger.*/
    eject (): boolean;
    /**Returns whether this entity was spawned from a mob spawner.*/
    fromMobSpawner (): boolean;
    /**Gets the entity's current bounding box.*/
    getBoundingBox (): BoundingBox;
    /**Gets the latest chunk an entity is currently or was in.*/
    getChunk (): Chunk;
    /**Returns a unique id for this entity*/
    getEntityId (): number;
    getEntitySpawnReason (): CreatureSpawnEvent$SpawnReason;
    /**Get the closest cardinal BlockFace direction an entity is  currently facing.*/
    getFacing (): BlockFace;
    /**Returns the distance this entity has fallen*/
    getFallDistance (): number;
    /**Returns the entity's current fire ticks (ticks before the entity stops  being on fire).*/
    getFireTicks (): number;
    /**Gets the entity's height*/
    getHeight (): number;
    /**Retrieve the last EntityDamageEvent inflicted on this entity.*/
    getLastDamageCause (): EntityDamageEvent;
    getLocation (): Location;
    /**Stores the entity's current position in the provided Location object.*/
    getLocation (loc: Location): Location;
    /**Returns the entity's maximum fire ticks.*/
    getMaxFireTicks (): number;
    /**Returns a list of entities within a bounding box centered around this  entity*/
    getNearbyEntities (x: number, y: number, z: number): List<Entity>;
    /**Gets the location where this entity originates from.*/
    getOrigin (): Location;
    /**Gets a list of passengers of this vehicle.*/
    getPassengers (): List<Entity>;
    /**Returns the reaction of the entity when moved by a piston.*/
    getPistonMoveReaction (): PistonMoveReaction;
    /**Gets the period of time (in ticks) before this entity can use a portal.*/
    getPortalCooldown (): number;
    /**Gets the entity's current pose.*/
    getPose (): Pose;
    /**Returns a set of tags for this entity.*/
    getScoreboardTags (): Set<String>;
    /**Gets the Server that contains this Entity*/
    getServer (): Server;
    /**Gets the amount of ticks this entity has lived for.*/
    getTicksLived (): number;
    /**Get the type of the entity.*/
    getType (): EntityType;
    /**Returns a unique and persistent id for this entity*/
    getUniqueId (): UUID;
    /**Get the vehicle that this player is inside.*/
    getVehicle (): Entity;
    /**Gets this entity's current velocity*/
    getVelocity (): Vector;
    /**Gets the entity's width*/
    getWidth (): number;
    /**Gets the current world this entity resides in*/
    getWorld (): World;
    /**Returns whether gravity applies to this entity.*/
    hasGravity (): boolean;
    /**Gets whether or not the mob's custom name is displayed client side.*/
    isCustomNameVisible (): boolean;
    /**Returns true if this entity has been marked for removal.*/
    isDead (): boolean;
    /**Check if a vehicle has passengers.*/
    isEmpty (): boolean;
    /**Gets whether the entity is glowing or not.*/
    isGlowing (): boolean;
    /**Check if entity is in bubble column*/
    isInBubbleColumn (): boolean;
    /**Check if entity is in lava*/
    isInLava (): boolean;
    /**Check if entity is in rain*/
    isInRain (): boolean;
    /**Returns whether this entity is inside a vehicle.*/
    isInsideVehicle (): boolean;
    /**Gets whether the entity is invulnerable or not.*/
    isInvulnerable (): boolean;
    /**Check if entity is in water*/
    isInWater (): boolean;
    /**Check if entity is in water or bubble column*/
    isInWaterOrBubbleColumn (): boolean;
    /**Check if entity is in water or rain*/
    isInWaterOrRain (): boolean;
    /**Check if entity is in water or rain or bubble column*/
    isInWaterOrRainOrBubbleColumn (): boolean;
    /**Returns true if the entity is supported by a block.*/
    isOnGround (): boolean;
    /**Returns true if the entity gets persisted.*/
    isPersistent (): boolean;
    /**Gets whether the entity is silent or not.*/
    isSilent (): boolean;
    /**Returns false if the entity has died or been despawned for some other  reason.*/
    isValid (): boolean;
    /**Leave the current vehicle.*/
    leaveVehicle (): boolean;
    /**Performs the specified EntityEffect for this entity.*/
    playEffect (type: EntityEffect): void;
    /**Mark the entity's removal.*/
    remove (): void;
    /**Remove a passenger from the vehicle.*/
    removePassenger (passenger: Entity): boolean;
    /**Removes a given tag from this entity.*/
    removeScoreboardTag (tag: String): boolean;
    /**Sets whether or not to display the mob's custom name client side.*/
    setCustomNameVisible (flag: boolean): void;
    /**Sets the fall distance for this entity*/
    setFallDistance (distance: number): void;
    /**Sets the entity's current fire ticks (ticks before the entity stops  being on fire).*/
    setFireTicks (ticks: number): void;
    /**Sets whether the entity has a team colored (default: white) glow.*/
    setGlowing (flag: boolean): void;
    /**Sets whether gravity applies to this entity.*/
    setGravity (gravity: boolean): void;
    /**Sets whether the entity is invulnerable or not.*/
    setInvulnerable (flag: boolean): void;
    /**Record the last EntityDamageEvent inflicted on this entity*/
    setLastDamageCause (event: EntityDamageEvent): void;
    /**Sets whether or not the entity gets persisted.*/
    setPersistent (persistent: boolean): void;
    /**Sets the period of time (in ticks) before this entity can use a portal.*/
    setPortalCooldown (cooldown: number): void;
    /**Sets the entity's rotation.*/
    setRotation (yaw: number, pitch: number): void;
    /**Sets whether the entity is silent or not.*/
    setSilent (flag: boolean): void;
    /**Sets the amount of ticks this entity has lived for.*/
    setTicksLived (value: number): void;
    /**Sets this entity's velocity*/
    setVelocity (velocity: Vector): void;
    spigot (): Entity$Spigot;
    /**Teleports this entity to the target Entity.*/
    teleport (destination: Entity): boolean;
    /**Teleports this entity to the target Entity.*/
    teleport (destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
    /**Teleports this entity to the given location.*/
    teleport (location: Location): boolean;
    /**Teleports this entity to the given location.*/
    teleport (location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
    /**Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready.*/
    teleportAsync (loc: Location): CompletableFuture<Boolean>;
    /**Loads/Generates(in 1.13+) the Chunk asynchronously, and then teleports the entity when the chunk is ready.*/
    teleportAsync (loc: Location, cause: PlayerTeleportEvent$TeleportCause): CompletableFuture<Boolean>
}

export class Entity$Spigot extends CommandSender$Spigot {

}

/**Fired any time an entity is being added to the world for any reason.   Not to be confused with CreatureSpawnEvent  This will fire anytime a chunk is reloaded too.*/
export class EntityAddToWorldEvent extends EntityEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when the amount of air an entity has remaining changes.*/
export class EntityAirChangeEvent extends EntityEvent implements Cancellable {
    /**Gets the amount of air the entity has left (measured in ticks).*/
    getAmount (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the amount of air remaining for the entity (measured in ticks.*/
    setAmount (amount: number): void;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Called when a block is formed by entities.    Examples:    Snow formed by a Snowman.  Frosted Ice formed by the Frost Walker enchantment.  */
export class EntityBlockFormEvent extends BlockFormEvent {
    /**Get the entity that formed the block.*/
    getEntity (): Entity
}

/**Represents a captured state of a block which stores entities.*/
export interface EntityBlockStorage<T extends Entity> extends TileState {
    /**Add an entity to the block.*/
    addEntity (entity: T): void;
    /**Get the amount of entities currently in this block.*/
    getEntityCount (): number;
    /**Get the maximum amount of entities this block can hold.*/
    getMaxEntities (): number;
    /**Check if the block is completely full of entities.*/
    isFull (): boolean;
    /**Release all the entities currently stored in the block.*/
    releaseEntities (): List<T>;
    /**Set the maximum amount of entities this block can hold.*/
    setMaxEntities (max: number): void
}

/**Called when an Entity breaks a door    Cancelling the event will cause the event to be delayed*/
export class EntityBreakDoorEvent extends EntityChangeBlockEvent {
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity
}

/**Called when one Entity breeds with another Entity.*/
export class EntityBreedEvent extends EntityEvent implements Cancellable {
    /**The ItemStack that was used to initiate breeding, if present.*/
    getBredWith (): ItemStack;
    /**Gets the Entity responsible for breeding.*/
    getBreeder (): LivingEntity;
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    /**Get the amount of experience granted by breeding.*/
    getExperience (): number;
    /**Gets the other parent of the newly born entity.*/
    getFather (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the parent creating this entity.*/
    getMother (): LivingEntity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the amount of experience granted by breeding.*/
    setExperience (experience: number): void
}

/**A classification of entities which may behave differently than others or be  affected uniquely by enchantments and potion effects among other things.*/
export class EntityCategory extends Enum<EntityCategory> {
    /**Entities of the arthropod family.*/
    static ARTHROPOD: EntityCategory;
    /**Entities that participate in raids.*/
    static ILLAGER: EntityCategory;
    /**Any uncategorized entity.*/
    static NONE: EntityCategory;
    /**Undead creatures.*/
    static UNDEAD: EntityCategory;
    /**Entities that reside primarily underwater (excluding Drowned).*/
    static WATER: EntityCategory
}

/**Called when any Entity changes a block and a more specific event is not available.*/
export class EntityChangeBlockEvent extends EntityEvent implements Cancellable {
    /**Gets the block the entity is changing*/
    getBlock (): Block;
    /**Gets the data for the block that would be changed into*/
    getBlockData (): BlockData;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Material that the block is changing into*/
    getTo (): Material;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a block causes an entity to combust.*/
export class EntityCombustByBlockEvent extends EntityCombustEvent {
    /**The combuster can be lava or a block that is on fire.*/
    getCombuster (): Block
}

/**Called when an entity causes another entity to combust.*/
export class EntityCombustByEntityEvent extends EntityCombustEvent {
    /**Get the entity that caused the combustion event.*/
    getCombuster (): Entity
}

/**Called when an entity combusts.    If an Entity Combust event is cancelled, the entity will not combust.*/
export class EntityCombustEvent extends EntityEvent implements Cancellable {
    getDuration (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**The number of seconds the combustee should be alight for.*/
    setDuration (duration: number): void
}

/**Called when an entity is damaged by a block*/
export class EntityDamageByBlockEvent extends EntityDamageEvent {
    /**Returns the block that damaged the player.*/
    getDamager (): Block
}

/**Called when an entity is damaged by an entity*/
export class EntityDamageByEntityEvent extends EntityDamageEvent {
    /**Returns the entity that damaged the defender.*/
    getDamager (): Entity
}

/**Stores data for damage events*/
export class EntityDamageEvent extends EntityEvent implements Cancellable {
    /**Gets the cause of the damage.*/
    getCause (): EntityDamageEvent$DamageCause;
    /**Gets the raw amount of damage caused by the event*/
    getDamage (): number;
    /**Gets the damage change for some modifier*/
    getDamage (type: EntityDamageEvent$DamageModifier): number;
    /**Gets the amount of damage caused by the event after all damage  reduction is applied.*/
    getFinalDamage (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the original damage for the specified modifier, as defined at this  event's construction.*/
    getOriginalDamage (type: EntityDamageEvent$DamageModifier): number;
    /**This checks to see if a particular modifier is valid for this event's  caller, such that, setDamage(DamageModifier, double) will not  throw an UnsupportedOperationException.*/
    isApplicable (type: EntityDamageEvent$DamageModifier): boolean;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the raw amount of damage caused by the event.*/
    setDamage (damage: number): void;
    /**Sets the damage for the specified modifier.*/
    setDamage (type: EntityDamageEvent$DamageModifier, damage: number): void
}

/**An enum to specify the cause of the damage*/
export class EntityDamageEvent$DamageCause extends Enum<EntityDamageEvent$DamageCause> {
    /**Damage caused by being in the area when a block explodes.*/
    static BLOCK_EXPLOSION: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity contacts a block such as a Cactus.*/
    static CONTACT: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity is colliding with too many entities due  to the maxEntityCramming game rule.*/
    static CRAMMING: EntityDamageEvent$DamageCause;
    /**Custom damage.*/
    static CUSTOM: EntityDamageEvent$DamageCause;
    /**Damage caused by a dragon breathing fire.*/
    static DRAGON_BREATH: EntityDamageEvent$DamageCause;
    /**Damage caused by running out of air while in water*/
    static DROWNING: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity that should be in water is not.*/
    static DRYOUT: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity attacks another entity.*/
    static ENTITY_ATTACK: EntityDamageEvent$DamageCause;
    /**Damage caused by being in the area when an entity, such as a  Creeper, explodes.*/
    static ENTITY_EXPLOSION: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity attacks another entity in a sweep attack.*/
    static ENTITY_SWEEP_ATTACK: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity falls a distance greater than 3 blocks*/
    static FALL: EntityDamageEvent$DamageCause;
    /**Damage caused by being hit by a falling block which deals damage*/
    static FALLING_BLOCK: EntityDamageEvent$DamageCause;
    /**Damage caused by direct exposure to fire*/
    static FIRE: EntityDamageEvent$DamageCause;
    /**Damage caused due to burns caused by fire*/
    static FIRE_TICK: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity runs into a wall.*/
    static FLY_INTO_WALL: EntityDamageEvent$DamageCause;
    /**Damage caused when an entity steps on Material.MAGMA_BLOCK.*/
    static HOT_FLOOR: EntityDamageEvent$DamageCause;
    /**Damage caused by direct exposure to lava*/
    static LAVA: EntityDamageEvent$DamageCause;
    /**Damage caused by being struck by lightning*/
    static LIGHTNING: EntityDamageEvent$DamageCause;
    /**Damage caused by being hit by a damage potion or spell*/
    static MAGIC: EntityDamageEvent$DamageCause;
    /**Damage caused due to a snowman melting*/
    static MELTING: EntityDamageEvent$DamageCause;
    /**Damage caused due to an ongoing poison effect*/
    static POISON: EntityDamageEvent$DamageCause;
    /**Damage caused when attacked by a projectile.*/
    static PROJECTILE: EntityDamageEvent$DamageCause;
    /**Damage caused by starving due to having an empty hunger bar*/
    static STARVATION: EntityDamageEvent$DamageCause;
    /**Damage caused by being put in a block*/
    static SUFFOCATION: EntityDamageEvent$DamageCause;
    /**Damage caused by committing suicide using the command "/kill"*/
    static SUICIDE: EntityDamageEvent$DamageCause;
    /**Damage caused in retaliation to another attack by the Thorns  enchantment.*/
    static THORNS: EntityDamageEvent$DamageCause;
    /**Damage caused by falling into the void*/
    static VOID: EntityDamageEvent$DamageCause;
    /**Damage caused by Wither potion effect*/
    static WITHER: EntityDamageEvent$DamageCause
}

/**Thrown whenever a LivingEntity dies*/
export class EntityDeathEvent extends EntityEvent implements Cancellable {
    /**Get the sound that the entity makes when dying*/
    getDeathSound (): Sound;
    /**Get the sound category that the death sound should play in*/
    getDeathSoundCategory (): SoundCategory;
    /**Get the pitch that the death sound will play with.*/
    getDeathSoundPitch (): number;
    /**Get the volume that the death sound will play at.*/
    getDeathSoundVolume (): number;
    /**Gets how much EXP should be dropped from this death.*/
    getDroppedExp (): number;
    /**Gets all the items which will drop when the entity dies*/
    getDrops (): List<ItemStack>;
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the amount of health that the entity should revive with after cancelling the event.*/
    getReviveHealth (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the sound that the entity makes when dying*/
    setDeathSound (sound: Sound): void;
    /**Set the sound category that the death sound should play in.*/
    setDeathSoundCategory (soundCategory: SoundCategory): void;
    /**GSetet the pitch that the death sound should play with.*/
    setDeathSoundPitch (pitch: number): void;
    /**Set the volume the death sound should play at.*/
    setDeathSoundVolume (volume: number): void;
    /**Sets how much EXP should be dropped from this death.*/
    setDroppedExp (exp: number): void;
    /**Set the amount of health that the entity should revive with after cancelling the event.*/
    setReviveHealth (reviveHealth: number): void;
    /**Set whether or not the death sound should play when the entity dies.*/
    setShouldPlayDeathSound (playDeathSound: boolean): void;
    /**Whether or not the death sound should play when the entity dies.*/
    shouldPlayDeathSound (): boolean
}

/**Called when an entity stops riding another entity.*/
export class EntityDismountEvent extends EntityEvent implements Cancellable {
    getDismounted (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    isCancellable (): boolean;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Thrown when an entity creates an item drop.*/
export class EntityDropItemEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Item created by the entity*/
    getItemDrop (): Item;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**A list of all Effects that can happen to entities.*/
export class EntityEffect extends Enum<EntityEffect> {
    /**Armor stand is hit.*/
    static ARMOR_STAND_HIT: EntityEffect;
    /**Colored particles from a tipped arrow.*/
    static ARROW_PARTICLES: EntityEffect;
    /**Entity breaks item in boot slot*/
    static BREAK_EQUIPMENT_BOOTS: EntityEffect;
    /**Entity breaks item in chestplate slot*/
    static BREAK_EQUIPMENT_CHESTPLATE: EntityEffect;
    /**Entity breaks item in helmet slot*/
    static BREAK_EQUIPMENT_HELMET: EntityEffect;
    /**Entity breaks item in legging slot*/
    static BREAK_EQUIPMENT_LEGGINGS: EntityEffect;
    /**Entity breaks item in main hand*/
    static BREAK_EQUIPMENT_MAIN_HAND: EntityEffect;
    /**Entity breaks item in off hand*/
    static BREAK_EQUIPMENT_OFF_HAND: EntityEffect;
    /**Cat taming failed.*/
    static CAT_TAME_FAIL: EntityEffect;
    /**Cat taming succeeded.*/
    static CAT_TAME_SUCCESS: EntityEffect;
    /**Deprecated. although this effect may trigger other events on non-living  entities, it's only supported usage is on living ones.*/
    static DEATH: EntityEffect;
    /**Dolphin has been fed and is locating a structure.*/
    static DOLPHIN_FED: EntityEffect;
    /**Silverfish entering block, spawner spawning.*/
    static ENTITY_POOF: EntityEffect;
    /**When a firework explodes.*/
    static FIREWORK_EXPLODE: EntityEffect;
    /**Fox chews the food in its mouth*/
    static FOX_CHEW: EntityEffect;
    /**Guardian sets laser target.*/
    static GUARDIAN_TARGET: EntityEffect;
    /**When mobs get hurt.*/
    static HURT: EntityEffect;
    /**Entity hurt due to berry bush.*/
    static HURT_BERRY_BUSH: EntityEffect;
    /**Entity hurt due to drowning damage.*/
    static HURT_DROWN: EntityEffect;
    /**Entity hurt due to explosion damage.*/
    static HURT_EXPLOSION: EntityEffect;
    /**When an Iron Golem gives a rose.*/
    static IRON_GOLEM_ROSE: EntityEffect;
    /**Iron golem puts away rose.*/
    static IRON_GOLEM_SHEATH: EntityEffect;
    /**Hearts from a breeding entity.*/
    static LOVE_HEARTS: EntityEffect;
    /**Player's bad omen effect removed to start or increase raid difficult.*/
    static PLAYER_BAD_OMEN_RAID: EntityEffect;
    /**Rabbit jumping.*/
    static RABBIT_JUMP: EntityEffect;
    /**Ravager has been stunned for 40 ticks.*/
    static RAVAGER_STUNNED: EntityEffect;
    /**Deprecated. although this effect may trigger other events on non-living  entities, it's only supported usage is on living ones.*/
    static SHEEP_EAT: EntityEffect;
    /**Shield blocks attack.*/
    static SHIELD_BLOCK: EntityEffect;
    /**Shield breaks.*/
    static SHIELD_BREAK: EntityEffect;
    /**Resets squid rotation.*/
    static SQUID_ROTATE: EntityEffect;
    /**Entity teleported as a result of chorus fruit or as an enderman*/
    static TELEPORT_ENDER: EntityEffect;
    /**Entity hurt by thorns attack.*/
    static THORNS_HURT: EntityEffect;
    /**Totem prevents entity death.*/
    static TOTEM_RESURRECT: EntityEffect;
    /**When a villager is angry.*/
    static VILLAGER_ANGRY: EntityEffect;
    /**Happy particles from a villager.*/
    static VILLAGER_HAPPY: EntityEffect;
    /**Hearts from a villager.*/
    static VILLAGER_HEART: EntityEffect;
    /**Villager splashes particles during a raid.*/
    static VILLAGER_SPLASH: EntityEffect;
    /**Magic particles from a witch.*/
    static WITCH_MAGIC: EntityEffect;
    /**The hearts when taming a wolf succeeds.*/
    static WOLF_HEARTS: EntityEffect;
    /**When a wolf shakes (after being wet).*/
    static WOLF_SHAKE: EntityEffect;
    /**The smoke when taming a wolf fails.*/
    static WOLF_SMOKE: EntityEffect;
    /**When a zombie transforms into a villager by shaking violently.*/
    static ZOMBIE_TRANSFORM: EntityEffect
}

/**Called when an Entity enters a block and is stored in that block.    This event is called for bees entering a bee hive.    It is not called when a silverfish "enters" a stone block. For that listen to  the EntityChangeBlockEvent.*/
export class EntityEnterBlockEvent extends EntityEvent implements Cancellable {
    /**Get the block the entity will enter.*/
    getBlock (): Block;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when an entity enters love mode.    This can be cancelled but the item will still be consumed that was used to  make the entity enter into love mode.*/
export class EntityEnterLoveModeEvent extends EntityEvent implements Cancellable {
    /**Gets the animal that is entering love mode.*/
    getEntity (): Animals;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Human Entity that caused the animal to enter love mode.*/
    getHumanEntity (): HumanEntity;
    /**Gets the amount of ticks that the animal will fall in love for.*/
    getTicksInLove (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the amount of ticks that the animal will fall in love for.*/
    setTicksInLove (ticksInLove: number): void
}

/**An interface to a creatures inventory*/
export interface EntityEquipment {
    /**Clears the entity of all armor and held items*/
    clear (): void;
    /**Gets a copy of all worn armor*/
    getArmorContents (): ItemStack[];
    /**Gets a copy of the boots currently being worn by the entity*/
    getBoots (): ItemStack;
    /**Gets the chance of the boots being dropped upon this creature's death.*/
    getBootsDropChance (): number;
    /**Gets a copy of the chest plate currently being worn by the entity*/
    getChestplate (): ItemStack;
    /**Gets the chance of the chest plate being dropped upon this creature's  death.*/
    getChestplateDropChance (): number;
    /**Gets a copy of the helmet currently being worn by the entity*/
    getHelmet (): ItemStack;
    /**Gets the chance of the helmet being dropped upon this creature's death.*/
    getHelmetDropChance (): number;
    /**Get the entity this EntityEquipment belongs to*/
    getHolder (): Entity;
    /**Gets the ItemStack at the given equipment slot in the inventory.*/
    getItem (slot: EquipmentSlot): ItemStack;
    /**Gets a copy of the item the entity is currently holding  in their main hand.*/
    getItemInMainHand (): ItemStack;
    /**Gets the chance of the main hand item being dropped upon this creature's  death.*/
    getItemInMainHandDropChance (): number;
    /**Gets a copy of the item the entity is currently holding  in their off hand.*/
    getItemInOffHand (): ItemStack;
    /**Gets the chance of the off hand item being dropped upon this creature's  death.*/
    getItemInOffHandDropChance (): number;
    /**Gets a copy of the leggings currently being worn by the entity*/
    getLeggings (): ItemStack;
    /**Gets the chance of the leggings being dropped upon this creature's  death.*/
    getLeggingsDropChance (): number;
    /**Sets the entities armor to the provided array of ItemStacks*/
    setArmorContents (items: ItemStack[]): void;
    /**Sets the boots worn by the entity*/
    setBoots (boots: ItemStack): void;
    /**Sets the chance of the boots being dropped upon this creature's death.*/
    setBootsDropChance (chance: number): void;
    /**Sets the chest plate worn by the entity*/
    setChestplate (chestplate: ItemStack): void;
    /**Sets the chance of the chest plate being dropped upon this creature's  death.*/
    setChestplateDropChance (chance: number): void;
    /**Sets the helmet worn by the entity*/
    setHelmet (helmet: ItemStack): void;
    /**Sets the chance of the helmet being dropped upon this creature's death.*/
    setHelmetDropChance (chance: number): void;
    /**Stores the ItemStack at the given equipment slot in the inventory.*/
    setItem (slot: EquipmentSlot, item: ItemStack): void;
    /**Sets the item the entity is holding in their main hand.*/
    setItemInMainHand (item: ItemStack): void;
    /**Sets the chance of the item this creature is currently holding in their  main hand being dropped upon this creature's death.*/
    setItemInMainHandDropChance (chance: number): void;
    /**Sets the item the entity is holding in their off hand.*/
    setItemInOffHand (item: ItemStack): void;
    /**Sets the chance of the off hand item being dropped upon this creature's  death.*/
    setItemInOffHandDropChance (chance: number): void;
    /**Sets the leggings worn by the entity*/
    setLeggings (leggings: ItemStack): void;
    /**Sets the chance of the leggings being dropped upon this creature's  death.*/
    setLeggingsDropChance (chance: number): void
}

/**Represents an Entity-related event*/
export class EntityEvent extends Event {
    /**Returns the Entity involved in this event*/
    getEntity (): Entity;
    /**Gets the EntityType of the Entity involved in this event.*/
    getEntityType (): EntityType
}

/**Called when an entity explodes*/
export class EntityExplodeEvent extends EntityEvent implements Cancellable {
    /**Returns the list of blocks that would have been removed or were removed  from the explosion event.*/
    blockList (): List<Block>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the location where the explosion happened.*/
    getLocation (): Location;
    /**Returns the percentage of blocks to drop from this explosion*/
    getYield (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the percentage of blocks to drop from this explosion*/
    setYield (yield: number): void
}

/**Called when an entity interacts with an object*/
export class EntityInteractEvent extends EntityEvent implements Cancellable {
    /**Returns the involved block*/
    getBlock (): Block;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when an entity jumps    Cancelling the event will stop the entity from jumping*/
export class EntityJumpEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Fired when an Entity is knocked back by the hit of another Entity. The acceleration  vector can be modified. If this event is cancelled, the entity is not knocked back.*/
export class EntityKnockbackByEntityEvent extends EntityEvent implements Cancellable {
    getAcceleration (): Vector;
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getHitBy (): Entity;
    getKnockbackStrength (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when an entity attempts to ride another entity.*/
export class EntityMountEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getMount (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Fired when an Entity decides to start moving towards a location.   This event does not fire for the entities actual movement. Only when it  is choosing to start moving to a location.*/
export class EntityPathfindEvent extends EntityEvent implements Cancellable {
    /**The Entity that is pathfinding.*/
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**The Location of where the entity is about to move to.*/
    getLoc (): Location;
    /**If the Entity is trying to pathfind to an entity, this is the entity in relation.*/
    getTargetEntity (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Thrown when a entity picks an item up from the ground*/
export class EntityPickupItemEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Item picked up by the entity.*/
    getItem (): Item;
    /**Gets the amount remaining on the ground, if any*/
    getRemaining (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when an entity comes into contact with a portal*/
export class EntityPortalEnterEvent extends EntityEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the portal block the entity is touching*/
    getLocation (): Location
}

/**Called when a non-player entity is about to teleport because it is in  contact with a portal.    For players see PlayerPortalEvent*/
export class EntityPortalEvent extends EntityTeleportEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the search radius value for finding an available portal.*/
    getSearchRadius (): number;
    /**Set the Block radius to search in for available portals.*/
    setSearchRadius (searchRadius: number): void
}

/**Called before an entity exits a portal.    This event allows you to modify the velocity of the entity after they have  successfully exited the portal.*/
export class EntityPortalExitEvent extends EntityTeleportEvent {
    /**Gets a copy of the velocity that the entity will have after exiting the  portal.*/
    getAfter (): Vector;
    /**Gets a copy of the velocity that the entity has before entering the  portal.*/
    getBefore (): Vector;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Sets the velocity that the entity will have after exiting the portal.*/
    setAfter (after: Vector): void
}

/**Called when an entity changes its pose.*/
export class EntityPoseChangeEvent extends EntityEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the entity's new pose.*/
    getPose (): Pose
}

/**Called when a potion effect is modified on an entity.    If the event is cancelled, no change will be made on the entity.*/
export class EntityPotionEffectEvent extends EntityEvent implements Cancellable {
    /**Gets the action which will be performed on the potion effect type.*/
    getAction (): EntityPotionEffectEvent$Action;
    /**Gets the cause why the effect has changed.*/
    getCause (): EntityPotionEffectEvent$Cause;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the modified potion effect type.*/
    getModifiedType (): PotionEffectType;
    /**Gets new potion effect of the changed type to be applied.*/
    getNewEffect (): PotionEffect;
    /**Gets the old potion effect of the changed type, which will be removed.*/
    getOldEffect (): PotionEffect;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Returns if the new potion effect will override the old potion effect  (Only applicable for the CHANGED Action).*/
    isOverride (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets if the new potion effect will override the old potion effect (Only  applicable for the CHANGED action).*/
    setOverride (override: boolean): void
}

/**An enum to specify the action to be performed.*/
export class EntityPotionEffectEvent$Action extends Enum<EntityPotionEffectEvent$Action> {
    /**When the potion effect is added because the entity didn't have it's  type.*/
    static ADDED: EntityPotionEffectEvent$Action;
    /**When the entity already had the potion effect type, but the effect is  changed.*/
    static CHANGED: EntityPotionEffectEvent$Action;
    /**When the effect is removed due to all effects being removed.*/
    static CLEARED: EntityPotionEffectEvent$Action;
    /**When the potion effect type is completely removed.*/
    static REMOVED: EntityPotionEffectEvent$Action
}

/**An enum to specify the cause why an effect was changed.*/
export class EntityPotionEffectEvent$Cause extends Enum<EntityPotionEffectEvent$Cause> {
    /**When the entity stands inside an area effect cloud.*/
    static AREA_EFFECT_CLOUD: EntityPotionEffectEvent$Cause;
    /**When the entity is hit by an spectral or tipped arrow.*/
    static ARROW: EntityPotionEffectEvent$Cause;
    /**When the entity is inflicted with a potion effect due to an entity  attack (e.g.*/
    static ATTACK: EntityPotionEffectEvent$Cause;
    /**When beacon effects get applied due to the entity being nearby.*/
    static BEACON: EntityPotionEffectEvent$Cause;
    /**When a potion effect is changed due to the /effect command.*/
    static COMMAND: EntityPotionEffectEvent$Cause;
    /**When the entity gets the effect from a conduit.*/
    static CONDUIT: EntityPotionEffectEvent$Cause;
    /**When a conversion from a villager zombie to a villager is started or  finished.*/
    static CONVERSION: EntityPotionEffectEvent$Cause;
    /**When all effects are removed due to death (Note: This is called on  respawn, so it's player only!)*/
    static DEATH: EntityPotionEffectEvent$Cause;
    /**When the entity gets the effect from a dolphin.*/
    static DOLPHIN: EntityPotionEffectEvent$Cause;
    /**When the effect was removed due to expiration.*/
    static EXPIRATION: EntityPotionEffectEvent$Cause;
    /**When an effect is inflicted due to food (e.g.*/
    static FOOD: EntityPotionEffectEvent$Cause;
    /**When an illusion illager makes himself disappear.*/
    static ILLUSION: EntityPotionEffectEvent$Cause;
    /**When all effects are removed due to a bucket of milk.*/
    static MILK: EntityPotionEffectEvent$Cause;
    /**When a player gets bad omen after killing a patrol captain.*/
    static PATROL_CAPTAIN: EntityPotionEffectEvent$Cause;
    /**When a potion effect is modified through the plugin methods.*/
    static PLUGIN: EntityPotionEffectEvent$Cause;
    /**When the entity drinks a potion.*/
    static POTION_DRINK: EntityPotionEffectEvent$Cause;
    /**When the entity is inflicted with an effect due to a splash potion.*/
    static POTION_SPLASH: EntityPotionEffectEvent$Cause;
    /**When a spider gets effects when spawning on hard difficulty.*/
    static SPIDER_SPAWN: EntityPotionEffectEvent$Cause;
    /**When the entity gets effects from a totem item saving it's life.*/
    static TOTEM: EntityPotionEffectEvent$Cause;
    /**When the entity gets water breathing by wearing a turtle helmet.*/
    static TURTLE_HELMET: EntityPotionEffectEvent$Cause;
    /**When the Cause is missing.*/
    static UNKNOWN: EntityPotionEffectEvent$Cause;
    /**When a villager gets regeneration after a trade.*/
    static VILLAGER_TRADE: EntityPotionEffectEvent$Cause;
    /**When an entity comes in contact with a wither rose.*/
    static WITHER_ROSE: EntityPotionEffectEvent$Cause
}

/**Stores data for health-regain events*/
export class EntityRegainHealthEvent extends EntityEvent implements Cancellable {
    /**Gets the amount of regained health*/
    getAmount (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the reason for why the entity is regaining health*/
    getRegainReason (): EntityRegainHealthEvent$RegainReason;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Is this event a result of the fast regeneration mechanic*/
    isFastRegen (): boolean;
    /**Sets the amount of regained health*/
    setAmount (amount: number): void;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**An enum to specify the type of health regaining that is occurring*/
export class EntityRegainHealthEvent$RegainReason extends Enum<EntityRegainHealthEvent$RegainReason> {
    /**Any other reason not covered by the reasons above*/
    static CUSTOM: EntityRegainHealthEvent$RegainReason;
    /**When a player regains health from eating consumables*/
    static EATING: EntityRegainHealthEvent$RegainReason;
    /**When an ender dragon regains health from an ender crystal*/
    static ENDER_CRYSTAL: EntityRegainHealthEvent$RegainReason;
    /**When a player is healed by a potion or spell*/
    static MAGIC: EntityRegainHealthEvent$RegainReason;
    /**When a player is healed over time by a potion or spell*/
    static MAGIC_REGEN: EntityRegainHealthEvent$RegainReason;
    /**When a player regains health from regenerating due to Peaceful mode  (difficulty=0)*/
    static REGEN: EntityRegainHealthEvent$RegainReason;
    /**When a player regains health from regenerating due to their hunger  being satisfied*/
    static SATIATED: EntityRegainHealthEvent$RegainReason;
    /**When an entity is damaged by the Wither potion effect*/
    static WITHER: EntityRegainHealthEvent$RegainReason;
    /**When a wither is filling its health during spawning*/
    static WITHER_SPAWN: EntityRegainHealthEvent$RegainReason
}

/**Fired any time an entity is being removed from a world for any reason*/
export class EntityRemoveFromWorldEvent extends EntityEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when an entity dies and may have the opportunity to be resurrected.  Will be called in a cancelled state if the entity does not have a totem  equipped.*/
export class EntityResurrectEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Called when a LivingEntity shoots a bow firing an arrow*/
export class EntityShootBowEvent extends EntityEvent implements Cancellable {
    /**Gets the bow ItemStack used to fire the arrow.*/
    getBow (): ItemStack;
    /**Get the ItemStack to be consumed in this event (if any).*/
    getConsumable (): ItemStack;
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    /**Gets the force the arrow was launched with*/
    getForce (): number;
    /**Get the hand from which the bow was shot.*/
    getHand (): EquipmentSlot;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the projectile which will be launched by this event*/
    getProjectile (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set whether or not the consumable item should be consumed in this event.*/
    setConsumeItem (consumeItem: boolean): void;
    /**Replaces the projectile which will be launched*/
    setProjectile (projectile: Entity): void;
    /**Get whether or not the consumable item should be consumed in this event.*/
    shouldConsumeItem (): boolean
}

/**Called when an entity is spawned into a world.    If an Entity Spawn event is cancelled, the entity will not spawn.*/
export class EntitySpawnEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the location at which the entity is spawning.*/
    getLocation (): Location;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a Spellcaster casts a spell.*/
export class EntitySpellCastEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Spellcaster;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the spell to be cast in this event.*/
    getSpell (): Spellcaster$Spell;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Thrown when a LivingEntity is tamed*/
export class EntityTameEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the owning AnimalTamer*/
    getOwner (): AnimalTamer;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a creature targets or untargets another entity*/
export class EntityTargetEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the reason for the targeting*/
    getReason (): EntityTargetEvent$TargetReason;
    /**Get the entity that this is targeting.*/
    getTarget (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the entity that you want the mob to target instead.*/
    setTarget (target: Entity): void
}

/**An enum to specify the reason for the targeting*/
export class EntityTargetEvent$TargetReason extends Enum<EntityTargetEvent$TargetReason> {
    /**When the entity doesn't have a target, so it attacks the nearest  entity*/
    static CLOSEST_ENTITY: EntityTargetEvent$TargetReason;
    /**When the entity doesn't have a target, so it attacks the nearest  player*/
    static CLOSEST_PLAYER: EntityTargetEvent$TargetReason;
    /**When an entity targets another entity after colliding with it.*/
    static COLLISION: EntityTargetEvent$TargetReason;
    /**For custom calls to the event.*/
    static CUSTOM: EntityTargetEvent$TargetReason;
    /**When an entity selects a target while defending a village.*/
    static DEFEND_VILLAGE: EntityTargetEvent$TargetReason;
    /**When a raiding entity selects the same target as one of its compatriots.*/
    static FOLLOW_LEADER: EntityTargetEvent$TargetReason;
    /**When the target is forgotten for whatever reason.*/
    static FORGOT_TARGET: EntityTargetEvent$TargetReason;
    /**When the owner of the entity attacks the target attacks, so the  entity targets it.*/
    static OWNER_ATTACKED_TARGET: EntityTargetEvent$TargetReason;
    /**Deprecated. obsoleted by TARGET_ATTACKED_NEARBY_ENTITY*/
    static PIG_ZOMBIE_TARGET: EntityTargetEvent$TargetReason;
    /**When the entity has no target, so the entity randomly chooses one.*/
    static RANDOM_TARGET: EntityTargetEvent$TargetReason;
    /**When a zombie targeting an entity summons reinforcements, so the reinforcements target the same entity*/
    static REINFORCEMENT_TARGET: EntityTargetEvent$TargetReason;
    /**When the target attacks the entity, so entity targets it*/
    static TARGET_ATTACKED_ENTITY: EntityTargetEvent$TargetReason;
    /**When the target attacks a nearby entity of the same type, so the entity targets it*/
    static TARGET_ATTACKED_NEARBY_ENTITY: EntityTargetEvent$TargetReason;
    /**When the target attacks the owner of the entity, so the entity  targets it.*/
    static TARGET_ATTACKED_OWNER: EntityTargetEvent$TargetReason;
    /**When the entity's target has died, and so it no longer targets it*/
    static TARGET_DIED: EntityTargetEvent$TargetReason;
    /**When the target is in creative or spectator mode, or the gamemode is peaceful, or other reasons*/
    static TARGET_INVALID: EntityTargetEvent$TargetReason;
    /**When the target is in a different dimension*/
    static TARGET_OTHER_LEVEL: EntityTargetEvent$TargetReason;
    /**When another entity tempts this entity by having a desired item such  as wheat in it's hand.*/
    static TEMPT: EntityTargetEvent$TargetReason;
    /**A currently unknown reason for the entity changing target.*/
    static UNKNOWN: EntityTargetEvent$TargetReason
}

/**Called when an Entity targets a LivingEntity and can only target  LivingEntity's.*/
export class EntityTargetLivingEntityEvent extends EntityTargetEvent {
    /**Get the entity that this is targeting.*/
    getTarget (): LivingEntity;
    /**Set the Entity that you want the mob to target.*/
    setTarget (target: Entity): void
}

/**Fired any time an entity attempts to teleport in an end gateway*/
export class EntityTeleportEndGatewayEvent extends EntityTeleportEvent {
    /**The gateway triggering the teleport*/
    getGateway (): EndGateway
}

/**Thrown when a non-player entity is teleported from one location to another.    This may be as a result of natural causes (Enderman, Shulker), pathfinding  (Wolf), or commands (/teleport).*/
export class EntityTeleportEvent extends EntityEvent implements Cancellable {
    /**Gets the location that this entity moved from*/
    getFrom (): Location;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the location that this entity moved to*/
    getTo (): Location;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the location that this entity moved from*/
    setFrom (from: Location): void;
    /**Sets the location that this entity moved to*/
    setTo (to: Location): void
}

/**Sent when an entity's gliding status is toggled with an Elytra.  Examples of when this event would be called:        Player presses the jump key while in midair and using an Elytra      Player lands on ground while they are gliding (with an Elytra)    This can be visually estimated by the animation in which a player turns horizontal.*/
export class EntityToggleGlideEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    isGliding (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Sent when an entity's swimming status is toggled.*/
export class EntityToggleSwimEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    isSwimming (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

export class EntityTransformedEvent$TransformedReason extends Enum<EntityTransformedEvent$TransformedReason> {
    /**When a zombie villager is cured*/
    static CURED: EntityTransformedEvent$TransformedReason;
    /**When a zombie drowns*/
    static DROWNED: EntityTransformedEvent$TransformedReason;
    /**When a villager turns to a zombie villager*/
    static INFECTED: EntityTransformedEvent$TransformedReason;
    /**When a pig turns to a zombiepigman*/
    static LIGHTNING: EntityTransformedEvent$TransformedReason;
    /**When a mooshroom turns to a cow*/
    static SHEARED: EntityTransformedEvent$TransformedReason
}

/**Called when an entity is about to be replaced by another entity.*/
export class EntityTransformEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the entities that the original entity was transformed to.*/
    getTransformedEntities (): List<Entity>;
    /**Gets the entity that the original entity was transformed to.*/
    getTransformedEntity (): Entity;
    /**Gets the reason for the conversion that has occurred.*/
    getTransformReason (): EntityTransformEvent$TransformReason;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

export class EntityTransformEvent$TransformReason extends Enum<EntityTransformEvent$TransformReason> {
    /**When a zombie gets cured and a villager is spawned.*/
    static CURED: EntityTransformEvent$TransformReason;
    /**When a entity drowns in water and a new entity spawns.*/
    static DROWNED: EntityTransformEvent$TransformReason;
    /**When a villager gets infected and a zombie villager spawns.*/
    static INFECTION: EntityTransformEvent$TransformReason;
    /**When lightning strikes a entity.*/
    static LIGHTNING: EntityTransformEvent$TransformReason;
    /**When a mooshroom (or MUSHROOM_COW) is sheared and a cow spawns.*/
    static SHEARED: EntityTransformEvent$TransformReason;
    /**When a slime splits into multiple smaller slimes.*/
    static SPLIT: EntityTransformEvent$TransformReason;
    /**When reason is unknown.*/
    static UNKNOWN: EntityTransformEvent$TransformReason
}

export class EntityType extends Enum<EntityType> implements Keyed {
    static AREA_EFFECT_CLOUD: EntityType;
    /**Mechanical entity with an inventory for placing weapons / armor into.*/
    static ARMOR_STAND: EntityType;
    /**An arrow projectile; may get stuck in the ground.*/
    static ARROW: EntityType;
    static BAT: EntityType;
    static BEE: EntityType;
    static BLAZE: EntityType;
    /**A placed boat.*/
    static BOAT: EntityType;
    static CAT: EntityType;
    static CAVE_SPIDER: EntityType;
    static CHICKEN: EntityType;
    static COD: EntityType;
    static COW: EntityType;
    static CREEPER: EntityType;
    static DOLPHIN: EntityType;
    static DONKEY: EntityType;
    /**Like FIREBALL but with added effects.*/
    static DRAGON_FIREBALL: EntityType;
    /**An item resting on the ground.*/
    static DROPPED_ITEM: EntityType;
    static DROWNED: EntityType;
    /**A flying chicken egg.*/
    static EGG: EntityType;
    static ELDER_GUARDIAN: EntityType;
    static ENDER_CRYSTAL: EntityType;
    static ENDER_DRAGON: EntityType;
    /**A flying ender pearl.*/
    static ENDER_PEARL: EntityType;
    /**An ender eye signal.*/
    static ENDER_SIGNAL: EntityType;
    static ENDERMAN: EntityType;
    static ENDERMITE: EntityType;
    static EVOKER: EntityType;
    static EVOKER_FANGS: EntityType;
    /**An experience orb.*/
    static EXPERIENCE_ORB: EntityType;
    /**A block that is going to or is about to fall.*/
    static FALLING_BLOCK: EntityType;
    /**A flying large fireball, as thrown by a Ghast for example.*/
    static FIREBALL: EntityType;
    /**Internal representation of a Firework once it has been launched.*/
    static FIREWORK: EntityType;
    /**A fishing line and bobber.*/
    static FISHING_HOOK: EntityType;
    static FOX: EntityType;
    static GHAST: EntityType;
    static GIANT: EntityType;
    static GUARDIAN: EntityType;
    static HOGLIN: EntityType;
    static HORSE: EntityType;
    static HUSK: EntityType;
    static ILLUSIONER: EntityType;
    static IRON_GOLEM: EntityType;
    /**An item frame on a wall.*/
    static ITEM_FRAME: EntityType;
    /**A leash attached to a fencepost.*/
    static LEASH_HITCH: EntityType;
    /**A bolt of lightning.*/
    static LIGHTNING: EntityType;
    static LLAMA: EntityType;
    static LLAMA_SPIT: EntityType;
    static MAGMA_CUBE: EntityType;
    static MINECART: EntityType;
    static MINECART_CHEST: EntityType;
    static MINECART_COMMAND: EntityType;
    static MINECART_FURNACE: EntityType;
    static MINECART_HOPPER: EntityType;
    static MINECART_MOB_SPAWNER: EntityType;
    static MINECART_TNT: EntityType;
    static MULE: EntityType;
    static MUSHROOM_COW: EntityType;
    static OCELOT: EntityType;
    /**A painting on a wall.*/
    static PAINTING: EntityType;
    static PANDA: EntityType;
    static PARROT: EntityType;
    static PHANTOM: EntityType;
    static PIG: EntityType;
    static PIGLIN: EntityType;
    static PIGLIN_BRUTE: EntityType;
    static PILLAGER: EntityType;
    static PLAYER: EntityType;
    static POLAR_BEAR: EntityType;
    /**Primed TNT that is about to explode.*/
    static PRIMED_TNT: EntityType;
    static PUFFERFISH: EntityType;
    static RABBIT: EntityType;
    static RAVAGER: EntityType;
    static SALMON: EntityType;
    static SHEEP: EntityType;
    static SHULKER: EntityType;
    /**Bullet fired by SHULKER.*/
    static SHULKER_BULLET: EntityType;
    static SILVERFISH: EntityType;
    static SKELETON: EntityType;
    static SKELETON_HORSE: EntityType;
    static SLIME: EntityType;
    /**A flying small fireball, such as thrown by a Blaze or player.*/
    static SMALL_FIREBALL: EntityType;
    /**A flying snowball.*/
    static SNOWBALL: EntityType;
    static SNOWMAN: EntityType;
    /**Like ARROW but causes the PotionEffectType.GLOWING effect on all team members.*/
    static SPECTRAL_ARROW: EntityType;
    static SPIDER: EntityType;
    /**A flying splash potion.*/
    static SPLASH_POTION: EntityType;
    static SQUID: EntityType;
    static STRAY: EntityType;
    static STRIDER: EntityType;
    /**A flying experience bottle.*/
    static THROWN_EXP_BOTTLE: EntityType;
    static TRADER_LLAMA: EntityType;
    static TRIDENT: EntityType;
    static TROPICAL_FISH: EntityType;
    static TURTLE: EntityType;
    /**An unknown entity without an Entity Class*/
    static UNKNOWN: EntityType;
    static VEX: EntityType;
    static VILLAGER: EntityType;
    static VINDICATOR: EntityType;
    static WANDERING_TRADER: EntityType;
    static WITCH: EntityType;
    static WITHER: EntityType;
    static WITHER_SKELETON: EntityType;
    /**A flying wither skull projectile.*/
    static WITHER_SKULL: EntityType;
    static WOLF: EntityType;
    static ZOGLIN: EntityType;
    static ZOMBIE: EntityType;
    static ZOMBIE_HORSE: EntityType;
    static ZOMBIE_VILLAGER: EntityType;
    static ZOMBIFIED_PIGLIN: EntityType
}

/**Called immediately prior to an entity being unleashed.*/
export class EntityUnleashEvent extends EntityEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the reason for the unleashing.*/
    getReason (): EntityUnleashEvent$UnleashReason
}

export class EntityUnleashEvent$UnleashReason extends Enum<EntityUnleashEvent$UnleashReason> {
    /**When the entity's leashholder is more than 10 blocks away*/
    static DISTANCE: EntityUnleashEvent$UnleashReason;
    /**When the entity's leashholder has died or logged out, and so is  unleashed*/
    static HOLDER_GONE: EntityUnleashEvent$UnleashReason;
    /**When the entity's leashholder attempts to unleash it*/
    static PLAYER_UNLEASH: EntityUnleashEvent$UnleashReason;
    static UNKNOWN: EntityUnleashEvent$UnleashReason
}

/**Fired when lightning strikes an entity*/
export class EntityZapEvent extends EntityTransformEvent implements Cancellable {
    /**Gets the lightning bolt that is striking the entity.*/
    getBolt (): LightningStrike;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the entity that will replace the struck entity.*/
    getReplacementEntity (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

export class EquipmentSlot extends Enum<EquipmentSlot> {
    static CHEST: EquipmentSlot;
    static FEET: EquipmentSlot;
    static HAND: EquipmentSlot;
    static HEAD: EquipmentSlot;
    static LEGS: EquipmentSlot;
    static OFF_HAND: EquipmentSlot
}

/**EulerAngle is used to represent 3 angles, one for each  axis (x, y, z). The angles are in radians*/
export class EulerAngle extends Object {
    /**Creates a new EulerAngle which is the result of adding  the x, y, z components to this EulerAngle*/
    add (x: number, y: number, z: number): EulerAngle;
    equals (o: Object): boolean;
    /**Returns the angle on the x axis in radians*/
    getX (): number;
    /**Returns the angle on the y axis in radians*/
    getY (): number;
    /**Returns the angle on the z axis in radians*/
    getZ (): number;
    hashCode (): number;
    /**Return a EulerAngle which is the result of changing  the x axis to the passed angle*/
    setX (x: number): EulerAngle;
    /**Return a EulerAngle which is the result of changing  the y axis to the passed angle*/
    setY (y: number): EulerAngle;
    /**Return a EulerAngle which is the result of changing  the z axis to the passed angle*/
    setZ (z: number): EulerAngle;
    /**Creates a new EulerAngle which is the result of subtracting  the x, y, z components to this EulerAngle*/
    subtract (x: number, y: number, z: number): EulerAngle
}

/**Represents an event.   All events require a static method named getHandlerList() which returns the same HandlerList as getHandlers().*/
export class Event extends Object {
    /**Calls the event and tests if cancelled.*/
    callEvent (): boolean;
    /**Convenience method for providing a user-friendly identifier.*/
    getEventName (): String;
    getHandlers (): HandlerList;
    /**Any custom event that should not by synchronized with other events must  use the specific constructor.*/
    isAsynchronous (): boolean
}

export class Event$Result extends Enum<Event$Result> {
    /**Allow / Force the event.*/
    static ALLOW: Event$Result;
    /**Neither deny nor allow the event.*/
    static DEFAULT: Event$Result;
    /**Deny the event.*/
    static DENY: Event$Result
}

export class EventException extends Exception {
    /**If applicable, returns the Exception that triggered this Exception*/
    getCause (): Throwable
}

/**Interface which defines the class for event call backs to plugins*/
export interface EventExecutor {
    static create (m: Method, eventClass: Class<X>): EventExecutor;
    execute (listener: Listener, event: Event): void
}

/**Represents an event's priority in execution*/
export class EventPriority extends Enum<EventPriority> {
    /**Event call is of high importance*/
    static HIGH: EventPriority;
    /**Event call is critical and must have the final say in what happens  to the event*/
    static HIGHEST: EventPriority;
    /**Event call is of low importance*/
    static LOW: EventPriority;
    /**Event call is of very low importance and should be ran first, to allow  other plugins to further customise the outcome*/
    static LOWEST: EventPriority;
    /**Event is listened to purely for monitoring the outcome of an event.*/
    static MONITOR: EventPriority;
    /**Event call is neither important nor unimportant, and may be ran  normally*/
    static NORMAL: EventPriority
}

/**Represents an Evoker "Illager".*/
export interface Evoker extends Spellcaster {
    getWololoTarget (): Sheep;
    /**Set the sheep to be the target of the wololo spell, or null to clear.*/
    setWololoTarget (sheep: Sheep): void
}

/**Represents Evoker Fangs.*/
export interface EvokerFangs extends Entity {
    /**Gets the LivingEntity which summoned the fangs.*/
    getOwner (): LivingEntity;
    /**Sets the LivingEntity which summoned the fangs.*/
    setOwner (owner: LivingEntity): void
}

/**An ExactMatchConversationCanceller cancels a conversation if the user  enters an exact input string*/
export class ExactMatchConversationCanceller extends Object implements ConversationCanceller {
    /**Cancels a conversation based on user input.*/
    cancelBasedOnInput (context: ConversationContext, input: String): boolean;
    /**Allows the ConversationFactory to duplicate this  ConversationCanceller when creating a new Conversation.*/
    clone (): ConversationCanceller;
    /**Sets the conversation this ConversationCanceller can optionally cancel.*/
    setConversation (conversation: Conversation): void
}

/**Called when a ThrownExpBottle hits and releases experience.*/
export class ExpBottleEvent extends ProjectileHitEvent {
    /**Returns the Entity involved in this event*/
    getEntity (): ThrownExpBottle;
    /**This method retrieves the amount of experience to be created.*/
    getExperience (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**This method indicates if the particle effect should be shown.*/
    getShowEffect (): boolean;
    /**This method sets the amount of experience to be created.*/
    setExperience (exp: number): void;
    /**This method sets if the particle effect will be shown.*/
    setShowEffect (showEffect: boolean): void
}

/**Represents an Experience Orb.*/
export interface ExperienceOrb extends Entity {
    /**Gets how much experience is contained within this orb*/
    getExperience (): number;
    /**If this experience orb was spawned in relation to another  entity, such as a player or other living entity death, or breeding,  return the source entity UUID.*/
    getSourceEntityId (): UUID;
    /**Gets the reason that this experience orb was spawned.*/
    getSpawnReason (): ExperienceOrb$SpawnReason;
    /**If this experience orb was triggered to be spawned by  an entity such as a player, due to events such as killing entity,  breaking blocks, smelting in a furnace, etc, this will return the UUID  of the entity that triggered this orb to drop.*/
    getTriggerEntityId (): UUID;
    /**Sets how much experience is contained within this orb*/
    setExperience (value: number): void
}

/**Reasons for why this Experience Orb was spawned*/
export class ExperienceOrb$SpawnReason extends Enum<ExperienceOrb$SpawnReason> {
    /**Spawned by player breaking a block that gives experience points such as Diamond Ore*/
    static BLOCK_BREAK: ExperienceOrb$SpawnReason;
    /**Spawned by player breeding animals*/
    static BREED: ExperienceOrb$SpawnReason;
    /**Spawned by Bukkit API*/
    static CUSTOM: ExperienceOrb$SpawnReason;
    /**Spawned by an entity dying after being damaged by a player*/
    static ENTITY_DEATH: ExperienceOrb$SpawnReason;
    /**Spawned by a player throwing an experience points bottle*/
    static EXP_BOTTLE: ExperienceOrb$SpawnReason;
    /**Spawned by player fishing*/
    static FISHING: ExperienceOrb$SpawnReason;
    /**Spawned by player using a furnace*/
    static FURNACE: ExperienceOrb$SpawnReason;
    /**Spawned by a player using a grindstone*/
    static GRINDSTONE: ExperienceOrb$SpawnReason;
    /**Spawned by a player dying*/
    static PLAYER_DEATH: ExperienceOrb$SpawnReason;
    /**We do not know why it was spawned*/
    static UNKNOWN: ExperienceOrb$SpawnReason;
    /**Spawned by player trading with a villager*/
    static VILLAGER_TRADE: ExperienceOrb$SpawnReason
}

/**Fired anytime the server is about to merge 2 experience orbs into one*/
export class ExperienceOrbMergeEvent extends EntityEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getMergeSource (): ExperienceOrb;
    getMergeTarget (): ExperienceOrb;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when an entity has made a decision to explode.*/
export class ExplosionPrimeEvent extends EntityEvent implements Cancellable {
    /**Gets whether this explosion will create fire or not*/
    getFire (): boolean;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the radius of the explosion*/
    getRadius (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets whether this explosion will create fire or not*/
    setFire (fire: boolean): void;
    /**Sets the radius of the explosion*/
    setRadius (radius: number): void
}

/**A representation of an explosive entity*/
export interface Explosive extends Entity {
    /**Return the radius or yield of this explosive's explosion*/
    getYield (): number;
    /**Return whether or not this explosive creates a fire when exploding*/
    isIncendiary (): boolean;
    /**Set whether or not this explosive's explosion causes fire*/
    setIsIncendiary (isIncendiary: boolean): void;
    /**Set the radius affected by this explosive's explosion*/
    setYield (yield: number): void
}

/**Represents a Minecart with TNT inside it that can explode when triggered.*/
export interface ExplosiveMinecart extends Minecart {

}

/**'face' represents the face to which a lever or button is stuck.    This is used in conjunction with Directional to compute the  orientation of these blocks.*/
export interface FaceAttachable extends BlockData {
    /**Gets the value of the 'face' property.*/
    getAttachedFace (): FaceAttachable$AttachedFace;
    /**Sets the value of the 'face' property.*/
    setAttachedFace (face: FaceAttachable$AttachedFace): void
}

/**The face to which a switch type block is stuck.*/
export class FaceAttachable$AttachedFace extends Enum<FaceAttachable$AttachedFace> {
    /**The switch is mounted to the ceiling and pointing dowanrds.*/
    static CEILING: FaceAttachable$AttachedFace;
    /**The switch is mounted to the floor and pointing upwards.*/
    static FLOOR: FaceAttachable$AttachedFace;
    /**The switch is mounted to the wall.*/
    static WALL: FaceAttachable$AttachedFace
}

/**Represents a falling block*/
export interface FallingBlock extends Entity {
    /**Get the HurtEntities state of this block.*/
    canHurtEntities (): boolean;
    /**Get the data for the falling block*/
    getBlockData (): BlockData;
    /**Get if the falling block will break into an item if it cannot be placed*/
    getDropItem (): boolean;
    /**Set if the falling block will break into an item if it cannot be placed*/
    setDropItem (drop: boolean): void;
    /**Set the HurtEntities state of this block.*/
    setHurtEntities (hurtEntities: boolean): void
}

/**The 'moisture' level of farmland indicates how close it is to a water source  (if any).    A higher moisture level leads, to faster growth of crops on this block, but  cannot be higher than getMaximumMoisture().*/
export interface Farmland extends BlockData {
    /**Gets the maximum allowed value of the 'moisture' property.*/
    getMaximumMoisture (): number;
    /**Gets the value of the 'moisture' property.*/
    getMoisture (): number;
    /**Sets the value of the 'moisture' property.*/
    setMoisture (moisture: number): void
}

export interface Fence extends MultipleFacing, Waterlogged {

}

/**This is a base class for all File based implementations of Configuration*/
export class FileConfiguration extends MemoryConfiguration {
    /**Compiles the header for this FileConfiguration and returns the  result.*/
    buildHeader (): String;
    /**Loads this FileConfiguration from the specified location.*/
    load (file: File): void;
    /**Loads this FileConfiguration from the specified reader.*/
    load (reader: Reader): void;
    /**Loads this FileConfiguration from the specified location.*/
    load (file: String): void;
    /**Loads this FileConfiguration from the specified string, as  opposed to from file.*/
    loadFromString (contents: String): void;
    /**Gets the ConfigurationOptions for this Configuration.*/
    options (): FileConfigurationOptions;
    /**Saves this FileConfiguration to the specified location.*/
    save (file: File): void;
    /**Saves this FileConfiguration to the specified location.*/
    save (file: String): void;
    /**Saves this FileConfiguration to a string, and returns it.*/
    saveToString (): String
}

/**Various settings for controlling the input and output of a FileConfiguration*/
export class FileConfigurationOptions extends MemoryConfigurationOptions {
    /**Returns the Configuration that this object is responsible for.*/
    configuration (): FileConfiguration;
    /**Sets if the Configuration should copy values from its default  Configuration directly.*/
    copyDefaults (value: boolean): FileConfigurationOptions;
    /**Gets whether or not the header should be copied from a default source.*/
    copyHeader (): boolean;
    /**Sets whether or not the header should be copied from a default source.*/
    copyHeader (value: boolean): FileConfigurationOptions;
    /**Gets the header that will be applied to the top of the saved output.*/
    header (): String;
    /**Sets the header that will be applied to the top of the saved output.*/
    header (value: String): FileConfigurationOptions;
    /**Sets the char that will be used to separate ConfigurationSections*/
    pathSeparator (value: char): FileConfigurationOptions
}

/**Class containing file utilities*/
export class FileUtil extends Object {
    /**This method copies one file to another location*/
    static copy (inFile: File, outFile: File): boolean
}

/**Fired once a profiles additional properties (such as textures) has been filled*/
export class FillProfileEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getPlayerProfile (): PlayerProfile;
    /**Same as .getPlayerProfile().getProperties()*/
    getProperties (): Set<ProfileProperty>
}

/**md_5's mixtape.*/
export interface Fire extends Ageable, MultipleFacing {

}

/**Represents a Fireball.*/
export interface Fireball extends Projectile, Explosive {
    /**Retrieve the direction this fireball is heading toward*/
    getDirection (): Vector;
    /**Fireballs fly straight and do not take setVelocity(...) well.*/
    setDirection (direction: Vector): void
}

export interface Firework extends Projectile {
    /**Cause this firework to explode at earliest opportunity, as if it has no  remaining fuse.*/
    detonate (): void;
    /**If this firework is boosting an entity, return it*/
    getBoostedEntity (): LivingEntity;
    /**Get a copy of the fireworks meta*/
    getFireworkMeta (): FireworkMeta;
    getSpawningEntity (): UUID;
    /**Gets if the firework was shot at an angle (i.e.*/
    isShotAtAngle (): boolean;
    /**Apply the provided meta to the fireworks*/
    setFireworkMeta (meta: FireworkMeta): void;
    /**Sets if the firework was shot at an angle (i.e.*/
    setShotAtAngle (shotAtAngle: boolean): void
}

/**Represents a single firework effect.*/
export class FireworkEffect extends Object implements ConfigurationSerializable {
    /**Construct a firework effect.*/
    static builder (): FireworkEffect$Builder;
    static deserialize (map: Map<String,Object>): ConfigurationSerializable;
    equals (obj: Object): boolean;
    /**Get the primary colors of the firework effect.*/
    getColors (): List<Color>;
    /**Get the fade colors of the firework effect.*/
    getFadeColors (): List<Color>;
    /**Get the type of the firework effect.*/
    getType (): FireworkEffect$Type;
    /**Get whether the firework effect flickers.*/
    hasFlicker (): boolean;
    hashCode (): number;
    /**Get whether the firework effect has a trail.*/
    hasTrail (): boolean;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    toString (): String
}

/**This is a builder for FireworkEffects.*/
export class FireworkEffect$Builder extends Object {
    /**Create a FireworkEffect from the current contents of this  builder.*/
    build (): FireworkEffect;
    /**Set whether the firework effect should flicker.*/
    flicker (flicker: boolean): FireworkEffect$Builder;
    /**Set whether the firework effect should have a trail.*/
    trail (trail: boolean): FireworkEffect$Builder;
    /**Specify the type of the firework effect.*/
    with (type: FireworkEffect$Type): FireworkEffect$Builder;
    /**Add several primary colors to the firework effect.*/
    withColor (colors: Iterable<X>): FireworkEffect$Builder;
    /**Add a primary color to the firework effect.*/
    withColor (color: Color): FireworkEffect$Builder;
    /**Add several primary colors to the firework effect.*/
    withColor (...colors: Color[]): FireworkEffect$Builder;
    /**Add several fade colors to the firework effect.*/
    withFade (colors: Iterable<X>): FireworkEffect$Builder;
    /**Add a fade color to the firework effect.*/
    withFade (color: Color): FireworkEffect$Builder;
    /**Add several fade colors to the firework effect.*/
    withFade (...colors: Color[]): FireworkEffect$Builder;
    /**Add a flicker to the firework effect.*/
    withFlicker (): FireworkEffect$Builder;
    /**Add a trail to the firework effect.*/
    withTrail (): FireworkEffect$Builder
}

/**The type or shape of the effect.*/
export class FireworkEffect$Type extends Enum<FireworkEffect$Type> {
    /**A small ball effect.*/
    static BALL: FireworkEffect$Type;
    /**A large ball effect.*/
    static BALL_LARGE: FireworkEffect$Type;
    /**A burst effect.*/
    static BURST: FireworkEffect$Type;
    /**A creeper-face effect.*/
    static CREEPER: FireworkEffect$Type;
    /**A star-shaped effect.*/
    static STAR: FireworkEffect$Type
}

/**Represents a meta that can store a single FireworkEffect. An example  includes Material.FIREWORK_STAR.*/
export interface FireworkEffectMeta extends ItemMeta {
    clone (): FireworkEffectMeta;
    /**Gets the firework effect for this meta.*/
    getEffect (): FireworkEffect;
    /**Checks if this meta has an effect.*/
    hasEffect (): boolean;
    /**Sets the firework effect for this meta.*/
    setEffect (effect: FireworkEffect): void
}

/**Called when a firework explodes.*/
export class FireworkExplodeEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Firework;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Set the cancelled state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a Material.FIREWORK_ROCKET and its effects.*/
export interface FireworkMeta extends ItemMeta {
    /**Add another effect to this firework.*/
    addEffect (effect: FireworkEffect): void;
    /**Add several firework effects to this firework.*/
    addEffects (effects: Iterable<FireworkEffect>): void;
    /**Add several effects to this firework.*/
    addEffects (...effects: FireworkEffect[]): void;
    /**Remove all effects from this firework.*/
    clearEffects (): void;
    clone (): FireworkMeta;
    /**Get the effects in this firework.*/
    getEffects (): List<FireworkEffect>;
    /**Get the number of effects in this firework.*/
    getEffectsSize (): number;
    /**Gets the approximate height the firework will fly.*/
    getPower (): number;
    /**Get whether this firework has any effects.*/
    hasEffects (): boolean;
    /**Remove an effect from this firework.*/
    removeEffect (index: number): void;
    /**Sets the approximate power of the firework.*/
    setPower (power: number): void
}

/**Represents a fish entity.*/
export interface Fish extends WaterMob {

}

/**Represents a fishing hook.*/
export interface FishHook extends Projectile {

}

/**A FixedMetadataValue is a special case metadata item that contains the same  value forever after initialization. Invalidating a FixedMetadataValue has  no effect.    This class extends LazyMetadataValue for historical reasons, even though it  overrides all the implementation methods. it is possible that in the future  that the inheritance hierarchy may change.*/
export class FixedMetadataValue extends LazyMetadataValue {
    /**Invalidates this metadata item, forcing it to recompute when next  accessed.*/
    invalidate (): void;
    /**Fetches the value of this metadata item.*/
    value (): Object
}

/**FixedSetPrompt is the base class for any prompt that requires a fixed set  response from the user.*/
export class FixedSetPrompt extends ValidatingPrompt {
    /**Utility function to create a formatted string containing all the  options declared in the constructor.*/
    formatFixedSet (): String;
    /**Override this method to check the validity of the player's input.*/
    isInputValid (context: ConversationContext, input: String): boolean
}

/**Determines the collision behavior when fluids get hit during ray tracing.*/
export class FluidCollisionMode extends Enum<FluidCollisionMode> {
    /**Collide with all fluids.*/
    static ALWAYS: FluidCollisionMode;
    /**Ignore fluids.*/
    static NEVER: FluidCollisionMode;
    /**Only collide with source fluid blocks.*/
    static SOURCE_ONLY: FluidCollisionMode
}

/**Called when the fluid level of a block changes due to changes in adjacent  blocks.*/
export class FluidLevelChangeEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new data of the changed block.*/
    getNewData (): BlockData;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void;
    /**Sets the new data of the changed block.*/
    setNewData (newData: BlockData): void
}

/**Represents a Flying Entity.*/
export interface Flying extends Mob {

}

/**Called when a human entity's food level changes*/
export class FoodLevelChangeEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): HumanEntity;
    /**Gets the resultant food level that the entity involved in this event  should be set to.*/
    getFoodLevel (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item that triggered this event, if any.*/
    getItem (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the resultant food level that the entity involved in this event  should be set to*/
    setFoodLevel (level: number): void
}

export class FormattedCommandAlias extends Command {
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, commandLabel: String, args: String[]): boolean;
    getTimingName (): String
}

/**What does the fox say?*/
export interface Fox extends Animals, Sittable {
    /**Gets the first trusted player.*/
    getFirstTrustedPlayer (): AnimalTamer;
    /**Gets the current type of this fox.*/
    getFoxType (): Fox$Type;
    /**Gets the second trusted player.*/
    getSecondTrustedPlayer (): AnimalTamer;
    /**Checks if this animal is crouching*/
    isCrouching (): boolean;
    /**Sets if this animal is crouching.*/
    setCrouching (crouching: boolean): void;
    /**Set the first trusted player.*/
    setFirstTrustedPlayer (player: AnimalTamer): void;
    /**Sets the current type of this fox.*/
    setFoxType (type: Fox$Type): void;
    /**Set the second trusted player.*/
    setSecondTrustedPlayer (player: AnimalTamer): void;
    /**Sets if this animal is sleeping.*/
    setSleeping (sleeping: boolean): void
}

/**Represents the various different fox types there are.*/
export class Fox$Type extends Enum<Fox$Type> {
    static RED: Fox$Type;
    static SNOW: Fox$Type
}

export class FullServerTickHandler extends Object {
    abort (): void;
    /**This is simply for the Closeable interface so it can be used with try-with-resources ()*/
    close (): void;
    equals (o: Object): boolean;
    /**Used internally to get the actual backing Handler in the case of delegated Handlers*/
    getTimingHandler (): co$aikar$timings$TimingHandler;
    hashCode (): number;
    isEnabled (): boolean;
    isSpecial (): boolean;
    /**Starts timing the execution until Timing.stopTiming() is called.*/
    startTiming (): Timing;
    /**Starts timing the execution until Timing.stopTiming() is called.*/
    startTimingIfSync (): Timing;
    /**Stops timing and records the data.*/
    stopTiming (): void;
    /**Stops timing and records the data.*/
    stopTimingIfSync (): void
}

export interface Furnace extends Directional, Lightable {

}

/**Represents a captured state of a furnace.*/
export interface Furnace extends Container {
    /**Get burn time.*/
    getBurnTime (): number;
    /**Gets the cook speed multiplier that this Furnace will cook  compared to vanilla.*/
    getCookSpeedMultiplier (): number;
    /**Get cook time.*/
    getCookTime (): number;
    /**Get cook time total.*/
    getCookTimeTotal (): number;
    /**Gets the inventory of the block represented by this block state.*/
    getInventory (): FurnaceInventory;
    /**Gets the captured inventory snapshot of this container.*/
    getSnapshotInventory (): FurnaceInventory;
    /**Set burn time.*/
    setBurnTime (burnTime: number): void;
    /**Sets the speed multiplier that this Furnace will cook  compared to vanilla.*/
    setCookSpeedMultiplier (multiplier: number): void;
    /**Set cook time.*/
    setCookTime (cookTime: number): void;
    /**Set cook time.*/
    setCookTimeTotal (cookTimeTotal: number): void
}

/**Called when an ItemStack is successfully burned as fuel in a furnace.*/
export class FurnaceBurnEvent extends BlockEvent implements Cancellable {
    /**Gets the burn time for this fuel*/
    getBurnTime (): number;
    /**Gets the fuel ItemStack for this event*/
    getFuel (): ItemStack;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets whether the furnace's fuel is burning or not.*/
    isBurning (): boolean;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets whether the furnace's fuel is burning or not.*/
    setBurning (burning: boolean): void;
    /**Sets the burn time for this fuel*/
    setBurnTime (burnTime: number): void;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**This event is called when a player takes items out of the furnace*/
export class FurnaceExtractEvent extends BlockExpEvent {
    /**Get the item count being retrieved*/
    getItemAmount (): number;
    /**Get the Material of the item being retrieved*/
    getItemType (): Material;
    /**Get the player that triggered the event*/
    getPlayer (): Player
}

/**Interface to the inventory of a Furnace.*/
export interface FurnaceInventory extends Inventory {
    /**Get the current fuel.*/
    getFuel (): ItemStack;
    /**Gets the block or entity belonging to the open inventory*/
    getHolder (): Furnace;
    /**Get the current item in the result slot.*/
    getResult (): ItemStack;
    /**Get the item currently smelting.*/
    getSmelting (): ItemStack;
    /**Set the current fuel.*/
    setFuel (stack: ItemStack): void;
    /**Set the current item in the result slot.*/
    setResult (stack: ItemStack): void;
    /**Set the item currently smelting.*/
    setSmelting (stack: ItemStack): void
}

/**Represents a furnace recipe.*/
export class FurnaceRecipe extends CookingRecipe<FurnaceRecipe> {
    /**Sets the input of this cooking recipe.*/
    setInput (input: Material): FurnaceRecipe;
    /**Sets the input of this furnace recipe.*/
    setInput (input: MaterialData): FurnaceRecipe;
    /**Sets the input of this cooking recipe.*/
    setInputChoice (input: RecipeChoice): FurnaceRecipe
}

/**Called when an ItemStack is successfully smelted in a furnace.*/
export class FurnaceSmeltEvent extends BlockCookEvent {

}

/**Represents the various type of game modes that HumanEntitys may  have*/
export class GameMode extends Enum<GameMode> {
    /**Adventure mode cannot break blocks without the correct tools.*/
    static ADVENTURE: GameMode;
    /**Creative mode may fly, build instantly, become invulnerable and create  free items.*/
    static CREATIVE: GameMode;
    /**Spectator mode cannot interact with the world in anyway and is  invisible to normal players.*/
    static SPECTATOR: GameMode;
    /**Survival mode is the "normal" gameplay type, with no special features.*/
    static SURVIVAL: GameMode
}

/**GameRules dictate certain behavior within Minecraft itself    For more information please visit the  Minecraft  Wiki*/
export class GameRule<T> extends Object {
    equals (obj: Object): boolean;
    /**Get a GameRule by its name.*/
    static getByName (rule: String): GameRule<X>;
    /**Get the name of this GameRule.*/
    getName (): String;
    /**Get the type of this rule.*/
    getType (): Class<T>;
    toString (): String;
    /**Get an immutable collection of GameRules.*/
    static values (): GameRule<X>[]
}

/**'in_wall" indicates if the fence gate is attached to a wall, and if true the  texture is lowered by a small amount to blend in better.*/
export interface Gate extends Directional, Openable, Powerable {
    /**Gets the value of the 'in_wall' property.*/
    isInWall (): boolean;
    /**Sets the value of the 'in_wall' property.*/
    setInWall (inWall: boolean): void
}

/**Lacking an alternative, the help system will create instances of  GenericCommandHelpTopic for each command in the server's CommandMap. You  can use this class as a base class for custom help topics, or as an example  for how to write your own.*/
export class GenericCommandHelpTopic extends HelpTopic {
    /**Determines if a Player is allowed to see this help topic.*/
    canSee (sender: CommandSender): boolean
}

/**Represents a Ghast.*/
export interface Ghast extends Flying {

}

/**Represents a Giant.*/
export interface Giant extends Monster {

}

export interface GlassPane extends MultipleFacing, Waterlogged {

}

/**Represents an AI goal of an entity*/
export interface Goal<T extends Mob> {
    /**A unique key that identifies this type of goal.*/
    getKey (): GoalKey<T>;
    /**Returns a list of all applicable flags for this goal.   This method is only called on construction.*/
    getTypes (): EnumSet<GoalType>;
    /**Checks if this goal should be activated*/
    shouldActivate (): boolean;
    /**Checks if this goal should stay active, defaults to shouldActivate()*/
    shouldStayActive (): boolean;
    /**Called when this goal gets activated*/
    start (): void;
    /**Called when this goal gets stopped*/
    stop (): void;
    /**Called each tick the goal is activated*/
    tick (): void
}

/**Used to identify a Goal. Consists of a NamespacedKey and the type of mob the goal can be applied to*/
export class GoalKey<T extends Mob> extends Object {
    equals (o: Object): boolean;
    getEntityClass (): Class<T>;
    getNamespacedKey (): NamespacedKey;
    hashCode (): number;
    static of <A extends Mob>(entityClass: Class<A>, namespacedKey: NamespacedKey): GoalKey<A>;
    toString (): String
}

/**Represents the subtype of a goal. Used by minecraft to disable certain types of goals if needed.*/
export class GoalType extends Enum<GoalType> {
    static JUMP: GoalType;
    static LOOK: GoalType;
    static MOVE: GoalType;
    static TARGET: GoalType;
    /**Used to map vanilla goals, that are a behavior goal but don't have a type set...*/
    static UNKNOWN_BEHAVIOR: GoalType
}

/**A mechanical creature that may harm enemies.*/
export interface Golem extends Creature {

}

/**Represents the different types of grass.*/
export class GrassSpecies extends Enum<GrassSpecies> {
    /**Represents the dead looking grass.*/
    static DEAD: GrassSpecies;
    /**Represents the fern-looking grass species.*/
    static FERN_LIKE: GrassSpecies;
    /**Represents the normal grass species.*/
    static NORMAL: GrassSpecies
}

export interface Grindstone extends Directional, FaceAttachable {

}

/**Interface to the inventory of a Grindstone.*/
export interface GrindstoneInventory extends Inventory {
    /**Gets the lower input item.*/
    getLowerItem (): ItemStack;
    /**Gets the result.*/
    getResult (): ItemStack;
    /**Gets the upper input item.*/
    getUpperItem (): ItemStack;
    /**Sets the lower input item.*/
    setLowerItem (lowerItem: ItemStack): void;
    /**Sets the result.*/
    setResult (result: ItemStack): void;
    /**Sets the upper input item.*/
    setUpperItem (upperItem: ItemStack): void
}

/**This event is fired if server is getting queried over GS4 Query protocol   Adapted from Velocity's ProxyQueryEvent*/
export class GS4QueryEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get querier address*/
    getQuerierAddress (): InetAddress;
    /**Get query type*/
    getQueryType (): GS4QueryEvent$QueryType;
    /**Get query response*/
    getResponse (): GS4QueryEvent$QueryResponse;
    /**Set query response*/
    setResponse (response: GS4QueryEvent$QueryResponse): void;
    toString (): String
}

export class GS4QueryEvent$QueryResponse extends Object {
    /**Creates a new GS4QueryEvent.QueryResponse.Builder instance*/
    static builder (): GS4QueryEvent$QueryResponse$Builder;
    /**Get current online player count which will be used to reply to the query.*/
    getCurrentPlayers (): number;
    /**Get game version which will be used to reply to the query.*/
    getGameVersion (): String;
    /**Get server (public facing) hostname*/
    getHostname (): String;
    /**Get map name which will be used to reply to the query.*/
    getMap (): String;
    /**Get max player count which will be used to reply to the query.*/
    getMaxPlayers (): number;
    /**Get motd which will be used to reply to the query.*/
    getMotd (): String;
    /**Get collection of players which will be used to reply to the query.*/
    getPlayers (): Collection<String>;
    /**Get list of plugins which will be used to reply to the query.*/
    getPlugins (): Collection<GS4QueryEvent$QueryResponse$PluginInformation>;
    /**Get server (public facing) port*/
    getPort (): number;
    /**Get server software (name and version) which will be used to reply to the query.*/
    getServerVersion (): String;
    /**Creates a new GS4QueryEvent.QueryResponse.Builder instance from data represented by this response*/
    toBuilder (): GS4QueryEvent$QueryResponse$Builder
}

/**A builder for GS4QueryEvent.QueryResponse objects.*/
export class GS4QueryEvent$QueryResponse$Builder extends Object {
    /**Builds new GS4QueryEvent.QueryResponse with supplied data*/
    build (): GS4QueryEvent$QueryResponse;
    clearPlayers (): GS4QueryEvent$QueryResponse$Builder;
    clearPlugins (): GS4QueryEvent$QueryResponse$Builder;
    currentPlayers (currentPlayers: number): GS4QueryEvent$QueryResponse$Builder;
    gameVersion (gameVersion: String): GS4QueryEvent$QueryResponse$Builder;
    hostname (hostname: String): GS4QueryEvent$QueryResponse$Builder;
    map (map: String): GS4QueryEvent$QueryResponse$Builder;
    maxPlayers (maxPlayers: number): GS4QueryEvent$QueryResponse$Builder;
    motd (motd: String): GS4QueryEvent$QueryResponse$Builder;
    players (...players: String[]): GS4QueryEvent$QueryResponse$Builder;
    players (players: Collection<String>): GS4QueryEvent$QueryResponse$Builder;
    plugins (...plugins: GS4QueryEvent$QueryResponse$PluginInformation[]): GS4QueryEvent$QueryResponse$Builder;
    plugins (plugins: Collection<GS4QueryEvent$QueryResponse$PluginInformation>): GS4QueryEvent$QueryResponse$Builder;
    port (port: number): GS4QueryEvent$QueryResponse$Builder;
    serverVersion (serverVersion: String): GS4QueryEvent$QueryResponse$Builder
}

/**Plugin information*/
export class GS4QueryEvent$QueryResponse$PluginInformation extends Object {
    getName (): String;
    getVersion (): String;
    static of (name: String, version: String): GS4QueryEvent$QueryResponse$PluginInformation;
    setName (name: String): void;
    setVersion (version: String): void
}

/**The type of query*/
export class GS4QueryEvent$QueryType extends Enum<GS4QueryEvent$QueryType> {
    /**Basic query asks only a subset of information, such as motd, game type (hardcoded to*/
    static BASIC: GS4QueryEvent$QueryType;
    /**Full query asks pretty much everything present on this event (only hardcoded values cannot be modified here).*/
    static FULL: GS4QueryEvent$QueryType
}

export interface Guardian extends Monster {

}

/**A list of event handlers, stored per-event. Based on lahwran's fevents.*/
export class HandlerList extends Object {
    /**Bake HashMap and ArrayLists to 2d array - does nothing if not necessary*/
    bake (): void;
    /**Bake all handler lists.*/
    static bakeAll (): void;
    /**Get a list of all handler lists for every event type*/
    static getHandlerLists (): ArrayList<HandlerList>;
    /**Get the baked registered listeners associated with this handler list*/
    getRegisteredListeners (): RegisteredListener[];
    /**Get a specific plugin's registered listeners associated with this  handler list*/
    static getRegisteredListeners (plugin: Plugin): ArrayList<RegisteredListener>;
    /**Register a new listener in this handler list*/
    register (listener: RegisteredListener): void;
    /**Register a collection of new listeners in this handler list*/
    registerAll (listeners: Collection<RegisteredListener>): void;
    /**Remove a specific listener from this handler*/
    unregister (listener: Listener): void;
    /**Remove a specific plugin's listeners from this handler*/
    unregister (plugin: Plugin): void;
    /**Remove a listener from a specific order slot*/
    unregister (listener: RegisteredListener): void;
    /**Unregister all listeners from all handler lists.*/
    static unregisterAll (): void;
    /**Unregister a specific listener from all handler lists.*/
    static unregisterAll (listener: Listener): void;
    /**Unregister a specific plugin's listeners from all handler lists.*/
    static unregisterAll (plugin: Plugin): void
}

/**Represents a Hanging entity*/
export interface Hanging extends Entity, Attachable {
    /**Sets the direction of the hanging entity, potentially overriding rules  of placement.*/
    setFacingDirection (face: BlockFace, force: boolean): boolean
}

/**Triggered when a hanging entity is removed by an entity*/
export class HangingBreakByEntityEvent extends HangingBreakEvent {
    /**Gets the entity that removed the hanging entity.*/
    getRemover (): Entity
}

/**Triggered when a hanging entity is removed*/
export class HangingBreakEvent extends HangingEvent implements Cancellable {
    /**Gets the cause for the hanging entity's removal*/
    getCause (): HangingBreakEvent$RemoveCause;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**An enum to specify the cause of the removal*/
export class HangingBreakEvent$RemoveCause extends Enum<HangingBreakEvent$RemoveCause> {
    /**Removed by an uncategorised cause*/
    static DEFAULT: HangingBreakEvent$RemoveCause;
    /**Removed by an entity*/
    static ENTITY: HangingBreakEvent$RemoveCause;
    /**Removed by an explosion*/
    static EXPLOSION: HangingBreakEvent$RemoveCause;
    /**Removed by placing a block on it*/
    static OBSTRUCTION: HangingBreakEvent$RemoveCause;
    /**Removed by destroying the block behind it, etc*/
    static PHYSICS: HangingBreakEvent$RemoveCause
}

/**Represents a hanging entity-related event.*/
export class HangingEvent extends Event {
    /**Gets the hanging entity involved in this event.*/
    getEntity (): Hanging
}

/**Triggered when a hanging entity is created in the world*/
export class HangingPlaceEvent extends HangingEvent implements Cancellable {
    /**Returns the block that the hanging entity was placed on*/
    getBlock (): Block;
    /**Returns the face of the block that the hanging entity was placed on*/
    getBlockFace (): BlockFace;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the player placing the hanging entity*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Further information regarding heightmaps.*/
export class HeightMap extends Enum<HeightMap> {
    /**The highest block that blocks motion or contains a fluid.*/
    static MOTION_BLOCKING: HeightMap;
    /**The highest block that blocks motion or contains a fluid or is in the  Tag.LEAVES.*/
    static MOTION_BLOCKING_NO_LEAVES: HeightMap;
    /**The highest non-air block, solid block.*/
    static OCEAN_FLOOR: HeightMap;
    /**The highest block that is neither air nor contains a fluid, for worldgen.*/
    static OCEAN_FLOOR_WG: HeightMap;
    /**The highest non-air block.*/
    static WORLD_SURFACE: HeightMap;
    /**The highest non-air block, for worldgen.*/
    static WORLD_SURFACE_WG: HeightMap
}

export class HelpCommand extends BukkitCommand {
    /**Computes the Dameraur-Levenshtein Distance between two strings.*/
    static damerauLevenshteinDistance (s1: String, s2: String): number;
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, currentAlias: String, args: String[]): boolean;
    findPossibleMatches (searchString: String): HelpTopic;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[]): List<String>
}

/**The HelpMap tracks all help topics registered in a Bukkit server. When the  server starts up or is reloaded, help is processed and topics are added in  the following order:     General topics are loaded from the help.yml  Plugins load and optionally call addTopic()  Registered plugin commands are processed by HelpTopicFactory      objects to create topics  Topic contents are amended as directed in help.yml  */
export interface HelpMap {
    /**Adds a topic to the server's help index.*/
    addTopic (topic: HelpTopic): void;
    /**Clears out the contents of the help index.*/
    clear (): void;
    /**Returns a help topic for a given topic name.*/
    getHelpTopic (topicName: String): HelpTopic;
    /**Returns a collection of all the registered help topics.*/
    getHelpTopics (): Collection<HelpTopic>;
    /**Gets the list of plugins the server administrator has chosen to exclude  from the help index.*/
    getIgnoredPlugins (): List<String>;
    /**Associates a HelpTopicFactory object with given command base  class.*/
    registerHelpTopicFactory (commandClass: Class<X>, factory: HelpTopicFactory<X>): void
}

/**HelpTopic implementations are displayed to the user when the user uses the  /help command.    Custom implementations of this class can work at two levels. A simple  implementation only needs to set the value of name,   shortText, and fullText in the constructor. This base class will  take care of the rest.    Complex implementations can be created by overriding the behavior of all  the methods in this class.*/
export class HelpTopic extends Object {
    /**Allows the server administrator to override the permission required to  see a help topic.*/
    amendCanSee (amendedPermission: String): void;
    /**Allows the server admin (or another plugin) to add or replace the  contents of a help topic.*/
    amendTopic (amendedShortText: String, amendedFullText: String): void;
    /**Developers implementing their own custom HelpTopic implementations can  use this utility method to ensure their implementations comply with the  expected behavior of the amendTopic(String, String)  method.*/
    applyAmendment (baseText: String, amendment: String): String;
    /**Determines if a Player is allowed to see this help topic.*/
    canSee (player: CommandSender): boolean;
    /**Returns the full description of this help topic that is displayed when  the user requests this topic's details.*/
    getFullText (forWho: CommandSender): String;
    /**Returns the name of this help topic.*/
    getName (): String;
    /**Returns a brief description that will be displayed in the topic index.*/
    getShortText (): String
}

/**Used to impose a custom total ordering on help topics.    All topics are listed in alphabetic order, but topics that start with a  slash come after topics that don't.*/
export class HelpTopicComparator extends Object implements Comparator<HelpTopic> {
    compare (lhs: HelpTopic, rhs: HelpTopic): number;
    static helpTopicComparatorInstance (): HelpTopicComparator;
    static topicNameComparatorInstance (): HelpTopicComparator$TopicNameComparator
}

export class HelpTopicComparator$TopicNameComparator extends Object implements Comparator<String> {
    compare (lhs: String, rhs: String): number
}

/**A HelpTopicFactory is used to create custom HelpTopic objects from  commands that inherit from a common base class or have executors that  inherit from a common base class. You can use a custom HelpTopic to change  the way all the commands in your plugin display in the help. If your plugin  implements a complex permissions system, a custom help topic may also be  appropriate.    To automatically bind your plugin's commands to your custom HelpTopic  implementation, first make sure all your commands or executors derive from  a custom base class (it doesn't have to do anything). Next implement a  custom HelpTopicFactory that accepts your custom command base class and  instantiates an instance of your custom HelpTopic from it. Finally,  register your HelpTopicFactory against your command base class using the  HelpMap.registerHelpTopicFactory(Class, HelpTopicFactory) method.    As the help system iterates over all registered commands to make help  topics, it first checks to see if there is a HelpTopicFactory registered  for the command's base class. If so, the factory is used to make a help  topic rather than a generic help topic. If no factory is found for the  command's base class and the command derives from PluginCommand, then the type of the command's executor  is inspected looking for a registered HelpTopicFactory. Finally, if no  factory is found, a generic help topic is created for the command.*/
export interface HelpTopicFactory<TCommand extends Command> {
    /**This method accepts a command deriving from a custom command base class  and constructs a custom HelpTopic for it.*/
    createTopic (command: TCommand): HelpTopic
}

/**Represents a Hoglin.*/
export interface Hoglin extends Animals {
    /**Gets the amount of ticks until this entity will be converted to a Zoglin.*/
    getConversionTime (): number;
    /**Get whether the hoglin is able to be hunted by piglins.*/
    isAbleToBeHunted (): boolean;
    /**Get if this entity is in the process of converting to a Zoglin.*/
    isConverting (): boolean;
    /**Gets whether the hoglin is immune to zombification.*/
    isImmuneToZombification (): boolean;
    /**Sets the amount of ticks until this entity will be converted to a Zoglin.*/
    setConversionTime (time: number): void;
    /**Sets whether the hoglin is immune to zombification.*/
    setImmuneToZombification (flag: boolean): void;
    /**Sets whether the hoglin is able to be hunted by piglins.*/
    setIsAbleToBeHunted (flag: boolean): void
}

/**Similar to Powerable, 'enabled' indicates whether or not the hopper  is currently activated.    Unlike most other blocks, a hopper is only enabled when it is not  receiving any power.*/
export interface Hopper extends Directional {
    /**Gets the value of the 'enabled' property.*/
    isEnabled (): boolean;
    /**Sets the value of the 'enabled' property.*/
    setEnabled (enabled: boolean): void
}

/**Represents a captured state of a hopper.*/
export interface Hopper extends Container, LootableBlockInventory {

}

/**Represents a Minecart with a Hopper inside it*/
export interface HopperMinecart extends Minecart, InventoryHolder, LootableEntityInventory {
    /**Checks whether or not this Minecart will pick up  items into its inventory.*/
    isEnabled (): boolean;
    /**Sets whether this Minecart will pick up items.*/
    setEnabled (enabled: boolean): void
}

/**Represents a Horse.*/
export interface Horse extends AbstractHorse {
    /**Gets the horse's color.*/
    getColor (): Horse$Color;
    /**Get the object's inventory.*/
    getInventory (): HorseInventory;
    /**Gets the horse's style.*/
    getStyle (): Horse$Style;
    /**Sets the horse's color.*/
    setColor (color: Horse$Color): void;
    /**Sets the style of this horse.*/
    setStyle (style: Horse$Style): void
}

/**Represents the base color that the horse has.*/
export class Horse$Color extends Enum<Horse$Color> {
    /**Pitch black*/
    static BLACK: Horse$Color;
    /**Light brown*/
    static BROWN: Horse$Color;
    /**Chestnut*/
    static CHESTNUT: Horse$Color;
    /**Very light brown*/
    static CREAMY: Horse$Color;
    /**Dark brown*/
    static DARK_BROWN: Horse$Color;
    /**Gray*/
    static GRAY: Horse$Color;
    /**Snow white*/
    static WHITE: Horse$Color
}

/**Represents the style, or markings, that the horse has.*/
export class Horse$Style extends Enum<Horse$Style> {
    /**Small black dots*/
    static BLACK_DOTS: Horse$Style;
    /**No markings*/
    static NONE: Horse$Style;
    /**White socks or stripes*/
    static WHITE: Horse$Style;
    /**Round white dots*/
    static WHITE_DOTS: Horse$Style;
    /**Milky splotches*/
    static WHITEFIELD: Horse$Style
}

/**An interface to the inventory of a Horse.*/
export interface HorseInventory extends AbstractHorseInventory, ArmoredHorseInventory {

}

/**Called when a horse jumps.*/
export class HorseJumpEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): AbstractHorse;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the power of the jump.*/
    getPower (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean
}

/**Represents a human entity, such as an NPC or a player*/
export interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
    /**Force-closes the currently open inventory view for this player, if any.*/
    closeInventory (): void;
    /**Force-closes the currently open inventory view for this player, if any.*/
    closeInventory (reason: InventoryCloseEvent$Reason): void;
    /**Discover a recipe for this player such that it has not already been  discovered.*/
    discoverRecipe (recipe: NamespacedKey): boolean;
    /**Discover a collection of recipes for this player such that they have not  already been discovered.*/
    discoverRecipes (recipes: Collection<NamespacedKey>): number;
    /**Make the entity drop the item in their hand.*/
    dropItem (dropAll: boolean): boolean;
    /**Gets the current cooldown for a player's attack.*/
    getAttackCooldown (): number;
    /**Gets the location of the bed the player is currently sleeping in*/
    getBedLocation (): Location;
    /**Get the cooldown time in ticks remaining for the specified material.*/
    getCooldown (material: Material): number;
    /**Get an immutable set of recipes this entity has discovered.*/
    getDiscoveredRecipes (): Set<NamespacedKey>;
    /**Get the player's EnderChest inventory*/
    getEnderChest (): Inventory;
    /**Get the total amount of experience required for the player to level*/
    getExpToLevel (): number;
    /**Gets this human's current GameMode*/
    getGameMode (): GameMode;
    /**Get the player's inventory.*/
    getInventory (): PlayerInventory;
    /**Returns the ItemStack currently on your cursor, can be empty.*/
    getItemOnCursor (): ItemStack;
    /**Gets the player's selected main hand*/
    getMainHand (): MainHand;
    /**Returns the name of this player*/
    getName (): String;
    /**Gets the inventory view the player is currently viewing.*/
    getOpenInventory (): InventoryView;
    /**Gets the Location of the player's bed, null if they have not slept  in one.*/
    getPotentialBedLocation (): Location;
    /**Get the sleep ticks of the player.*/
    getSleepTicks (): number;
    /**Check whether a cooldown is active on the specified material.*/
    hasCooldown (material: Material): boolean;
    /**Check whether or not this entity has discovered the specified recipe.*/
    hasDiscoveredRecipe (recipe: NamespacedKey): boolean;
    /**Check if the player is currently blocking (ie with a shield).*/
    isBlocking (): boolean;
    /**Check if the player currently has their hand raised (ie about to begin  blocking).*/
    isHandRaised (): boolean;
    /**Opens an empty enchanting inventory window with the player's inventory  on the bottom.*/
    openEnchanting (location: Location, force: boolean): InventoryView;
    /**Opens an inventory window with the specified inventory on the top and  the player's inventory on the bottom.*/
    openInventory (inventory: Inventory): InventoryView;
    /**Opens an inventory window to the specified inventory view.*/
    openInventory (inventory: InventoryView): void;
    /**Starts a trade between the player and the villager.*/
    openMerchant (trader: Villager, force: boolean): InventoryView;
    /**Starts a trade between the player and the merchant.*/
    openMerchant (merchant: Merchant, force: boolean): InventoryView;
    /**Opens an editor window for the specified sign*/
    openSign (sign: Sign): void;
    /**Opens an empty workbench inventory window with the player's inventory  on the bottom.*/
    openWorkbench (location: Location, force: boolean): InventoryView;
    /**If there is an Entity on this entities left shoulder, it will be released to the world and returned.*/
    releaseLeftShoulderEntity (): Entity;
    /**If there is an Entity on this entities left shoulder, it will be released to the world and returned.*/
    releaseRightShoulderEntity (): Entity;
    /**Set a cooldown on the specified material for a certain amount of ticks.*/
    setCooldown (material: Material, ticks: number): void;
    /**Sets this human's current GameMode*/
    setGameMode (mode: GameMode): void;
    /**Sets the item to the given ItemStack, this will replace whatever the  user was moving.*/
    setItemOnCursor (item: ItemStack): void;
    /**If the player currently has an inventory window open, this method will  set a property of that window, such as the state of a progress bar.*/
    setWindowProperty (prop: InventoryView$Property, value: number): boolean;
    /**Attempts to make the entity sleep at the given location.*/
    sleep (location: Location, force: boolean): boolean;
    /**Undiscover a recipe for this player such that it has already been  discovered.*/
    undiscoverRecipe (recipe: NamespacedKey): boolean;
    /**Undiscover a collection of recipes for this player such that they have  already been discovered.*/
    undiscoverRecipes (recipes: Collection<NamespacedKey>): number;
    /**Causes the player to wakeup if they are currently sleeping.*/
    wakeup (setSpawnLocation: boolean): void
}

/**Represents a Husk - variant of Zombie.*/
export interface Husk extends Zombie {
    /**Gets the amount of ticks until this entity will be converted to a Zombie  as a result of being underwater.*/
    getConversionTime (): number;
    /**Get if this entity is in the process of converting to a Zombie as a  result of being underwater.*/
    isConverting (): boolean;
    /**Sets the amount of ticks until this entity will be converted to a Zombie  as a result of being underwater.*/
    setConversionTime (time: number): void
}

/**Represents a type of "Illager".*/
export interface Illager extends Raider {

}

export class IllegalPacketEvent extends PlayerEvent {
    getExceptionMessage (): String;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getKickMessage (): String;
    getType (): String;
    isShouldKick (): boolean;
    static process (player: Player, type: String, kickMessage: String, exception: Exception): void;
    setKickMessage (kickMessage: String): void;
    setShouldKick (shouldKick: boolean): void
}

/**Thrown when a plugin attempts to interact with the server when it is not  enabled*/
export class IllegalPluginAccessException extends RuntimeException {

}

/**Represents an Illusioner "Illager".*/
export interface Illusioner extends Spellcaster, RangedEntity {

}

/**An InactivityConversationCanceller will cancel a Conversation after  a period of inactivity by the user.*/
export class InactivityConversationCanceller extends Object implements ConversationCanceller {
    /**Cancels a conversation based on user input.*/
    cancelBasedOnInput (context: ConversationContext, input: String): boolean;
    /**Subclasses of InactivityConversationCanceller can override this method  to take additional actions when the inactivity timer abandons the  conversation.*/
    cancelling (conversation: Conversation): void;
    /**Allows the ConversationFactory to duplicate this  ConversationCanceller when creating a new Conversation.*/
    clone (): ConversationCanceller;
    /**Sets the conversation this ConversationCanceller can optionally cancel.*/
    setConversation (conversation: Conversation): void
}

/**This help topic generates a list of other help topics. This class is useful  for adding your own index help topics. To enforce a particular order, use a  sorted collection.    If a preamble is provided to the constructor, that text will be displayed  before the first item in the index.*/
export class IndexHelpTopic extends HelpTopic {
    /**Allows the server administrator to override the permission required to  see a help topic.*/
    amendCanSee (amendedPermission: String): void;
    /**Builds individual lines in the index topic.*/
    buildIndexLine (sender: CommandSender, topic: HelpTopic): String;
    /**Builds the topic preamble.*/
    buildPreamble (sender: CommandSender): String;
    /**Determines if a Player is allowed to see this help topic.*/
    canSee (sender: CommandSender): boolean;
    /**Returns the full description of this help topic that is displayed when  the user requests this topic's details.*/
    getFullText (sender: CommandSender): String;
    /**Sets the contents of the internal allTopics collection.*/
    setTopicsCollection (topics: Collection<HelpTopic>): void
}

export class Instrument extends Enum<Instrument> {
    /**Banjo is normally played when a note block is on top of a hay block.*/
    static BANJO: Instrument;
    /**Bass drum is normally played when a note block is on top of a  stone-like block.*/
    static BASS_DRUM: Instrument;
    /**Bass guitar is normally played when a note block is on top of a wooden  block.*/
    static BASS_GUITAR: Instrument;
    /**Bell is normally played when a note block is on top of a gold block.*/
    static BELL: Instrument;
    /**Bit is normally played when a note block is on top of a emerald block.*/
    static BIT: Instrument;
    /**Chime is normally played when a note block is on top of a packed ice  block.*/
    static CHIME: Instrument;
    /**Cow Bell is normally played when a note block is on top of a soul sand block.*/
    static COW_BELL: Instrument;
    /**Didgeridoo is normally played when a note block is on top of a pumpkin block.*/
    static DIDGERIDOO: Instrument;
    /**Flute is normally played when a note block is on top of a clay block.*/
    static FLUTE: Instrument;
    /**Guitar is normally played when a note block is on top of a woolen block.*/
    static GUITAR: Instrument;
    /**Iron Xylophone is normally played when a note block is on top of a iron block.*/
    static IRON_XYLOPHONE: Instrument;
    /**Piano is the standard instrument for a note block.*/
    static PIANO: Instrument;
    /**Pling is normally played when a note block is on top of a glowstone block.*/
    static PLING: Instrument;
    /**Snare drum is normally played when a note block is on top of a sandy  block.*/
    static SNARE_DRUM: Instrument;
    /**Sticks are normally played when a note block is on top of a glass  block.*/
    static STICKS: Instrument;
    /**Xylophone is normally played when a note block is on top of a bone block.*/
    static XYLOPHONE: Instrument
}

/**Exception thrown when attempting to load an invalid Configuration*/
export class InvalidConfigurationException extends Exception {

}

/**Thrown when attempting to load an invalid PluginDescriptionFile*/
export class InvalidDescriptionException extends Exception {

}

/**Thrown when attempting to load an invalid Plugin file*/
export class InvalidPluginException extends Exception {

}

/**Interface to the various inventories. Behavior relating to Material.AIR is unspecified.     Note that whilst iterator() deals with the entire inventory, add  / contains / remove methods deal only with the storage contents.    Consider using getContents() and getStorageContents() for  specific iteration.*/
export interface Inventory extends Iterable<ItemStack> {
    /**Stores the given ItemStacks in the inventory.*/
    addItem (...items: ItemStack[]): HashMap<Integer,ItemStack>;
    /**Finds all slots in the inventory containing any ItemStacks with the  given ItemStack.*/
    all (item: ItemStack): HashMap<Integer,ItemStack>;
    /**Returns a HashMap with all slots and ItemStacks in the inventory with  the given Material.*/
    all (material: Material): HashMap<Integer,ItemStack>;
    /**Clears out the whole Inventory.*/
    clear (): void;
    /**Clears out a particular slot in the index.*/
    clear (index: number): void;
    /**Checks if the inventory contains any ItemStacks matching the given  ItemStack.*/
    contains (item: ItemStack): boolean;
    /**Checks if the inventory contains at least the minimum amount specified  of exactly matching ItemStacks.*/
    contains (item: ItemStack, amount: number): boolean;
    /**Checks if the inventory contains any ItemStacks with the given  material.*/
    contains (material: Material): boolean;
    /**Checks if the inventory contains any ItemStacks with the given  material, adding to at least the minimum amount specified.*/
    contains (material: Material, amount: number): boolean;
    /**Checks if the inventory contains ItemStacks matching the given  ItemStack whose amounts sum to at least the minimum amount specified.*/
    containsAtLeast (item: ItemStack, amount: number): boolean;
    /**Returns the first slot in the inventory containing an ItemStack with  the given stack.*/
    first (item: ItemStack): number;
    /**Finds the first slot in the inventory containing an ItemStack with the  given material*/
    first (material: Material): number;
    /**Returns the first empty Slot.*/
    firstEmpty (): number;
    /**Returns all ItemStacks from the inventory*/
    getContents (): ItemStack[];
    /**Gets the block or entity belonging to the open inventory*/
    getHolder (): InventoryHolder;
    /**Gets the block or entity belonging to the open inventory*/
    getHolder (useSnapshot: boolean): InventoryHolder;
    /**Returns the ItemStack found in the slot at the given index*/
    getItem (index: number): ItemStack;
    /**Get the location of the block or entity which corresponds to this inventory.*/
    getLocation (): Location;
    /**Returns the maximum stack size for an ItemStack in this inventory.*/
    getMaxStackSize (): number;
    /**Returns the size of the inventory*/
    getSize (): number;
    /**Return the contents from the section of the inventory where items can  reasonably be expected to be stored.*/
    getStorageContents (): ItemStack[];
    /**Returns what type of inventory this is.*/
    getType (): InventoryType;
    /**Gets a list of players viewing the inventory.*/
    getViewers (): List<HumanEntity>;
    /**Check whether or not this inventory is empty.*/
    isEmpty (): boolean;
    iterator (): ListIterator<ItemStack>;
    /**Returns an iterator starting at the given index.*/
    iterator (index: number): ListIterator<ItemStack>;
    /**Removes all stacks in the inventory matching the given stack.*/
    remove (item: ItemStack): void;
    /**Removes all stacks in the inventory matching the given material.*/
    remove (material: Material): void;
    /**Removes the given ItemStacks from the inventory.*/
    removeItem (...items: ItemStack[]): HashMap<Integer,ItemStack>;
    /**Searches all possible inventory slots in order to remove the given ItemStacks.*/
    removeItemAnySlot (...items: ItemStack[]): HashMap<Integer,ItemStack>;
    /**Completely replaces the inventory's contents.*/
    setContents (items: ItemStack[]): void;
    /**Stores the ItemStack at the given index of the inventory.*/
    setItem (index: number, item: ItemStack): void;
    /**This method allows you to change the maximum stack size for an  inventory.*/
    setMaxStackSize (size: number): void;
    /**Put the given ItemStacks into the storage slots*/
    setStorageContents (items: ItemStack[]): void
}

/**An estimation of what the result will be.*/
export class InventoryAction extends Enum<InventoryAction> {
    /**A max-size stack of the clicked item is put on the cursor.*/
    static CLONE_STACK: InventoryAction;
    /**The inventory is searched for the same material, and they are put on  the cursor up to Material.getMaxStackSize().*/
    static COLLECT_TO_CURSOR: InventoryAction;
    /**The entire cursor item is dropped.*/
    static DROP_ALL_CURSOR: InventoryAction;
    /**The entire clicked slot is dropped.*/
    static DROP_ALL_SLOT: InventoryAction;
    /**One item is dropped from the cursor.*/
    static DROP_ONE_CURSOR: InventoryAction;
    /**One item is dropped from the clicked slot.*/
    static DROP_ONE_SLOT: InventoryAction;
    /**The clicked item is moved to the hotbar, and the item currently there  is re-added to the player's inventory.*/
    static HOTBAR_MOVE_AND_READD: InventoryAction;
    /**The clicked slot and the picked hotbar slot are swapped.*/
    static HOTBAR_SWAP: InventoryAction;
    /**The item is moved to the opposite inventory if a space is found.*/
    static MOVE_TO_OTHER_INVENTORY: InventoryAction;
    /**Nothing will happen from the click.*/
    static NOTHING: InventoryAction;
    /**All of the items on the clicked slot are moved to the cursor.*/
    static PICKUP_ALL: InventoryAction;
    /**Half of the items on the clicked slot are moved to the cursor.*/
    static PICKUP_HALF: InventoryAction;
    /**One of the items on the clicked slot are moved to the cursor.*/
    static PICKUP_ONE: InventoryAction;
    /**Some of the items on the clicked slot are moved to the cursor.*/
    static PICKUP_SOME: InventoryAction;
    /**All of the items on the cursor are moved to the clicked slot.*/
    static PLACE_ALL: InventoryAction;
    /**A single item from the cursor is moved to the clicked slot.*/
    static PLACE_ONE: InventoryAction;
    /**Some of the items from the cursor are moved to the clicked slot  (usually up to the max stack size).*/
    static PLACE_SOME: InventoryAction;
    /**The clicked item and the cursor are exchanged.*/
    static SWAP_WITH_CURSOR: InventoryAction;
    /**An unrecognized ClickType.*/
    static UNKNOWN: InventoryAction
}

/**This event is called when a player clicks a slot in an inventory.    Because InventoryClickEvent occurs within a modification of the Inventory,  not all Inventory related methods are safe to use.    The following should never be invoked by an EventHandler for  InventoryClickEvent using the HumanEntity or InventoryView associated with  this event:    HumanEntity.closeInventory()  HumanEntity.openInventory(Inventory)  HumanEntity.openWorkbench(Location, boolean)  HumanEntity.openEnchanting(Location, boolean)  InventoryView.close()    To invoke one of these methods, schedule a task using  BukkitScheduler.runTask(Plugin, Runnable), which will run the task  on the next tick. Also be aware that this is not an exhaustive list, and  other methods could potentially create issues as well.    Assuming the EntityHuman associated with this event is an instance of a  Player, manipulating the MaxStackSize or contents of an Inventory will  require an Invocation of Player.updateInventory().    Modifications to slots that are modified by the results of this  InventoryClickEvent can be overwritten. To change these slots, this event  should be cancelled and all desired changes to the inventory applied.  Alternatively, scheduling a task using BukkitScheduler.runTask(  Plugin, Runnable), which would execute the task on the next tick, would  work as well.*/
export class InventoryClickEvent extends InventoryInteractEvent {
    /**Gets the InventoryAction that triggered this event.*/
    getAction (): InventoryAction;
    /**Gets the ClickType for this event.*/
    getClick (): ClickType;
    /**Gets the inventory corresponding to the clicked slot.*/
    getClickedInventory (): Inventory;
    /**Gets the ItemStack currently in the clicked slot.*/
    getCurrentItem (): ItemStack;
    /**Gets the current ItemStack on the cursor.*/
    getCursor (): ItemStack;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**If the ClickType is NUMBER_KEY, this method will return the index of  the pressed key (0-8).*/
    getHotbarButton (): number;
    /**The raw slot number clicked, ready for passing to #getItem(int) This slot number is unique for the view.*/
    getRawSlot (): number;
    /**The slot number that was clicked, ready for passing to  Inventory.getItem(int).*/
    getSlot (): number;
    /**Gets the type of slot that was clicked.*/
    getSlotType (): InventoryType$SlotType;
    /**Gets whether or not the ClickType for this event represents a left  click.*/
    isLeftClick (): boolean;
    /**Gets whether or not the ClickType for this event represents a right  click.*/
    isRightClick (): boolean;
    /**Gets whether the ClickType for this event indicates that the key was  pressed down when the click was made.*/
    isShiftClick (): boolean;
    /**Sets the ItemStack currently in the clicked slot.*/
    setCurrentItem (stack: ItemStack): void
}

/**Represents a player related inventory event*/
export class InventoryCloseEvent extends InventoryEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the player involved in this event*/
    getPlayer (): HumanEntity;
    getReason (): InventoryCloseEvent$Reason
}

export class InventoryCloseEvent$Reason extends Enum<InventoryCloseEvent$Reason> {
    /**Player is no longer permitted to use this inventory*/
    static CANT_USE: InventoryCloseEvent$Reason;
    /**The player died*/
    static DEATH: InventoryCloseEvent$Reason;
    /**Closed due to disconnect*/
    static DISCONNECT: InventoryCloseEvent$Reason;
    /**Opening new inventory instead*/
    static OPEN_NEW: InventoryCloseEvent$Reason;
    /**Closed*/
    static PLAYER: InventoryCloseEvent$Reason;
    /**Closed by Bukkit API*/
    static PLUGIN: InventoryCloseEvent$Reason;
    /**Player is teleporting*/
    static TELEPORT: InventoryCloseEvent$Reason;
    /**Unknown reason*/
    static UNKNOWN: InventoryCloseEvent$Reason;
    /**The chunk the inventory was in was unloaded*/
    static UNLOADED: InventoryCloseEvent$Reason
}

/**This event is called when a player in creative mode puts down or picks up  an item in their inventory / hotbar and when they drop items from their  Inventory while in creative mode.*/
export class InventoryCreativeEvent extends InventoryClickEvent {
    /**Gets the current ItemStack on the cursor.*/
    getCursor (): ItemStack;
    /**Sets the item on the cursor.*/
    setCursor (item: ItemStack): void
}

/**This event is called when the player drags an item in their cursor across  the inventory. The ItemStack is distributed across the slots the  HumanEntity dragged over. The method of distribution is described by the  DragType returned by getType().    Canceling this event will result in none of the changes described in  getNewItems() being applied to the Inventory.    Because InventoryDragEvent occurs within a modification of the Inventory,  not all Inventory related methods are safe to use.    The following should never be invoked by an EventHandler for  InventoryDragEvent using the HumanEntity or InventoryView associated with  this event.    HumanEntity.closeInventory()  HumanEntity.openInventory(Inventory)  HumanEntity.openWorkbench(Location, boolean)  HumanEntity.openEnchanting(Location, boolean)  InventoryView.close()    To invoke one of these methods, schedule a task using  BukkitScheduler.runTask(Plugin, Runnable), which will run the task  on the next tick.  Also be aware that this is not an exhaustive list, and  other methods could potentially create issues as well.    Assuming the EntityHuman associated with this event is an instance of a  Player, manipulating the MaxStackSize or contents of an Inventory will  require an Invocation of Player.updateInventory().    Any modifications to slots that are modified by the results of this  InventoryDragEvent will be overwritten. To change these slots, this event  should be cancelled and the changes applied. Alternatively, scheduling a  task using BukkitScheduler.runTask(Plugin, Runnable), which would  execute the task on the next tick, would work as well.*/
export class InventoryDragEvent extends InventoryInteractEvent {
    /**Gets the result cursor after the drag is done.*/
    getCursor (): ItemStack;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the slots to be changed in this drag.*/
    getInventorySlots (): Set<Integer>;
    /**Gets all items to be added to the inventory in this drag.*/
    getNewItems (): Map<Integer,ItemStack>;
    /**Gets an ItemStack representing the cursor prior to any modifications  as a result of this drag.*/
    getOldCursor (): ItemStack;
    /**Gets the raw slot ids to be changed in this drag.*/
    getRawSlots (): Set<Integer>;
    /**Gets the DragType that describes the behavior of ItemStacks placed  after this InventoryDragEvent.*/
    getType (): DragType;
    /**Sets the result cursor after the drag is done.*/
    setCursor (newCursor: ItemStack): void
}

/**Represents a player related inventory event*/
export class InventoryEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the primary Inventory involved in this transaction*/
    getInventory (): Inventory;
    /**Gets the view object itself*/
    getView (): InventoryView;
    /**Gets the list of players viewing the primary (upper) inventory involved  in this event*/
    getViewers (): List<HumanEntity>
}

export interface InventoryHolder {
    /**Get the object's inventory.*/
    getInventory (): Inventory
}

/**An abstract base class for events that describe an interaction between a  HumanEntity and the contents of an Inventory.*/
export class InventoryInteractEvent extends InventoryEvent implements Cancellable {
    /**Gets the Event.Result of this event.*/
    getResult (): Event$Result;
    /**Gets the player who performed the click.*/
    getWhoClicked (): HumanEntity;
    /**Gets whether or not this event is cancelled.*/
    isCancelled (): boolean;
    /**Proxy method to setResult(org.bukkit.event.Event.Result) for the Cancellable  interface.*/
    setCancelled (toCancel: boolean): void;
    /**Sets the result of this event.*/
    setResult (newResult: Event$Result): void
}

/**Called when some entity or block (e.g. hopper) tries to move items directly  from one inventory to another.    When this event is called, the initiator may already have removed the item  from the source inventory and is ready to move it into the destination  inventory.    If this event is cancelled, the items will be returned to the source  inventory, if needed.    If this event is not cancelled, the initiator will try to put the ItemStack  into the destination inventory. If this is not possible and the ItemStack  has not been modified, the source inventory slot will be restored to its  former state. Otherwise any additional items will be discarded.*/
export class InventoryMoveItemEvent extends Event implements Cancellable {
    /**Gets the Inventory that the ItemStack is being put into*/
    getDestination (): Inventory;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Inventory that initiated the transfer.*/
    getInitiator (): Inventory;
    /**Gets the ItemStack being moved; if modified, the original item will not  be removed from the source inventory.*/
    getItem (): ItemStack;
    /**Gets the Inventory that the ItemStack is being taken from*/
    getSource (): Inventory;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the ItemStack being moved; if this is different from the original  ItemStack, the original item will not be removed from the source  inventory.*/
    setItem (itemStack: ItemStack): void
}

/**Represents a player related inventory event*/
export class InventoryOpenEvent extends InventoryEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the player involved in this event*/
    getPlayer (): HumanEntity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a hopper or hopper minecart picks up a dropped item.*/
export class InventoryPickupItemEvent extends Event implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Inventory that picked up the item*/
    getInventory (): Inventory;
    /**Gets the Item entity that was picked up*/
    getItem (): Item;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents the different kinds of inventories available in Bukkit.    Only InventoryTypes marked isCreatable() can be created.    The current list of inventories that cannot be created via  Bukkit.createInventory(org.bukkit.inventory.InventoryHolder, org.bukkit.event.inventory.InventoryType) are:        CREATIVE, CRAFTING and      MERCHANT     See Bukkit.createInventory(org.bukkit.inventory.InventoryHolder, org.bukkit.event.inventory.InventoryType) for more information.*/
export class InventoryType extends Enum<InventoryType> {
    /**An anvil inventory, with 2 CRAFTING slots and 1 RESULT slot*/
    static ANVIL: InventoryType;
    /**A barrel box inventory, with 27 slots of type CONTAINER.*/
    static BARREL: InventoryType;
    /**A beacon inventory, with 1 CRAFTING slot*/
    static BEACON: InventoryType;
    /**A blast furnace inventory, with a RESULT slot, a CRAFTING slot, and a  FUEL slot.*/
    static BLAST_FURNACE: InventoryType;
    /**A brewing stand inventory, with one FUEL slot and four CRAFTING slots.*/
    static BREWING: InventoryType;
    /**Cartography inventory with 2 CRAFTING slots, and 1 RESULT slot.*/
    static CARTOGRAPHY: InventoryType;
    /**A chest inventory, with 0, 9, 18, 27, 36, 45, or 54 slots of type  CONTAINER.*/
    static CHEST: InventoryType;
    /**A player's crafting inventory, with 4 CRAFTING slots and a RESULT slot.*/
    static CRAFTING: InventoryType;
    /**The creative mode inventory, with only 9 QUICKBAR slots and nothing  else.*/
    static CREATIVE: InventoryType;
    /**A dispenser inventory, with 9 slots of type CONTAINER.*/
    static DISPENSER: InventoryType;
    /**A dropper inventory, with 9 slots of type CONTAINER.*/
    static DROPPER: InventoryType;
    /**An enchantment table inventory, with two CRAFTING slots and three  enchanting buttons.*/
    static ENCHANTING: InventoryType;
    /**The ender chest inventory, with 27 slots.*/
    static ENDER_CHEST: InventoryType;
    /**A furnace inventory, with a RESULT slot, a CRAFTING slot, and a FUEL  slot.*/
    static FURNACE: InventoryType;
    /**Grindstone inventory with 2 CRAFTING slots, and 1 RESULT slot.*/
    static GRINDSTONE: InventoryType;
    /**A hopper inventory, with 5 slots of type CONTAINER.*/
    static HOPPER: InventoryType;
    /**A lectern inventory, with 1 BOOK slot.*/
    static LECTERN: InventoryType;
    /**Loom inventory, with 3 CRAFTING slots, and 1 RESULT slot.*/
    static LOOM: InventoryType;
    /**The merchant inventory, with 2 CRAFTING slots, and 1 RESULT slot.*/
    static MERCHANT: InventoryType;
    /**A player's inventory, with 9 QUICKBAR slots, 27 CONTAINER slots, 4 ARMOR  slots and 1 offhand slot.*/
    static PLAYER: InventoryType;
    /**A shulker box inventory, with 27 slots of type CONTAINER.*/
    static SHULKER_BOX: InventoryType;
    /**A smithing inventory, with 2 CRAFTING slots and 1 RESULT slot*/
    static SMITHING: InventoryType;
    /**A smoker inventory, with a RESULT slot, a CRAFTING slot, and a FUEL slot.*/
    static SMOKER: InventoryType;
    /**Stonecutter inventory with 1 CRAFTING slot, and 1 RESULT slot.*/
    static STONECUTTER: InventoryType;
    /**A workbench inventory, with 9 CRAFTING slots and a RESULT slot.*/
    static WORKBENCH: InventoryType
}

export class InventoryType$SlotType extends Enum<InventoryType$SlotType> {
    /**An armour slot in the player's inventory.*/
    static ARMOR: InventoryType$SlotType;
    /**A regular slot in the container or the player's inventory; anything  not covered by the other enum values.*/
    static CONTAINER: InventoryType$SlotType;
    /**A slot in the crafting matrix, or an 'input' slot.*/
    static CRAFTING: InventoryType$SlotType;
    /**The fuel slot in a furnace inventory, or the ingredient slot in a  brewing stand inventory.*/
    static FUEL: InventoryType$SlotType;
    /**A pseudo-slot representing the area outside the inventory window.*/
    static OUTSIDE: InventoryType$SlotType;
    /**A slot in the bottom row or quickbar.*/
    static QUICKBAR: InventoryType$SlotType;
    /**A result slot in a furnace or crafting inventory.*/
    static RESULT: InventoryType$SlotType
}

/**Represents a view linking two inventories and a single player (whose  inventory may or may not be one of the two).    Note: If you implement this interface but fail to satisfy the expected  contracts of certain methods, there's no guarantee that the game will work  as it should.*/
export class InventoryView extends Object {
    /**Closes the inventory view.*/
    close (): void;
    /**Converts a raw slot ID into its local slot ID into whichever of the two  inventories the slot points to.*/
    convertSlot (rawSlot: number): number;
    /**Check the total number of slots in this view, combining the upper and  lower inventories.*/
    countSlots (): number;
    /**Get the lower inventory involved in this transaction.*/
    getBottomInventory (): Inventory;
    /**Get the item on the cursor of one of the viewing players.*/
    getCursor (): ItemStack;
    /**Gets the inventory corresponding to the given raw slot ID.*/
    getInventory (rawSlot: number): Inventory;
    /**Gets one item in this inventory view by its raw slot ID.*/
    getItem (slot: number): ItemStack;
    /**Get the player viewing.*/
    getPlayer (): HumanEntity;
    /**Determine the type of the slot by its raw slot ID.*/
    getSlotType (slot: number): InventoryType$SlotType;
    /**Get the title of this inventory window.*/
    getTitle (): String;
    /**Get the upper inventory involved in this transaction.*/
    getTopInventory (): Inventory;
    /**Determine the type of inventory involved in the transaction.*/
    getType (): InventoryType;
    /**Sets the item on the cursor of one of the viewing players.*/
    setCursor (item: ItemStack): void;
    /**Sets one item in this inventory view by its raw slot ID.*/
    setItem (slot: number, item: ItemStack): void;
    /**Sets an extra property of this inventory if supported by that  inventory, for example the state of a progress bar.*/
    setProperty (prop: InventoryView$Property, value: number): boolean
}

/**Represents various extra properties of certain inventory windows.*/
export class InventoryView$Property extends Enum<InventoryView$Property> {
    /**The lectern's current open book page*/
    static BOOK_PAGE: InventoryView$Property;
    /**The progress of the down-pointing arrow in a brewing inventory.*/
    static BREW_TIME: InventoryView$Property;
    /**The progress of the flame in a furnace inventory.*/
    static BURN_TIME: InventoryView$Property;
    /**The progress of the right-pointing arrow in a furnace inventory.*/
    static COOK_TIME: InventoryView$Property;
    /**In an enchanting inventory, the top button's experience level  value.*/
    static ENCHANT_BUTTON1: InventoryView$Property;
    /**In an enchanting inventory, the middle button's experience level  value.*/
    static ENCHANT_BUTTON2: InventoryView$Property;
    /**In an enchanting inventory, the bottom button's experience level  value.*/
    static ENCHANT_BUTTON3: InventoryView$Property;
    /**In an enchanting inventory, the top button's enchantment's id*/
    static ENCHANT_ID1: InventoryView$Property;
    /**In an enchanting inventory, the middle button's enchantment's id*/
    static ENCHANT_ID2: InventoryView$Property;
    /**In an enchanting inventory, the bottom button's enchantment's id*/
    static ENCHANT_ID3: InventoryView$Property;
    /**In an enchanting inventory, the top button's level value.*/
    static ENCHANT_LEVEL1: InventoryView$Property;
    /**In an enchanting inventory, the middle button's level value.*/
    static ENCHANT_LEVEL2: InventoryView$Property;
    /**In an enchanting inventory, the bottom button's level value.*/
    static ENCHANT_LEVEL3: InventoryView$Property;
    /**In an enchanting inventory, the first four bits of the player's xpSeed.*/
    static ENCHANT_XP_SEED: InventoryView$Property;
    /**The progress of the fuel slot in a brewing inventory.*/
    static FUEL_TIME: InventoryView$Property;
    /**In an beacon inventory, the levels of the beacon*/
    static LEVELS: InventoryView$Property;
    /**In an beacon inventory, the primary potion effect*/
    static PRIMARY_EFFECT: InventoryView$Property;
    /**The repair's cost in xp levels*/
    static REPAIR_COST: InventoryView$Property;
    /**In an beacon inventory, the secondary potion effect*/
    static SECONDARY_EFFECT: InventoryView$Property;
    /**How many total ticks the current fuel should last.*/
    static TICKS_FOR_CURRENT_FUEL: InventoryView$Property;
    /**How many total ticks the current smelting should last.*/
    static TICKS_FOR_CURRENT_SMELTING: InventoryView$Property
}

/**An iron Golem that protects Villages.*/
export interface IronGolem extends Golem {
    /**Gets whether this iron golem was built by a player.*/
    isPlayerCreated (): boolean;
    /**Sets whether this iron golem was built by a player or not.*/
    setPlayerCreated (playerCreated: boolean): void
}

/**Represents a dropped item.*/
export interface Item extends Entity {
    /**Gets if non-player entities can pick this Item up*/
    canMobPickup (): boolean;
    /**Gets the item stack associated with this item drop.*/
    getItemStack (): ItemStack;
    /**The owner of this item.*/
    getOwner (): UUID;
    /**Gets the delay before this Item is available to be picked up by players*/
    getPickupDelay (): number;
    /**Get the thrower of this item.*/
    getThrower (): UUID;
    /**Sets if non-player entities can pick this Item up*/
    setCanMobPickup (canMobPickup: boolean): void;
    /**Sets the item stack associated with this item drop.*/
    setItemStack (stack: ItemStack): void;
    /**Set the owner of this item.*/
    setOwner (owner: UUID): void;
    /**Sets the delay before this Item is available to be picked up by players*/
    setPickupDelay (delay: number): void;
    /**Set the thrower of this item.*/
    setThrower (thrower: UUID): void
}

/**This event is called when a Item is removed from  the world because it has existed for 5 minutes.    Cancelling the event results in the item being allowed to exist for 5 more  minutes. This behavior is not guaranteed and may change in future versions.*/
export class ItemDespawnEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Item;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the location at which the item is despawning.*/
    getLocation (): Location;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**An instance of the ItemFactory can be obtained with Server.getItemFactory().    The ItemFactory is solely responsible for creating item meta containers to  apply on item stacks.*/
export interface ItemFactory {
    /**Returns an appropriate item meta for the specified stack.*/
    asMetaFor (meta: ItemMeta, stack: ItemStack): ItemMeta;
    /**Returns an appropriate item meta for the specified material.*/
    asMetaFor (meta: ItemMeta, material: Material): ItemMeta;
    /**Minecart updates are converting simple item stacks into more complex NBT oriented Item Stacks.*/
    ensureServerConversions (item: ItemStack): ItemStack;
    /**This method is used to compare two item meta data objects.*/
    equals (meta1: ItemMeta, meta2: ItemMeta): boolean;
    /**Returns the default color for all leather armor.*/
    getDefaultLeatherColor (): Color;
    /**Gets the Display name as seen in the Client.*/
    getI18NDisplayName (item: ItemStack): String;
    /**This creates a new item meta for the material.*/
    getItemMeta (material: Material): ItemMeta;
    /**Creates a Content of that Entity for displaying.*/
    hoverContentOf (entity: Entity): Content;
    /**Creates a Content of that Entity for displaying.*/
    hoverContentOf (entity: Entity, customName: String): Content;
    /**Creates a Content of that Entity for displaying.*/
    hoverContentOf (entity: Entity, customName: BaseComponent): Content;
    /**Creates a Content of that Entity for displaying.*/
    hoverContentOf (entity: Entity, customName: BaseComponent[]): Content;
    /**Creates a Content of that ItemStack for displaying.*/
    hoverContentOf (itemStack: ItemStack): Content;
    /**This method checks the item meta to confirm that it is applicable (no  data lost if applied) to the specified ItemStack.*/
    isApplicable (meta: ItemMeta, stack: ItemStack): boolean;
    /**This method checks the item meta to confirm that it is applicable (no  data lost if applied) to the specified Material.*/
    isApplicable (meta: ItemMeta, material: Material): boolean
}

/**A ItemFlag can hide some Attributes from ItemStacks*/
export class ItemFlag extends Enum<ItemFlag> {
    /**Setting to show/hide Attributes like Damage*/
    static HIDE_ATTRIBUTES: ItemFlag;
    /**Setting to show/hide what the ItemStack can break/destroy*/
    static HIDE_DESTROYS: ItemFlag;
    /**Setting to show/hide dyes from coloured leather armour*/
    static HIDE_DYE: ItemFlag;
    /**Setting to show/hide enchants*/
    static HIDE_ENCHANTS: ItemFlag;
    /**Setting to show/hide where this ItemStack can be build/placed on*/
    static HIDE_PLACED_ON: ItemFlag;
    /**Setting to show/hide potion effects on this ItemStack*/
    static HIDE_POTION_EFFECTS: ItemFlag;
    /**Setting to show/hide the unbreakable State*/
    static HIDE_UNBREAKABLE: ItemFlag
}

/**Represents an Item Frame*/
export interface ItemFrame extends Hanging {
    /**Get the item in this frame*/
    getItem (): ItemStack;
    /**Get the rotation of the frame's item*/
    getRotation (): Rotation;
    /**Returns whether the item frame is "fixed" or not.*/
    isFixed (): boolean;
    /**Returns whether the item frame is be visible or not.*/
    isVisible (): boolean;
    /**Sets whether the item frame should be fixed or not.*/
    setFixed (visible: boolean): void;
    /**Set the item in this frame*/
    setItem (item: ItemStack): void;
    /**Set the item in this frame*/
    setItem (item: ItemStack, playSound: boolean): void;
    /**Set the rotation of the frame's item*/
    setRotation (rotation: Rotation): void;
    /**Sets whether the item frame should be visible or not.*/
    setVisible (visible: boolean): void
}

export class ItemMergeEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Item;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Item entity the main Item is being merged into.*/
    getTarget (): Item;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**This type represents the storage mechanism for auxiliary item data.    An implementation will handle the creation and application for ItemMeta.  This class should not be implemented by a plugin in a live environment.*/
export interface ItemMeta extends Cloneable, ConfigurationSerializable, PersistentDataHolder {
    /**Add an Attribute and it's Modifier.*/
    addAttributeModifier (attribute: Attribute, modifier: AttributeModifier): boolean;
    /**Adds the specified enchantment to this item meta.*/
    addEnchant (ench: Enchantment, level: number, ignoreLevelRestriction: boolean): boolean;
    /**Set itemflags which should be ignored when rendering a ItemStack in the Client.*/
    addItemFlags (...itemFlags: ItemFlag[]): void;
    clone (): ItemMeta;
    /**Return an immutable copy of all Attributes and  their modifiers in this ItemMeta.  Returns null if none exist.*/
    getAttributeModifiers (): Multimap<Attribute,AttributeModifier>;
    /**Return an immutable copy of all AttributeModifiers  for a given Attribute*/
    getAttributeModifiers (attribute: Attribute): Collection<AttributeModifier>;
    /**Return an immutable copy of all Attributes and their  AttributeModifiers for a given EquipmentSlot.  Any AttributeModifier that does have have a given  EquipmentSlot will be returned.*/
    getAttributeModifiers (slot: EquipmentSlot): Multimap<Attribute,AttributeModifier>;
    /**Gets the custom model data that is set.*/
    getCustomModelData (): number;
    /**Gets the collection of namespaced keys that the item can destroy in GameMode.ADVENTURE*/
    getDestroyableKeys (): Set<Namespaced>;
    /**Gets the display name that is set.*/
    getDisplayName (): String;
    /**Gets the display name that is set.*/
    getDisplayNameComponent (): BaseComponent[];
    /**Checks for the level of the specified enchantment.*/
    getEnchantLevel (ench: Enchantment): number;
    /**Returns a copy the enchantments in this ItemMeta.*/
    getEnchants (): Map<Enchantment,Integer>;
    /**Get current set itemFlags.*/
    getItemFlags (): Set<ItemFlag>;
    /**Gets the localized display name that is set.*/
    getLocalizedName (): String;
    /**Gets the lore that is set.*/
    getLore (): List<String>;
    /**Gets the lore that is set.*/
    getLoreComponents (): List<BaseComponent[]>;
    /**Gets the collection of namespaced keys that the item can be placed on in GameMode.ADVENTURE*/
    getPlaceableKeys (): Set<Namespaced>;
    /**Checks for the existence of any AttributeModifiers.*/
    hasAttributeModifiers (): boolean;
    /**Checks if the specified enchantment conflicts with any enchantments in  this ItemMeta.*/
    hasConflictingEnchant (ench: Enchantment): boolean;
    /**Checks for existence of custom model data.*/
    hasCustomModelData (): boolean;
    /**Checks for the existence of any keys that the item can destroy*/
    hasDestroyableKeys (): boolean;
    /**Checks for existence of a display name.*/
    hasDisplayName (): boolean;
    /**Checks for existence of the specified enchantment.*/
    hasEnchant (ench: Enchantment): boolean;
    /**Checks for the existence of any enchantments.*/
    hasEnchants (): boolean;
    /**Check if the specified flag is present on this item.*/
    hasItemFlag (flag: ItemFlag): boolean;
    /**Checks for existence of a localized name.*/
    hasLocalizedName (): boolean;
    /**Checks for existence of lore.*/
    hasLore (): boolean;
    /**Checks for the existence of any keys that the item can be placed on*/
    hasPlaceableKeys (): boolean;
    /**Return if the unbreakable tag is true.*/
    isUnbreakable (): boolean;
    /**Remove all AttributeModifiers associated with the given  Attribute.*/
    removeAttributeModifier (attribute: Attribute): boolean;
    /**Remove a specific Attribute and AttributeModifier.*/
    removeAttributeModifier (attribute: Attribute, modifier: AttributeModifier): boolean;
    /**Remove all Attributes and AttributeModifiers for a  given EquipmentSlot.  If the given EquipmentSlot is null, this will remove all  AttributeModifiers that do not have an EquipmentSlot set.*/
    removeAttributeModifier (slot: EquipmentSlot): boolean;
    /**Removes the specified enchantment from this item meta.*/
    removeEnchant (ench: Enchantment): boolean;
    /**Remove specific set of itemFlags.*/
    removeItemFlags (...itemFlags: ItemFlag[]): void;
    /**Set all Attributes and their AttributeModifiers.*/
    setAttributeModifiers (attributeModifiers: Multimap<Attribute,AttributeModifier>): void;
    /**Sets the custom model data.*/
    setCustomModelData (data: Integer): void;
    /**Sets the collection of namespaced keys that the item can destroy in GameMode.ADVENTURE*/
    setDestroyableKeys (canDestroy: Collection<Namespaced>): void;
    /**Sets the display name.*/
    setDisplayName (name: String): void;
    /**Sets the display name.*/
    setDisplayNameComponent (component: BaseComponent[]): void;
    /**Sets the localized name.*/
    setLocalizedName (name: String): void;
    /**Sets the lore for this item.*/
    setLore (lore: List<String>): void;
    /**Sets the lore for this item.*/
    setLoreComponents (lore: List<BaseComponent[]>): void;
    /**Sets the set of namespaced keys that the item can be placed on in GameMode.ADVENTURE*/
    setPlaceableKeys (canPlaceOn: Collection<Namespaced>): void;
    /**Sets the unbreakable tag.*/
    setUnbreakable (unbreakable: boolean): void
}

/**Called when an item is spawned into a world*/
export class ItemSpawnEvent extends EntitySpawnEvent {
    /**Returns the Entity involved in this event*/
    getEntity (): Item
}

/**Represents a stack of items.    IMPORTANT: An ItemStack is only designed to contain items. Do not  use this class to encapsulate Materials for which Material.isItem()  returns false.*/
export class ItemStack extends Object implements Cloneable, ConfigurationSerializable {
    /**Adds 1 to this itemstack.*/
    add (): ItemStack;
    /**Adds quantity to this itemstack.*/
    add (qty: number): ItemStack;
    /**Adds the specified Enchantment to this item stack.*/
    addEnchantment (ench: Enchantment, level: number): void;
    /**Adds the specified enchantments to this item stack.*/
    addEnchantments (enchantments: Map<Enchantment,Integer>): void;
    /**Set itemflags which should be ignored when rendering a ItemStack in the Client.*/
    addItemFlags (...itemFlags: ItemFlag[]): void;
    /**Adds the specified Enchantment to this item stack.*/
    addUnsafeEnchantment (ench: Enchantment, level: number): void;
    /**Adds the specified enchantments to this item stack in an unsafe manner.*/
    addUnsafeEnchantments (enchantments: Map<Enchantment,Integer>): void;
    /**Clones the itemstack and returns it a single quantity.*/
    asOne (): ItemStack;
    /**Clones the itemstack and returns it as the specified quantity*/
    asQuantity (qty: number): ItemStack;
    clone (): ItemStack;
    /**Checks if this ItemStack contains the given Enchantment*/
    containsEnchantment (ench: Enchantment): boolean;
    /**Required method for configuration serialization*/
    static deserialize (args: Map<String,Object>): ItemStack;
    /**Deserializes this itemstack from raw NBT bytes.*/
    static deserializeBytes (bytes: number[]): ItemStack;
    /**Minecart updates are converting simple item stacks into more complex NBT oriented Item Stacks.*/
    ensureServerConversions (): ItemStack;
    equals (obj: Object): boolean;
    /**Gets the amount of items in this stack*/
    getAmount (): number;
    /**Gets the MaterialData for this stack of items*/
    getData (): MaterialData;
    /**Gets the level of the specified enchantment on this item stack*/
    getEnchantmentLevel (ench: Enchantment): number;
    /**Gets a map containing all enchantments and their levels on this item.*/
    getEnchantments (): Map<Enchantment,Integer>;
    /**Gets the Display name as seen in the Client.*/
    getI18NDisplayName (): String;
    /**Get current set itemFlags.*/
    getItemFlags (): Set<ItemFlag>;
    /**Get a copy of this ItemStack's ItemMeta.*/
    getItemMeta (): ItemMeta;
    /**If the item has lore, returns it, else it will return null*/
    getLore (): List<String>;
    getMaxItemUseDuration (): number;
    /**Get the maximum stacksize for the material hold in this ItemStack.*/
    getMaxStackSize (): number;
    /**Gets the type of this item*/
    getType (): Material;
    hashCode (): number;
    /**Check if the specified flag is present on this item.*/
    hasItemFlag (flag: ItemFlag): boolean;
    /**Checks to see if any meta data has been defined.*/
    hasItemMeta (): boolean;
    /**This method is the same as equals, but does not consider stack size  (amount).*/
    isSimilar (stack: ItemStack): boolean;
    /**Removes the specified Enchantment if it exists on this  ItemStack*/
    removeEnchantment (ench: Enchantment): number;
    /**Remove specific set of itemFlags.*/
    removeItemFlags (...itemFlags: ItemFlag[]): void;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    /**Serializes this itemstack to raw bytes in NBT.*/
    serializeAsBytes (): number[];
    /**Sets the amount of items in this stack*/
    setAmount (amount: number): void;
    /**Sets the MaterialData for this stack of items*/
    setData (data: MaterialData): void;
    /**Set the ItemMeta of this ItemStack.*/
    setItemMeta (itemMeta: ItemMeta): boolean;
    /**Sets the lore for this item.*/
    setLore (lore: List<String>): void;
    /**Sets the type of this item*/
    setType (type: Material): void;
    /**Subtracts 1 to this itemstack.*/
    subtract (): ItemStack;
    /**Subtracts quantity to this itemstack.*/
    subtract (qty: number): ItemStack;
    toString (): String
}

/**A default implementation that simply exists to pass on the retrieved or  inserted value to the next layer.   This implementation does not add any kind of logic, but is used to  provide default implementations for the primitive types.*/
export class ItemTagType$PrimitiveTagType<T> extends Object implements ItemTagType<T,T> {
    /**Creates a complex object based of the passed primitive value*/
    fromPrimitive (primitive: T, context: ItemTagAdapterContext): T;
    /**Returns the complex object type the primitive value resembles.*/
    getComplexType (): Class<T>;
    /**Returns the primitive data type of this tag.*/
    getPrimitiveType (): Class<T>;
    /**Returns the primitive data that resembles the complex object passed to  this method.*/
    toPrimitive (complex: T, context: ItemTagAdapterContext): T
}

/**Represents a Java plugin*/
export class JavaPlugin extends PluginBase {
    /**Returns the ClassLoader which holds this plugin*/
    getClassLoader (): ClassLoader;
    /**Gets the command with the given name, specific to this plugin.*/
    getCommand (name: String): PluginCommand;
    /**Gets a FileConfiguration for this plugin, read through  "config.yml"*/
    getConfig (): FileConfiguration;
    /**Returns the folder that the plugin data's files are located in.*/
    getDataFolder (): File;
    /**Gets a ChunkGenerator for use in a default world, as specified  in the server configuration*/
    getDefaultWorldGenerator (worldName: String, id: String): ChunkGenerator;
    /**Returns the plugin.yaml file containing the details for this plugin*/
    getDescription (): PluginDescriptionFile;
    /**Returns the file which contains this plugin*/
    getFile (): File;
    /**Returns the plugin logger associated with this server's logger.*/
    getLogger (): Logger;
    /**This method provides fast access to the plugin that has provided the given plugin class, which is  usually the plugin that implemented it.*/
    static getPlugin <T extends JavaPlugin>(clazz: Class<T>): T;
    /**Gets the associated PluginLoader responsible for this plugin*/
    getPluginLoader (): PluginLoader;
    /**This method provides fast access to the plugin that has provided the  given class.*/
    static getProvidingPlugin (clazz: Class<X>): JavaPlugin;
    /**Gets an embedded resource in this plugin*/
    getResource (filename: String): InputStream;
    /**Returns the Server instance currently running this plugin*/
    getServer (): Server;
    /**Provides a reader for a text file located inside the jar.*/
    getTextResource (file: String): Reader;
    /**Returns a value indicating whether or not this plugin is currently  enabled*/
    isEnabled (): boolean;
    /**Simple boolean if we can still nag to the logs about things*/
    isNaggable (): boolean;
    /**Executes the given command, returning its success.*/
    onCommand (sender: CommandSender, command: Command, label: String, args: String[]): boolean;
    /**Called when this plugin is disabled*/
    onDisable (): void;
    /**Called when this plugin is enabled*/
    onEnable (): void;
    /**Called after a plugin is loaded but before it has been enabled.*/
    onLoad (): void;
    /**Requests a list of possible completions for a command argument.*/
    onTabComplete (sender: CommandSender, command: Command, alias: String, args: String[]): List<String>;
    /**Discards any data in Plugin.getConfig() and reloads from disk.*/
    reloadConfig (): void;
    /**Saves the FileConfiguration retrievable by Plugin.getConfig().*/
    saveConfig (): void;
    /**Saves the raw contents of the default config.yml file to the location  retrievable by Plugin.getConfig().*/
    saveDefaultConfig (): void;
    /**Saves the raw contents of any resource embedded with a plugin's .jar  file assuming it can be found using Plugin.getResource(String).*/
    saveResource (resourcePath: String, replace: boolean): void;
    /**Sets the enabled state of this plugin*/
    setEnabled (enabled: boolean): void;
    /**Set naggable state*/
    setNaggable (canNag: boolean): void;
    toString (): String
}

/**Represents a Java plugin loader, allowing plugins in the form of .jar*/
export class JavaPluginLoader extends Object implements PluginLoader {
    /**Creates and returns registered listeners for the event classes used in  this listener*/
    createRegisteredListeners (listener: Listener, plugin: Plugin): Map<Class<Event>,Set<RegisteredListener>>;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin): void;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin, closeClassloader: boolean): void;
    /**Enables the specified plugin*/
    enablePlugin (plugin: Plugin): void;
    /**Loads a PluginDescriptionFile from the specified file*/
    getPluginDescription (file: File): PluginDescriptionFile;
    /**Returns a list of all filename filters expected by this PluginLoader*/
    getPluginFileFilters (): Pattern[];
    /**Loads the plugin contained in the specified file*/
    loadPlugin (file: File): Plugin
}

/**'orientation' is the direction the block is facing.*/
export interface Jigsaw extends BlockData {
    /**Gets the value of the 'orientation' property.*/
    getOrientation (): Jigsaw$Orientation;
    /**Sets the value of the 'orientation' property.*/
    setOrientation (orientation: Jigsaw$Orientation): void
}

/**Represents a captured state of a jigsaw.*/
export interface Jigsaw extends TileState {

}

/**The directions the Jigsaw can be oriented.*/
export class Jigsaw$Orientation extends Enum<Jigsaw$Orientation> {
    static DOWN_EAST: Jigsaw$Orientation;
    static DOWN_NORTH: Jigsaw$Orientation;
    static DOWN_SOUTH: Jigsaw$Orientation;
    static DOWN_WEST: Jigsaw$Orientation;
    static EAST_UP: Jigsaw$Orientation;
    static NORTH_UP: Jigsaw$Orientation;
    static SOUTH_UP: Jigsaw$Orientation;
    static UP_EAST: Jigsaw$Orientation;
    static UP_NORTH: Jigsaw$Orientation;
    static UP_SOUTH: Jigsaw$Orientation;
    static UP_WEST: Jigsaw$Orientation;
    static WEST_UP: Jigsaw$Orientation
}

/**Provides Utility methods that assist with generating JSON Objects*/
export class JSONUtil extends Object {
    /**This appends multiple key/value Obj pairs into a JSON Object*/
    static appendObjectData (parent: Map, ...data: JSONUtil$JSONPair[]): Map<String,Object>;
    /**Creates a new JSON object from multiple JSONPair key/value pairs*/
    static createObject (...data: JSONUtil$JSONPair[]): Map<String,Object>;
    static pair (key: number, obj: Object): JSONUtil$JSONPair;
    /**Creates a key/value "JSONPair" object*/
    static pair (key: String, obj: Object): JSONUtil$JSONPair;
    /**This builds a JSON array from a set of data*/
    static toArray (...data: Object[]): List;
    /**These help build a single JSON array using a mapper function*/
    static toArrayMapper <E>(collection: E[], mapper: Function<E,Object>): List;
    static toArrayMapper <E>(collection: Iterable<E>, mapper: Function<E,Object>): List;
    /**These help build a single JSON Object from a collection, using a mapper function*/
    static toObjectMapper <E>(collection: E[], mapper: Function<E,JSONUtil$JSONPair>): Map;
    static toObjectMapper <E>(collection: Iterable<E>, mapper: Function<E,JSONUtil$JSONPair>): Map
}

/**Simply stores a key and a value, used internally by many methods below.*/
export class JSONUtil$JSONPair extends Object {

}

/**'has_record' is a quick flag to check whether this jukebox has a record  inside it.*/
export interface Jukebox extends BlockData {
    /**Gets the value of the 'has_record' property.*/
    hasRecord (): boolean
}

/**Represents a captured state of a jukebox.*/
export interface Jukebox extends TileState {
    /**Stops the jukebox playing and ejects the current record.*/
    eject (): boolean;
    /**Gets the record inserted into the jukebox.*/
    getPlaying (): Material;
    /**Gets the record item inserted into the jukebox.*/
    getRecord (): ItemStack;
    /**Checks if the jukebox is playing a record.*/
    isPlaying (): boolean;
    /**Sets the record being played.*/
    setPlaying (record: Material): void;
    /**Sets the record being played.*/
    setRecord (record: ItemStack): void;
    /**Stops the jukebox playing without ejecting the record.*/
    stopPlaying (): void
}

/**Represents an object which has a NamespacedKey attached to it.*/
export interface Keyed {
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey
}

/**Represents a custom BossBar that has a  NamespacedKey*/
export interface KeyedBossBar extends BossBar, Keyed {

}

export interface KnowledgeBookMeta extends ItemMeta {
    /**Adds new recipe to the end of the book.*/
    addRecipe (...recipes: NamespacedKey[]): void;
    clone (): KnowledgeBookMeta;
    /**Gets all the recipes in the book.*/
    getRecipes (): List<NamespacedKey>;
    /**Checks for the existence of recipes in the book.*/
    hasRecipes (): boolean;
    /**Clears the existing book recipes, and sets the book to use the provided  recipes.*/
    setRecipes (recipes: List<NamespacedKey>): void
}

export interface Ladder extends Directional, Waterlogged {

}

/**'hanging' denotes whether the lantern is hanging from a block.*/
export interface Lantern extends Waterlogged {
    /**Gets the value of the 'hanging' property.*/
    isHanging (): boolean;
    /**Sets the value of the 'hanging' property.*/
    setHanging (hanging: boolean): void
}

/**Represents a large Fireball*/
export interface LargeFireball extends SizedFireball {

}

/**The LazyMetadataValue class implements a type of metadata that is not  computed until another plugin asks for it.    By making metadata values lazy, no computation is done by the providing  plugin until absolutely necessary (if ever). Additionally,  LazyMetadataValue objects cache their values internally unless overridden  by a LazyMetadataValue.CacheStrategy or invalidated at the individual or plugin  level. Once invalidated, the LazyMetadataValue will recompute its value  when asked.*/
export class LazyMetadataValue extends MetadataValueAdapter {
    /**Invalidates this metadata item, forcing it to recompute when next  accessed.*/
    invalidate (): void;
    /**Fetches the value of this metadata item.*/
    value (): Object
}

/**Describes possible caching strategies for metadata.*/
export class LazyMetadataValue$CacheStrategy extends Enum<LazyMetadataValue$CacheStrategy> {
    /**Once the metadata value has been evaluated, do not re-evaluate the  value until it is manually invalidated.*/
    static CACHE_AFTER_FIRST_EVAL: LazyMetadataValue$CacheStrategy;
    /**Once the metadata value has been evaluated, do not re-evaluate the  value in spite of manual invalidation.*/
    static CACHE_ETERNALLY: LazyMetadataValue$CacheStrategy;
    /**Re-evaluate the metadata item every time it is requested*/
    static NEVER_CACHE: LazyMetadataValue$CacheStrategy
}

/**Represents a Leash Hitch on a fence*/
export interface LeashHitch extends Hanging {

}

/**Represents leather armor (Material.LEATHER_BOOTS, Material.LEATHER_CHESTPLATE, Material.LEATHER_HELMET, or Material.LEATHER_LEGGINGS) that can be colored.*/
export interface LeatherArmorMeta extends ItemMeta {
    clone (): LeatherArmorMeta;
    /**Gets the color of the armor.*/
    getColor (): Color;
    /**Sets the color of the armor.*/
    setColor (color: Color): void
}

/**'persistent' indicates whether or not leaves will be checked by the server to  see if they are subject to decay or not.    'distance' denotes how far the block is from a tree and is used in  conjunction with 'persistent' flag to determine if the leaves will decay or  not.*/
export interface Leaves extends BlockData {
    /**Gets the value of the 'distance' property.*/
    getDistance (): number;
    /**Gets the value of the 'persistent' property.*/
    isPersistent (): boolean;
    /**Sets the value of the 'distance' property.*/
    setDistance (distance: number): void;
    /**Sets the value of the 'persistent' property.*/
    setPersistent (persistent: boolean): void
}

/**Called when leaves are decaying naturally.    If a Leaves Decay event is cancelled, the leaves will not decay.*/
export class LeavesDecayEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**'has_book' is a quick flag to check whether this lectern has a book inside  it.*/
export interface Lectern extends Directional, Powerable {
    /**Gets the value of the 'has_book' property.*/
    hasBook (): boolean
}

/**Represents a captured state of a lectern.*/
export interface Lectern extends TileState, BlockInventoryHolder {
    /**Get the object's inventory.*/
    getInventory (): Inventory;
    /**Get the current lectern page.*/
    getPage (): number;
    getSnapshotInventory (): Inventory;
    /**Set the current lectern page.*/
    setPage (page: number): void
}

/**Interface to the inventory of a Lectern.*/
export interface LecternInventory extends Inventory {
    /**Gets the lectern's held book.*/
    getBook (): ItemStack;
    /**Gets the block or entity belonging to the open inventory*/
    getHolder (): Lectern;
    /**Sets the lectern's held book.*/
    setBook (book: ItemStack): void
}

/**'level' represents the amount of fluid contained within this block, either by  itself or inside a cauldron.    In the case of water and lava blocks the levels have special meanings: a  level of 0 corresponds to a source block, 1-7 regular fluid heights, and 8-15  to "falling" fluids. All falling fluids have the same behaviour, but the  level corresponds to that of the block above them, equal to  this.level - 8  Note that counterintuitively, an adjusted level of 1 is the highest level,  whilst 7 is the lowest.    May not be higher than getMaximumLevel().*/
export interface Levelled extends BlockData {
    /**Gets the value of the 'level' property.*/
    getLevel (): number;
    /**Gets the maximum allowed value of the 'level' property.*/
    getMaximumLevel (): number;
    /**Sets the value of the 'level' property.*/
    setLevel (level: number): void
}

export interface Lidded {
    /**Sets the block's animated state to closed even if a player is currently  viewing this block.*/
    close (): void;
    /**Sets the block's animated state to open and prevents it from being closed  until close() is called.*/
    open (): void
}

/**'lit' denotes whether this block (either a redstone torch or furnace) is  currently lit - that is not burned out.*/
export interface Lightable extends BlockData {
    /**Gets the value of the 'lit' property.*/
    isLit (): boolean;
    /**Sets the value of the 'lit' property.*/
    setLit (lit: boolean): void
}

/**Represents an instance of a lightning strike. May or may not do damage.*/
export interface LightningStrike extends Entity {
    /**Returns whether the strike is an effect that does no damage.*/
    isEffect (): boolean;
    spigot (): LightningStrike$Spigot
}

export class LightningStrike$Spigot extends Entity$Spigot {
    isSilent (): boolean
}

/**Stores data for lightning striking*/
export class LightningStrikeEvent extends WeatherEvent implements Cancellable {
    /**Gets the cause of this lightning strike.*/
    getCause (): LightningStrikeEvent$Cause;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the bolt which is striking the earth.*/
    getLightning (): LightningStrike;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

export class LightningStrikeEvent$Cause extends Enum<LightningStrikeEvent$Cause> {
    /**Triggered by the /summon command.*/
    static COMMAND: LightningStrikeEvent$Cause;
    /**Triggered by a skeleton horse trap.*/
    static TRAP: LightningStrikeEvent$Cause;
    /**Triggered by an enchanted trident.*/
    static TRIDENT: LightningStrikeEvent$Cause;
    /**Unknown trigger.*/
    static UNKNOWN: LightningStrikeEvent$Cause;
    /**Triggered by weather.*/
    static WEATHER: LightningStrikeEvent$Cause
}

/**Called when a splash potion hits an area*/
export class LingeringPotionSplashEvent extends ProjectileHitEvent implements Cancellable {
    /**Gets the AreaEffectCloud spawned*/
    getAreaEffectCloud (): AreaEffectCloud;
    /**Returns the Entity involved in this event*/
    getEntity (): ThrownPotion;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Simple interface for tagging all EventListeners*/
export interface Listener {

}

/**Represents a living entity, such as a monster or player*/
export interface LivingEntity extends Attributable, Damageable, ProjectileSource {
    /**Adds the given PotionEffect to the living entity.*/
    addPotionEffect (effect: PotionEffect): boolean;
    /**Attempts to add all of the given PotionEffect to the living  entity.*/
    addPotionEffects (effects: Collection<PotionEffect>): boolean;
    /**Makes this entity attack the given entity with a melee attack.*/
    attack (target: Entity): void;
    /**Get's the item being actively "used" or consumed.*/
    getActiveItem (): ItemStack;
    /**Returns all currently active PotionEffects on the living  entity.*/
    getActivePotionEffects (): Collection<PotionEffect>;
    /**Gets the time in ticks until the next arrow leaves the entity's body.*/
    getArrowCooldown (): number;
    /**Gets the amount of arrows in an entity's body.*/
    getArrowsInBody (): number;
    /**Get the number of arrows stuck in this entity*/
    getArrowsStuck (): number;
    /**Gets if the living entity can pick up items.*/
    getCanPickupItems (): boolean;
    /**Get the category to which this entity belongs.*/
    getCategory (): EntityCategory;
    /**Gets a mutable set of UUIDs of the entities which are exempt from the  entity's collidable rule and which's collision with this entity will  behave the opposite of it.*/
    getCollidableExemptions (): Set<UUID>;
    /**Gets the inventory with the equipment worn by the living entity.*/
    getEquipment (): EntityEquipment;
    /**Gets the height of the living entity's eyes above its Location.*/
    getEyeHeight (): number;
    /**Gets the height of the living entity's eyes above its Location.*/
    getEyeHeight (ignorePose: boolean): number;
    /**Get a Location detailing the current eye position of the living entity.*/
    getEyeLocation (): Location;
    /**Get how long the players hands have been raised (Charging Bow attack, using a potion, etc)*/
    getHandRaisedTime (): number;
    /**Get's remaining time a player needs to keep hands raised with an item to finish using it.*/
    getItemUseRemainingTime (): number;
    /**Gets the player identified as the killer of the living entity.*/
    getKiller (): Player;
    /**Returns the living entity's last damage taken in the current no damage  ticks time.*/
    getLastDamage (): number;
    /**Gets the last two blocks along the living entity's line of sight.*/
    getLastTwoTargetBlocks (transparent: Set<Material>, maxDistance: number): List<Block>;
    /**Gets the entity that is currently leading this entity.*/
    getLeashHolder (): Entity;
    /**Gets all blocks along the living entity's line of sight.*/
    getLineOfSight (transparent: Set<Material>, maxDistance: number): List<Block>;
    /**Returns the maximum amount of air the living entity can have, in ticks.*/
    getMaximumAir (): number;
    /**Returns the living entity's current maximum no damage ticks.*/
    getMaximumNoDamageTicks (): number;
    /**Returns the value of the memory specified.*/
    getMemory <T>(memoryKey: MemoryKey<T>): T;
    /**Returns the living entity's current no damage ticks.*/
    getNoDamageTicks (): number;
    /**Returns the active PotionEffect of the specified type.*/
    getPotionEffect (type: PotionEffectType): PotionEffect;
    /**Returns the amount of air that the living entity has remaining, in  ticks.*/
    getRemainingAir (): number;
    /**Returns if the living entity despawns when away from players or not.*/
    getRemoveWhenFarAway (): boolean;
    /**Get the delay (in ticks) before blocking is effective for this entity*/
    getShieldBlockingDelay (): number;
    /**Gets the block that the living entity has targeted, ignoring fluids*/
    getTargetBlock (maxDistance: number): Block;
    /**Gets the block that the living entity has targeted*/
    getTargetBlock (maxDistance: number, fluidMode: TargetBlockInfo$FluidMode): Block;
    /**Gets the block that the living entity has targeted.*/
    getTargetBlock (transparent: Set<Material>, maxDistance: number): Block;
    /**Gets the block that the living entity has targeted.*/
    getTargetBlockExact (maxDistance: number): Block;
    /**Gets the block that the living entity has targeted.*/
    getTargetBlockExact (maxDistance: number, fluidCollisionMode: FluidCollisionMode): Block;
    /**Gets the blockface of that block that the living entity has targeted, ignoring fluids*/
    getTargetBlockFace (maxDistance: number): BlockFace;
    /**Gets the blockface of that block that the living entity has targeted*/
    getTargetBlockFace (maxDistance: number, fluidMode: TargetBlockInfo$FluidMode): BlockFace;
    /**Gets information about the block the living entity has targeted, ignoring fluids*/
    getTargetBlockInfo (maxDistance: number): TargetBlockInfo;
    /**Gets information about the block the living entity has targeted*/
    getTargetBlockInfo (maxDistance: number, fluidMode: TargetBlockInfo$FluidMode): TargetBlockInfo;
    /**Gets information about the entity being targeted*/
    getTargetEntity (maxDistance: number): Entity;
    /**Gets information about the entity being targeted*/
    getTargetEntity (maxDistance: number, ignoreBlocks: boolean): Entity;
    /**Gets information about the entity being targeted*/
    getTargetEntityInfo (maxDistance: number): TargetEntityInfo;
    /**Gets information about the entity being targeted*/
    getTargetEntityInfo (maxDistance: number, ignoreBlocks: boolean): TargetEntityInfo;
    /**Checks whether an entity has AI.*/
    hasAI (): boolean;
    /**Checks whether the living entity has block line of sight to another.*/
    hasLineOfSight (other: Entity): boolean;
    /**Returns whether the living entity already has an existing effect of  the given PotionEffectType applied to it.*/
    hasPotionEffect (type: PotionEffectType): boolean;
    /**Gets if this entity is subject to collisions with other entities.*/
    isCollidable (): boolean;
    /**Checks to see if an entity is gliding, such as using an Elytra.*/
    isGliding (): boolean;
    /**Whether or not this entity is using or charging an attack (Bow pulled back, drinking potion, eating food)*/
    isHandRaised (): boolean;
    /**Get entity jump state.*/
    isJumping (): boolean;
    /**Returns whether the entity is currently leashed.*/
    isLeashed (): boolean;
    /**Checks to see if an entity is currently using the Riptide enchantment.*/
    isRiptiding (): boolean;
    /**Returns whether this entity is slumbering.*/
    isSleeping (): boolean;
    /**Checks to see if an entity is swimming.*/
    isSwimming (): boolean;
    /**Plays pickup item animation towards this entity.*/
    playPickupItemAnimation (item: Item): void;
    /**Plays pickup item animation towards this entity.*/
    playPickupItemAnimation (item: Item, quantity: number): void;
    /**Performs a ray trace that provides information on the targeted block.*/
    rayTraceBlocks (maxDistance: number): RayTraceResult;
    /**Performs a ray trace that provides information on the targeted block.*/
    rayTraceBlocks (maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    /**Removes any effects present of the given PotionEffectType.*/
    removePotionEffect (type: PotionEffectType): void;
    /**Sets whether an entity will have AI.*/
    setAI (ai: boolean): void;
    /**Sets the time in ticks until the next arrow leaves the entity's body.*/
    setArrowCooldown (ticks: number): void;
    /**Set the amount of arrows in the entity's body.*/
    setArrowsInBody (count: number): void;
    /**Set the number of arrows stuck in this entity*/
    setArrowsStuck (arrows: number): void;
    /**Sets whether or not the living entity can pick up items.*/
    setCanPickupItems (pickup: boolean): void;
    /**Set if this entity will be subject to collisions with other entities.*/
    setCollidable (collidable: boolean): void;
    /**Makes entity start or stop gliding.*/
    setGliding (gliding: boolean): void;
    /**Set entity jump state*/
    setJumping (jumping: boolean): void;
    /**Sets the player identified as the killer of the living entity.*/
    setKiller (killer: Player): void;
    /**Sets the damage dealt within the current no damage ticks time period.*/
    setLastDamage (damage: number): void;
    /**Sets the leash on this entity to be held by the supplied entity.*/
    setLeashHolder (holder: Entity): boolean;
    /**Sets the maximum amount of air the living entity can have, in ticks.*/
    setMaximumAir (ticks: number): void;
    /**Sets the living entity's current maximum no damage ticks.*/
    setMaximumNoDamageTicks (ticks: number): void;
    /**Sets the value of the memory specified.*/
    setMemory <T>(memoryKey: MemoryKey<T>, memoryValue: T): void;
    /**Sets the living entity's current no damage ticks.*/
    setNoDamageTicks (ticks: number): void;
    /**Sets the amount of air that the living entity has remaining, in ticks.*/
    setRemainingAir (ticks: number): void;
    /**Sets whether or not the living entity despawns when away from players  or not.*/
    setRemoveWhenFarAway (remove: boolean): void;
    /**Set the delay (in ticks) before blocking is effective for this entity*/
    setShieldBlockingDelay (delay: number): void;
    /**Makes entity start or stop swimming.*/
    setSwimming (swimming: boolean): void;
    /**Makes this entity swing their main hand.*/
    swingMainHand (): void;
    /**Makes this entity swing their off hand.*/
    swingOffHand (): void
}

/**Represents a Llama.*/
export interface Llama extends ChestedHorse, RangedEntity {
    /**Gets the llama's color.*/
    getColor (): Llama$Color;
    /**Get the object's inventory.*/
    getInventory (): LlamaInventory;
    /**Gets the llama's strength.*/
    getStrength (): number;
    /**Sets the llama's color.*/
    setColor (color: Llama$Color): void;
    /**Sets the llama's strength.*/
    setStrength (strength: number): void
}

/**Represents the base color that the llama has.*/
export class Llama$Color extends Enum<Llama$Color> {
    /**A brown llama.*/
    static BROWN: Llama$Color;
    /**A cream-colored llama.*/
    static CREAMY: Llama$Color;
    /**A gray llama.*/
    static GRAY: Llama$Color;
    /**A white llama.*/
    static WHITE: Llama$Color
}

/**An interface to the inventory of a Llama.*/
export interface LlamaInventory extends SaddledHorseInventory {
    /**Gets the item in the llama's decor slot.*/
    getDecor (): ItemStack;
    /**Sets the item in the llama's decor slot.*/
    setDecor (stack: ItemStack): void
}

/**Represents Llama spit.*/
export interface LlamaSpit extends Projectile {

}

/**Allows you to pass a Loader function that when a key is accessed that doesn't exist,  automatically loads the entry into the map by calling the loader Function.   .get() Will only return null if the Loader can return null.   You may pass any backing Map to use.   This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.   Do not wrap the backing map with Collections.synchronizedMap.*/
export class LoadingIntMap<V> extends it$unimi$dsi$fastutil$ints$Int2ObjectOpenHashMap<V> {
    get (key: number): V
}

/**Due to java stuff, you will need to cast it to (Function) for some cases*/
export class LoadingIntMap$Feeder<T> extends Object implements Function<T,T> {
    apply (): T;
    apply (input: Object): T
}

/**Allows you to pass a Loader function that when a key is accessed that doesn't exists,  automatically loads the entry into the map by calling the loader Function.   .get() Will only return null if the Loader can return null.   You may pass any backing Map to use.   This class is not thread safe and should be wrapped with Collections.synchronizedMap on the OUTSIDE of the LoadingMap if needed.   Do not wrap the backing map with Collections.synchronizedMap.*/
export class LoadingMap<K,V> extends AbstractMap<K,V> {
    clear (): void;
    clone (): LoadingMap<K,V>;
    containsKey (key: Object): boolean;
    containsValue (value: Object): boolean;
    entrySet (): Set<Map$Entry<K,V>>;
    equals (o: Object): boolean;
    get (key: Object): V;
    hashCode (): number;
    isEmpty (): boolean;
    keySet (): Set<K>;
    /**Creates a LoadingMap with an auto instantiating loader.*/
    static newAutoMap <K,V>(backingMap: Map<K,V>, keyClass: Class<X>, valueClass: Class<X>): Map<K,V>;
    /**Creates a LoadingMap with an auto instantiating loader.*/
    static newAutoMap <K,V>(backingMap: Map<K,V>, valueClass: Class<X>): Map<K,V>;
    static newHashAutoMap <K,V>(keyClass: Class<X>, valueClass: Class<X>): Map<K,V>;
    static newHashAutoMap <K,V>(keyClass: Class<X>, valueClass: Class<X>, initialCapacity: number, loadFactor: number): Map<K,V>;
    static newHashAutoMap <K,V>(valueClass: Class<X>): Map<K,V>;
    static newHashAutoMap <K,V>(valueClass: Class<X>, initialCapacity: number, loadFactor: number): Map<K,V>;
    /**Initializes an auto loading map using a HashMap*/
    static newHashMap <K,V>(loader: Function<K,V>): Map<K,V>;
    /**Initializes an auto loading map using a HashMap*/
    static newHashMap <K,V>(loader: Function<K,V>, initialCapacity: number): Map<K,V>;
    /**Initializes an auto loading map using a HashMap*/
    static newHashMap <K,V>(loader: Function<K,V>, initialCapacity: number, loadFactor: number): Map<K,V>;
    /**Initializes an auto loading map using an Identity HashMap*/
    static newIdentityHashMap <K,V>(loader: Function<K,V>): Map<K,V>;
    /**Initializes an auto loading map using an Identity HashMap*/
    static newIdentityHashMap <K,V>(loader: Function<K,V>, initialCapacity: number): Map<K,V>;
    /**Creates a new LoadingMap with the specified map and loader*/
    static of <K,V>(backingMap: Map<K,V>, loader: Function<K,V>): Map<K,V>;
    put (key: K, value: V): V;
    putAll (m: Map<X>): void;
    remove (key: Object): V;
    size (): number;
    values (): Collection<V>
}

/**Due to java stuff, you will need to cast it to (Function) for some cases*/
export class LoadingMap$Feeder<T> extends Object implements Function<T,T> {
    apply (): T;
    apply (input: Object): T
}

/**Represents a 3-dimensional position in a world.    No constraints are placed on any angular values other than that they be  specified in degrees. This means that negative angles or angles of greater  magnitude than 360 are valid, but may be normalized to any other equivalent  representation by the implementation.*/
export class Location extends Object implements Cloneable, ConfigurationSerializable {
    /**Adds the location by another.*/
    add (x: number, y: number, z: number): Location;
    /**Adds the location by another.*/
    add (vec: Location): Location;
    /**Takes the x/y/z from base and adds the specified x/y/z to it and returns self   This mutates this object, clone first.*/
    add (base: Location, x: number, y: number, z: number): Location;
    /**Adds the location by a vector.*/
    add (vec: Vector): Location;
    /**Check if each component of this Location is finite.*/
    checkFinite (): void;
    clone (): Location;
    /**Creates explosion at this location with given power   Will break blocks and ignite blocks on fire.*/
    createExplosion (power: number): boolean;
    /**Creates explosion at this location with given power and optionally  setting blocks on fire.*/
    createExplosion (power: number, setFire: boolean): boolean;
    /**Creates explosion at this location with given power and optionally  setting blocks on fire.*/
    createExplosion (power: number, setFire: boolean, breakBlocks: boolean): boolean;
    /**Creates explosion at this location with given power, with the specified entity as the source.*/
    createExplosion (source: Entity, power: number): boolean;
    /**Creates explosion at this location with given power and optionally  setting blocks on fire, with the specified entity as the source.*/
    createExplosion (source: Entity, power: number, setFire: boolean): boolean;
    /**Creates explosion at this location with given power and optionally  setting blocks on fire, with the specified entity as the source.*/
    createExplosion (source: Entity, power: number, setFire: boolean, breakBlocks: boolean): boolean;
    /**Required method for deserialization*/
    static deserialize (args: Map<String,Object>): Location;
    /**Get the distance between this location and another.*/
    distance (o: Location): number;
    /**Get the squared distance between this location and another.*/
    distanceSquared (o: Location): number;
    equals (obj: Object): boolean;
    /**Gets the block at the represented location*/
    getBlock (): Block;
    /**Gets the floored value of the X component, indicating the block that  this location is contained with.*/
    getBlockX (): number;
    /**Gets the floored value of the Y component, indicating the block that  this location is contained with.*/
    getBlockY (): number;
    /**Gets the floored value of the Z component, indicating the block that  this location is contained with.*/
    getBlockZ (): number;
    /**Gets the chunk at the represented location*/
    getChunk (): Chunk;
    /**Gets a unit-vector pointing in the direction that this Location is  facing.*/
    getDirection (): Vector;
    /**Returns a list of entities within a bounding box centered around a Location.*/
    getNearbyEntities (x: number, y: number, z: number): Collection<Entity>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, xRadius: number, yRadius: number, zRadius: number, predicate: Predicate<T>): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, radius: number): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius, with x and x radius matching (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, xzRadius: number, yRadius: number): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, xRadius: number, yRadius: number, zRadius: number): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius, with x and x radius matching (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, xzRadius: number, yRadius: number, predicate: Predicate<T>): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, radius: number, predicate: Predicate<T>): Collection<T>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (radius: number): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (xzRadius: number, yRadius: number): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (xRadius: number, yRadius: number, zRadius: number): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (xRadius: number, yRadius: number, zRadius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (xzRadius: number, yRadius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (radius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (radius: number): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (xzRadius: number, yRadius: number): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (xRadius: number, yRadius: number, zRadius: number): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (xRadius: number, yRadius: number, zRadius: number, predicate: Predicate<Player>): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (xzRadius: number, yRadius: number, predicate: Predicate<Player>): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (radius: number, predicate: Predicate<Player>): Collection<Player>;
    /**Gets the pitch of this location, measured in degrees.*/
    getPitch (): number;
    /**Gets the world that this location resides in*/
    getWorld (): World;
    /**Gets the x-coordinate of this location*/
    getX (): number;
    /**Gets the y-coordinate of this location*/
    getY (): number;
    /**Gets the yaw of this location, measured in degrees.*/
    getYaw (): number;
    /**Gets the z-coordinate of this location*/
    getZ (): number;
    hashCode (): number;
    isChunkLoaded (): boolean;
    /**Checks if a Chunk has been generated at this location.*/
    isGenerated (): boolean;
    /**Checks if world in this location is present and loaded.*/
    isWorldLoaded (): boolean;
    /**Gets the magnitude of the location, defined as sqrt(x^2+y^2+z^2).*/
    length (): number;
    /**Gets the magnitude of the location squared.*/
    lengthSquared (): number;
    /**Safely converts a double (location coordinate) to an int (block  coordinate)*/
    static locToBlock (loc: number): number;
    /**Performs scalar multiplication, multiplying all components with a  scalar.*/
    multiply (m: number): Location;
    /**Normalizes the given pitch angle to a value between +/-90  degrees.*/
    static normalizePitch (pitch: number): number;
    /**Normalizes the given yaw angle to a value between +/-180  degrees.*/
    static normalizeYaw (yaw: number): number;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    /**Sets the position of this Location and returns itself   This mutates this object, clone first.*/
    set (x: number, y: number, z: number): Location;
    /**Sets the yaw and pitch to point  in the direction of the vector.*/
    setDirection (vector: Vector): Location;
    /**Sets the pitch of this location, measured in degrees.*/
    setPitch (pitch: number): void;
    /**Sets the world that this location resides in*/
    setWorld (world: World): void;
    /**Sets the x-coordinate of this location*/
    setX (x: number): void;
    /**Sets the y-coordinate of this location*/
    setY (y: number): void;
    /**Sets the yaw of this location, measured in degrees.*/
    setYaw (yaw: number): void;
    /**Sets the z-coordinate of this location*/
    setZ (z: number): void;
    /**Subtracts the location by another.*/
    subtract (x: number, y: number, z: number): Location;
    /**Subtracts the location by another.*/
    subtract (vec: Location): Location;
    /**Takes the x/y/z from base and subtracts the specified x/y/z to it and returns self   This mutates this object, clone first.*/
    subtract (base: Location, x: number, y: number, z: number): Location;
    /**Subtracts the location by a vector.*/
    subtract (vec: Vector): Location;
    toBlockKey (): number;
    toBlockLocation (): Location;
    toCenterLocation (): Location;
    /**Returns a copy of this location except with y = getWorld().getHighestBlockYAt(this.getBlockX(), this.getBlockZ())*/
    toHighestLocation (): Location;
    /**Returns a copy of this location except with y = getWorld().getHighestBlockYAt(this.getBlockX(), this.getBlockZ(), heightmap)*/
    toHighestLocation (heightmap: HeightmapType): Location;
    toString (): String;
    /**Constructs a new Vector based on this Location*/
    toVector (): Vector;
    /**Zero this location's components.*/
    zero (): Location
}

/**Represents a block (usually a container) that may be locked. When a lock is  active an item with a name corresponding to the key will be required to open  this block.*/
export interface Lockable {
    /**Gets the key needed to access the container.*/
    getLock (): String;
    /**Checks if the container has a valid (non empty) key.*/
    isLocked (): boolean;
    /**Sets the key required to access this container.*/
    setLock (key: String): void
}

/**Allows a plugin to be notified anytime AFTER a Profile has been looked up from the Mojang API  This is an opportunity to view the response and potentially cache things.   No guarantees are made about thread execution context for this event. If you need to know, check  event.isAsync()*/
export class LookupProfileEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getPlayerProfile (): PlayerProfile
}

/**Interface to the inventory of a Loom.*/
export interface LoomInventory extends Inventory {

}

/**Represents a Container or a  Mob that can have a loot table.    Container loot will only generate upon opening, and only when the container  is first opened.    Entities will only generate loot upon death.*/
export interface Lootable {
    /**Clears the associated Loot Table to this object*/
    clearLootTable (): void;
    /**Gets the Loot Table attached to this block or entity.*/
    getLootTable (): LootTable;
    /**Get the Loot Table's seed.*/
    getSeed (): number;
    /**Returns whether or not this object has a Loot Table*/
    hasLootTable (): boolean;
    /**Set the loot table for a container or entity.*/
    setLootTable (table: LootTable): void;
    /**Set the loot table and seed for a container or entity at the same time.*/
    setLootTable (table: LootTable, seed: number): void;
    /**Set the seed used when this Loot Table generates loot.*/
    setSeed (seed: number): void
}

/**Represents an Inventory that can generate loot, such as Chests inside of Fortresses and Mineshafts*/
export interface LootableBlockInventory extends LootableInventory {
    /**Gets the block that is lootable*/
    getBlock (): Block
}

/**Represents an Inventory that can generate loot, such as Minecarts inside of Mineshafts*/
export interface LootableEntityInventory extends LootableInventory {
    /**Gets the entity that is lootable*/
    getEntity (): Entity
}

/**Represents an Inventory that contains a Loot Table associated to it that will  automatically fill on first open.   A new feature and API is provided to support automatically refreshing the contents  of the inventory based on that Loot Table after a configurable amount of time has passed.   The behavior of how the Inventory is filled based on the loot table may vary based  on Minecraft versions and the Loot Table feature.*/
export interface LootableInventory extends Lootable {
    /**Gets the timestamp in milliseconds that the Lootable object was last refilled*/
    getLastFilled (): number;
    /**Gets the timestamp, in milliseconds, of when the player last looted this object*/
    getLastLooted (player: UUID): Long;
    /**Gets the timestamp, in milliseconds, of when the player last looted this object*/
    getLastLooted (player: Player): Long;
    /**Gets the timestamp in milliseconds that the Lootable object will refill*/
    getNextRefill (): number;
    /**Whether or not this object has ever been filled*/
    hasBeenFilled (): boolean;
    /**Returns Whether or not this object has been filled and now has a pending refill*/
    hasPendingRefill (): boolean;
    /**Has this player ever looted this block*/
    hasPlayerLooted (player: UUID): boolean;
    /**Has this player ever looted this block*/
    hasPlayerLooted (player: Player): boolean;
    /**Server owners have to enable whether or not an object in a world should refill*/
    isRefillEnabled (): boolean;
    /**Change the state of whether or not a player has looted this block*/
    setHasPlayerLooted (player: UUID, looted: boolean): boolean;
    /**Change the state of whether or not a player has looted this block*/
    setHasPlayerLooted (player: Player, looted: boolean): boolean;
    /**Sets the timestamp in milliseconds of the next refill for this object*/
    setNextRefill (refillAt: number): number
}

export class LootableInventoryReplenishEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getInventory (): LootableInventory;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents additional information a LootTable can use to modify it's  generated loot.*/
export class LootContext extends Object {
    /**Get the HumanEntity who killed the getLootedEntity().*/
    getKiller (): HumanEntity;
    /**The Location to store where the loot will be generated.*/
    getLocation (): Location;
    /**Get the Entity that was killed.*/
    getLootedEntity (): Entity;
    /**Represents the  Enchantment.LOOT_BONUS_MOBS the  getKiller() entity has on their equipped item.*/
    getLootingModifier (): number;
    /**Represents the PotionEffectType.LUCK that an  entity can have.*/
    getLuck (): number
}

/**Utility class to make building LootContext easier. The only  required argument is Location with a valid (non-null)  World.*/
export class LootContext$Builder extends Object {
    /**Create a new LootContext instance using the supplied  parameters.*/
    build (): LootContext;
    /**Set the HumanEntity that killed  LootContext.getLootedEntity().*/
    killer (killer: HumanEntity): LootContext$Builder;
    /**The entity that was killed.*/
    lootedEntity (lootedEntity: Entity): LootContext$Builder;
    /**Set the Enchantment.LOOT_BONUS_MOBS  level equivalent to use when generating loot.*/
    lootingModifier (modifier: number): LootContext$Builder;
    /**Set how much luck to have when generating loot.*/
    luck (luck: number): LootContext$Builder
}

/**Called when a LootTable is generated in the world for an  InventoryHolder.   This event is NOT currently called when an entity's loot table has been  generated (use EntityDeathEvent.getDrops(), but WILL be called by  plugins invoking  LootTable.fillInventory(org.bukkit.inventory.Inventory, java.util.Random, LootContext).*/
export class LootGenerateEvent extends WorldEvent implements Cancellable {
    /**Get the entity used as context for loot generation (if applicable).*/
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the inventory holder in which the loot was generated.*/
    getInventoryHolder (): InventoryHolder;
    /**Get a mutable list of all loot to be generated.*/
    getLoot (): List<ItemStack>;
    /**Get the loot context used to provide context to the loot table's loot  generation.*/
    getLootContext (): LootContext;
    /**Get the loot table used to generate loot.*/
    getLootTable (): LootTable;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Check whether or not this event was called as a result of a plugin  invoking  LootTable.fillInventory(org.bukkit.inventory.Inventory, java.util.Random, LootContext).*/
    isPlugin (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the loot to be generated.*/
    setLoot (loot: Collection<ItemStack>): void
}

/**LootTables are technical files that represent what items should be in  naturally generated containers, what items should be dropped when killing a  mob, or what items can be fished.   See the   Minecraft Wiki for more information.*/
export interface LootTable extends Keyed {
    /**Attempt to fill an inventory with this LootTable's loot.*/
    fillInventory (inventory: Inventory, random: Random, context: LootContext): void;
    /**Returns a mutable list of loot generated by this LootTable.*/
    populateLoot (random: Random, context: LootContext): Collection<ItemStack>
}

/**This enum holds a list of all known LootTables offered by Mojang.  This list is not guaranteed to be accurate in future versions.   See the    Minecraft Wiki for more information on loot tables.*/
export class LootTables extends Enum<LootTables> implements Keyed {
    static ABANDONED_MINESHAFT: LootTables;
    static ARMOR_STAND: LootTables;
    static ARMORER_GIFT: LootTables;
    static BASTION_BRIDGE: LootTables;
    static BASTION_HOGLIN_STABLE: LootTables;
    static BASTION_OTHER: LootTables;
    static BASTION_TREASURE: LootTables;
    static BAT: LootTables;
    static BLAZE: LootTables;
    static BURIED_TREASURE: LootTables;
    static BUTCHER_GIFT: LootTables;
    static CARTOGRAPHER_GIFT: LootTables;
    static CAT: LootTables;
    static CAT_MORNING_GIFT: LootTables;
    static CAVE_SPIDER: LootTables;
    static CHICKEN: LootTables;
    static CLERIC_GIFT: LootTables;
    static COD: LootTables;
    static COW: LootTables;
    static CREEPER: LootTables;
    static DESERT_PYRAMID: LootTables;
    static DOLPHIN: LootTables;
    static DONKEY: LootTables;
    static DROWNED: LootTables;
    static ELDER_GUARDIAN: LootTables;
    static EMPTY: LootTables;
    static END_CITY_TREASURE: LootTables;
    static ENDER_DRAGON: LootTables;
    static ENDERMAN: LootTables;
    static ENDERMITE: LootTables;
    static EVOKER: LootTables;
    static FARMER_GIFT: LootTables;
    static FISHERMAN_GIFT: LootTables;
    static FISHING: LootTables;
    static FISHING_FISH: LootTables;
    static FISHING_JUNK: LootTables;
    static FISHING_TREASURE: LootTables;
    static FLETCHER_GIFT: LootTables;
    static FOX: LootTables;
    static GHAST: LootTables;
    static GIANT: LootTables;
    static GUARDIAN: LootTables;
    static HORSE: LootTables;
    static HUSK: LootTables;
    static IGLOO_CHEST: LootTables;
    static ILLUSIONER: LootTables;
    static IRON_GOLEM: LootTables;
    static JUNGLE_TEMPLE: LootTables;
    static JUNGLE_TEMPLE_DISPENSER: LootTables;
    static LEATHERWORKER_GIFT: LootTables;
    static LIBRARIAN_GIFT: LootTables;
    static LLAMA: LootTables;
    static MAGMA_CUBE: LootTables;
    static MASON_GIFT: LootTables;
    static MOOSHROOM: LootTables;
    static MULE: LootTables;
    static NETHER_BRIDGE: LootTables;
    static OCELOT: LootTables;
    static PANDA: LootTables;
    static PARROT: LootTables;
    static PHANTOM: LootTables;
    static PIG: LootTables;
    static PIGLIN_BARTERING: LootTables;
    static PILLAGER: LootTables;
    static PILLAGER_OUTPOST: LootTables;
    static POLAR_BEAR: LootTables;
    static PUFFERFISH: LootTables;
    static RABBIT: LootTables;
    static RAVAGER: LootTables;
    static RUINED_PORTAL: LootTables;
    static SALMON: LootTables;
    static SHEEP: LootTables;
    static SHEEP_BLACK: LootTables;
    static SHEEP_BLUE: LootTables;
    static SHEEP_BROWN: LootTables;
    static SHEEP_CYAN: LootTables;
    static SHEEP_GRAY: LootTables;
    static SHEEP_GREEN: LootTables;
    static SHEEP_LIGHT_BLUE: LootTables;
    static SHEEP_LIGHT_GRAY: LootTables;
    static SHEEP_LIME: LootTables;
    static SHEEP_MAGENTA: LootTables;
    static SHEEP_ORANGE: LootTables;
    static SHEEP_PINK: LootTables;
    static SHEEP_PURPLE: LootTables;
    static SHEEP_RED: LootTables;
    static SHEEP_WHITE: LootTables;
    static SHEEP_YELLOW: LootTables;
    static SHEPHERD_GIFT: LootTables;
    static SHIPWRECK_MAP: LootTables;
    static SHIPWRECK_SUPPLY: LootTables;
    static SHIPWRECK_TREASURE: LootTables;
    static SHULKER: LootTables;
    static SILVERFISH: LootTables;
    static SIMPLE_DUNGEON: LootTables;
    static SKELETON: LootTables;
    static SKELETON_HORSE: LootTables;
    static SLIME: LootTables;
    static SNOW_GOLEM: LootTables;
    static SPAWN_BONUS_CHEST: LootTables;
    static SPIDER: LootTables;
    static SQUID: LootTables;
    static STRAY: LootTables;
    static STRONGHOLD_CORRIDOR: LootTables;
    static STRONGHOLD_CROSSING: LootTables;
    static STRONGHOLD_LIBRARY: LootTables;
    static TOOLSMITH_GIFT: LootTables;
    static TRADER_LLAMA: LootTables;
    static TROPICAL_FISH: LootTables;
    static TURTLE: LootTables;
    static UNDERWATER_RUIN_BIG: LootTables;
    static UNDERWATER_RUIN_SMALL: LootTables;
    static VEX: LootTables;
    static VILLAGE_ARMORER: LootTables;
    static VILLAGE_BUTCHER: LootTables;
    static VILLAGE_CARTOGRAPHER: LootTables;
    static VILLAGE_DESERT_HOUSE: LootTables;
    static VILLAGE_FISHER: LootTables;
    static VILLAGE_FLETCHER: LootTables;
    static VILLAGE_MASON: LootTables;
    static VILLAGE_PLAINS_HOUSE: LootTables;
    static VILLAGE_SAVANNA_HOUSE: LootTables;
    static VILLAGE_SHEPHERD: LootTables;
    static VILLAGE_SNOWY_HOUSE: LootTables;
    static VILLAGE_TAIGA_HOUSE: LootTables;
    static VILLAGE_TANNERY: LootTables;
    static VILLAGE_TEMPLE: LootTables;
    static VILLAGE_TOOLSMITH: LootTables;
    static VILLAGE_WEAPONSMITH: LootTables;
    static VILLAGER: LootTables;
    static VINDICATOR: LootTables;
    static WANDERING_TRADER: LootTables;
    static WEAPONSMITH_GIFT: LootTables;
    static WITCH: LootTables;
    static WITHER: LootTables;
    static WITHER_SKELETON: LootTables;
    static WOLF: LootTables;
    static WOODLAND_MANSION: LootTables;
    static ZOMBIE: LootTables;
    static ZOMBIE_HORSE: LootTables;
    static ZOMBIE_PIGMAN: LootTables;
    static ZOMBIE_VILLAGER: LootTables
}

/**Represents a MagmaCube.*/
export interface MagmaCube extends Slime {

}

/**Represents the chosen main hand of a player*/
export class MainHand extends Enum<MainHand> {
    static LEFT: MainHand;
    static RIGHT: MainHand
}

/**The ManuallyAbandonedConversationCanceller is only used as part of a ConversationAbandonedEvent to indicate that the conversation was manually  abandoned by programmatically calling the abandon() method on it.*/
export class ManuallyAbandonedConversationCanceller extends Object implements ConversationCanceller {
    /**Cancels a conversation based on user input.*/
    cancelBasedOnInput (context: ConversationContext, input: String): boolean;
    /**Allows the ConversationFactory to duplicate this  ConversationCanceller when creating a new Conversation.*/
    clone (): ConversationCanceller;
    /**Sets the conversation this ConversationCanceller can optionally cancel.*/
    setConversation (conversation: Conversation): void
}

/**Represents a canvas for drawing to a map. Each canvas is associated with a  specific MapRenderer and represents that renderer's layer on the  map.*/
export interface MapCanvas {
    /**Draw an image to the map.*/
    drawImage (x: number, y: number, image: Image): void;
    /**Render text to the map using fancy formatting.*/
    drawText (x: number, y: number, font: MapFont, text: String): void;
    /**Get a pixel from the layers below this canvas.*/
    getBasePixel (x: number, y: number): number;
    /**Get the cursor collection associated with this canvas.*/
    getCursors (): MapCursorCollection;
    /**Get the map this canvas is attached to.*/
    getMapView (): MapView;
    /**Get a pixel from the canvas.*/
    getPixel (x: number, y: number): number;
    /**Set the cursor collection associated with this canvas.*/
    setCursors (cursors: MapCursorCollection): void;
    /**Draw a pixel to the canvas.*/
    setPixel (x: number, y: number, color: number): void
}

/**Represents a cursor on a map.*/
export class MapCursor extends Object {
    /**Gets the caption on this cursor.*/
    getCaption (): String;
    /**Get the direction of this cursor.*/
    getDirection (): number;
    /**Get the type of this cursor.*/
    getType (): MapCursor$Type;
    /**Get the X position of this cursor.*/
    getX (): number;
    /**Get the Y position of this cursor.*/
    getY (): number;
    /**Get the visibility status of this cursor.*/
    isVisible (): boolean;
    /**Sets the caption on this cursor.*/
    setCaption (caption: String): void;
    /**Set the direction of this cursor.*/
    setDirection (direction: number): void;
    /**Set the type of this cursor.*/
    setType (type: MapCursor$Type): void;
    /**Set the visibility status of this cursor.*/
    setVisible (visible: boolean): void;
    /**Set the X position of this cursor.*/
    setX (x: number): void;
    /**Set the Y position of this cursor.*/
    setY (y: number): void
}

/**Represents the standard types of map cursors. More may be made  available by resource packs - the value is used by the client as an  index in the file './misc/mapicons.png' from minecraft.jar or from a  resource pack.*/
export class MapCursor$Type extends Enum<MapCursor$Type> {
    static BANNER_BLACK: MapCursor$Type;
    static BANNER_BLUE: MapCursor$Type;
    static BANNER_BROWN: MapCursor$Type;
    static BANNER_CYAN: MapCursor$Type;
    static BANNER_GRAY: MapCursor$Type;
    static BANNER_GREEN: MapCursor$Type;
    static BANNER_LIGHT_BLUE: MapCursor$Type;
    static BANNER_LIGHT_GRAY: MapCursor$Type;
    static BANNER_LIME: MapCursor$Type;
    static BANNER_MAGENTA: MapCursor$Type;
    static BANNER_ORANGE: MapCursor$Type;
    static BANNER_PINK: MapCursor$Type;
    static BANNER_PURPLE: MapCursor$Type;
    static BANNER_RED: MapCursor$Type;
    static BANNER_WHITE: MapCursor$Type;
    static BANNER_YELLOW: MapCursor$Type;
    static BLUE_POINTER: MapCursor$Type;
    static GREEN_POINTER: MapCursor$Type;
    static MANSION: MapCursor$Type;
    static RED_MARKER: MapCursor$Type;
    static RED_POINTER: MapCursor$Type;
    static RED_X: MapCursor$Type;
    static SMALL_WHITE_CIRCLE: MapCursor$Type;
    static TEMPLE: MapCursor$Type;
    static WHITE_CIRCLE: MapCursor$Type;
    static WHITE_CROSS: MapCursor$Type;
    static WHITE_POINTER: MapCursor$Type
}

/**Represents all the map cursors on a MapCanvas. Like MapCanvas, a  MapCursorCollection is linked to a specific MapRenderer.*/
export class MapCursorCollection extends Object {
    /**Add a cursor to the collection.*/
    addCursor (x: number, y: number, direction: number): MapCursor;
    /**Add a cursor to the collection.*/
    addCursor (cursor: MapCursor): MapCursor;
    /**Get a cursor from this collection.*/
    getCursor (index: number): MapCursor;
    /**Remove a cursor from the collection.*/
    removeCursor (cursor: MapCursor): boolean;
    /**Get the amount of cursors in this collection.*/
    size (): number
}

/**Represents a bitmap font drawable to a map.*/
export class MapFont extends Object {
    /**Get the sprite for a given character.*/
    getChar (ch: char): MapFont$CharacterSprite;
    /**Get the height of this font.*/
    getHeight (): number;
    /**Get the width of the given text as it would be rendered using this  font.*/
    getWidth (text: String): number;
    /**Check whether the given text is valid.*/
    isValid (text: String): boolean;
    /**Set the sprite for a given character.*/
    setChar (ch: char, sprite: MapFont$CharacterSprite): void
}

/**Represents the graphics for a single character in a MapFont.*/
export class MapFont$CharacterSprite extends Object {
    /**Get the value of a pixel of the character.*/
    get (row: number, col: number): boolean;
    /**Get the height of the character sprite.*/
    getHeight (): number;
    /**Get the width of the character sprite.*/
    getWidth (): number
}

/**Called when a map is initialized.*/
export class MapInitializeEvent extends ServerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the map initialized in this event.*/
    getMap (): MapView
}

/**Represents a map that can be scalable.*/
export interface MapMeta extends ItemMeta {
    clone (): MapMeta;
    /**Gets the map color that is set.*/
    getColor (): Color;
    /**Gets the location name that is set.*/
    getLocationName (): String;
    /**Gets the map view that is associated with this map item.*/
    getMapView (): MapView;
    /**Checks for existence of a map color.*/
    hasColor (): boolean;
    /**Checks for existence of a location name.*/
    hasLocationName (): boolean;
    /**Checks for existence of an associated map.*/
    hasMapView (): boolean;
    /**Checks to see if this map is scaling.*/
    isScaling (): boolean;
    /**Sets the map color.*/
    setColor (color: Color): void;
    /**Sets the location name.*/
    setLocationName (name: String): void;
    /**Sets the associated map.*/
    setMapView (map: MapView): void;
    /**Sets if this map is scaling or not.*/
    setScaling (value: boolean): void
}

/**Represents the palette that map items use.    These fields are hee base color ranges. Each entry corresponds to four  colors of varying shades with values entry to entry + 3.*/
export class MapPalette extends Object {
    /**Resize an image to 128x128.*/
    static resizeImage (image: Image): BufferedImage
}

/**Represents a renderer for a map.*/
export class MapRenderer extends Object {
    /**Initialize this MapRenderer for the given map.*/
    initialize (map: MapView): void;
    /**Get whether the renderer is contextual, i.e.*/
    isContextual (): boolean;
    /**Render to the given map.*/
    render (map: MapView, canvas: MapCanvas, player: Player): void
}

/**Represents a map item.*/
export interface MapView {
    /**Add a renderer to this map.*/
    addRenderer (renderer: MapRenderer): void;
    /**Get the center X position of this map.*/
    getCenterX (): number;
    /**Get the center Z position of this map.*/
    getCenterZ (): number;
    /**Get the ID of this map item for use with MapMeta.*/
    getId (): number;
    /**Get a list of MapRenderers currently in effect.*/
    getRenderers (): List<MapRenderer>;
    /**Get the scale of this map.*/
    getScale (): MapView$Scale;
    /**Get the world that this map is associated with.*/
    getWorld (): World;
    /**Gets whether the map is locked or not.*/
    isLocked (): boolean;
    /**Gets whether a position cursor should be shown when the map is near its  center.*/
    isTrackingPosition (): boolean;
    /**Whether the map will show a smaller position cursor (true), or no  position cursor (false) when cursor is outside of map's range.*/
    isUnlimitedTracking (): boolean;
    /**Check whether this map is virtual.*/
    isVirtual (): boolean;
    /**Remove a renderer from this map.*/
    removeRenderer (renderer: MapRenderer): boolean;
    /**Set the center X position of this map.*/
    setCenterX (x: number): void;
    /**Set the center Z position of this map.*/
    setCenterZ (z: number): void;
    /**Gets whether the map is locked or not.*/
    setLocked (locked: boolean): void;
    /**Set the scale of this map.*/
    setScale (scale: MapView$Scale): void;
    /**Sets whether a position cursor should be shown when the map is near its  center.*/
    setTrackingPosition (trackingPosition: boolean): void;
    /**Whether the map will show a smaller position cursor (true), or no  position cursor (false) when cursor is outside of map's range.*/
    setUnlimitedTracking (unlimited: boolean): void;
    /**Set the world that this map is associated with.*/
    setWorld (world: World): void
}

/**An enum representing all possible scales a map can be set to.*/
export class MapView$Scale extends Enum<MapView$Scale> {
    static CLOSE: MapView$Scale;
    static CLOSEST: MapView$Scale;
    static FAR: MapView$Scale;
    static FARTHEST: MapView$Scale;
    static NORMAL: MapView$Scale
}

/**An enum of all material IDs accepted by the official server and client*/
export class Material extends Enum<Material> implements Keyed {
    static ACACIA_BOAT: Material;
    /**BlockData: Switch*/
    static ACACIA_BUTTON: Material;
    /**BlockData: Door*/
    static ACACIA_DOOR: Material;
    /**BlockData: Fence*/
    static ACACIA_FENCE: Material;
    /**BlockData: Gate*/
    static ACACIA_FENCE_GATE: Material;
    /**BlockData: Leaves*/
    static ACACIA_LEAVES: Material;
    /**BlockData: Orientable*/
    static ACACIA_LOG: Material;
    static ACACIA_PLANKS: Material;
    /**BlockData: Powerable*/
    static ACACIA_PRESSURE_PLATE: Material;
    /**BlockData: Sapling*/
    static ACACIA_SAPLING: Material;
    /**BlockData: Sign*/
    static ACACIA_SIGN: Material;
    /**BlockData: Slab*/
    static ACACIA_SLAB: Material;
    /**BlockData: Stairs*/
    static ACACIA_STAIRS: Material;
    /**BlockData: TrapDoor*/
    static ACACIA_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static ACACIA_WALL_SIGN: Material;
    /**BlockData: Orientable*/
    static ACACIA_WOOD: Material;
    /**BlockData: RedstoneRail*/
    static ACTIVATOR_RAIL: Material;
    static AIR: Material;
    static ALLIUM: Material;
    static ANCIENT_DEBRIS: Material;
    static ANDESITE: Material;
    /**BlockData: Slab*/
    static ANDESITE_SLAB: Material;
    /**BlockData: Stairs*/
    static ANDESITE_STAIRS: Material;
    /**BlockData: Wall*/
    static ANDESITE_WALL: Material;
    /**BlockData: Directional*/
    static ANVIL: Material;
    static APPLE: Material;
    static ARMOR_STAND: Material;
    static ARROW: Material;
    /**BlockData: Directional*/
    static ATTACHED_MELON_STEM: Material;
    /**BlockData: Directional*/
    static ATTACHED_PUMPKIN_STEM: Material;
    static AZURE_BLUET: Material;
    static BAKED_POTATO: Material;
    /**BlockData: Bamboo*/
    static BAMBOO: Material;
    static BAMBOO_SAPLING: Material;
    /**BlockData: Directional*/
    static BARREL: Material;
    static BARRIER: Material;
    /**BlockData: Orientable*/
    static BASALT: Material;
    static BAT_SPAWN_EGG: Material;
    static BEACON: Material;
    static BEDROCK: Material;
    /**BlockData: Beehive*/
    static BEE_NEST: Material;
    static BEE_SPAWN_EGG: Material;
    static BEEF: Material;
    /**BlockData: Beehive*/
    static BEEHIVE: Material;
    static BEETROOT: Material;
    static BEETROOT_SEEDS: Material;
    static BEETROOT_SOUP: Material;
    /**BlockData: Ageable*/
    static BEETROOTS: Material;
    /**BlockData: Bell*/
    static BELL: Material;
    static BIRCH_BOAT: Material;
    /**BlockData: Switch*/
    static BIRCH_BUTTON: Material;
    /**BlockData: Door*/
    static BIRCH_DOOR: Material;
    /**BlockData: Fence*/
    static BIRCH_FENCE: Material;
    /**BlockData: Gate*/
    static BIRCH_FENCE_GATE: Material;
    /**BlockData: Leaves*/
    static BIRCH_LEAVES: Material;
    /**BlockData: Orientable*/
    static BIRCH_LOG: Material;
    static BIRCH_PLANKS: Material;
    /**BlockData: Powerable*/
    static BIRCH_PRESSURE_PLATE: Material;
    /**BlockData: Sapling*/
    static BIRCH_SAPLING: Material;
    /**BlockData: Sign*/
    static BIRCH_SIGN: Material;
    /**BlockData: Slab*/
    static BIRCH_SLAB: Material;
    /**BlockData: Stairs*/
    static BIRCH_STAIRS: Material;
    /**BlockData: TrapDoor*/
    static BIRCH_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static BIRCH_WALL_SIGN: Material;
    /**BlockData: Orientable*/
    static BIRCH_WOOD: Material;
    /**BlockData: Rotatable*/
    static BLACK_BANNER: Material;
    /**BlockData: Bed*/
    static BLACK_BED: Material;
    static BLACK_CARPET: Material;
    static BLACK_CONCRETE: Material;
    static BLACK_CONCRETE_POWDER: Material;
    static BLACK_DYE: Material;
    /**BlockData: Directional*/
    static BLACK_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static BLACK_SHULKER_BOX: Material;
    static BLACK_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static BLACK_STAINED_GLASS_PANE: Material;
    static BLACK_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static BLACK_WALL_BANNER: Material;
    static BLACK_WOOL: Material;
    static BLACKSTONE: Material;
    /**BlockData: Slab*/
    static BLACKSTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static BLACKSTONE_STAIRS: Material;
    /**BlockData: Wall*/
    static BLACKSTONE_WALL: Material;
    /**BlockData: Furnace*/
    static BLAST_FURNACE: Material;
    static BLAZE_POWDER: Material;
    static BLAZE_ROD: Material;
    static BLAZE_SPAWN_EGG: Material;
    /**BlockData: Rotatable*/
    static BLUE_BANNER: Material;
    /**BlockData: Bed*/
    static BLUE_BED: Material;
    static BLUE_CARPET: Material;
    static BLUE_CONCRETE: Material;
    static BLUE_CONCRETE_POWDER: Material;
    static BLUE_DYE: Material;
    /**BlockData: Directional*/
    static BLUE_GLAZED_TERRACOTTA: Material;
    static BLUE_ICE: Material;
    static BLUE_ORCHID: Material;
    /**BlockData: Directional*/
    static BLUE_SHULKER_BOX: Material;
    static BLUE_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static BLUE_STAINED_GLASS_PANE: Material;
    static BLUE_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static BLUE_WALL_BANNER: Material;
    static BLUE_WOOL: Material;
    static BONE: Material;
    /**BlockData: Orientable*/
    static BONE_BLOCK: Material;
    static BONE_MEAL: Material;
    static BOOK: Material;
    static BOOKSHELF: Material;
    static BOW: Material;
    static BOWL: Material;
    /**BlockData: Waterlogged*/
    static BRAIN_CORAL: Material;
    static BRAIN_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static BRAIN_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static BRAIN_CORAL_WALL_FAN: Material;
    static BREAD: Material;
    /**BlockData: BrewingStand*/
    static BREWING_STAND: Material;
    static BRICK: Material;
    /**BlockData: Slab*/
    static BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static BRICK_STAIRS: Material;
    /**BlockData: Wall*/
    static BRICK_WALL: Material;
    static BRICKS: Material;
    /**BlockData: Rotatable*/
    static BROWN_BANNER: Material;
    /**BlockData: Bed*/
    static BROWN_BED: Material;
    static BROWN_CARPET: Material;
    static BROWN_CONCRETE: Material;
    static BROWN_CONCRETE_POWDER: Material;
    static BROWN_DYE: Material;
    /**BlockData: Directional*/
    static BROWN_GLAZED_TERRACOTTA: Material;
    static BROWN_MUSHROOM: Material;
    /**BlockData: MultipleFacing*/
    static BROWN_MUSHROOM_BLOCK: Material;
    /**BlockData: Directional*/
    static BROWN_SHULKER_BOX: Material;
    static BROWN_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static BROWN_STAINED_GLASS_PANE: Material;
    static BROWN_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static BROWN_WALL_BANNER: Material;
    static BROWN_WOOL: Material;
    /**BlockData: BubbleColumn*/
    static BUBBLE_COLUMN: Material;
    /**BlockData: Waterlogged*/
    static BUBBLE_CORAL: Material;
    static BUBBLE_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static BUBBLE_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static BUBBLE_CORAL_WALL_FAN: Material;
    static BUCKET: Material;
    /**BlockData: Ageable*/
    static CACTUS: Material;
    /**BlockData: Cake*/
    static CAKE: Material;
    /**BlockData: Campfire*/
    static CAMPFIRE: Material;
    static CARROT: Material;
    static CARROT_ON_A_STICK: Material;
    /**BlockData: Ageable*/
    static CARROTS: Material;
    static CARTOGRAPHY_TABLE: Material;
    /**BlockData: Directional*/
    static CARVED_PUMPKIN: Material;
    static CAT_SPAWN_EGG: Material;
    /**BlockData: Levelled*/
    static CAULDRON: Material;
    static CAVE_AIR: Material;
    static CAVE_SPIDER_SPAWN_EGG: Material;
    /**BlockData: Chain*/
    static CHAIN: Material;
    /**BlockData: CommandBlock*/
    static CHAIN_COMMAND_BLOCK: Material;
    static CHAINMAIL_BOOTS: Material;
    static CHAINMAIL_CHESTPLATE: Material;
    static CHAINMAIL_HELMET: Material;
    static CHAINMAIL_LEGGINGS: Material;
    static CHARCOAL: Material;
    /**BlockData: Chest*/
    static CHEST: Material;
    static CHEST_MINECART: Material;
    static CHICKEN: Material;
    static CHICKEN_SPAWN_EGG: Material;
    /**BlockData: Directional*/
    static CHIPPED_ANVIL: Material;
    static CHISELED_NETHER_BRICKS: Material;
    static CHISELED_POLISHED_BLACKSTONE: Material;
    static CHISELED_QUARTZ_BLOCK: Material;
    static CHISELED_RED_SANDSTONE: Material;
    static CHISELED_SANDSTONE: Material;
    static CHISELED_STONE_BRICKS: Material;
    /**BlockData: Ageable*/
    static CHORUS_FLOWER: Material;
    static CHORUS_FRUIT: Material;
    /**BlockData: MultipleFacing*/
    static CHORUS_PLANT: Material;
    static CLAY: Material;
    static CLAY_BALL: Material;
    static CLOCK: Material;
    static COAL: Material;
    static COAL_BLOCK: Material;
    static COAL_ORE: Material;
    static COARSE_DIRT: Material;
    static COBBLESTONE: Material;
    /**BlockData: Slab*/
    static COBBLESTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static COBBLESTONE_STAIRS: Material;
    /**BlockData: Wall*/
    static COBBLESTONE_WALL: Material;
    static COBWEB: Material;
    /**BlockData: Cocoa*/
    static COCOA: Material;
    static COCOA_BEANS: Material;
    static COD: Material;
    static COD_BUCKET: Material;
    static COD_SPAWN_EGG: Material;
    /**BlockData: CommandBlock*/
    static COMMAND_BLOCK: Material;
    static COMMAND_BLOCK_MINECART: Material;
    /**BlockData: Comparator*/
    static COMPARATOR: Material;
    static COMPASS: Material;
    /**BlockData: Levelled*/
    static COMPOSTER: Material;
    /**BlockData: Waterlogged*/
    static CONDUIT: Material;
    static COOKED_BEEF: Material;
    static COOKED_CHICKEN: Material;
    static COOKED_COD: Material;
    static COOKED_MUTTON: Material;
    static COOKED_PORKCHOP: Material;
    static COOKED_RABBIT: Material;
    static COOKED_SALMON: Material;
    static COOKIE: Material;
    static CORNFLOWER: Material;
    static COW_SPAWN_EGG: Material;
    static CRACKED_NETHER_BRICKS: Material;
    static CRACKED_POLISHED_BLACKSTONE_BRICKS: Material;
    static CRACKED_STONE_BRICKS: Material;
    static CRAFTING_TABLE: Material;
    static CREEPER_BANNER_PATTERN: Material;
    /**BlockData: Rotatable*/
    static CREEPER_HEAD: Material;
    static CREEPER_SPAWN_EGG: Material;
    /**BlockData: Directional*/
    static CREEPER_WALL_HEAD: Material;
    /**BlockData: Switch*/
    static CRIMSON_BUTTON: Material;
    /**BlockData: Door*/
    static CRIMSON_DOOR: Material;
    /**BlockData: Fence*/
    static CRIMSON_FENCE: Material;
    /**BlockData: Gate*/
    static CRIMSON_FENCE_GATE: Material;
    static CRIMSON_FUNGUS: Material;
    /**BlockData: Orientable*/
    static CRIMSON_HYPHAE: Material;
    static CRIMSON_NYLIUM: Material;
    static CRIMSON_PLANKS: Material;
    /**BlockData: Powerable*/
    static CRIMSON_PRESSURE_PLATE: Material;
    static CRIMSON_ROOTS: Material;
    /**BlockData: Sign*/
    static CRIMSON_SIGN: Material;
    /**BlockData: Slab*/
    static CRIMSON_SLAB: Material;
    /**BlockData: Stairs*/
    static CRIMSON_STAIRS: Material;
    /**BlockData: Orientable*/
    static CRIMSON_STEM: Material;
    /**BlockData: TrapDoor*/
    static CRIMSON_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static CRIMSON_WALL_SIGN: Material;
    static CROSSBOW: Material;
    static CRYING_OBSIDIAN: Material;
    static CUT_RED_SANDSTONE: Material;
    /**BlockData: Slab*/
    static CUT_RED_SANDSTONE_SLAB: Material;
    static CUT_SANDSTONE: Material;
    /**BlockData: Slab*/
    static CUT_SANDSTONE_SLAB: Material;
    /**BlockData: Rotatable*/
    static CYAN_BANNER: Material;
    /**BlockData: Bed*/
    static CYAN_BED: Material;
    static CYAN_CARPET: Material;
    static CYAN_CONCRETE: Material;
    static CYAN_CONCRETE_POWDER: Material;
    static CYAN_DYE: Material;
    /**BlockData: Directional*/
    static CYAN_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static CYAN_SHULKER_BOX: Material;
    static CYAN_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static CYAN_STAINED_GLASS_PANE: Material;
    static CYAN_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static CYAN_WALL_BANNER: Material;
    static CYAN_WOOL: Material;
    /**BlockData: Directional*/
    static DAMAGED_ANVIL: Material;
    static DANDELION: Material;
    static DARK_OAK_BOAT: Material;
    /**BlockData: Switch*/
    static DARK_OAK_BUTTON: Material;
    /**BlockData: Door*/
    static DARK_OAK_DOOR: Material;
    /**BlockData: Fence*/
    static DARK_OAK_FENCE: Material;
    /**BlockData: Gate*/
    static DARK_OAK_FENCE_GATE: Material;
    /**BlockData: Leaves*/
    static DARK_OAK_LEAVES: Material;
    /**BlockData: Orientable*/
    static DARK_OAK_LOG: Material;
    static DARK_OAK_PLANKS: Material;
    /**BlockData: Powerable*/
    static DARK_OAK_PRESSURE_PLATE: Material;
    /**BlockData: Sapling*/
    static DARK_OAK_SAPLING: Material;
    /**BlockData: Sign*/
    static DARK_OAK_SIGN: Material;
    /**BlockData: Slab*/
    static DARK_OAK_SLAB: Material;
    /**BlockData: Stairs*/
    static DARK_OAK_STAIRS: Material;
    /**BlockData: TrapDoor*/
    static DARK_OAK_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static DARK_OAK_WALL_SIGN: Material;
    /**BlockData: Orientable*/
    static DARK_OAK_WOOD: Material;
    static DARK_PRISMARINE: Material;
    /**BlockData: Slab*/
    static DARK_PRISMARINE_SLAB: Material;
    /**BlockData: Stairs*/
    static DARK_PRISMARINE_STAIRS: Material;
    /**BlockData: DaylightDetector*/
    static DAYLIGHT_DETECTOR: Material;
    /**BlockData: Waterlogged*/
    static DEAD_BRAIN_CORAL: Material;
    static DEAD_BRAIN_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static DEAD_BRAIN_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static DEAD_BRAIN_CORAL_WALL_FAN: Material;
    /**BlockData: Waterlogged*/
    static DEAD_BUBBLE_CORAL: Material;
    static DEAD_BUBBLE_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static DEAD_BUBBLE_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static DEAD_BUBBLE_CORAL_WALL_FAN: Material;
    static DEAD_BUSH: Material;
    /**BlockData: Waterlogged*/
    static DEAD_FIRE_CORAL: Material;
    static DEAD_FIRE_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static DEAD_FIRE_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static DEAD_FIRE_CORAL_WALL_FAN: Material;
    /**BlockData: Waterlogged*/
    static DEAD_HORN_CORAL: Material;
    static DEAD_HORN_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static DEAD_HORN_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static DEAD_HORN_CORAL_WALL_FAN: Material;
    /**BlockData: Waterlogged*/
    static DEAD_TUBE_CORAL: Material;
    static DEAD_TUBE_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static DEAD_TUBE_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static DEAD_TUBE_CORAL_WALL_FAN: Material;
    static DEBUG_STICK: Material;
    /**BlockData: RedstoneRail*/
    static DETECTOR_RAIL: Material;
    static DIAMOND: Material;
    static DIAMOND_AXE: Material;
    static DIAMOND_BLOCK: Material;
    static DIAMOND_BOOTS: Material;
    static DIAMOND_CHESTPLATE: Material;
    static DIAMOND_HELMET: Material;
    static DIAMOND_HOE: Material;
    static DIAMOND_HORSE_ARMOR: Material;
    static DIAMOND_LEGGINGS: Material;
    static DIAMOND_ORE: Material;
    static DIAMOND_PICKAXE: Material;
    static DIAMOND_SHOVEL: Material;
    static DIAMOND_SWORD: Material;
    static DIORITE: Material;
    /**BlockData: Slab*/
    static DIORITE_SLAB: Material;
    /**BlockData: Stairs*/
    static DIORITE_STAIRS: Material;
    /**BlockData: Wall*/
    static DIORITE_WALL: Material;
    static DIRT: Material;
    /**BlockData: Dispenser*/
    static DISPENSER: Material;
    static DOLPHIN_SPAWN_EGG: Material;
    static DONKEY_SPAWN_EGG: Material;
    static DRAGON_BREATH: Material;
    static DRAGON_EGG: Material;
    /**BlockData: Rotatable*/
    static DRAGON_HEAD: Material;
    /**BlockData: Directional*/
    static DRAGON_WALL_HEAD: Material;
    static DRIED_KELP: Material;
    static DRIED_KELP_BLOCK: Material;
    /**BlockData: Dispenser*/
    static DROPPER: Material;
    static DROWNED_SPAWN_EGG: Material;
    static EGG: Material;
    static ELDER_GUARDIAN_SPAWN_EGG: Material;
    static ELYTRA: Material;
    static EMERALD: Material;
    static EMERALD_BLOCK: Material;
    static EMERALD_ORE: Material;
    static ENCHANTED_BOOK: Material;
    static ENCHANTED_GOLDEN_APPLE: Material;
    static ENCHANTING_TABLE: Material;
    static END_CRYSTAL: Material;
    static END_GATEWAY: Material;
    static END_PORTAL: Material;
    /**BlockData: EndPortalFrame*/
    static END_PORTAL_FRAME: Material;
    /**BlockData: Directional*/
    static END_ROD: Material;
    static END_STONE: Material;
    /**BlockData: Slab*/
    static END_STONE_BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static END_STONE_BRICK_STAIRS: Material;
    /**BlockData: Wall*/
    static END_STONE_BRICK_WALL: Material;
    static END_STONE_BRICKS: Material;
    /**BlockData: EnderChest*/
    static ENDER_CHEST: Material;
    static ENDER_EYE: Material;
    static ENDER_PEARL: Material;
    static ENDERMAN_SPAWN_EGG: Material;
    static ENDERMITE_SPAWN_EGG: Material;
    static EVOKER_SPAWN_EGG: Material;
    static EXPERIENCE_BOTTLE: Material;
    /**BlockData: Farmland*/
    static FARMLAND: Material;
    static FEATHER: Material;
    static FERMENTED_SPIDER_EYE: Material;
    static FERN: Material;
    static FILLED_MAP: Material;
    /**BlockData: Fire*/
    static FIRE: Material;
    static FIRE_CHARGE: Material;
    /**BlockData: Waterlogged*/
    static FIRE_CORAL: Material;
    static FIRE_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static FIRE_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static FIRE_CORAL_WALL_FAN: Material;
    static FIREWORK_ROCKET: Material;
    static FIREWORK_STAR: Material;
    static FISHING_ROD: Material;
    static FLETCHING_TABLE: Material;
    static FLINT: Material;
    static FLINT_AND_STEEL: Material;
    static FLOWER_BANNER_PATTERN: Material;
    static FLOWER_POT: Material;
    static FOX_SPAWN_EGG: Material;
    /**BlockData: Ageable*/
    static FROSTED_ICE: Material;
    /**BlockData: Furnace*/
    static FURNACE: Material;
    static FURNACE_MINECART: Material;
    static GHAST_SPAWN_EGG: Material;
    static GHAST_TEAR: Material;
    static GILDED_BLACKSTONE: Material;
    static GLASS: Material;
    static GLASS_BOTTLE: Material;
    /**BlockData: Fence*/
    static GLASS_PANE: Material;
    static GLISTERING_MELON_SLICE: Material;
    static GLOBE_BANNER_PATTERN: Material;
    static GLOWSTONE: Material;
    static GLOWSTONE_DUST: Material;
    static GOLD_BLOCK: Material;
    static GOLD_INGOT: Material;
    static GOLD_NUGGET: Material;
    static GOLD_ORE: Material;
    static GOLDEN_APPLE: Material;
    static GOLDEN_AXE: Material;
    static GOLDEN_BOOTS: Material;
    static GOLDEN_CARROT: Material;
    static GOLDEN_CHESTPLATE: Material;
    static GOLDEN_HELMET: Material;
    static GOLDEN_HOE: Material;
    static GOLDEN_HORSE_ARMOR: Material;
    static GOLDEN_LEGGINGS: Material;
    static GOLDEN_PICKAXE: Material;
    static GOLDEN_SHOVEL: Material;
    static GOLDEN_SWORD: Material;
    static GRANITE: Material;
    /**BlockData: Slab*/
    static GRANITE_SLAB: Material;
    /**BlockData: Stairs*/
    static GRANITE_STAIRS: Material;
    /**BlockData: Wall*/
    static GRANITE_WALL: Material;
    static GRASS: Material;
    /**BlockData: Snowable*/
    static GRASS_BLOCK: Material;
    static GRASS_PATH: Material;
    static GRAVEL: Material;
    /**BlockData: Rotatable*/
    static GRAY_BANNER: Material;
    /**BlockData: Bed*/
    static GRAY_BED: Material;
    static GRAY_CARPET: Material;
    static GRAY_CONCRETE: Material;
    static GRAY_CONCRETE_POWDER: Material;
    static GRAY_DYE: Material;
    /**BlockData: Directional*/
    static GRAY_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static GRAY_SHULKER_BOX: Material;
    static GRAY_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static GRAY_STAINED_GLASS_PANE: Material;
    static GRAY_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static GRAY_WALL_BANNER: Material;
    static GRAY_WOOL: Material;
    /**BlockData: Rotatable*/
    static GREEN_BANNER: Material;
    /**BlockData: Bed*/
    static GREEN_BED: Material;
    static GREEN_CARPET: Material;
    static GREEN_CONCRETE: Material;
    static GREEN_CONCRETE_POWDER: Material;
    static GREEN_DYE: Material;
    /**BlockData: Directional*/
    static GREEN_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static GREEN_SHULKER_BOX: Material;
    static GREEN_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static GREEN_STAINED_GLASS_PANE: Material;
    static GREEN_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static GREEN_WALL_BANNER: Material;
    static GREEN_WOOL: Material;
    /**BlockData: Grindstone*/
    static GRINDSTONE: Material;
    static GUARDIAN_SPAWN_EGG: Material;
    static GUNPOWDER: Material;
    /**BlockData: Orientable*/
    static HAY_BLOCK: Material;
    static HEART_OF_THE_SEA: Material;
    /**BlockData: AnaloguePowerable*/
    static HEAVY_WEIGHTED_PRESSURE_PLATE: Material;
    static HOGLIN_SPAWN_EGG: Material;
    static HONEY_BLOCK: Material;
    static HONEY_BOTTLE: Material;
    static HONEYCOMB: Material;
    static HONEYCOMB_BLOCK: Material;
    /**BlockData: Hopper*/
    static HOPPER: Material;
    static HOPPER_MINECART: Material;
    /**BlockData: Waterlogged*/
    static HORN_CORAL: Material;
    static HORN_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static HORN_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static HORN_CORAL_WALL_FAN: Material;
    static HORSE_SPAWN_EGG: Material;
    static HUSK_SPAWN_EGG: Material;
    static ICE: Material;
    static INFESTED_CHISELED_STONE_BRICKS: Material;
    static INFESTED_COBBLESTONE: Material;
    static INFESTED_CRACKED_STONE_BRICKS: Material;
    static INFESTED_MOSSY_STONE_BRICKS: Material;
    static INFESTED_STONE: Material;
    static INFESTED_STONE_BRICKS: Material;
    static INK_SAC: Material;
    static IRON_AXE: Material;
    /**BlockData: Fence*/
    static IRON_BARS: Material;
    static IRON_BLOCK: Material;
    static IRON_BOOTS: Material;
    static IRON_CHESTPLATE: Material;
    /**BlockData: Door*/
    static IRON_DOOR: Material;
    static IRON_HELMET: Material;
    static IRON_HOE: Material;
    static IRON_HORSE_ARMOR: Material;
    static IRON_INGOT: Material;
    static IRON_LEGGINGS: Material;
    static IRON_NUGGET: Material;
    static IRON_ORE: Material;
    static IRON_PICKAXE: Material;
    static IRON_SHOVEL: Material;
    static IRON_SWORD: Material;
    /**BlockData: TrapDoor*/
    static IRON_TRAPDOOR: Material;
    static ITEM_FRAME: Material;
    /**BlockData: Directional*/
    static JACK_O_LANTERN: Material;
    /**BlockData: Jigsaw*/
    static JIGSAW: Material;
    /**BlockData: Jukebox*/
    static JUKEBOX: Material;
    static JUNGLE_BOAT: Material;
    /**BlockData: Switch*/
    static JUNGLE_BUTTON: Material;
    /**BlockData: Door*/
    static JUNGLE_DOOR: Material;
    /**BlockData: Fence*/
    static JUNGLE_FENCE: Material;
    /**BlockData: Gate*/
    static JUNGLE_FENCE_GATE: Material;
    /**BlockData: Leaves*/
    static JUNGLE_LEAVES: Material;
    /**BlockData: Orientable*/
    static JUNGLE_LOG: Material;
    static JUNGLE_PLANKS: Material;
    /**BlockData: Powerable*/
    static JUNGLE_PRESSURE_PLATE: Material;
    /**BlockData: Sapling*/
    static JUNGLE_SAPLING: Material;
    /**BlockData: Sign*/
    static JUNGLE_SIGN: Material;
    /**BlockData: Slab*/
    static JUNGLE_SLAB: Material;
    /**BlockData: Stairs*/
    static JUNGLE_STAIRS: Material;
    /**BlockData: TrapDoor*/
    static JUNGLE_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static JUNGLE_WALL_SIGN: Material;
    /**BlockData: Orientable*/
    static JUNGLE_WOOD: Material;
    /**BlockData: Ageable*/
    static KELP: Material;
    static KELP_PLANT: Material;
    static KNOWLEDGE_BOOK: Material;
    /**BlockData: Ladder*/
    static LADDER: Material;
    /**BlockData: Lantern*/
    static LANTERN: Material;
    static LAPIS_BLOCK: Material;
    static LAPIS_LAZULI: Material;
    static LAPIS_ORE: Material;
    /**BlockData: Bisected*/
    static LARGE_FERN: Material;
    /**BlockData: Levelled*/
    static LAVA: Material;
    static LAVA_BUCKET: Material;
    static LEAD: Material;
    static LEATHER: Material;
    static LEATHER_BOOTS: Material;
    static LEATHER_CHESTPLATE: Material;
    static LEATHER_HELMET: Material;
    static LEATHER_HORSE_ARMOR: Material;
    static LEATHER_LEGGINGS: Material;
    /**BlockData: Lectern*/
    static LECTERN: Material;
    /**Deprecated.*/
    static LEGACY_ACACIA_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_ACACIA_DOOR_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_ACACIA_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_ACACIA_FENCE_GATE: Material;
    /**Deprecated.*/
    static LEGACY_ACACIA_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_ACTIVATOR_RAIL: Material;
    /**Deprecated.*/
    static LEGACY_AIR: Material;
    /**Deprecated.*/
    static LEGACY_ANVIL: Material;
    /**Deprecated.*/
    static LEGACY_APPLE: Material;
    /**Deprecated.*/
    static LEGACY_ARMOR_STAND: Material;
    /**Deprecated.*/
    static LEGACY_ARROW: Material;
    /**Deprecated.*/
    static LEGACY_BAKED_POTATO: Material;
    /**Deprecated.*/
    static LEGACY_BANNER: Material;
    /**Deprecated.*/
    static LEGACY_BARRIER: Material;
    /**Deprecated.*/
    static LEGACY_BEACON: Material;
    /**Deprecated.*/
    static LEGACY_BED: Material;
    /**Deprecated.*/
    static LEGACY_BED_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_BEDROCK: Material;
    /**Deprecated.*/
    static LEGACY_BEETROOT: Material;
    /**Deprecated.*/
    static LEGACY_BEETROOT_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_BEETROOT_SEEDS: Material;
    /**Deprecated.*/
    static LEGACY_BEETROOT_SOUP: Material;
    /**Deprecated.*/
    static LEGACY_BIRCH_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_BIRCH_DOOR_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_BIRCH_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_BIRCH_FENCE_GATE: Material;
    /**Deprecated.*/
    static LEGACY_BIRCH_WOOD_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_BLACK_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_BLACK_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_BLAZE_POWDER: Material;
    /**Deprecated.*/
    static LEGACY_BLAZE_ROD: Material;
    /**Deprecated.*/
    static LEGACY_BLUE_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_BLUE_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_BOAT: Material;
    /**Deprecated.*/
    static LEGACY_BOAT_ACACIA: Material;
    /**Deprecated.*/
    static LEGACY_BOAT_BIRCH: Material;
    /**Deprecated.*/
    static LEGACY_BOAT_DARK_OAK: Material;
    /**Deprecated.*/
    static LEGACY_BOAT_JUNGLE: Material;
    /**Deprecated.*/
    static LEGACY_BOAT_SPRUCE: Material;
    /**Deprecated.*/
    static LEGACY_BONE: Material;
    /**Deprecated.*/
    static LEGACY_BONE_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_BOOK: Material;
    /**Deprecated.*/
    static LEGACY_BOOK_AND_QUILL: Material;
    /**Deprecated.*/
    static LEGACY_BOOKSHELF: Material;
    /**Deprecated.*/
    static LEGACY_BOW: Material;
    /**Deprecated.*/
    static LEGACY_BOWL: Material;
    /**Deprecated.*/
    static LEGACY_BREAD: Material;
    /**Deprecated.*/
    static LEGACY_BREWING_STAND: Material;
    /**Deprecated.*/
    static LEGACY_BREWING_STAND_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_BRICK: Material;
    /**Deprecated.*/
    static LEGACY_BRICK_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_BROWN_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_BROWN_MUSHROOM: Material;
    /**Deprecated.*/
    static LEGACY_BROWN_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_BUCKET: Material;
    /**Deprecated.*/
    static LEGACY_BURNING_FURNACE: Material;
    /**Deprecated.*/
    static LEGACY_CACTUS: Material;
    /**Deprecated.*/
    static LEGACY_CAKE: Material;
    /**Deprecated.*/
    static LEGACY_CAKE_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_CARPET: Material;
    /**Deprecated.*/
    static LEGACY_CARROT: Material;
    /**Deprecated.*/
    static LEGACY_CARROT_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_CARROT_STICK: Material;
    /**Deprecated.*/
    static LEGACY_CAULDRON: Material;
    /**Deprecated.*/
    static LEGACY_CAULDRON_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_CHAINMAIL_BOOTS: Material;
    /**Deprecated.*/
    static LEGACY_CHAINMAIL_CHESTPLATE: Material;
    /**Deprecated.*/
    static LEGACY_CHAINMAIL_HELMET: Material;
    /**Deprecated.*/
    static LEGACY_CHAINMAIL_LEGGINGS: Material;
    /**Deprecated.*/
    static LEGACY_CHEST: Material;
    /**Deprecated.*/
    static LEGACY_CHORUS_FLOWER: Material;
    /**Deprecated.*/
    static LEGACY_CHORUS_FRUIT: Material;
    /**Deprecated.*/
    static LEGACY_CHORUS_FRUIT_POPPED: Material;
    /**Deprecated.*/
    static LEGACY_CHORUS_PLANT: Material;
    /**Deprecated.*/
    static LEGACY_CLAY: Material;
    /**Deprecated.*/
    static LEGACY_CLAY_BALL: Material;
    /**Deprecated.*/
    static LEGACY_CLAY_BRICK: Material;
    /**Deprecated.*/
    static LEGACY_COAL: Material;
    /**Deprecated.*/
    static LEGACY_COAL_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_COAL_ORE: Material;
    /**Deprecated.*/
    static LEGACY_COBBLE_WALL: Material;
    /**Deprecated.*/
    static LEGACY_COBBLESTONE: Material;
    /**Deprecated.*/
    static LEGACY_COBBLESTONE_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_COCOA: Material;
    /**Deprecated.*/
    static LEGACY_COMMAND: Material;
    /**Deprecated.*/
    static LEGACY_COMMAND_CHAIN: Material;
    /**Deprecated.*/
    static LEGACY_COMMAND_MINECART: Material;
    /**Deprecated.*/
    static LEGACY_COMMAND_REPEATING: Material;
    /**Deprecated.*/
    static LEGACY_COMPASS: Material;
    /**Deprecated.*/
    static LEGACY_CONCRETE: Material;
    /**Deprecated.*/
    static LEGACY_CONCRETE_POWDER: Material;
    /**Deprecated.*/
    static LEGACY_COOKED_BEEF: Material;
    /**Deprecated.*/
    static LEGACY_COOKED_CHICKEN: Material;
    /**Deprecated.*/
    static LEGACY_COOKED_FISH: Material;
    /**Deprecated.*/
    static LEGACY_COOKED_MUTTON: Material;
    /**Deprecated.*/
    static LEGACY_COOKED_RABBIT: Material;
    /**Deprecated.*/
    static LEGACY_COOKIE: Material;
    /**Deprecated.*/
    static LEGACY_CROPS: Material;
    /**Deprecated.*/
    static LEGACY_CYAN_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_CYAN_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_DARK_OAK_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_DARK_OAK_DOOR_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_DARK_OAK_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_DARK_OAK_FENCE_GATE: Material;
    /**Deprecated.*/
    static LEGACY_DARK_OAK_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_DAYLIGHT_DETECTOR: Material;
    /**Deprecated.*/
    static LEGACY_DAYLIGHT_DETECTOR_INVERTED: Material;
    /**Deprecated.*/
    static LEGACY_DEAD_BUSH: Material;
    /**Deprecated.*/
    static LEGACY_DETECTOR_RAIL: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_AXE: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_BARDING: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_BOOTS: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_CHESTPLATE: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_HELMET: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_HOE: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_LEGGINGS: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_ORE: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_PICKAXE: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_SPADE: Material;
    /**Deprecated.*/
    static LEGACY_DIAMOND_SWORD: Material;
    /**Deprecated.*/
    static LEGACY_DIODE: Material;
    /**Deprecated.*/
    static LEGACY_DIODE_BLOCK_OFF: Material;
    /**Deprecated.*/
    static LEGACY_DIODE_BLOCK_ON: Material;
    /**Deprecated.*/
    static LEGACY_DIRT: Material;
    /**Deprecated.*/
    static LEGACY_DISPENSER: Material;
    /**Deprecated.*/
    static LEGACY_DOUBLE_PLANT: Material;
    /**Deprecated.*/
    static LEGACY_DOUBLE_STEP: Material;
    /**Deprecated.*/
    static LEGACY_DOUBLE_STONE_SLAB2: Material;
    /**Deprecated.*/
    static LEGACY_DRAGON_EGG: Material;
    /**Deprecated.*/
    static LEGACY_DRAGONS_BREATH: Material;
    /**Deprecated.*/
    static LEGACY_DROPPER: Material;
    /**Deprecated.*/
    static LEGACY_EGG: Material;
    /**Deprecated.*/
    static LEGACY_ELYTRA: Material;
    /**Deprecated.*/
    static LEGACY_EMERALD: Material;
    /**Deprecated.*/
    static LEGACY_EMERALD_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_EMERALD_ORE: Material;
    /**Deprecated.*/
    static LEGACY_EMPTY_MAP: Material;
    /**Deprecated.*/
    static LEGACY_ENCHANTED_BOOK: Material;
    /**Deprecated.*/
    static LEGACY_ENCHANTMENT_TABLE: Material;
    /**Deprecated.*/
    static LEGACY_END_BRICKS: Material;
    /**Deprecated.*/
    static LEGACY_END_CRYSTAL: Material;
    /**Deprecated.*/
    static LEGACY_END_GATEWAY: Material;
    /**Deprecated.*/
    static LEGACY_END_ROD: Material;
    /**Deprecated.*/
    static LEGACY_ENDER_CHEST: Material;
    /**Deprecated.*/
    static LEGACY_ENDER_PEARL: Material;
    /**Deprecated.*/
    static LEGACY_ENDER_PORTAL: Material;
    /**Deprecated.*/
    static LEGACY_ENDER_PORTAL_FRAME: Material;
    /**Deprecated.*/
    static LEGACY_ENDER_STONE: Material;
    /**Deprecated.*/
    static LEGACY_EXP_BOTTLE: Material;
    /**Deprecated.*/
    static LEGACY_EXPLOSIVE_MINECART: Material;
    /**Deprecated.*/
    static LEGACY_EYE_OF_ENDER: Material;
    /**Deprecated.*/
    static LEGACY_FEATHER: Material;
    /**Deprecated.*/
    static LEGACY_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_FENCE_GATE: Material;
    /**Deprecated.*/
    static LEGACY_FERMENTED_SPIDER_EYE: Material;
    /**Deprecated.*/
    static LEGACY_FIRE: Material;
    /**Deprecated.*/
    static LEGACY_FIREBALL: Material;
    /**Deprecated.*/
    static LEGACY_FIREWORK: Material;
    /**Deprecated.*/
    static LEGACY_FIREWORK_CHARGE: Material;
    /**Deprecated.*/
    static LEGACY_FISHING_ROD: Material;
    /**Deprecated.*/
    static LEGACY_FLINT: Material;
    /**Deprecated.*/
    static LEGACY_FLINT_AND_STEEL: Material;
    /**Deprecated.*/
    static LEGACY_FLOWER_POT: Material;
    /**Deprecated.*/
    static LEGACY_FLOWER_POT_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_FROSTED_ICE: Material;
    /**Deprecated.*/
    static LEGACY_FURNACE: Material;
    /**Deprecated.*/
    static LEGACY_GHAST_TEAR: Material;
    /**Deprecated.*/
    static LEGACY_GLASS: Material;
    /**Deprecated.*/
    static LEGACY_GLASS_BOTTLE: Material;
    /**Deprecated.*/
    static LEGACY_GLOWING_REDSTONE_ORE: Material;
    /**Deprecated.*/
    static LEGACY_GLOWSTONE: Material;
    /**Deprecated.*/
    static LEGACY_GLOWSTONE_DUST: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_AXE: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_BARDING: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_BOOTS: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_CHESTPLATE: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_HELMET: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_HOE: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_INGOT: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_LEGGINGS: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_NUGGET: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_ORE: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_PICKAXE: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_PLATE: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_RECORD: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_SPADE: Material;
    /**Deprecated.*/
    static LEGACY_GOLD_SWORD: Material;
    /**Deprecated.*/
    static LEGACY_GOLDEN_APPLE: Material;
    /**Deprecated.*/
    static LEGACY_GOLDEN_CARROT: Material;
    /**Deprecated.*/
    static LEGACY_GRASS: Material;
    /**Deprecated.*/
    static LEGACY_GRASS_PATH: Material;
    /**Deprecated.*/
    static LEGACY_GRAVEL: Material;
    /**Deprecated.*/
    static LEGACY_GRAY_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_GRAY_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_GREEN_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_GREEN_RECORD: Material;
    /**Deprecated.*/
    static LEGACY_GREEN_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_GRILLED_PORK: Material;
    /**Deprecated.*/
    static LEGACY_HARD_CLAY: Material;
    /**Deprecated.*/
    static LEGACY_HAY_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_HOPPER: Material;
    /**Deprecated.*/
    static LEGACY_HOPPER_MINECART: Material;
    /**Deprecated.*/
    static LEGACY_HUGE_MUSHROOM_1: Material;
    /**Deprecated.*/
    static LEGACY_HUGE_MUSHROOM_2: Material;
    /**Deprecated.*/
    static LEGACY_ICE: Material;
    /**Deprecated.*/
    static LEGACY_INK_SACK: Material;
    /**Deprecated.*/
    static LEGACY_IRON_AXE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_BARDING: Material;
    /**Deprecated.*/
    static LEGACY_IRON_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_IRON_BOOTS: Material;
    /**Deprecated.*/
    static LEGACY_IRON_CHESTPLATE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_IRON_DOOR_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_IRON_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_HELMET: Material;
    /**Deprecated.*/
    static LEGACY_IRON_HOE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_INGOT: Material;
    /**Deprecated.*/
    static LEGACY_IRON_LEGGINGS: Material;
    /**Deprecated.*/
    static LEGACY_IRON_NUGGET: Material;
    /**Deprecated.*/
    static LEGACY_IRON_ORE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_PICKAXE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_PLATE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_SPADE: Material;
    /**Deprecated.*/
    static LEGACY_IRON_SWORD: Material;
    /**Deprecated.*/
    static LEGACY_IRON_TRAPDOOR: Material;
    /**Deprecated.*/
    static LEGACY_ITEM_FRAME: Material;
    /**Deprecated.*/
    static LEGACY_JACK_O_LANTERN: Material;
    /**Deprecated.*/
    static LEGACY_JUKEBOX: Material;
    /**Deprecated.*/
    static LEGACY_JUNGLE_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_JUNGLE_DOOR_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_JUNGLE_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_JUNGLE_FENCE_GATE: Material;
    /**Deprecated.*/
    static LEGACY_JUNGLE_WOOD_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_KNOWLEDGE_BOOK: Material;
    /**Deprecated.*/
    static LEGACY_LADDER: Material;
    /**Deprecated.*/
    static LEGACY_LAPIS_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_LAPIS_ORE: Material;
    /**Deprecated.*/
    static LEGACY_LAVA: Material;
    /**Deprecated.*/
    static LEGACY_LAVA_BUCKET: Material;
    /**Deprecated.*/
    static LEGACY_LEASH: Material;
    /**Deprecated.*/
    static LEGACY_LEATHER: Material;
    /**Deprecated.*/
    static LEGACY_LEATHER_BOOTS: Material;
    /**Deprecated.*/
    static LEGACY_LEATHER_CHESTPLATE: Material;
    /**Deprecated.*/
    static LEGACY_LEATHER_HELMET: Material;
    /**Deprecated.*/
    static LEGACY_LEATHER_LEGGINGS: Material;
    /**Deprecated.*/
    static LEGACY_LEAVES: Material;
    /**Deprecated.*/
    static LEGACY_LEAVES_2: Material;
    /**Deprecated.*/
    static LEGACY_LEVER: Material;
    /**Deprecated.*/
    static LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_LIGHT_BLUE_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_LIME_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_LIME_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_LINGERING_POTION: Material;
    /**Deprecated.*/
    static LEGACY_LOG: Material;
    /**Deprecated.*/
    static LEGACY_LOG_2: Material;
    /**Deprecated.*/
    static LEGACY_LONG_GRASS: Material;
    /**Deprecated.*/
    static LEGACY_MAGENTA_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_MAGENTA_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_MAGMA: Material;
    /**Deprecated.*/
    static LEGACY_MAGMA_CREAM: Material;
    /**Deprecated.*/
    static LEGACY_MAP: Material;
    /**Deprecated.*/
    static LEGACY_MELON: Material;
    /**Deprecated.*/
    static LEGACY_MELON_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_MELON_SEEDS: Material;
    /**Deprecated.*/
    static LEGACY_MELON_STEM: Material;
    /**Deprecated.*/
    static LEGACY_MILK_BUCKET: Material;
    /**Deprecated.*/
    static LEGACY_MINECART: Material;
    /**Deprecated.*/
    static LEGACY_MOB_SPAWNER: Material;
    /**Deprecated.*/
    static LEGACY_MONSTER_EGG: Material;
    /**Deprecated.*/
    static LEGACY_MONSTER_EGGS: Material;
    /**Deprecated.*/
    static LEGACY_MOSSY_COBBLESTONE: Material;
    /**Deprecated.*/
    static LEGACY_MUSHROOM_SOUP: Material;
    /**Deprecated.*/
    static LEGACY_MUTTON: Material;
    /**Deprecated.*/
    static LEGACY_MYCEL: Material;
    /**Deprecated.*/
    static LEGACY_NAME_TAG: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_BRICK: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_BRICK_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_BRICK_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_STALK: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_STAR: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_WART_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_NETHER_WARTS: Material;
    /**Deprecated.*/
    static LEGACY_NETHERRACK: Material;
    /**Deprecated.*/
    static LEGACY_NOTE_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_OBSERVER: Material;
    /**Deprecated.*/
    static LEGACY_OBSIDIAN: Material;
    /**Deprecated.*/
    static LEGACY_ORANGE_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_ORANGE_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_PACKED_ICE: Material;
    /**Deprecated.*/
    static LEGACY_PAINTING: Material;
    /**Deprecated.*/
    static LEGACY_PAPER: Material;
    /**Deprecated.*/
    static LEGACY_PINK_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_PINK_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_PISTON_BASE: Material;
    /**Deprecated.*/
    static LEGACY_PISTON_EXTENSION: Material;
    /**Deprecated.*/
    static LEGACY_PISTON_MOVING_PIECE: Material;
    /**Deprecated.*/
    static LEGACY_PISTON_STICKY_BASE: Material;
    /**Deprecated.*/
    static LEGACY_POISONOUS_POTATO: Material;
    /**Deprecated.*/
    static LEGACY_PORK: Material;
    /**Deprecated.*/
    static LEGACY_PORTAL: Material;
    /**Deprecated.*/
    static LEGACY_POTATO: Material;
    /**Deprecated.*/
    static LEGACY_POTATO_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_POTION: Material;
    /**Deprecated.*/
    static LEGACY_POWERED_MINECART: Material;
    /**Deprecated.*/
    static LEGACY_POWERED_RAIL: Material;
    /**Deprecated.*/
    static LEGACY_PRISMARINE: Material;
    /**Deprecated.*/
    static LEGACY_PRISMARINE_CRYSTALS: Material;
    /**Deprecated.*/
    static LEGACY_PRISMARINE_SHARD: Material;
    /**Deprecated.*/
    static LEGACY_PUMPKIN: Material;
    /**Deprecated.*/
    static LEGACY_PUMPKIN_PIE: Material;
    /**Deprecated.*/
    static LEGACY_PUMPKIN_SEEDS: Material;
    /**Deprecated.*/
    static LEGACY_PUMPKIN_STEM: Material;
    /**Deprecated.*/
    static LEGACY_PURPLE_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_PURPLE_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_PURPUR_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_PURPUR_DOUBLE_SLAB: Material;
    /**Deprecated.*/
    static LEGACY_PURPUR_PILLAR: Material;
    /**Deprecated.*/
    static LEGACY_PURPUR_SLAB: Material;
    /**Deprecated.*/
    static LEGACY_PURPUR_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_QUARTZ: Material;
    /**Deprecated.*/
    static LEGACY_QUARTZ_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_QUARTZ_ORE: Material;
    /**Deprecated.*/
    static LEGACY_QUARTZ_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_RABBIT: Material;
    /**Deprecated.*/
    static LEGACY_RABBIT_FOOT: Material;
    /**Deprecated.*/
    static LEGACY_RABBIT_HIDE: Material;
    /**Deprecated.*/
    static LEGACY_RABBIT_STEW: Material;
    /**Deprecated.*/
    static LEGACY_RAILS: Material;
    /**Deprecated.*/
    static LEGACY_RAW_BEEF: Material;
    /**Deprecated.*/
    static LEGACY_RAW_CHICKEN: Material;
    /**Deprecated.*/
    static LEGACY_RAW_FISH: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_10: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_11: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_12: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_3: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_4: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_5: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_6: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_7: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_8: Material;
    /**Deprecated.*/
    static LEGACY_RECORD_9: Material;
    /**Deprecated.*/
    static LEGACY_RED_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_RED_MUSHROOM: Material;
    /**Deprecated.*/
    static LEGACY_RED_NETHER_BRICK: Material;
    /**Deprecated.*/
    static LEGACY_RED_ROSE: Material;
    /**Deprecated.*/
    static LEGACY_RED_SANDSTONE: Material;
    /**Deprecated.*/
    static LEGACY_RED_SANDSTONE_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_RED_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_COMPARATOR: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_COMPARATOR_OFF: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_COMPARATOR_ON: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_LAMP_OFF: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_LAMP_ON: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_ORE: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_TORCH_OFF: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_TORCH_ON: Material;
    /**Deprecated.*/
    static LEGACY_REDSTONE_WIRE: Material;
    /**Deprecated.*/
    static LEGACY_ROTTEN_FLESH: Material;
    /**Deprecated.*/
    static LEGACY_SADDLE: Material;
    /**Deprecated.*/
    static LEGACY_SAND: Material;
    /**Deprecated.*/
    static LEGACY_SANDSTONE: Material;
    /**Deprecated.*/
    static LEGACY_SANDSTONE_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_SAPLING: Material;
    /**Deprecated.*/
    static LEGACY_SEA_LANTERN: Material;
    /**Deprecated.*/
    static LEGACY_SEEDS: Material;
    /**Deprecated.*/
    static LEGACY_SHEARS: Material;
    /**Deprecated.*/
    static LEGACY_SHIELD: Material;
    /**Deprecated.*/
    static LEGACY_SHULKER_SHELL: Material;
    /**Deprecated.*/
    static LEGACY_SIGN: Material;
    /**Deprecated.*/
    static LEGACY_SIGN_POST: Material;
    /**Deprecated.*/
    static LEGACY_SILVER_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_SILVER_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_SKULL: Material;
    /**Deprecated.*/
    static LEGACY_SKULL_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_SLIME_BALL: Material;
    /**Deprecated.*/
    static LEGACY_SLIME_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_SMOOTH_BRICK: Material;
    /**Deprecated.*/
    static LEGACY_SMOOTH_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_SNOW: Material;
    /**Deprecated.*/
    static LEGACY_SNOW_BALL: Material;
    /**Deprecated.*/
    static LEGACY_SNOW_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_SOIL: Material;
    /**Deprecated.*/
    static LEGACY_SOUL_SAND: Material;
    /**Deprecated.*/
    static LEGACY_SPECKLED_MELON: Material;
    /**Deprecated.*/
    static LEGACY_SPECTRAL_ARROW: Material;
    /**Deprecated.*/
    static LEGACY_SPIDER_EYE: Material;
    /**Deprecated.*/
    static LEGACY_SPLASH_POTION: Material;
    /**Deprecated.*/
    static LEGACY_SPONGE: Material;
    /**Deprecated.*/
    static LEGACY_SPRUCE_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_SPRUCE_DOOR_ITEM: Material;
    /**Deprecated.*/
    static LEGACY_SPRUCE_FENCE: Material;
    /**Deprecated.*/
    static LEGACY_SPRUCE_FENCE_GATE: Material;
    /**Deprecated.*/
    static LEGACY_SPRUCE_WOOD_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_STAINED_CLAY: Material;
    /**Deprecated.*/
    static LEGACY_STAINED_GLASS: Material;
    /**Deprecated.*/
    static LEGACY_STAINED_GLASS_PANE: Material;
    /**Deprecated.*/
    static LEGACY_STANDING_BANNER: Material;
    /**Deprecated.*/
    static LEGACY_STATIONARY_LAVA: Material;
    /**Deprecated.*/
    static LEGACY_STATIONARY_WATER: Material;
    /**Deprecated.*/
    static LEGACY_STEP: Material;
    /**Deprecated.*/
    static LEGACY_STICK: Material;
    /**Deprecated.*/
    static LEGACY_STONE: Material;
    /**Deprecated.*/
    static LEGACY_STONE_AXE: Material;
    /**Deprecated.*/
    static LEGACY_STONE_BUTTON: Material;
    /**Deprecated.*/
    static LEGACY_STONE_HOE: Material;
    /**Deprecated.*/
    static LEGACY_STONE_PICKAXE: Material;
    /**Deprecated.*/
    static LEGACY_STONE_PLATE: Material;
    /**Deprecated.*/
    static LEGACY_STONE_SLAB2: Material;
    /**Deprecated.*/
    static LEGACY_STONE_SPADE: Material;
    /**Deprecated.*/
    static LEGACY_STONE_SWORD: Material;
    /**Deprecated.*/
    static LEGACY_STORAGE_MINECART: Material;
    /**Deprecated.*/
    static LEGACY_STRING: Material;
    /**Deprecated.*/
    static LEGACY_STRUCTURE_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_STRUCTURE_VOID: Material;
    /**Deprecated.*/
    static LEGACY_SUGAR: Material;
    /**Deprecated.*/
    static LEGACY_SUGAR_CANE: Material;
    /**Deprecated.*/
    static LEGACY_SUGAR_CANE_BLOCK: Material;
    /**Deprecated.*/
    static LEGACY_SULPHUR: Material;
    /**Deprecated.*/
    static LEGACY_THIN_GLASS: Material;
    /**Deprecated.*/
    static LEGACY_TIPPED_ARROW: Material;
    /**Deprecated.*/
    static LEGACY_TNT: Material;
    /**Deprecated.*/
    static LEGACY_TORCH: Material;
    /**Deprecated.*/
    static LEGACY_TOTEM: Material;
    /**Deprecated.*/
    static LEGACY_TRAP_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_TRAPPED_CHEST: Material;
    /**Deprecated.*/
    static LEGACY_TRIPWIRE: Material;
    /**Deprecated.*/
    static LEGACY_TRIPWIRE_HOOK: Material;
    /**Deprecated.*/
    static LEGACY_VINE: Material;
    /**Deprecated.*/
    static LEGACY_WALL_BANNER: Material;
    /**Deprecated.*/
    static LEGACY_WALL_SIGN: Material;
    /**Deprecated.*/
    static LEGACY_WATCH: Material;
    /**Deprecated.*/
    static LEGACY_WATER: Material;
    /**Deprecated.*/
    static LEGACY_WATER_BUCKET: Material;
    /**Deprecated.*/
    static LEGACY_WATER_LILY: Material;
    /**Deprecated.*/
    static LEGACY_WEB: Material;
    /**Deprecated.*/
    static LEGACY_WHEAT: Material;
    /**Deprecated.*/
    static LEGACY_WHITE_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_WHITE_SHULKER_BOX: Material;
    /**Deprecated.*/
    static LEGACY_WOOD: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_AXE: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_BUTTON: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_DOUBLE_STEP: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_HOE: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_PICKAXE: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_PLATE: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_SPADE: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_STAIRS: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_STEP: Material;
    /**Deprecated.*/
    static LEGACY_WOOD_SWORD: Material;
    /**Deprecated.*/
    static LEGACY_WOODEN_DOOR: Material;
    /**Deprecated.*/
    static LEGACY_WOOL: Material;
    /**Deprecated.*/
    static LEGACY_WORKBENCH: Material;
    /**Deprecated.*/
    static LEGACY_WRITTEN_BOOK: Material;
    /**Deprecated.*/
    static LEGACY_YELLOW_FLOWER: Material;
    /**Deprecated.*/
    static LEGACY_YELLOW_GLAZED_TERRACOTTA: Material;
    /**Deprecated.*/
    static LEGACY_YELLOW_SHULKER_BOX: Material;
    /**BlockData: Switch*/
    static LEVER: Material;
    /**BlockData: Rotatable*/
    static LIGHT_BLUE_BANNER: Material;
    /**BlockData: Bed*/
    static LIGHT_BLUE_BED: Material;
    static LIGHT_BLUE_CARPET: Material;
    static LIGHT_BLUE_CONCRETE: Material;
    static LIGHT_BLUE_CONCRETE_POWDER: Material;
    static LIGHT_BLUE_DYE: Material;
    /**BlockData: Directional*/
    static LIGHT_BLUE_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static LIGHT_BLUE_SHULKER_BOX: Material;
    static LIGHT_BLUE_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static LIGHT_BLUE_STAINED_GLASS_PANE: Material;
    static LIGHT_BLUE_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static LIGHT_BLUE_WALL_BANNER: Material;
    static LIGHT_BLUE_WOOL: Material;
    /**BlockData: Rotatable*/
    static LIGHT_GRAY_BANNER: Material;
    /**BlockData: Bed*/
    static LIGHT_GRAY_BED: Material;
    static LIGHT_GRAY_CARPET: Material;
    static LIGHT_GRAY_CONCRETE: Material;
    static LIGHT_GRAY_CONCRETE_POWDER: Material;
    static LIGHT_GRAY_DYE: Material;
    /**BlockData: Directional*/
    static LIGHT_GRAY_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static LIGHT_GRAY_SHULKER_BOX: Material;
    static LIGHT_GRAY_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static LIGHT_GRAY_STAINED_GLASS_PANE: Material;
    static LIGHT_GRAY_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static LIGHT_GRAY_WALL_BANNER: Material;
    static LIGHT_GRAY_WOOL: Material;
    /**BlockData: AnaloguePowerable*/
    static LIGHT_WEIGHTED_PRESSURE_PLATE: Material;
    /**BlockData: Bisected*/
    static LILAC: Material;
    static LILY_OF_THE_VALLEY: Material;
    static LILY_PAD: Material;
    /**BlockData: Rotatable*/
    static LIME_BANNER: Material;
    /**BlockData: Bed*/
    static LIME_BED: Material;
    static LIME_CARPET: Material;
    static LIME_CONCRETE: Material;
    static LIME_CONCRETE_POWDER: Material;
    static LIME_DYE: Material;
    /**BlockData: Directional*/
    static LIME_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static LIME_SHULKER_BOX: Material;
    static LIME_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static LIME_STAINED_GLASS_PANE: Material;
    static LIME_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static LIME_WALL_BANNER: Material;
    static LIME_WOOL: Material;
    static LINGERING_POTION: Material;
    static LLAMA_SPAWN_EGG: Material;
    static LODESTONE: Material;
    /**BlockData: Directional*/
    static LOOM: Material;
    /**BlockData: Rotatable*/
    static MAGENTA_BANNER: Material;
    /**BlockData: Bed*/
    static MAGENTA_BED: Material;
    static MAGENTA_CARPET: Material;
    static MAGENTA_CONCRETE: Material;
    static MAGENTA_CONCRETE_POWDER: Material;
    static MAGENTA_DYE: Material;
    /**BlockData: Directional*/
    static MAGENTA_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static MAGENTA_SHULKER_BOX: Material;
    static MAGENTA_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static MAGENTA_STAINED_GLASS_PANE: Material;
    static MAGENTA_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static MAGENTA_WALL_BANNER: Material;
    static MAGENTA_WOOL: Material;
    static MAGMA_BLOCK: Material;
    static MAGMA_CREAM: Material;
    static MAGMA_CUBE_SPAWN_EGG: Material;
    static MAP: Material;
    static MELON: Material;
    static MELON_SEEDS: Material;
    static MELON_SLICE: Material;
    /**BlockData: Ageable*/
    static MELON_STEM: Material;
    static MILK_BUCKET: Material;
    static MINECART: Material;
    static MOJANG_BANNER_PATTERN: Material;
    static MOOSHROOM_SPAWN_EGG: Material;
    /**BlockData: MultipleFacing*/
    static MOSSY_COBBLESTONE: Material;
    /**BlockData: Slab*/
    static MOSSY_COBBLESTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static MOSSY_COBBLESTONE_STAIRS: Material;
    /**BlockData: Wall*/
    static MOSSY_COBBLESTONE_WALL: Material;
    /**BlockData: Slab*/
    static MOSSY_STONE_BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static MOSSY_STONE_BRICK_STAIRS: Material;
    /**BlockData: Wall*/
    static MOSSY_STONE_BRICK_WALL: Material;
    static MOSSY_STONE_BRICKS: Material;
    /**BlockData: TechnicalPiston*/
    static MOVING_PISTON: Material;
    static MULE_SPAWN_EGG: Material;
    /**BlockData: MultipleFacing*/
    static MUSHROOM_STEM: Material;
    static MUSHROOM_STEW: Material;
    static MUSIC_DISC_11: Material;
    static MUSIC_DISC_13: Material;
    static MUSIC_DISC_BLOCKS: Material;
    static MUSIC_DISC_CAT: Material;
    static MUSIC_DISC_CHIRP: Material;
    static MUSIC_DISC_FAR: Material;
    static MUSIC_DISC_MALL: Material;
    static MUSIC_DISC_MELLOHI: Material;
    static MUSIC_DISC_PIGSTEP: Material;
    static MUSIC_DISC_STAL: Material;
    static MUSIC_DISC_STRAD: Material;
    static MUSIC_DISC_WAIT: Material;
    static MUSIC_DISC_WARD: Material;
    static MUTTON: Material;
    /**BlockData: Snowable*/
    static MYCELIUM: Material;
    static NAME_TAG: Material;
    static NAUTILUS_SHELL: Material;
    static NETHER_BRICK: Material;
    /**BlockData: Fence*/
    static NETHER_BRICK_FENCE: Material;
    /**BlockData: Slab*/
    static NETHER_BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static NETHER_BRICK_STAIRS: Material;
    /**BlockData: Wall*/
    static NETHER_BRICK_WALL: Material;
    static NETHER_BRICKS: Material;
    static NETHER_GOLD_ORE: Material;
    /**BlockData: Orientable*/
    static NETHER_PORTAL: Material;
    static NETHER_QUARTZ_ORE: Material;
    static NETHER_SPROUTS: Material;
    static NETHER_STAR: Material;
    /**BlockData: Ageable*/
    static NETHER_WART: Material;
    static NETHER_WART_BLOCK: Material;
    static NETHERITE_AXE: Material;
    static NETHERITE_BLOCK: Material;
    static NETHERITE_BOOTS: Material;
    static NETHERITE_CHESTPLATE: Material;
    static NETHERITE_HELMET: Material;
    static NETHERITE_HOE: Material;
    static NETHERITE_INGOT: Material;
    static NETHERITE_LEGGINGS: Material;
    static NETHERITE_PICKAXE: Material;
    static NETHERITE_SCRAP: Material;
    static NETHERITE_SHOVEL: Material;
    static NETHERITE_SWORD: Material;
    static NETHERRACK: Material;
    /**BlockData: NoteBlock*/
    static NOTE_BLOCK: Material;
    static OAK_BOAT: Material;
    /**BlockData: Switch*/
    static OAK_BUTTON: Material;
    /**BlockData: Door*/
    static OAK_DOOR: Material;
    /**BlockData: Fence*/
    static OAK_FENCE: Material;
    /**BlockData: Gate*/
    static OAK_FENCE_GATE: Material;
    /**BlockData: Leaves*/
    static OAK_LEAVES: Material;
    /**BlockData: Orientable*/
    static OAK_LOG: Material;
    static OAK_PLANKS: Material;
    /**BlockData: Powerable*/
    static OAK_PRESSURE_PLATE: Material;
    /**BlockData: Sapling*/
    static OAK_SAPLING: Material;
    /**BlockData: Sign*/
    static OAK_SIGN: Material;
    /**BlockData: Slab*/
    static OAK_SLAB: Material;
    /**BlockData: Stairs*/
    static OAK_STAIRS: Material;
    /**BlockData: TrapDoor*/
    static OAK_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static OAK_WALL_SIGN: Material;
    /**BlockData: Orientable*/
    static OAK_WOOD: Material;
    /**BlockData: Observer*/
    static OBSERVER: Material;
    static OBSIDIAN: Material;
    static OCELOT_SPAWN_EGG: Material;
    /**BlockData: Rotatable*/
    static ORANGE_BANNER: Material;
    /**BlockData: Bed*/
    static ORANGE_BED: Material;
    static ORANGE_CARPET: Material;
    static ORANGE_CONCRETE: Material;
    static ORANGE_CONCRETE_POWDER: Material;
    static ORANGE_DYE: Material;
    /**BlockData: Directional*/
    static ORANGE_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static ORANGE_SHULKER_BOX: Material;
    static ORANGE_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static ORANGE_STAINED_GLASS_PANE: Material;
    static ORANGE_TERRACOTTA: Material;
    static ORANGE_TULIP: Material;
    /**BlockData: Directional*/
    static ORANGE_WALL_BANNER: Material;
    static ORANGE_WOOL: Material;
    static OXEYE_DAISY: Material;
    static PACKED_ICE: Material;
    static PAINTING: Material;
    static PANDA_SPAWN_EGG: Material;
    static PAPER: Material;
    static PARROT_SPAWN_EGG: Material;
    /**BlockData: Bisected*/
    static PEONY: Material;
    /**BlockData: Slab*/
    static PETRIFIED_OAK_SLAB: Material;
    static PHANTOM_MEMBRANE: Material;
    static PHANTOM_SPAWN_EGG: Material;
    static PIG_SPAWN_EGG: Material;
    static PIGLIN_BANNER_PATTERN: Material;
    static PIGLIN_BRUTE_SPAWN_EGG: Material;
    static PIGLIN_SPAWN_EGG: Material;
    static PILLAGER_SPAWN_EGG: Material;
    /**BlockData: Rotatable*/
    static PINK_BANNER: Material;
    /**BlockData: Bed*/
    static PINK_BED: Material;
    static PINK_CARPET: Material;
    static PINK_CONCRETE: Material;
    static PINK_CONCRETE_POWDER: Material;
    static PINK_DYE: Material;
    /**BlockData: Directional*/
    static PINK_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static PINK_SHULKER_BOX: Material;
    static PINK_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static PINK_STAINED_GLASS_PANE: Material;
    static PINK_TERRACOTTA: Material;
    static PINK_TULIP: Material;
    /**BlockData: Directional*/
    static PINK_WALL_BANNER: Material;
    static PINK_WOOL: Material;
    /**BlockData: Piston*/
    static PISTON: Material;
    /**BlockData: PistonHead*/
    static PISTON_HEAD: Material;
    /**BlockData: Rotatable*/
    static PLAYER_HEAD: Material;
    /**BlockData: Directional*/
    static PLAYER_WALL_HEAD: Material;
    /**BlockData: Snowable*/
    static PODZOL: Material;
    static POISONOUS_POTATO: Material;
    static POLAR_BEAR_SPAWN_EGG: Material;
    static POLISHED_ANDESITE: Material;
    /**BlockData: Slab*/
    static POLISHED_ANDESITE_SLAB: Material;
    /**BlockData: Stairs*/
    static POLISHED_ANDESITE_STAIRS: Material;
    /**BlockData: Orientable*/
    static POLISHED_BASALT: Material;
    static POLISHED_BLACKSTONE: Material;
    /**BlockData: Slab*/
    static POLISHED_BLACKSTONE_BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static POLISHED_BLACKSTONE_BRICK_STAIRS: Material;
    /**BlockData: Wall*/
    static POLISHED_BLACKSTONE_BRICK_WALL: Material;
    static POLISHED_BLACKSTONE_BRICKS: Material;
    /**BlockData: Switch*/
    static POLISHED_BLACKSTONE_BUTTON: Material;
    /**BlockData: Powerable*/
    static POLISHED_BLACKSTONE_PRESSURE_PLATE: Material;
    /**BlockData: Slab*/
    static POLISHED_BLACKSTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static POLISHED_BLACKSTONE_STAIRS: Material;
    /**BlockData: Wall*/
    static POLISHED_BLACKSTONE_WALL: Material;
    static POLISHED_DIORITE: Material;
    /**BlockData: Slab*/
    static POLISHED_DIORITE_SLAB: Material;
    /**BlockData: Stairs*/
    static POLISHED_DIORITE_STAIRS: Material;
    static POLISHED_GRANITE: Material;
    /**BlockData: Slab*/
    static POLISHED_GRANITE_SLAB: Material;
    /**BlockData: Stairs*/
    static POLISHED_GRANITE_STAIRS: Material;
    static POPPED_CHORUS_FRUIT: Material;
    static POPPY: Material;
    static PORKCHOP: Material;
    static POTATO: Material;
    /**BlockData: Ageable*/
    static POTATOES: Material;
    static POTION: Material;
    static POTTED_ACACIA_SAPLING: Material;
    static POTTED_ALLIUM: Material;
    static POTTED_AZURE_BLUET: Material;
    static POTTED_BAMBOO: Material;
    static POTTED_BIRCH_SAPLING: Material;
    static POTTED_BLUE_ORCHID: Material;
    static POTTED_BROWN_MUSHROOM: Material;
    static POTTED_CACTUS: Material;
    static POTTED_CORNFLOWER: Material;
    static POTTED_CRIMSON_FUNGUS: Material;
    static POTTED_CRIMSON_ROOTS: Material;
    static POTTED_DANDELION: Material;
    static POTTED_DARK_OAK_SAPLING: Material;
    static POTTED_DEAD_BUSH: Material;
    static POTTED_FERN: Material;
    static POTTED_JUNGLE_SAPLING: Material;
    static POTTED_LILY_OF_THE_VALLEY: Material;
    static POTTED_OAK_SAPLING: Material;
    static POTTED_ORANGE_TULIP: Material;
    static POTTED_OXEYE_DAISY: Material;
    static POTTED_PINK_TULIP: Material;
    static POTTED_POPPY: Material;
    static POTTED_RED_MUSHROOM: Material;
    static POTTED_RED_TULIP: Material;
    static POTTED_SPRUCE_SAPLING: Material;
    static POTTED_WARPED_FUNGUS: Material;
    static POTTED_WARPED_ROOTS: Material;
    static POTTED_WHITE_TULIP: Material;
    static POTTED_WITHER_ROSE: Material;
    /**BlockData: RedstoneRail*/
    static POWERED_RAIL: Material;
    static PRISMARINE: Material;
    /**BlockData: Slab*/
    static PRISMARINE_BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static PRISMARINE_BRICK_STAIRS: Material;
    static PRISMARINE_BRICKS: Material;
    static PRISMARINE_CRYSTALS: Material;
    static PRISMARINE_SHARD: Material;
    /**BlockData: Slab*/
    static PRISMARINE_SLAB: Material;
    /**BlockData: Stairs*/
    static PRISMARINE_STAIRS: Material;
    /**BlockData: Wall*/
    static PRISMARINE_WALL: Material;
    static PUFFERFISH: Material;
    static PUFFERFISH_BUCKET: Material;
    static PUFFERFISH_SPAWN_EGG: Material;
    static PUMPKIN: Material;
    static PUMPKIN_PIE: Material;
    static PUMPKIN_SEEDS: Material;
    /**BlockData: Ageable*/
    static PUMPKIN_STEM: Material;
    /**BlockData: Rotatable*/
    static PURPLE_BANNER: Material;
    /**BlockData: Bed*/
    static PURPLE_BED: Material;
    static PURPLE_CARPET: Material;
    static PURPLE_CONCRETE: Material;
    static PURPLE_CONCRETE_POWDER: Material;
    static PURPLE_DYE: Material;
    /**BlockData: Directional*/
    static PURPLE_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static PURPLE_SHULKER_BOX: Material;
    static PURPLE_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static PURPLE_STAINED_GLASS_PANE: Material;
    static PURPLE_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static PURPLE_WALL_BANNER: Material;
    static PURPLE_WOOL: Material;
    static PURPUR_BLOCK: Material;
    /**BlockData: Orientable*/
    static PURPUR_PILLAR: Material;
    /**BlockData: Slab*/
    static PURPUR_SLAB: Material;
    /**BlockData: Stairs*/
    static PURPUR_STAIRS: Material;
    static QUARTZ: Material;
    static QUARTZ_BLOCK: Material;
    static QUARTZ_BRICKS: Material;
    /**BlockData: Orientable*/
    static QUARTZ_PILLAR: Material;
    /**BlockData: Slab*/
    static QUARTZ_SLAB: Material;
    /**BlockData: Stairs*/
    static QUARTZ_STAIRS: Material;
    static RABBIT: Material;
    static RABBIT_FOOT: Material;
    static RABBIT_HIDE: Material;
    static RABBIT_SPAWN_EGG: Material;
    static RABBIT_STEW: Material;
    /**BlockData: Rail*/
    static RAIL: Material;
    static RAVAGER_SPAWN_EGG: Material;
    /**BlockData: Rotatable*/
    static RED_BANNER: Material;
    /**BlockData: Bed*/
    static RED_BED: Material;
    static RED_CARPET: Material;
    static RED_CONCRETE: Material;
    static RED_CONCRETE_POWDER: Material;
    static RED_DYE: Material;
    /**BlockData: Directional*/
    static RED_GLAZED_TERRACOTTA: Material;
    static RED_MUSHROOM: Material;
    /**BlockData: MultipleFacing*/
    static RED_MUSHROOM_BLOCK: Material;
    /**BlockData: Slab*/
    static RED_NETHER_BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static RED_NETHER_BRICK_STAIRS: Material;
    /**BlockData: Wall*/
    static RED_NETHER_BRICK_WALL: Material;
    static RED_NETHER_BRICKS: Material;
    static RED_SAND: Material;
    static RED_SANDSTONE: Material;
    /**BlockData: Slab*/
    static RED_SANDSTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static RED_SANDSTONE_STAIRS: Material;
    /**BlockData: Wall*/
    static RED_SANDSTONE_WALL: Material;
    /**BlockData: Directional*/
    static RED_SHULKER_BOX: Material;
    static RED_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static RED_STAINED_GLASS_PANE: Material;
    static RED_TERRACOTTA: Material;
    static RED_TULIP: Material;
    /**BlockData: Directional*/
    static RED_WALL_BANNER: Material;
    static RED_WOOL: Material;
    static REDSTONE: Material;
    static REDSTONE_BLOCK: Material;
    /**BlockData: Lightable*/
    static REDSTONE_LAMP: Material;
    /**BlockData: Lightable*/
    static REDSTONE_ORE: Material;
    /**BlockData: Lightable*/
    static REDSTONE_TORCH: Material;
    /**BlockData: RedstoneWallTorch*/
    static REDSTONE_WALL_TORCH: Material;
    /**BlockData: RedstoneWire*/
    static REDSTONE_WIRE: Material;
    /**BlockData: Repeater*/
    static REPEATER: Material;
    /**BlockData: CommandBlock*/
    static REPEATING_COMMAND_BLOCK: Material;
    /**BlockData: RespawnAnchor*/
    static RESPAWN_ANCHOR: Material;
    /**BlockData: Bisected*/
    static ROSE_BUSH: Material;
    static ROTTEN_FLESH: Material;
    static SADDLE: Material;
    static SALMON: Material;
    static SALMON_BUCKET: Material;
    static SALMON_SPAWN_EGG: Material;
    static SAND: Material;
    static SANDSTONE: Material;
    /**BlockData: Slab*/
    static SANDSTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static SANDSTONE_STAIRS: Material;
    /**BlockData: Wall*/
    static SANDSTONE_WALL: Material;
    /**BlockData: Scaffolding*/
    static SCAFFOLDING: Material;
    static SCUTE: Material;
    static SEA_LANTERN: Material;
    /**BlockData: SeaPickle*/
    static SEA_PICKLE: Material;
    static SEAGRASS: Material;
    static SHEARS: Material;
    static SHEEP_SPAWN_EGG: Material;
    static SHIELD: Material;
    static SHROOMLIGHT: Material;
    /**BlockData: Directional*/
    static SHULKER_BOX: Material;
    static SHULKER_SHELL: Material;
    static SHULKER_SPAWN_EGG: Material;
    static SILVERFISH_SPAWN_EGG: Material;
    static SKELETON_HORSE_SPAWN_EGG: Material;
    /**BlockData: Rotatable*/
    static SKELETON_SKULL: Material;
    static SKELETON_SPAWN_EGG: Material;
    /**BlockData: Directional*/
    static SKELETON_WALL_SKULL: Material;
    static SKULL_BANNER_PATTERN: Material;
    static SLIME_BALL: Material;
    static SLIME_BLOCK: Material;
    static SLIME_SPAWN_EGG: Material;
    static SMITHING_TABLE: Material;
    /**BlockData: Furnace*/
    static SMOKER: Material;
    static SMOOTH_QUARTZ: Material;
    /**BlockData: Slab*/
    static SMOOTH_QUARTZ_SLAB: Material;
    /**BlockData: Stairs*/
    static SMOOTH_QUARTZ_STAIRS: Material;
    static SMOOTH_RED_SANDSTONE: Material;
    /**BlockData: Slab*/
    static SMOOTH_RED_SANDSTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static SMOOTH_RED_SANDSTONE_STAIRS: Material;
    static SMOOTH_SANDSTONE: Material;
    /**BlockData: Slab*/
    static SMOOTH_SANDSTONE_SLAB: Material;
    /**BlockData: Stairs*/
    static SMOOTH_SANDSTONE_STAIRS: Material;
    static SMOOTH_STONE: Material;
    /**BlockData: Slab*/
    static SMOOTH_STONE_SLAB: Material;
    /**BlockData: Snow*/
    static SNOW: Material;
    static SNOW_BLOCK: Material;
    static SNOWBALL: Material;
    /**BlockData: Campfire*/
    static SOUL_CAMPFIRE: Material;
    /**BlockData: Fire*/
    static SOUL_FIRE: Material;
    /**BlockData: Lantern*/
    static SOUL_LANTERN: Material;
    static SOUL_SAND: Material;
    static SOUL_SOIL: Material;
    /**BlockData: Lightable*/
    static SOUL_TORCH: Material;
    /**BlockData: Directional*/
    static SOUL_WALL_TORCH: Material;
    static SPAWNER: Material;
    static SPECTRAL_ARROW: Material;
    static SPIDER_EYE: Material;
    static SPIDER_SPAWN_EGG: Material;
    static SPLASH_POTION: Material;
    static SPONGE: Material;
    static SPRUCE_BOAT: Material;
    /**BlockData: Switch*/
    static SPRUCE_BUTTON: Material;
    /**BlockData: Door*/
    static SPRUCE_DOOR: Material;
    /**BlockData: Fence*/
    static SPRUCE_FENCE: Material;
    /**BlockData: Gate*/
    static SPRUCE_FENCE_GATE: Material;
    /**BlockData: Leaves*/
    static SPRUCE_LEAVES: Material;
    /**BlockData: Orientable*/
    static SPRUCE_LOG: Material;
    static SPRUCE_PLANKS: Material;
    /**BlockData: Powerable*/
    static SPRUCE_PRESSURE_PLATE: Material;
    /**BlockData: Sapling*/
    static SPRUCE_SAPLING: Material;
    /**BlockData: Sign*/
    static SPRUCE_SIGN: Material;
    /**BlockData: Slab*/
    static SPRUCE_SLAB: Material;
    /**BlockData: Stairs*/
    static SPRUCE_STAIRS: Material;
    /**BlockData: TrapDoor*/
    static SPRUCE_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static SPRUCE_WALL_SIGN: Material;
    /**BlockData: Orientable*/
    static SPRUCE_WOOD: Material;
    static SQUID_SPAWN_EGG: Material;
    static STICK: Material;
    /**BlockData: Piston*/
    static STICKY_PISTON: Material;
    static STONE: Material;
    static STONE_AXE: Material;
    /**BlockData: Slab*/
    static STONE_BRICK_SLAB: Material;
    /**BlockData: Stairs*/
    static STONE_BRICK_STAIRS: Material;
    /**BlockData: Wall*/
    static STONE_BRICK_WALL: Material;
    static STONE_BRICKS: Material;
    /**BlockData: Switch*/
    static STONE_BUTTON: Material;
    static STONE_HOE: Material;
    static STONE_PICKAXE: Material;
    /**BlockData: Powerable*/
    static STONE_PRESSURE_PLATE: Material;
    static STONE_SHOVEL: Material;
    /**BlockData: Slab*/
    static STONE_SLAB: Material;
    /**BlockData: Stairs*/
    static STONE_STAIRS: Material;
    static STONE_SWORD: Material;
    /**BlockData: Directional*/
    static STONECUTTER: Material;
    static STRAY_SPAWN_EGG: Material;
    static STRIDER_SPAWN_EGG: Material;
    static STRING: Material;
    /**BlockData: Orientable*/
    static STRIPPED_ACACIA_LOG: Material;
    /**BlockData: Orientable*/
    static STRIPPED_ACACIA_WOOD: Material;
    /**BlockData: Orientable*/
    static STRIPPED_BIRCH_LOG: Material;
    /**BlockData: Orientable*/
    static STRIPPED_BIRCH_WOOD: Material;
    /**BlockData: Orientable*/
    static STRIPPED_CRIMSON_HYPHAE: Material;
    /**BlockData: Orientable*/
    static STRIPPED_CRIMSON_STEM: Material;
    /**BlockData: Orientable*/
    static STRIPPED_DARK_OAK_LOG: Material;
    /**BlockData: Orientable*/
    static STRIPPED_DARK_OAK_WOOD: Material;
    /**BlockData: Orientable*/
    static STRIPPED_JUNGLE_LOG: Material;
    /**BlockData: Orientable*/
    static STRIPPED_JUNGLE_WOOD: Material;
    /**BlockData: Orientable*/
    static STRIPPED_OAK_LOG: Material;
    /**BlockData: Orientable*/
    static STRIPPED_OAK_WOOD: Material;
    /**BlockData: Orientable*/
    static STRIPPED_SPRUCE_LOG: Material;
    /**BlockData: Orientable*/
    static STRIPPED_SPRUCE_WOOD: Material;
    /**BlockData: Orientable*/
    static STRIPPED_WARPED_HYPHAE: Material;
    /**BlockData: Orientable*/
    static STRIPPED_WARPED_STEM: Material;
    /**BlockData: StructureBlock*/
    static STRUCTURE_BLOCK: Material;
    static STRUCTURE_VOID: Material;
    static SUGAR: Material;
    /**BlockData: Ageable*/
    static SUGAR_CANE: Material;
    /**BlockData: Bisected*/
    static SUNFLOWER: Material;
    static SUSPICIOUS_STEW: Material;
    static SWEET_BERRIES: Material;
    /**BlockData: Ageable*/
    static SWEET_BERRY_BUSH: Material;
    /**BlockData: Bisected*/
    static TALL_GRASS: Material;
    /**BlockData: Bisected*/
    static TALL_SEAGRASS: Material;
    /**BlockData: AnaloguePowerable*/
    static TARGET: Material;
    static TERRACOTTA: Material;
    static TIPPED_ARROW: Material;
    /**BlockData: TNT*/
    static TNT: Material;
    static TNT_MINECART: Material;
    static TORCH: Material;
    static TOTEM_OF_UNDYING: Material;
    static TRADER_LLAMA_SPAWN_EGG: Material;
    /**BlockData: Chest*/
    static TRAPPED_CHEST: Material;
    static TRIDENT: Material;
    /**BlockData: Tripwire*/
    static TRIPWIRE: Material;
    /**BlockData: TripwireHook*/
    static TRIPWIRE_HOOK: Material;
    static TROPICAL_FISH: Material;
    static TROPICAL_FISH_BUCKET: Material;
    static TROPICAL_FISH_SPAWN_EGG: Material;
    /**BlockData: Waterlogged*/
    static TUBE_CORAL: Material;
    static TUBE_CORAL_BLOCK: Material;
    /**BlockData: Waterlogged*/
    static TUBE_CORAL_FAN: Material;
    /**BlockData: CoralWallFan*/
    static TUBE_CORAL_WALL_FAN: Material;
    /**BlockData: TurtleEgg*/
    static TURTLE_EGG: Material;
    static TURTLE_HELMET: Material;
    static TURTLE_SPAWN_EGG: Material;
    /**BlockData: Ageable*/
    static TWISTING_VINES: Material;
    static TWISTING_VINES_PLANT: Material;
    static VEX_SPAWN_EGG: Material;
    static VILLAGER_SPAWN_EGG: Material;
    static VINDICATOR_SPAWN_EGG: Material;
    /**BlockData: MultipleFacing*/
    static VINE: Material;
    static VOID_AIR: Material;
    /**BlockData: Directional*/
    static WALL_TORCH: Material;
    static WANDERING_TRADER_SPAWN_EGG: Material;
    /**BlockData: Switch*/
    static WARPED_BUTTON: Material;
    /**BlockData: Door*/
    static WARPED_DOOR: Material;
    /**BlockData: Fence*/
    static WARPED_FENCE: Material;
    /**BlockData: Gate*/
    static WARPED_FENCE_GATE: Material;
    static WARPED_FUNGUS: Material;
    static WARPED_FUNGUS_ON_A_STICK: Material;
    /**BlockData: Orientable*/
    static WARPED_HYPHAE: Material;
    static WARPED_NYLIUM: Material;
    static WARPED_PLANKS: Material;
    /**BlockData: Powerable*/
    static WARPED_PRESSURE_PLATE: Material;
    static WARPED_ROOTS: Material;
    /**BlockData: Sign*/
    static WARPED_SIGN: Material;
    /**BlockData: Slab*/
    static WARPED_SLAB: Material;
    /**BlockData: Stairs*/
    static WARPED_STAIRS: Material;
    /**BlockData: Orientable*/
    static WARPED_STEM: Material;
    /**BlockData: TrapDoor*/
    static WARPED_TRAPDOOR: Material;
    /**BlockData: WallSign*/
    static WARPED_WALL_SIGN: Material;
    static WARPED_WART_BLOCK: Material;
    /**BlockData: Levelled*/
    static WATER: Material;
    static WATER_BUCKET: Material;
    /**BlockData: Ageable*/
    static WEEPING_VINES: Material;
    static WEEPING_VINES_PLANT: Material;
    static WET_SPONGE: Material;
    /**BlockData: Ageable*/
    static WHEAT: Material;
    static WHEAT_SEEDS: Material;
    /**BlockData: Rotatable*/
    static WHITE_BANNER: Material;
    /**BlockData: Bed*/
    static WHITE_BED: Material;
    static WHITE_CARPET: Material;
    static WHITE_CONCRETE: Material;
    static WHITE_CONCRETE_POWDER: Material;
    static WHITE_DYE: Material;
    /**BlockData: Directional*/
    static WHITE_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static WHITE_SHULKER_BOX: Material;
    static WHITE_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static WHITE_STAINED_GLASS_PANE: Material;
    static WHITE_TERRACOTTA: Material;
    static WHITE_TULIP: Material;
    /**BlockData: Directional*/
    static WHITE_WALL_BANNER: Material;
    static WHITE_WOOL: Material;
    static WITCH_SPAWN_EGG: Material;
    static WITHER_ROSE: Material;
    /**BlockData: Rotatable*/
    static WITHER_SKELETON_SKULL: Material;
    static WITHER_SKELETON_SPAWN_EGG: Material;
    /**BlockData: Directional*/
    static WITHER_SKELETON_WALL_SKULL: Material;
    static WOLF_SPAWN_EGG: Material;
    static WOODEN_AXE: Material;
    static WOODEN_HOE: Material;
    static WOODEN_PICKAXE: Material;
    static WOODEN_SHOVEL: Material;
    static WOODEN_SWORD: Material;
    static WRITABLE_BOOK: Material;
    static WRITTEN_BOOK: Material;
    /**BlockData: Rotatable*/
    static YELLOW_BANNER: Material;
    /**BlockData: Bed*/
    static YELLOW_BED: Material;
    static YELLOW_CARPET: Material;
    static YELLOW_CONCRETE: Material;
    static YELLOW_CONCRETE_POWDER: Material;
    static YELLOW_DYE: Material;
    /**BlockData: Directional*/
    static YELLOW_GLAZED_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static YELLOW_SHULKER_BOX: Material;
    static YELLOW_STAINED_GLASS: Material;
    /**BlockData: GlassPane*/
    static YELLOW_STAINED_GLASS_PANE: Material;
    static YELLOW_TERRACOTTA: Material;
    /**BlockData: Directional*/
    static YELLOW_WALL_BANNER: Material;
    static YELLOW_WOOL: Material;
    static ZOGLIN_SPAWN_EGG: Material;
    /**BlockData: Rotatable*/
    static ZOMBIE_HEAD: Material;
    static ZOMBIE_HORSE_SPAWN_EGG: Material;
    static ZOMBIE_SPAWN_EGG: Material;
    static ZOMBIE_VILLAGER_SPAWN_EGG: Material;
    /**BlockData: Directional*/
    static ZOMBIE_WALL_HEAD: Material;
    static ZOMBIFIED_PIGLIN_SPAWN_EGG: Material
}

export class MaterialSetTag extends Object implements Tag<Material> {
    add (...tags: MaterialSetTag[]): MaterialSetTag;
    add (materials: Collection<Material>): MaterialSetTag;
    add (filter: Predicate<Material>): MaterialSetTag;
    add (...material: Material[]): MaterialSetTag;
    add (...tags: Tag<Material>[]): MaterialSetTag;
    contains (_with: String): MaterialSetTag;
    endsWith (_with: String): MaterialSetTag;
    ensureSize (label: String, size: number): MaterialSetTag;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Gets an immutable set of all tagged items.*/
    getValues (): Set<Material>;
    isTagged (block: Block): boolean;
    isTagged (block: BlockState): boolean;
    isTagged (block: BlockData): boolean;
    isTagged (item: ItemStack): boolean;
    /**Returns whether or not this tag has an entry for the specified item.*/
    isTagged (material: Material): boolean;
    not (tags: MaterialSetTag): MaterialSetTag;
    not (materials: Collection<Material>): MaterialSetTag;
    not (filter: Predicate<Material>): MaterialSetTag;
    not (...material: Material[]): MaterialSetTag;
    notEndsWith (_with: String): MaterialSetTag;
    notStartsWith (_with: String): MaterialSetTag;
    startsWith (_with: String): MaterialSetTag
}

/**Represents a collection tags to identify materials that share common properties.  Will map to minecraft for missing tags, as well as custom ones that may be useful.*/
export class MaterialTags extends Object {

}

/**This is a Configuration implementation that does not save or load  from any source, and stores all values in memory only.  This is useful for temporary Configurations for providing defaults.*/
export class MemoryConfiguration extends MemorySection implements Configuration {
    /**Sets the default value in the root at the given path as provided.*/
    addDefault (path: String, value: Object): void;
    /**Sets the default values of the given paths as provided.*/
    addDefaults (defaults: Map<String,Object>): void;
    /**Sets the default values of the given paths as provided.*/
    addDefaults (defaults: Configuration): void;
    /**Gets the source Configuration for this configuration.*/
    getDefaults (): Configuration;
    /**Gets the parent ConfigurationSection that directly contains  this ConfigurationSection.*/
    getParent (): ConfigurationSection;
    /**Gets the ConfigurationOptions for this Configuration.*/
    options (): MemoryConfigurationOptions;
    /**Sets the source of all default values for this Configuration.*/
    setDefaults (defaults: Configuration): void
}

/**Various settings for controlling the input and output of a MemoryConfiguration*/
export class MemoryConfigurationOptions extends ConfigurationOptions {
    /**Returns the Configuration that this object is responsible for.*/
    configuration (): MemoryConfiguration;
    /**Sets if the Configuration should copy values from its default  Configuration directly.*/
    copyDefaults (value: boolean): MemoryConfigurationOptions;
    /**Sets the char that will be used to separate ConfigurationSections*/
    pathSeparator (value: char): MemoryConfigurationOptions
}

/**Represents a key used for accessing memory values of a  LivingEntity.*/
export class MemoryKey<T> extends Object implements Keyed {
    /**Returns a MemoryKey by a NamespacedKey.*/
    static getByKey (namespacedKey: NamespacedKey): MemoryKey;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Gets the class of values associated with this memory.*/
    getMemoryClass (): Class<T>;
    /**Returns the set of all MemoryKeys.*/
    static values (): Set<MemoryKey>
}

/**A type of ConfigurationSection that is stored in memory.*/
export class MemorySection extends Object implements ConfigurationSection {
    /**Sets the default value in the root at the given path as provided.*/
    addDefault (path: String, value: Object): void;
    /**Checks if this ConfigurationSection contains the given path.*/
    contains (path: String): boolean;
    /**Checks if this ConfigurationSection contains the given path.*/
    contains (path: String, ignoreDefault: boolean): boolean;
    /**Creates a full path to the given ConfigurationSection from its  root Configuration.*/
    static createPath (section: ConfigurationSection, key: String): String;
    /**Creates a relative path to the given ConfigurationSection from  the given relative section.*/
    static createPath (section: ConfigurationSection, key: String, relativeTo: ConfigurationSection): String;
    /**Creates an empty ConfigurationSection at the specified path.*/
    createSection (path: String): ConfigurationSection;
    /**Creates a ConfigurationSection at the specified path, with  specified values.*/
    createSection (path: String, map: Map<X,X>): ConfigurationSection;
    /**Gets the requested Object by path.*/
    get (path: String): Object;
    /**Gets the requested Object by path, returning a default value if not  found.*/
    get (path: String, def: Object): Object;
    /**Gets the requested boolean by path.*/
    getBoolean (path: String): boolean;
    /**Gets the requested boolean by path, returning a default value if not  found.*/
    getBoolean (path: String, def: boolean): boolean;
    /**Gets the requested List of Boolean by path.*/
    getBooleanList (path: String): List<Boolean>;
    /**Gets the requested List of Byte by path.*/
    getByteList (path: String): List<Byte>;
    /**Gets the requested List of Character by path.*/
    getCharacterList (path: String): List<Character>;
    /**Gets the requested Color by path.*/
    getColor (path: String): Color;
    /**Gets the requested Color by path, returning a default value if  not found.*/
    getColor (path: String, def: Color): Color;
    /**Gets the requested ConfigurationSection by path.*/
    getConfigurationSection (path: String): ConfigurationSection;
    /**Gets the path of this ConfigurationSection from its root Configuration*/
    getCurrentPath (): String;
    getDefault (path: String): Object;
    /**Gets the equivalent ConfigurationSection from the default  Configuration defined in ConfigurationSection.getRoot().*/
    getDefaultSection (): ConfigurationSection;
    /**Gets the requested double by path.*/
    getDouble (path: String): number;
    /**Gets the requested double by path, returning a default value if not  found.*/
    getDouble (path: String, def: number): number;
    /**Gets the requested List of Double by path.*/
    getDoubleList (path: String): List<Double>;
    /**Gets the requested List of Float by path.*/
    getFloatList (path: String): List<Float>;
    /**Gets the requested int by path.*/
    getInt (path: String): number;
    /**Gets the requested int by path, returning a default value if not found.*/
    getInt (path: String, def: number): number;
    /**Gets the requested List of Integer by path.*/
    getIntegerList (path: String): List<Integer>;
    /**Gets the requested ItemStack by path.*/
    getItemStack (path: String): ItemStack;
    /**Gets the requested ItemStack by path, returning a default value  if not found.*/
    getItemStack (path: String, def: ItemStack): ItemStack;
    /**Gets a set containing all keys in this section.*/
    getKeys (deep: boolean): Set<String>;
    /**Gets the requested List by path.*/
    getList (path: String): List<X>;
    /**Gets the requested List by path, returning a default value if not  found.*/
    getList (path: String, def: List<X>): List<X>;
    /**Gets the requested Location by path.*/
    getLocation (path: String): Location;
    /**Gets the requested Location by path, returning a default value if  not found.*/
    getLocation (path: String, def: Location): Location;
    /**Gets the requested long by path.*/
    getLong (path: String): number;
    /**Gets the requested long by path, returning a default value if not  found.*/
    getLong (path: String, def: number): number;
    /**Gets the requested List of Long by path.*/
    getLongList (path: String): List<Long>;
    /**Gets the requested List of Maps by path.*/
    getMapList (path: String): List<Map<X,X>>;
    /**Gets the name of this individual ConfigurationSection, in the  path.*/
    getName (): String;
    /**Gets the requested object at the given path.*/
    getObject <T>(path: String, clazz: Class<T>): T;
    /**Gets the requested object at the given path, returning a default value if  not found   If the Object does not exist then the specified default value will  returned regardless of if a default has been identified in the root  Configuration.*/
    getObject <T>(path: String, clazz: Class<T>, def: T): T;
    /**Gets the requested OfflinePlayer by path.*/
    getOfflinePlayer (path: String): OfflinePlayer;
    /**Gets the requested OfflinePlayer by path, returning a default  value if not found.*/
    getOfflinePlayer (path: String, def: OfflinePlayer): OfflinePlayer;
    /**Gets the parent ConfigurationSection that directly contains  this ConfigurationSection.*/
    getParent (): ConfigurationSection;
    /**Gets the root Configuration that contains this ConfigurationSection*/
    getRoot (): Configuration;
    /**Gets the requested ConfigurationSerializable object at the given  path.*/
    getSerializable <T extends ConfigurationSerializable>(path: String, clazz: Class<T>): T;
    /**Gets the requested ConfigurationSerializable object at the given  path, returning a default value if not found   If the Object does not exist then the specified default value will  returned regardless of if a default has been identified in the root  Configuration.*/
    getSerializable <T extends ConfigurationSerializable>(path: String, clazz: Class<T>, def: T): T;
    /**Gets the requested List of Short by path.*/
    getShortList (path: String): List<Short>;
    /**Gets the requested String by path.*/
    getString (path: String): String;
    /**Gets the requested String by path, returning a default value if not  found.*/
    getString (path: String, def: String): String;
    /**Gets the requested List of String by path.*/
    getStringList (path: String): List<String>;
    /**Gets a Map containing all keys and their values for this section.*/
    getValues (deep: boolean): Map<String,Object>;
    /**Gets the requested Vector by path.*/
    getVector (path: String): Vector;
    /**Gets the requested Vector by path, returning a default value if  not found.*/
    getVector (path: String, def: Vector): Vector;
    /**Checks if the specified path is a boolean.*/
    isBoolean (path: String): boolean;
    /**Checks if the specified path is a Color.*/
    isColor (path: String): boolean;
    /**Checks if the specified path is a ConfigurationSection.*/
    isConfigurationSection (path: String): boolean;
    /**Checks if the specified path is a double.*/
    isDouble (path: String): boolean;
    /**Checks if the specified path is an int.*/
    isInt (path: String): boolean;
    /**Checks if the specified path is an ItemStack.*/
    isItemStack (path: String): boolean;
    /**Checks if the specified path is a List.*/
    isList (path: String): boolean;
    /**Checks if the specified path is a Location.*/
    isLocation (path: String): boolean;
    /**Checks if the specified path is a long.*/
    isLong (path: String): boolean;
    /**Checks if the specified path is an OfflinePlayer.*/
    isOfflinePlayer (path: String): boolean;
    isPrimitiveWrapper (input: Object): boolean;
    /**Checks if this ConfigurationSection has a value set for the  given path.*/
    isSet (path: String): boolean;
    /**Checks if the specified path is a String.*/
    isString (path: String): boolean;
    /**Checks if the specified path is a Vector.*/
    isVector (path: String): boolean;
    mapChildrenKeys (output: Set<String>, section: ConfigurationSection, deep: boolean): void;
    mapChildrenValues (output: Map<String,Object>, section: ConfigurationSection, deep: boolean): void;
    /**Sets the specified path to the given value.*/
    set (path: String, value: Object): void;
    toString (): String
}

/**Represents a merchant. A merchant is a special type of inventory which can  facilitate custom trades between items.*/
export interface Merchant {
    /**Get the recipe at a certain index of this merchant's trade list.*/
    getRecipe (i: number): MerchantRecipe;
    /**Get the number of trades this merchant currently has available.*/
    getRecipeCount (): number;
    /**Get a list of trades currently available from this merchant.*/
    getRecipes (): List<MerchantRecipe>;
    /**Gets the player this merchant is trading with, or null if it is not  currently trading.*/
    getTrader (): HumanEntity;
    /**Gets whether this merchant is currently trading.*/
    isTrading (): boolean;
    /**Set the recipe at a certain index of this merchant's trade list.*/
    setRecipe (i: number, recipe: MerchantRecipe): void;
    /**Set the list of trades currently available from this merchant.*/
    setRecipes (recipes: List<MerchantRecipe>): void
}

/**Represents a trading inventory between a player and a merchant.    The holder of this Inventory is the owning Villager, or null if the player is  trading with a merchant created by a plugin.*/
export interface MerchantInventory extends Inventory {
    /**Gets the Merchant associated with this inventory.*/
    getMerchant (): Merchant;
    /**Get the currently active recipe.*/
    getSelectedRecipe (): MerchantRecipe;
    /**Get the index of the currently selected recipe.*/
    getSelectedRecipeIndex (): number
}

/**Represents a merchant's trade.   Trades can take one or two ingredients, and provide one result. The  ingredients' ItemStack amounts are respected in the trade.    A trade has a limited number of uses, after which the trade can no longer be  used, unless the player uses a different trade, which will cause its maximum  uses to increase.    A trade may or may not reward experience for being completed.*/
export class MerchantRecipe extends Object implements Recipe {
    addIngredient (item: ItemStack): void;
    getIngredients (): List<ItemStack>;
    /**Get the maximum number of uses this trade has.*/
    getMaxUses (): number;
    /**Gets the additive price multiplier for the cost of this trade.*/
    getPriceMultiplier (): number;
    /**Get the result of this recipe.*/
    getResult (): ItemStack;
    /**Get the number of times this trade has been used.*/
    getUses (): number;
    /**Gets the amount of experience the villager earns from this trade.*/
    getVillagerExperience (): number;
    /**Whether to reward experience to the player for the trade.*/
    hasExperienceReward (): boolean;
    removeIngredient (index: number): void;
    /**Set whether to reward experience to the player for the trade.*/
    setExperienceReward (flag: boolean): void;
    setIngredients (ingredients: List<ItemStack>): void;
    /**Set the maximum number of uses this trade has.*/
    setMaxUses (maxUses: number): void;
    /**Sets the additive price multiplier for the cost of this trade.*/
    setPriceMultiplier (priceMultiplier: number): void;
    /**Set the number of times this trade has been used.*/
    setUses (uses: number): void;
    /**Sets the amount of experience the villager earns from this trade.*/
    setVillagerExperience (villagerExperience: number): void
}

/**For when all you care about is just messaging*/
export interface MessageCommandSender extends CommandSender {
    /**Adds a new empty PermissionAttachment to this object*/
    addAttachment (plugin: Plugin): PermissionAttachment;
    /**Temporarily adds a new empty PermissionAttachment to this  object*/
    addAttachment (plugin: Plugin, ticks: number): PermissionAttachment;
    /**Adds a new PermissionAttachment with a single permission by  name and value*/
    addAttachment (plugin: Plugin, name: String, value: boolean): PermissionAttachment;
    /**Temporarily adds a new PermissionAttachment with a single  permission by name and value*/
    addAttachment (plugin: Plugin, name: String, value: boolean, ticks: number): PermissionAttachment;
    /**Gets a set containing all of the permissions currently in effect by  this object*/
    getEffectivePermissions (): Set<PermissionAttachmentInfo>;
    /**Gets the name of this command sender*/
    getName (): String;
    /**Returns the server instance that this command is running on*/
    getServer (): Server;
    /**Gets the value of the specified permission, if set.*/
    hasPermission (name: String): boolean;
    /**Gets the value of the specified permission, if set.*/
    hasPermission (perm: Permission): boolean;
    /**Checks if this object is a server operator*/
    isOp (): boolean;
    /**Checks if this object contains an override for the specified  permission, by fully qualified name*/
    isPermissionSet (name: String): boolean;
    /**Checks if this object contains an override for the specified Permission*/
    isPermissionSet (perm: Permission): boolean;
    /**Recalculates the permissions for this object, if the attachments have  changed values.*/
    recalculatePermissions (): void;
    /**Removes the given PermissionAttachment from this object*/
    removeAttachment (attachment: PermissionAttachment): void;
    /**Sends this sender multiple messages*/
    sendMessage (messages: String[]): void;
    /**Sets the operator status of this object*/
    setOp (value: boolean): void;
    spigot (): CommandSender$Spigot
}

/**MessagePrompt is the base class for any prompt that only displays a message  to the user and requires no input.*/
export class MessagePrompt extends Object implements Prompt {
    /**Accepts and ignores any user input, returning the next prompt in the  prompt graph instead.*/
    acceptInput (context: ConversationContext, input: String): Prompt;
    /**Message prompts never wait for user input before continuing.*/
    blocksForInput (context: ConversationContext): boolean;
    /**Override this method to return the next prompt in the prompt graph.*/
    getNextPrompt (context: ConversationContext): Prompt
}

/**Thrown if a Plugin Message is sent that is too large to be sent.*/
export class MessageTooLargeException extends RuntimeException {

}

/**A class responsible for managing the registrations of plugin channels and  their listeners.   Channel names must contain a colon separator and consist of only [a-z0-9/._-]  - i.e. they MUST be valid NamespacedKey. The "BungeeCord" channel is  an exception and may only take this form.*/
export interface Messenger {
    /**Dispatches the specified incoming message to any registered listeners.*/
    dispatchIncomingMessage (source: Player, channel: String, message: number[]): void;
    /**Gets a set containing all the incoming plugin channel registrations  that are on the requested channel.*/
    getIncomingChannelRegistrations (channel: String): Set<PluginMessageListenerRegistration>;
    /**Gets a set containing all the incoming plugin channel registrations  that the specified plugin has.*/
    getIncomingChannelRegistrations (plugin: Plugin): Set<PluginMessageListenerRegistration>;
    /**Gets a set containing all the incoming plugin channel registrations  that the specified plugin has on the requested channel.*/
    getIncomingChannelRegistrations (plugin: Plugin, channel: String): Set<PluginMessageListenerRegistration>;
    /**Gets a set containing all the incoming plugin channels.*/
    getIncomingChannels (): Set<String>;
    /**Gets a set containing all the incoming plugin channels that the  specified plugin is registered for.*/
    getIncomingChannels (plugin: Plugin): Set<String>;
    /**Gets a set containing all the outgoing plugin channels.*/
    getOutgoingChannels (): Set<String>;
    /**Gets a set containing all the outgoing plugin channels that the  specified plugin is registered to.*/
    getOutgoingChannels (plugin: Plugin): Set<String>;
    /**Checks if the specified plugin has registered to receive incoming  messages through the requested channel.*/
    isIncomingChannelRegistered (plugin: Plugin, channel: String): boolean;
    /**Checks if the specified plugin has registered to send outgoing messages  through the requested channel.*/
    isOutgoingChannelRegistered (plugin: Plugin, channel: String): boolean;
    /**Checks if the specified plugin message listener registration is valid.*/
    isRegistrationValid (registration: PluginMessageListenerRegistration): boolean;
    /**Checks if the specified channel is a reserved name.*/
    isReservedChannel (channel: String): boolean;
    /**Registers the specific plugin for listening on the requested incoming  plugin channel, allowing it to act upon any plugin messages.*/
    registerIncomingPluginChannel (plugin: Plugin, channel: String, listener: PluginMessageListener): PluginMessageListenerRegistration;
    /**Registers the specific plugin to the requested outgoing plugin channel,  allowing it to send messages through that channel to any clients.*/
    registerOutgoingPluginChannel (plugin: Plugin, channel: String): void;
    /**Unregisters the specific plugin from listening on all plugin channels  through all listeners.*/
    unregisterIncomingPluginChannel (plugin: Plugin): void;
    /**Unregisters the specific plugin from listening on the requested  incoming plugin channel, no longer allowing it to act upon any plugin  messages.*/
    unregisterIncomingPluginChannel (plugin: Plugin, channel: String): void;
    /**Unregisters the specific plugin's listener from listening on the  requested incoming plugin channel, no longer allowing it to act upon  any plugin messages.*/
    unregisterIncomingPluginChannel (plugin: Plugin, channel: String, listener: PluginMessageListener): void;
    /**Unregisters the specific plugin from all outgoing plugin channels, no  longer allowing it to send any plugin messages.*/
    unregisterOutgoingPluginChannel (plugin: Plugin): void;
    /**Unregisters the specific plugin from the requested outgoing plugin  channel, no longer allowing it to send messages through that channel to  any clients.*/
    unregisterOutgoingPluginChannel (plugin: Plugin, channel: String): void
}

/**This interface is implemented by all objects that can provide metadata  about themselves.*/
export interface Metadatable {
    /**Returns a list of previously set metadata values from the implementing  object's metadata store.*/
    getMetadata (metadataKey: String): List<MetadataValue>;
    /**Tests to see whether the implementing object contains the given  metadata value in its metadata store.*/
    hasMetadata (metadataKey: String): boolean;
    /**Removes the given metadata value from the implementing object's  metadata store.*/
    removeMetadata (metadataKey: String, owningPlugin: Plugin): void;
    /**Sets a metadata value in the implementing object's metadata store.*/
    setMetadata (metadataKey: String, newMetadataValue: MetadataValue): void
}

/**A MetadataConversionException is thrown any time a LazyMetadataValue attempts to convert a metadata value to an inappropriate  data type.*/
export class MetadataConversionException extends RuntimeException {

}

/**A MetadataEvaluationException is thrown any time a LazyMetadataValue fails to evaluate its value due to an exception. The  originating exception will be included as this exception's cause.*/
export class MetadataEvaluationException extends RuntimeException {

}

export interface MetadataStore<T> {
    /**Returns all metadata values attached to an object.*/
    getMetadata (subject: T, metadataKey: String): List<MetadataValue>;
    /**Tests to see if a metadata attribute has been set on an object.*/
    hasMetadata (subject: T, metadataKey: String): boolean;
    /**Invalidates all metadata in the metadata store that originates from the  given plugin.*/
    invalidateAll (owningPlugin: Plugin): void;
    /**Removes a metadata item owned by a plugin from a subject.*/
    removeMetadata (subject: T, metadataKey: String, owningPlugin: Plugin): void;
    /**Adds a metadata value to an object.*/
    setMetadata (subject: T, metadataKey: String, newMetadataValue: MetadataValue): void
}

export class MetadataStoreBase<T> extends Object {
    /**Creates a unique name for the object receiving metadata by combining  unique data from the subject with a metadataKey.*/
    disambiguate (subject: T, metadataKey: String): String;
    /**Returns all metadata values attached to an object.*/
    getMetadata (subject: T, metadataKey: String): List<MetadataValue>;
    /**Tests to see if a metadata attribute has been set on an object.*/
    hasMetadata (subject: T, metadataKey: String): boolean;
    /**Invalidates all metadata in the metadata store that originates from the  given plugin.*/
    invalidateAll (owningPlugin: Plugin): void;
    /**Removes all metadata in the metadata store that originates from the  given plugin.*/
    removeAll (owningPlugin: Plugin): void;
    /**Removes a metadata item owned by a plugin from a subject.*/
    removeMetadata (subject: T, metadataKey: String, owningPlugin: Plugin): void;
    /**Adds a metadata value to an object.*/
    setMetadata (subject: T, metadataKey: String, newMetadataValue: MetadataValue): void
}

export interface MetadataValue {
    /**Attempts to convert the value of this metadata item into a boolean.*/
    asBoolean (): boolean;
    /**Attempts to convert the value of this metadata item into a byte.*/
    asByte (): number;
    /**Attempts to convert the value of this metadata item into a double.*/
    asDouble (): number;
    /**Attempts to convert the value of this metadata item into a float.*/
    asFloat (): number;
    /**Attempts to convert the value of this metadata item into an int.*/
    asInt (): number;
    /**Attempts to convert the value of this metadata item into a long.*/
    asLong (): number;
    /**Attempts to convert the value of this metadata item into a short.*/
    asShort (): number;
    /**Attempts to convert the value of this metadata item into a string.*/
    asString (): String;
    /**Returns the Plugin that created this metadata item.*/
    getOwningPlugin (): Plugin;
    /**Invalidates this metadata item, forcing it to recompute when next  accessed.*/
    invalidate (): void;
    /**Fetches the value of this metadata item.*/
    value (): Object
}

/**Optional base class for facilitating MetadataValue implementations.    This provides all the conversion functions for MetadataValue so that  writing an implementation of MetadataValue is as simple as implementing  value() and invalidate().*/
export class MetadataValueAdapter extends Object implements MetadataValue {
    /**Attempts to convert the value of this metadata item into a boolean.*/
    asBoolean (): boolean;
    /**Attempts to convert the value of this metadata item into a byte.*/
    asByte (): number;
    /**Attempts to convert the value of this metadata item into a double.*/
    asDouble (): number;
    /**Attempts to convert the value of this metadata item into a float.*/
    asFloat (): number;
    /**Attempts to convert the value of this metadata item into an int.*/
    asInt (): number;
    /**Attempts to convert the value of this metadata item into a long.*/
    asLong (): number;
    /**Attempts to convert the value of this metadata item into a short.*/
    asShort (): number;
    /**Attempts to convert the value of this metadata item into a string.*/
    asString (): String;
    /**Returns the Plugin that created this metadata item.*/
    getOwningPlugin (): Plugin
}

export class MethodHandleEventExecutor extends Object implements EventExecutor {
    execute (listener: Listener, event: Event): void
}

/**Represents a minecart entity.*/
export interface Minecart extends Vehicle {
    /**Gets a minecart's damage.*/
    getDamage (): number;
    /**Gets the derailed velocity modifier.*/
    getDerailedVelocityMod (): Vector;
    /**Gets the display block for this minecart.*/
    getDisplayBlock (): MaterialData;
    /**Gets the display block for this minecart.*/
    getDisplayBlockData (): BlockData;
    /**Gets the offset of the display block.*/
    getDisplayBlockOffset (): number;
    /**Gets the flying velocity modifier.*/
    getFlyingVelocityMod (): Vector;
    /**Gets the maximum speed of a minecart.*/
    getMaxSpeed (): number;
    /**Returns whether this minecart will slow down faster without a passenger  occupying it*/
    isSlowWhenEmpty (): boolean;
    /**Sets a minecart's damage.*/
    setDamage (damage: number): void;
    /**Sets the derailed velocity modifier.*/
    setDerailedVelocityMod (derailed: Vector): void;
    /**Sets the display block for this minecart.*/
    setDisplayBlock (material: MaterialData): void;
    /**Sets the display block for this minecart.*/
    setDisplayBlockData (blockData: BlockData): void;
    /**Sets the offset of the display block.*/
    setDisplayBlockOffset (offset: number): void;
    /**Sets the flying velocity modifier.*/
    setFlyingVelocityMod (flying: Vector): void;
    /**Sets the maximum speed of a minecart.*/
    setMaxSpeed (speed: number): void;
    /**Sets whether this minecart will slow down faster without a passenger  occupying it*/
    setSlowWhenEmpty (slow: boolean): void
}

/**Represents the built-in Minecraft font.*/
export class MinecraftFont extends MapFont {

}

/**Represents how a Structure can be mirrored upon  being loaded.*/
export class Mirror extends Enum<Mirror> {
    /**Structure is mirrored front to back.*/
    static FRONT_BACK: Mirror;
    /**Structure is mirrored left to right.*/
    static LEFT_RIGHT: Mirror;
    /**No mirroring.*/
    static NONE: Mirror
}

/**Represents a Mob. Mobs are living entities with simple AI.*/
export interface Mob extends LivingEntity, Lootable {
    /**Enables access to control the pathing of an Entity*/
    getPathfinder (): Pathfinder;
    /**Gets the current target of this Mob*/
    getTarget (): LivingEntity;
    /**Gets whether this mob is aware of its surroundings.*/
    isAware (): boolean;
    /**Check if this mob is exposed to daylight*/
    isInDaylight (): boolean;
    /**Sets whether this mob is aware of its surroundings.*/
    setAware (aware: boolean): void;
    /**Instructs this Mob to set the specified LivingEntity as its target.*/
    setTarget (target: LivingEntity): void
}

/**Represents a part of the "brain" of a mob. It tracks all tasks (running or not), allows adding and removing goals*/
export interface MobGoals {
    addGoal <T extends Mob>(mob: T, priority: number, goal: Goal<T>): void;
    getAllGoals <T extends Mob>(mob: T): Collection<Goal<T>>;
    getAllGoals <T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
    getAllGoalsWithout <T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
    getGoal <T extends Mob>(mob: T, key: GoalKey<T>): Goal<T>;
    getGoals <T extends Mob>(mob: T, key: GoalKey<T>): Collection<Goal<T>>;
    getRunningGoals <T extends Mob>(mob: T): Collection<Goal<T>>;
    getRunningGoals <T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
    getRunningGoalsWithout <T extends Mob>(mob: T, type: GoalType): Collection<Goal<T>>;
    hasGoal <T extends Mob>(mob: T, key: GoalKey<T>): boolean;
    removeAllGoals <T extends Mob>(mob: T): void;
    removeAllGoals <T extends Mob>(mob: T, type: GoalType): void;
    removeGoal <T extends Mob>(mob: T, goal: Goal<T>): void;
    removeGoal <T extends Mob>(mob: T, key: GoalKey<T>): void
}

/**Called when the moisture level of a soil block changes.*/
export class MoistureChangeEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new state of the affected block.*/
    getNewState (): BlockState;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a Monster.*/
export interface Monster extends Creature {

}

export class MoonPhase extends Enum<MoonPhase> {
    static FIRST_QUARTER: MoonPhase;
    static FULL_MOON: MoonPhase;
    static LAST_QUARTER: MoonPhase;
    static NEW_MOON: MoonPhase;
    static WANING_CRESCENT: MoonPhase;
    static WANING_GIBBOUS: MoonPhase;
    static WAXING_CRESCENT: MoonPhase;
    static WAXING_GIBBOUS: MoonPhase
}

/**Implements a Most Recently Used cache in front of a backing map, to quickly access the last accessed result.*/
export class MRUMapCache<K,V> extends AbstractMap<K,V> {
    clear (): void;
    containsKey (key: Object): boolean;
    containsValue (value: Object): boolean;
    entrySet (): Set<Map$Entry<K,V>>;
    get (key: Object): V;
    isEmpty (): boolean;
    keySet (): Set<K>;
    /**Wraps the specified map with a most recently used cache*/
    static of <K,V>(map: Map<K,V>): Map<K,V>;
    put (key: K, value: V): V;
    putAll (m: Map<X>): void;
    remove (key: Object): V;
    size (): number;
    values (): Collection<V>
}

/**Represents a Mule - variant of ChestedHorse.*/
export interface Mule extends ChestedHorse {

}

/**Represents a command that delegates to one or more other commands*/
export class MultipleCommandAlias extends Command {
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, commandLabel: String, args: String[]): boolean;
    /**Gets the commands associated with the multi-command alias.*/
    getCommands (): Command[]
}

/**This class encompasses the 'north', 'east', 'south', 'west', 'up', 'down'  boolean flags which are used to set which faces of the block textures are  displayed on.    Some blocks may not be able to have faces on all directions, use  getAllowedFaces() to get all possible faces for this block. It is  not valid to call any methods on non-allowed faces.*/
export interface MultipleFacing extends BlockData {
    /**Gets all of this faces which may be set on this block.*/
    getAllowedFaces (): Set<BlockFace>;
    /**Get all of the faces which are enabled on this block.*/
    getFaces (): Set<BlockFace>;
    /**Checks if this block has the specified face enabled.*/
    hasFace (face: BlockFace): boolean;
    /**Set whether this block has the specified face enabled.*/
    setFace (face: BlockFace, has: boolean): void
}

/**Represents the different textured blocks of mushroom.*/
export class MushroomBlockTexture extends Enum<MushroomBlockTexture> {
    /**Cap texture on all faces.*/
    static ALL_CAP: MushroomBlockTexture;
    /**Pores on all faces.*/
    static ALL_PORES: MushroomBlockTexture;
    /**Stem texture on all faces.*/
    static ALL_STEM: MushroomBlockTexture;
    /**Cap texture on the top and east faces, pores on remaining sides.*/
    static CAP_EAST: MushroomBlockTexture;
    /**Cap texture on the top and north faces, pores on remaining sides.*/
    static CAP_NORTH: MushroomBlockTexture;
    /**Cap texture on the top, north and east faces, pores on remaining sides.*/
    static CAP_NORTH_EAST: MushroomBlockTexture;
    /**Cap texture on the top, north and west faces, pores on remaining sides.*/
    static CAP_NORTH_WEST: MushroomBlockTexture;
    /**Cap texture on the top and south faces, pores on remaining sides.*/
    static CAP_SOUTH: MushroomBlockTexture;
    /**Cap texture on the top, south and east faces, pores on remaining sides.*/
    static CAP_SOUTH_EAST: MushroomBlockTexture;
    /**Cap texture on the top, south and west faces, pores on remaining sides.*/
    static CAP_SOUTH_WEST: MushroomBlockTexture;
    /**Cap texture on the top face, pores on remaining sides.*/
    static CAP_TOP: MushroomBlockTexture;
    /**Cap texture on the top and west faces, pores on remaining sides.*/
    static CAP_WEST: MushroomBlockTexture;
    /**Stem texture on the north, east, south and west faces, pores on top and  bottom.*/
    static STEM_SIDES: MushroomBlockTexture
}

/**Represents a mushroom Cow*/
export interface MushroomCow extends Cow {
    /**Get the variant of this cow.*/
    getVariant (): MushroomCow$Variant;
    /**Set the variant of this cow.*/
    setVariant (variant: MushroomCow$Variant): void
}

/**Represents the variant of a cow - ie its color.*/
export class MushroomCow$Variant extends Enum<MushroomCow$Variant> {
    /**Brown mushroom cow.*/
    static BROWN: MushroomCow$Variant;
    /**Red mushroom cow.*/
    static RED: MushroomCow$Variant
}

export interface Nameable {
    /**Gets the custom name on a mob or block.*/
    getCustomName (): String;
    /**Sets a custom name on a mob or block.*/
    setCustomName (name: String): void
}

/**Represents a namespaced resource, see NamespacedKey for single elements  or NamespacedTag for a collection of elements   Namespaces may only contain lowercase alphanumeric characters, periods,  underscores, and hyphens.    Keys may only contain lowercase alphanumeric characters, periods,  underscores, hyphens, and forward slashes.    You should not be implementing this interface yourself, use NamespacedKey  or NamespacedTag as needed instead.*/
export interface Namespaced {
    /**Gets the key corresponding to this resource*/
    getKey (): String;
    /**Gets the namespace this resource is a part of*/
    getNamespace (): String
}

/**Represents a String based key which consists of two components - a namespace  and a key.   Namespaces may only contain lowercase alphanumeric characters, periods,  underscores, and hyphens.    Keys may only contain lowercase alphanumeric characters, periods,  underscores, hyphens, and forward slashes.*/
export class NamespacedKey extends Object implements Namespaced {
    equals (obj: Object): boolean;
    /**Gets the key corresponding to this resource*/
    getKey (): String;
    /**Gets the namespace this resource is a part of*/
    getNamespace (): String;
    hashCode (): number;
    /**Get a key in the Minecraft namespace.*/
    static minecraft (key: String): NamespacedKey;
    toString (): String
}

/**Represents a String based key pertaining to a tagged entry. Consists of two components - a namespace  and a key.    Namespaces may only contain lowercase alphanumeric characters, periods,  underscores, and hyphens.    Keys may only contain lowercase alphanumeric characters, periods,  underscores, hyphens, and forward slashes.*/
export class NamespacedTag extends Object implements Namespaced {
    equals (obj: Object): boolean;
    /**Gets the key corresponding to this resource*/
    getKey (): String;
    /**Gets the namespace this resource is a part of*/
    getNamespace (): String;
    hashCode (): number;
    /**Get a key in the Minecraft namespace.*/
    static minecraft (key: String): NamespacedTag;
    toString (): String
}

export class NetherWartsState extends Enum<NetherWartsState> {
    /**Ready to harvest*/
    static RIPE: NetherWartsState;
    /**State when first seeded*/
    static SEEDED: NetherWartsState;
    /**First growth stage*/
    static STAGE_ONE: NetherWartsState;
    /**Second growth stage*/
    static STAGE_TWO: NetherWartsState
}

/**Represents a client connected to the server.*/
export interface NetworkClient {
    /**Returns the socket address of the client.*/
    getAddress (): InetSocketAddress;
    /**Returns the protocol version of the client.*/
    getProtocolVersion (): number;
    /**Returns the virtual host the client is connected to.*/
    getVirtualHost (): InetSocketAddress
}

/**Base class for all noise generators*/
export class NoiseGenerator extends Object {
    static fade (x: number): number;
    /**Speedy floor, faster than (int)Math.floor(x)*/
    static floor (x: number): number;
    static grad (hash: number, x: number, y: number, z: number): number;
    static lerp (x: number, y: number, z: number): number;
    /**Computes and returns the 1D noise for the given coordinate in 1D space*/
    noise (x: number): number;
    /**Computes and returns the 2D noise for the given coordinates in 2D space*/
    noise (x: number, y: number): number;
    /**Computes and returns the 3D noise for the given coordinates in 3D space*/
    noise (x: number, y: number, z: number): number;
    /**Generates noise for the 3D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 3D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    /**Generates noise for the 2D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 2D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    /**Generates noise for the 1D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, octaves: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 1D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number
}

/**A note class to store a specific note.*/
export class Note extends Object {
    equals (obj: Object): boolean;
    /**Creates a new note for a flat tone, such as A-flat.*/
    static flat (octave: number, tone: Note$Tone): Note;
    flattened (): Note;
    /**Returns the octave of this note.*/
    getOctave (): number;
    /**Returns the tone of this note.*/
    getTone (): Note$Tone;
    hashCode (): number;
    /**Returns if this note is sharped.*/
    isSharped (): boolean;
    /**Creates a new note for a natural tone, such as A-natural.*/
    static natural (octave: number, tone: Note$Tone): Note;
    /**Creates a new note for a sharp tone, such as A-sharp.*/
    static sharp (octave: number, tone: Note$Tone): Note;
    sharped (): Note;
    toString (): String
}

/**An enum holding tones.*/
export class Note$Tone extends Enum<Note$Tone> {
    static A: Note$Tone;
    static B: Note$Tone;
    static C: Note$Tone;
    static D: Note$Tone;
    static E: Note$Tone;
    static F: Note$Tone;
    static G: Note$Tone
}

/**'instrument' is the type of sound made when this note block is activated.    'note' is the specified tuned pitch that the instrument will be played in.*/
export interface NoteBlock extends Powerable {
    /**Gets the value of the 'instrument' property.*/
    getInstrument (): Instrument;
    /**Gets the value of the 'note' property.*/
    getNote (): Note;
    /**Sets the value of the 'instrument' property.*/
    setInstrument (instrument: Instrument): void;
    /**Sets the value of the 'note' property.*/
    setNote (note: Note): void
}

/**Called when a note block is being played through player interaction or a  redstone current.*/
export class NotePlayEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Instrument to be used.*/
    getInstrument (): Instrument;
    /**Gets the Note to be played.*/
    getNote (): Note;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a non-player character*/
export interface NPC extends Creature {

}

/**NullConversationPrefix is a ConversationPrefix implementation that  displays nothing in front of conversation output.*/
export class NullConversationPrefix extends Object implements ConversationPrefix {
    /**Prepends each conversation message with an empty string.*/
    getPrefix (context: ConversationContext): String
}

export class NullTimingHandler extends Object implements Timing {
    abort (): void;
    close (): void;
    /**Used internally to get the actual backing Handler in the case of delegated Handlers*/
    getTimingHandler (): co$aikar$timings$TimingHandler;
    /**Starts timing the execution until Timing.stopTiming() is called.*/
    startTiming (): Timing;
    /**Starts timing the execution until Timing.stopTiming() is called.*/
    startTimingIfSync (): Timing;
    /**Stops timing and records the data.*/
    stopTiming (): void;
    /**Stops timing and records the data.*/
    stopTimingIfSync (): void
}

/**Utils for casting number types to other number types*/
export class NumberConversions extends Object {
    static ceil (num: number): number;
    static checkFinite (d: number, message: String): void;
    static checkFinite (d: number, message: String): void;
    static floor (num: number): number;
    static isFinite (d: number): boolean;
    static isFinite (f: number): boolean;
    static round (num: number): number;
    static square (num: number): number;
    static toByte (object: Object): number;
    static toDouble (object: Object): number;
    static toFloat (object: Object): number;
    static toInt (object: Object): number;
    static toLong (object: Object): number;
    static toShort (object: Object): number
}

/**NumericPrompt is the base class for any prompt that requires a Number response from the user.*/
export class NumericPrompt extends ValidatingPrompt {
    /**Override this method to perform some action with the user's integer  response.*/
    acceptValidatedInput (context: ConversationContext, input: Number): Prompt;
    /**Override this method to accept and processes the validated input from  the user.*/
    acceptValidatedInput (context: ConversationContext, input: String): Prompt;
    /**Optionally override this method to display an additional message if the  user enters an invalid numeric input.*/
    getFailedValidationText (context: ConversationContext, invalidInput: Number): String;
    /**Optionally override this method to display an additional message if the  user enters an invalid input.*/
    getFailedValidationText (context: ConversationContext, invalidInput: String): String;
    /**Optionally override this method to display an additional message if the  user enters an invalid number.*/
    getInputNotNumericText (context: ConversationContext, invalidInput: String): String;
    /**Override this method to check the validity of the player's input.*/
    isInputValid (context: ConversationContext, input: String): boolean;
    /**Override this method to do further validation on the numeric player  input after the input has been determined to actually be a number.*/
    isNumberValid (context: ConversationContext, input: Number): boolean
}

/**An objective on a scoreboard that can show scores specific to entries. This  objective is only relevant to the display of the associated scoreboard.*/
export interface Objective {
    /**Gets the criteria this objective tracks.*/
    getCriteria (): String;
    /**Gets the name displayed to players for this objective*/
    getDisplayName (): String;
    /**Gets the display slot this objective is displayed at.*/
    getDisplaySlot (): DisplaySlot;
    /**Gets the name of this Objective*/
    getName (): String;
    /**Sets manner in which this objective will be rendered.*/
    getRenderType (): RenderType;
    /**Gets an entry's Score for an Objective on this Scoreboard.*/
    getScore (entry: String): Score;
    /**Gets the scoreboard to which this objective is attached.*/
    getScoreboard (): Scoreboard;
    /**Gets if the objective's scores can be modified directly by a plugin.*/
    isModifiable (): boolean;
    /**Sets the name displayed to players for this objective.*/
    setDisplayName (displayName: String): void;
    /**Sets this objective to display on the specified slot for the  scoreboard, removing it from any other display slot.*/
    setDisplaySlot (slot: DisplaySlot): void;
    /**Sets manner in which this objective will be rendered.*/
    setRenderType (renderType: RenderType): void;
    /**Unregisters this objective from the scoreboard.*/
    unregister (): void
}

export interface Observer extends Directional, Powerable {

}

/**A wild tameable cat*/
export interface Ocelot extends Animals {
    /**Gets the current type of this cat.*/
    getCatType (): Ocelot$Type;
    /**Sets the current type of this cat.*/
    setCatType (type: Ocelot$Type): void
}

/**Creates noise using unbiased octaves*/
export class OctaveGenerator extends Object {
    /**Gets a clone of the individual octaves used within this generator*/
    getOctaves (): NoiseGenerator[];
    /**Gets the scale used for each X-coordinates passed*/
    getXScale (): number;
    /**Gets the scale used for each Y-coordinates passed*/
    getYScale (): number;
    /**Gets the scale used for each Z-coordinates passed*/
    getZScale (): number;
    /**Generates noise for the 1D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 1D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, frequency: number, amplitude: number, normalized: boolean): number;
    /**Generates noise for the 2D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 2D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
    /**Generates noise for the 3D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, z: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 3D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
    /**Sets the scale used for all coordinates passed to this generator.*/
    setScale (scale: number): void;
    /**Sets the scale used for each X-coordinates passed*/
    setXScale (scale: number): void;
    /**Sets the scale used for each Y-coordinates passed*/
    setYScale (scale: number): void;
    /**Sets the scale used for each Z-coordinates passed*/
    setZScale (scale: number): void
}

export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
    /**Permanently Bans this player from the server*/
    banPlayer (reason: String): BanEntry;
    /**Permanently Bans this player from the server*/
    banPlayer (reason: String, source: String): BanEntry;
    /**Bans this player from the server*/
    banPlayer (reason: String, expires: Date): BanEntry;
    /**Bans this player from the server*/
    banPlayer (reason: String, expires: Date, source: String): BanEntry;
    banPlayer (reason: String, expires: Date, source: String, kickIfOnline: boolean): BanEntry;
    /**Decrements the given statistic for this player.*/
    decrementStatistic (statistic: Statistic): void;
    /**Decrements the given statistic for this player.*/
    decrementStatistic (statistic: Statistic, amount: number): void;
    /**Decrements the given statistic for this player for the given entity.*/
    decrementStatistic (statistic: Statistic, entityType: EntityType): void;
    /**Decrements the given statistic for this player for the given entity.*/
    decrementStatistic (statistic: Statistic, entityType: EntityType, amount: number): void;
    /**Decrements the given statistic for this player for the given material.*/
    decrementStatistic (statistic: Statistic, material: Material): void;
    /**Decrements the given statistic for this player for the given material.*/
    decrementStatistic (statistic: Statistic, material: Material, amount: number): void;
    /**Gets the Location where the player will spawn at their bed, null if  they have not slept in one or their current bed spawn is invalid.*/
    getBedSpawnLocation (): Location;
    /**Gets the first date and time that this player was witnessed on this  server.*/
    getFirstPlayed (): number;
    /**Gets the last date and time that this player logged into the server.*/
    getLastLogin (): number;
    /**Gets the last date and time that this player was seen on the server.*/
    getLastSeen (): number;
    /**Returns the name of this player*/
    getName (): String;
    /**Gets a Player object that this represents, if there is one*/
    getPlayer (): Player;
    /**Gets the value of the given statistic for this player.*/
    getStatistic (statistic: Statistic): number;
    /**Gets the value of the given statistic for this player.*/
    getStatistic (statistic: Statistic, entityType: EntityType): number;
    /**Gets the value of the given statistic for this player.*/
    getStatistic (statistic: Statistic, material: Material): number;
    /**Returns the UUID of this player*/
    getUniqueId (): UUID;
    /**Checks if this player has played on this server before.*/
    hasPlayedBefore (): boolean;
    /**Increments the given statistic for this player.*/
    incrementStatistic (statistic: Statistic): void;
    /**Increments the given statistic for this player.*/
    incrementStatistic (statistic: Statistic, amount: number): void;
    /**Increments the given statistic for this player for the given entity.*/
    incrementStatistic (statistic: Statistic, entityType: EntityType): void;
    /**Increments the given statistic for this player for the given entity.*/
    incrementStatistic (statistic: Statistic, entityType: EntityType, amount: number): void;
    /**Increments the given statistic for this player for the given material.*/
    incrementStatistic (statistic: Statistic, material: Material): void;
    /**Increments the given statistic for this player for the given material.*/
    incrementStatistic (statistic: Statistic, material: Material, amount: number): void;
    /**Checks if this player is banned or not*/
    isBanned (): boolean;
    /**Checks if this player is currently online*/
    isOnline (): boolean;
    /**Checks if this player is whitelisted or not*/
    isWhitelisted (): boolean;
    /**Sets the given statistic for this player.*/
    setStatistic (statistic: Statistic, newValue: number): void;
    /**Sets the given statistic for this player for the given entity.*/
    setStatistic (statistic: Statistic, entityType: EntityType, newValue: number): void;
    /**Sets the given statistic for this player for the given material.*/
    setStatistic (statistic: Statistic, material: Material, newValue: number): void;
    /**Sets if this player is whitelisted or not*/
    setWhitelisted (value: boolean): void
}

/**'open' denotes whether this door-like block is currently opened.*/
export interface Openable extends BlockData {
    /**Gets the value of the 'open' property.*/
    isOpen (): boolean;
    /**Sets the value of the 'open' property.*/
    setOpen (open: boolean): void
}

export interface Openable {
    /**Check to see if the door is open.*/
    isOpen (): boolean;
    /**Configure this door to be either open or closed;*/
    setOpen (isOpen: boolean): void
}

/**'axis' represents the axis along whilst this block is oriented.    Some blocks such as the portal block may not be able to be placed in all  orientations, use getAxes() to retrieve all possible such  orientations.*/
export interface Orientable extends BlockData {
    /**Gets the axes which are applicable to this block.*/
    getAxes (): Set<Axis>;
    /**Gets the value of the 'axis' property.*/
    getAxis (): Axis;
    /**Sets the value of the 'axis' property.*/
    setAxis (axis: Axis): void
}

/**Represents a Painting.*/
export interface Painting extends Hanging {
    /**Get the art on this painting*/
    getArt (): Art;
    /**Set the art on this painting*/
    setArt (art: Art): boolean;
    /**Set the art on this painting*/
    setArt (art: Art, force: boolean): boolean
}

/**Panda entity.*/
export interface Panda extends Animals {
    /**Gets this Panda's hidden gene.*/
    getHiddenGene (): Panda$Gene;
    /**Gets this Panda's main gene.*/
    getMainGene (): Panda$Gene;
    /**Sets this Panda's hidden gene.*/
    setHiddenGene (gene: Panda$Gene): void;
    /**Sets this Panda's main gene.*/
    setMainGene (gene: Panda$Gene): void
}

export class Panda$Gene extends Enum<Panda$Gene> {
    static AGGRESSIVE: Panda$Gene;
    static BROWN: Panda$Gene;
    static LAZY: Panda$Gene;
    static NORMAL: Panda$Gene;
    static PLAYFUL: Panda$Gene;
    static WEAK: Panda$Gene;
    static WORRIED: Panda$Gene
}

/**Prevents plugins (e.g. Essentials) from changing the parent of the plugin logger.*/
export class PaperPluginLogger extends Logger {
    static getLogger (description: PluginDescriptionFile): Logger;
    setParent (parent: Logger): void
}

/**Extended version of ServerListPingEvent that allows full control  of the response sent to the client.*/
export class PaperServerListPingEvent extends ServerListPingEvent implements Cancellable {
    getBukkitPlayer (player: Object): Player;
    /**Returns the StatusClient pinging the server.*/
    getClient (): StatusClient;
    /**Get the maximum number of players sent.*/
    getMaxPlayers (): number;
    /**Get the number of players sent.*/
    getNumPlayers (): number;
    getOnlinePlayers (): Object[];
    /**Returns a mutable list of PlayerProfile that will be displayed  as online players on the client.*/
    getPlayerSample (): List<PlayerProfile>;
    /**Returns the protocol version that will be sent as the protocol version  of the server to the client.*/
    getProtocolVersion (): number;
    /**Gets the server icon sent to the client.*/
    getServerIcon (): CachedServerIcon;
    /**Returns the version that will be sent as server version on the client.*/
    getVersion (): String;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    iterator (): Iterator<Player>;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets whether all player related information is hidden in the server  list.*/
    setHidePlayers (hidePlayers: boolean): void;
    /**Sets the number of players displayed in the server list.*/
    setNumPlayers (numPlayers: number): void;
    /**Sets the protocol version that will be sent as the protocol version  of the server to the client.*/
    setProtocolVersion (protocolVersion: number): void;
    /**Sets the server icon sent to the client.*/
    setServerIcon (icon: CachedServerIcon): void;
    /**Sets the version that will be sent as server version to the client.*/
    setVersion (version: String): void;
    /**Returns whether all player related information is hidden in the server  list.*/
    shouldHidePlayers (): boolean
}

/**Represents a Parrot.*/
export interface Parrot extends Tameable, Sittable {
    /**Get the variant of this parrot.*/
    getVariant (): Parrot$Variant;
    /**Set the variant of this parrot.*/
    setVariant (variant: Parrot$Variant): void
}

/**Represents the variant of a parrot - ie its color.*/
export class Parrot$Variant extends Enum<Parrot$Variant> {
    /**Royal blue colored parrot.*/
    static BLUE: Parrot$Variant;
    /**Cyan colored parrot.*/
    static CYAN: Parrot$Variant;
    /**Gray colored parrot.*/
    static GRAY: Parrot$Variant;
    /**Green colored parrot.*/
    static GREEN: Parrot$Variant;
    /**Classic parrot - red with colored wingtips.*/
    static RED: Parrot$Variant
}

export class Particle extends Enum<Particle> {
    static ASH: Particle;
    static BARRIER: Particle;
    static BLOCK_CRACK: Particle;
    static BLOCK_DUST: Particle;
    static BUBBLE_COLUMN_UP: Particle;
    static BUBBLE_POP: Particle;
    static CAMPFIRE_COSY_SMOKE: Particle;
    static CAMPFIRE_SIGNAL_SMOKE: Particle;
    static CLOUD: Particle;
    static COMPOSTER: Particle;
    static CRIMSON_SPORE: Particle;
    static CRIT: Particle;
    static CRIT_MAGIC: Particle;
    static CURRENT_DOWN: Particle;
    static DAMAGE_INDICATOR: Particle;
    static DOLPHIN: Particle;
    static DRAGON_BREATH: Particle;
    static DRIP_LAVA: Particle;
    static DRIP_WATER: Particle;
    static DRIPPING_HONEY: Particle;
    static DRIPPING_OBSIDIAN_TEAR: Particle;
    static ENCHANTMENT_TABLE: Particle;
    static END_ROD: Particle;
    static EXPLOSION_HUGE: Particle;
    static EXPLOSION_LARGE: Particle;
    static EXPLOSION_NORMAL: Particle;
    static FALLING_DUST: Particle;
    static FALLING_HONEY: Particle;
    static FALLING_LAVA: Particle;
    static FALLING_NECTAR: Particle;
    static FALLING_OBSIDIAN_TEAR: Particle;
    static FALLING_WATER: Particle;
    static FIREWORKS_SPARK: Particle;
    static FLAME: Particle;
    static FLASH: Particle;
    static HEART: Particle;
    static ITEM_CRACK: Particle;
    static LANDING_HONEY: Particle;
    static LANDING_LAVA: Particle;
    static LANDING_OBSIDIAN_TEAR: Particle;
    static LAVA: Particle;
    static LEGACY_BLOCK_CRACK: Particle;
    static LEGACY_BLOCK_DUST: Particle;
    static LEGACY_FALLING_DUST: Particle;
    static MOB_APPEARANCE: Particle;
    static NAUTILUS: Particle;
    static NOTE: Particle;
    static PORTAL: Particle;
    static REDSTONE: Particle;
    static REVERSE_PORTAL: Particle;
    static SLIME: Particle;
    static SMOKE_LARGE: Particle;
    static SMOKE_NORMAL: Particle;
    static SNEEZE: Particle;
    static SNOW_SHOVEL: Particle;
    static SNOWBALL: Particle;
    static SOUL: Particle;
    static SOUL_FIRE_FLAME: Particle;
    static SPELL: Particle;
    static SPELL_INSTANT: Particle;
    static SPELL_MOB: Particle;
    static SPELL_MOB_AMBIENT: Particle;
    static SPELL_WITCH: Particle;
    static SPIT: Particle;
    static SQUID_INK: Particle;
    static SUSPENDED: Particle;
    static SUSPENDED_DEPTH: Particle;
    static SWEEP_ATTACK: Particle;
    static TOTEM: Particle;
    static TOWN_AURA: Particle;
    static VILLAGER_ANGRY: Particle;
    static VILLAGER_HAPPY: Particle;
    static WARPED_SPORE: Particle;
    static WATER_BUBBLE: Particle;
    static WATER_DROP: Particle;
    static WATER_SPLASH: Particle;
    static WATER_WAKE: Particle;
    static WHITE_ASH: Particle
}

/**Options which can be applied to redstone dust particles - a particle  color and size.*/
export class Particle$DustOptions extends Object {
    /**The color of the particles to be displayed.*/
    getColor (): Color;
    /**Relative size of the particle.*/
    getSize (): number
}

/**Helps prepare a particle to be sent to players.   Usage of the builder is preferred over the super long World.spawnParticle(Particle, Location, int, double, double, double, double, Object) API*/
export class ParticleBuilder extends Object {
    /**Sends this particle to all players in the world.*/
    allPlayers (): ParticleBuilder;
    /**Sets the particle Color.*/
    color (r: number, g: number, b: number): ParticleBuilder;
    /**Sets the particle Color.*/
    color (color: Color): ParticleBuilder;
    /**Sets the particle Color and size.*/
    color (color: Color, size: number): ParticleBuilder;
    count (): number;
    /**Sets the number of particles to spawn*/
    count (count: number): ParticleBuilder;
    /**Gets the particle custom data.*/
    data <T>(): T;
    /**Sets the particle custom data.*/
    data <T>(data: T): ParticleBuilder;
    /**Gets the Particle extra data.*/
    extra (): number;
    /**Sets the particle extra data.*/
    extra (extra: number): ParticleBuilder;
    /**Sets whether the particle is forcefully shown to the player.*/
    force (force: boolean): ParticleBuilder;
    /**Example use:   builder.receivers(16); if (builder.hasReceivers()) { sendParticleAsync(builder); }*/
    hasReceivers (): boolean;
    location (): Location;
    /**Sets the location of where to spawn the particle*/
    location (location: Location): ParticleBuilder;
    /**Sets the location of where to spawn the particle*/
    location (world: World, x: number, y: number, z: number): ParticleBuilder;
    /**Sets the particle offset.*/
    offset (offsetX: number, offsetY: number, offsetZ: number): ParticleBuilder;
    /**Particle offset X.*/
    offsetX (): number;
    /**Particle offset Y.*/
    offsetY (): number;
    /**Particle offset Z.*/
    offsetZ (): number;
    particle (): Particle;
    /**Changes what particle will be sent*/
    particle (particle: Particle): ParticleBuilder;
    receivers (): List<Player>;
    /**Selects all players within a cuboid selection around the particle location, within the  specified bounding box.*/
    receivers (radius: number): ParticleBuilder;
    /**Selects all players within the specified radius around the particle location.*/
    receivers (radius: number, byDistance: boolean): ParticleBuilder;
    /**Selects all players within a cuboid selection around the particle location, within the  specified bounding box.*/
    receivers (xzRadius: number, yRadius: number): ParticleBuilder;
    /**Selects all players within the specified radius around the particle location.*/
    receivers (xzRadius: number, yRadius: number, byDistance: boolean): ParticleBuilder;
    /**Selects all players within a cuboid selection around the particle location, within the  specified bounding box.*/
    receivers (xRadius: number, yRadius: number, zRadius: number): ParticleBuilder;
    receivers (receivers: Collection<Player>): ParticleBuilder;
    receivers (receivers: List<Player>): ParticleBuilder;
    receivers (...receivers: Player[]): ParticleBuilder;
    source (): Player;
    /**Sets the source of this particle for visibility concerns (Vanish API)*/
    source (source: Player): ParticleBuilder;
    /**Sends the particle to all receiving players (or all).*/
    spawn (): ParticleBuilder
}

/**Handles pathfinding operations for an Entity*/
export interface Pathfinder {
    /**Checks if this pathfinder assumes that the mob can float*/
    canFloat (): boolean;
    /**Checks if this pathfinder allows passing through closed doors.*/
    canOpenDoors (): boolean;
    /**Checks if this pathfinder allows passing through open doors.*/
    canPassDoors (): boolean;
    /**Calculates a destination for the Entity to navigate to to reach the target entity,  but does not set it as the current target.*/
    findPath (target: LivingEntity): Pathfinder$PathResult;
    /**Calculates a destination for the Entity to navigate to, but does not set it  as the current target.*/
    findPath (loc: Location): Pathfinder$PathResult;
    getCurrentPath (): Pathfinder$PathResult;
    getEntity (): Mob;
    /**If the entity is currently trying to navigate to a destination, this will return true*/
    hasPath (): boolean;
    /**Takes the result of a previous pathfinding calculation and sets it  as the active pathfinding with default speed.*/
    moveTo (path: Pathfinder$PathResult): boolean;
    /**Takes the result of a previous pathfinding calculation and sets it  as the active pathfinding,*/
    moveTo (path: Pathfinder$PathResult, speed: number): boolean;
    /**Calculates a destination for the Entity to navigate to to reach the target entity,  and sets it with default speed.*/
    moveTo (target: LivingEntity): boolean;
    /**Calculates a destination for the Entity to navigate to to reach the target entity,  and sets it with specified speed.*/
    moveTo (target: LivingEntity, speed: number): boolean;
    /**Calculates a destination for the Entity to navigate to, and sets it with default speed  as the current target.*/
    moveTo (loc: Location): boolean;
    /**Calculates a destination for the Entity to navigate to, with desired speed  as the current target.*/
    moveTo (loc: Location, speed: number): boolean;
    /**Makes this pathfinder assume that the mob can float, or not*/
    setCanFloat (canFloat: boolean): void;
    /**Allows this pathfinder to pass through closed doors, or not*/
    setCanOpenDoors (canOpenDoors: boolean): void;
    /**Allows this pathfinder to pass through open doors, or not*/
    setCanPassDoors (canPassDoors: boolean): void;
    /**Instructs the Entity to stop trying to navigate to its current desired location*/
    stopPathfinding (): void
}

/**Represents the result of a pathfinding calculation*/
export interface Pathfinder$PathResult {
    getFinalPoint (): Location;
    getNextPoint (): Location;
    getNextPointIndex (): number;
    /**All currently calculated points to follow along the path to reach the destination location   Will return points the entity has already moved past, see getNextPointIndex()*/
    getPoints (): List<Location>
}

export class Pattern extends Object implements ConfigurationSerializable {
    equals (obj: Object): boolean;
    /**Returns the color of the pattern*/
    getColor (): DyeColor;
    /**Returns the type of pattern*/
    getPattern (): PatternType;
    hashCode (): number;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>
}

export class PatternType extends Enum<PatternType> {
    static BASE: PatternType;
    static BORDER: PatternType;
    static BRICKS: PatternType;
    static CIRCLE_MIDDLE: PatternType;
    static CREEPER: PatternType;
    static CROSS: PatternType;
    static CURLY_BORDER: PatternType;
    static DIAGONAL_LEFT: PatternType;
    static DIAGONAL_LEFT_MIRROR: PatternType;
    static DIAGONAL_RIGHT: PatternType;
    static DIAGONAL_RIGHT_MIRROR: PatternType;
    static FLOWER: PatternType;
    static GLOBE: PatternType;
    static GRADIENT: PatternType;
    static GRADIENT_UP: PatternType;
    static HALF_HORIZONTAL: PatternType;
    static HALF_HORIZONTAL_MIRROR: PatternType;
    static HALF_VERTICAL: PatternType;
    static HALF_VERTICAL_MIRROR: PatternType;
    static MOJANG: PatternType;
    static PIGLIN: PatternType;
    static RHOMBUS_MIDDLE: PatternType;
    static SKULL: PatternType;
    static SQUARE_BOTTOM_LEFT: PatternType;
    static SQUARE_BOTTOM_RIGHT: PatternType;
    static SQUARE_TOP_LEFT: PatternType;
    static SQUARE_TOP_RIGHT: PatternType;
    static STRAIGHT_CROSS: PatternType;
    static STRIPE_BOTTOM: PatternType;
    static STRIPE_CENTER: PatternType;
    static STRIPE_DOWNLEFT: PatternType;
    static STRIPE_DOWNRIGHT: PatternType;
    static STRIPE_LEFT: PatternType;
    static STRIPE_MIDDLE: PatternType;
    static STRIPE_RIGHT: PatternType;
    static STRIPE_SMALL: PatternType;
    static STRIPE_TOP: PatternType;
    static TRIANGLE_BOTTOM: PatternType;
    static TRIANGLE_TOP: PatternType;
    static TRIANGLES_BOTTOM: PatternType;
    static TRIANGLES_TOP: PatternType
}

/**Generates noise using the "classic" perlin generator*/
export class PerlinNoiseGenerator extends NoiseGenerator {
    /**Gets the singleton unseeded instance of this generator*/
    static getInstance (): PerlinNoiseGenerator;
    /**Computes and returns the 1D unseeded perlin noise for the given  coordinates in 1D space*/
    static getNoise (x: number): number;
    /**Computes and returns the 2D unseeded perlin noise for the given  coordinates in 2D space*/
    static getNoise (x: number, y: number): number;
    /**Computes and returns the 3D unseeded perlin noise for the given  coordinates in 3D space*/
    static getNoise (x: number, y: number, z: number): number;
    /**Generates noise for the 3D coordinates using the specified number of  octaves and parameters*/
    static getNoise (x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 2D coordinates using the specified number of  octaves and parameters*/
    static getNoise (x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 1D coordinates using the specified number of  octaves and parameters*/
    static getNoise (x: number, octaves: number, frequency: number, amplitude: number): number;
    /**Computes and returns the 3D noise for the given coordinates in 3D space*/
    noise (x: number, y: number, z: number): number
}

/**Creates perlin noise through unbiased octaves*/
export class PerlinOctaveGenerator extends OctaveGenerator {

}

/**Represents an object that may be assigned permissions*/
export interface Permissible extends ServerOperator {
    /**Adds a new empty PermissionAttachment to this object*/
    addAttachment (plugin: Plugin): PermissionAttachment;
    /**Temporarily adds a new empty PermissionAttachment to this  object*/
    addAttachment (plugin: Plugin, ticks: number): PermissionAttachment;
    /**Adds a new PermissionAttachment with a single permission by  name and value*/
    addAttachment (plugin: Plugin, name: String, value: boolean): PermissionAttachment;
    /**Temporarily adds a new PermissionAttachment with a single  permission by name and value*/
    addAttachment (plugin: Plugin, name: String, value: boolean, ticks: number): PermissionAttachment;
    /**Gets a set containing all of the permissions currently in effect by  this object*/
    getEffectivePermissions (): Set<PermissionAttachmentInfo>;
    /**Gets the value of the specified permission, if set.*/
    hasPermission (name: String): boolean;
    /**Gets the value of the specified permission, if set.*/
    hasPermission (perm: Permission): boolean;
    /**Checks if this object contains an override for the specified  permission, by fully qualified name*/
    isPermissionSet (name: String): boolean;
    /**Checks if this object contains an override for the specified Permission*/
    isPermissionSet (perm: Permission): boolean;
    /**Recalculates the permissions for this object, if the attachments have  changed values.*/
    recalculatePermissions (): void;
    /**Removes the given PermissionAttachment from this object*/
    removeAttachment (attachment: PermissionAttachment): void
}

/**Base Permissible for use in any Permissible object via proxy or extension*/
export class PermissibleBase extends Object implements Permissible {
    /**Adds a new empty PermissionAttachment to this object*/
    addAttachment (plugin: Plugin): PermissionAttachment;
    /**Temporarily adds a new empty PermissionAttachment to this  object*/
    addAttachment (plugin: Plugin, ticks: number): PermissionAttachment;
    /**Adds a new PermissionAttachment with a single permission by  name and value*/
    addAttachment (plugin: Plugin, name: String, value: boolean): PermissionAttachment;
    /**Temporarily adds a new PermissionAttachment with a single  permission by name and value*/
    addAttachment (plugin: Plugin, name: String, value: boolean, ticks: number): PermissionAttachment;
    clearPermissions (): void;
    /**Gets a set containing all of the permissions currently in effect by  this object*/
    getEffectivePermissions (): Set<PermissionAttachmentInfo>;
    /**Gets the value of the specified permission, if set.*/
    hasPermission (inName: String): boolean;
    /**Gets the value of the specified permission, if set.*/
    hasPermission (perm: Permission): boolean;
    /**Checks if this object is a server operator*/
    isOp (): boolean;
    /**Checks if this object contains an override for the specified  permission, by fully qualified name*/
    isPermissionSet (name: String): boolean;
    /**Checks if this object contains an override for the specified Permission*/
    isPermissionSet (perm: Permission): boolean;
    /**Recalculates the permissions for this object, if the attachments have  changed values.*/
    recalculatePermissions (): void;
    /**Removes the given PermissionAttachment from this object*/
    removeAttachment (attachment: PermissionAttachment): void;
    /**Sets the operator status of this object*/
    setOp (value: boolean): void
}

/**Represents a unique permission that may be attached to a Permissible*/
export class Permission extends Object {
    /**Adds this permission to the specified parent permission.*/
    addParent (name: String, value: boolean): Permission;
    /**Adds this permission to the specified parent permission.*/
    addParent (perm: Permission, value: boolean): void;
    /**Gets the children of this permission.*/
    getChildren (): Map<String,Boolean>;
    /**Gets the default value of this permission.*/
    getDefault (): PermissionDefault;
    /**Gets a brief description of this permission, may be empty*/
    getDescription (): String;
    /**Returns the unique fully qualified name of this Permission*/
    getName (): String;
    /**Gets a set containing every Permissible that has this  permission.*/
    getPermissibles (): Set<Permissible>;
    /**Loads a Permission from a map of data, usually used from retrieval from  a yaml file.*/
    static loadPermission (name: String, data: Map<X,X>, def: PermissionDefault, output: List<Permission>): Permission;
    /**Loads a Permission from a map of data, usually used from retrieval from  a yaml file.*/
    static loadPermission (name: String, data: Map<String,Object>): Permission;
    /**Loads a list of Permissions from a map of data, usually used from  retrieval from a yaml file.*/
    static loadPermissions (data: Map<X,X>, error: String, def: PermissionDefault): List<Permission>;
    /**Recalculates all Permissibles that contain this permission.*/
    recalculatePermissibles (): void;
    /**Sets the default value of this permission.*/
    setDefault (value: PermissionDefault): void;
    /**Sets the description of this permission.*/
    setDescription (value: String): void
}

/**Holds information about a permission attachment on a Permissible  object*/
export class PermissionAttachment extends Object {
    /**Gets the Permissible that this is attached to*/
    getPermissible (): Permissible;
    /**Gets a copy of all set permissions and values contained within this  attachment.*/
    getPermissions (): Map<String,Boolean>;
    /**Gets the plugin responsible for this attachment*/
    getPlugin (): Plugin;
    /**Gets the class that was previously set to be called when this  attachment was removed from a Permissible.*/
    getRemovalCallback (): PermissionRemovedExecutor;
    /**Removes this attachment from its registered Permissible*/
    remove (): boolean;
    /**Sets a permission to the given value, by its fully qualified name*/
    setPermission (name: String, value: boolean): void;
    /**Sets a permission to the given value*/
    setPermission (perm: Permission, value: boolean): void;
    /**Sets an object to be called for when this attachment is removed from a  Permissible.*/
    setRemovalCallback (ex: PermissionRemovedExecutor): void;
    /**Removes the specified permission from this attachment.*/
    unsetPermission (name: String): void;
    /**Removes the specified permission from this attachment.*/
    unsetPermission (perm: Permission): void
}

/**Holds information on a permission and which PermissionAttachment  provides it*/
export class PermissionAttachmentInfo extends Object {
    /**Gets the attachment providing this permission.*/
    getAttachment (): PermissionAttachment;
    /**Gets the permissible this is attached to*/
    getPermissible (): Permissible;
    /**Gets the permission being set*/
    getPermission (): String;
    /**Gets the value of this permission*/
    getValue (): boolean
}

/**Represents the possible default values for permissions*/
export class PermissionDefault extends Enum<PermissionDefault> {
    static FALSE: PermissionDefault;
    static NOT_OP: PermissionDefault;
    static OP: PermissionDefault;
    static TRUE: PermissionDefault
}

/**Represents a class which is to be notified when a PermissionAttachment is removed from a Permissible*/
export interface PermissionRemovedExecutor {
    /**Called when a PermissionAttachment is removed from a Permissible*/
    attachmentRemoved (attachment: PermissionAttachment): void
}

/**This interface represents the context in which the PersistentDataType can  serialize and deserialize the passed values.*/
export interface PersistentDataAdapterContext {
    /**Creates a new and empty meta container instance.*/
    newPersistentDataContainer (): PersistentDataContainer
}

/**This interface represents a map like object, capable of storing custom tags  in it.*/
export interface PersistentDataContainer {
    /**Returns the metadata value that is stored on the  PersistentDataHolder instance.*/
    get <T,Z>(key: NamespacedKey, type: PersistentDataType<T,Z>): Z;
    /**Returns the adapter context this tag container uses.*/
    getAdapterContext (): PersistentDataAdapterContext;
    /**Get a set of keys present on this PersistentDataContainer  instance.*/
    getKeys (): Set<NamespacedKey>;
    /**Returns the metadata value that is stored on the  PersistentDataHolder instance.*/
    getOrDefault <T,Z>(key: NamespacedKey, type: PersistentDataType<T,Z>, defaultValue: Z): Z;
    /**Returns if the persistent metadata provider has metadata registered  matching the provided parameters.*/
    has <T,Z>(key: NamespacedKey, type: PersistentDataType<T,Z>): boolean;
    /**Returns if the container instance is empty, therefore has no entries  inside it.*/
    isEmpty (): boolean;
    /**Removes a custom key from the PersistentDataHolder instance.*/
    remove (key: NamespacedKey): void;
    /**Stores a metadata value on the PersistentDataHolder instance.*/
    set <T,Z>(key: NamespacedKey, type: PersistentDataType<T,Z>, value: Z): void
}

/**The PersistentDataHolder interface defines an object that can store  custom persistent meta data on it.*/
export interface PersistentDataHolder {
    /**Returns a custom tag container capable of storing tags on the object.*/
    getPersistentDataContainer (): PersistentDataContainer
}

/**This class represents an enum with a generic content type. It defines the  types a custom tag can have.    This interface can be used to create your own custom  PersistentDataType with different complex types. This may be useful  for the likes of a UUIDTagType:     public class UUIDTagType implements PersistentDataType<byte[], UUID> {           {@literal @Override}          public Class<byte[]> getPrimitiveType() {              return byte[].class;          }           {@literal @Override}          public Class<UUID> getComplexType() {              return UUID.class;          }           {@literal @Override}          public byte[] toPrimitive(UUID complex, PersistentDataAdapterContext context) {              ByteBuffer bb = ByteBuffer.wrap(new byte[16]);              bb.putLong(complex.getMostSignificantBits());              bb.putLong(complex.getLeastSignificantBits());              return bb.array();          }           {@literal @Override}          public UUID fromPrimitive(byte[] primitive, PersistentDataAdapterContext context) {              ByteBuffer bb = ByteBuffer.wrap(primitive);              long firstLong = bb.getLong();              long secondLong = bb.getLong();              return new UUID(firstLong, secondLong);          }      }*/
export interface PersistentDataType<T,Z> {
    /**Creates a complex object based of the passed primitive value*/
    fromPrimitive (primitive: T, context: PersistentDataAdapterContext): Z;
    /**Returns the complex object type the primitive value resembles.*/
    getComplexType (): Class<Z>;
    /**Returns the primitive data type of this tag.*/
    getPrimitiveType (): Class<T>;
    /**Returns the primitive data that resembles the complex object passed to  this method.*/
    toPrimitive (complex: Z, context: PersistentDataAdapterContext): T
}

/**A default implementation that simply exists to pass on the retrieved or  inserted value to the next layer.    This implementation does not add any kind of logic, but is used to  provide default implementations for the primitive types.*/
export class PersistentDataType$PrimitivePersistentDataType<T> extends Object implements PersistentDataType<T,T> {
    /**Creates a complex object based of the passed primitive value*/
    fromPrimitive (primitive: T, context: PersistentDataAdapterContext): T;
    /**Returns the complex object type the primitive value resembles.*/
    getComplexType (): Class<T>;
    /**Returns the primitive data type of this tag.*/
    getPrimitiveType (): Class<T>;
    /**Returns the primitive data that resembles the complex object passed to  this method.*/
    toPrimitive (complex: T, context: PersistentDataAdapterContext): T
}

/**Represents a phantom.*/
export interface Phantom extends Flying {
    getSize (): number;
    /**Get the UUID of the entity that caused this phantom to spawn*/
    getSpawningEntity (): UUID;
    setSize (sz: number): void
}

/**Called when a phantom is spawned for an exhausted player*/
export class PhantomPreSpawnEvent extends PreCreatureSpawnEvent {
    /**Get the entity this phantom is spawning for*/
    getSpawningEntity (): Entity
}

/**Represents a Pig.*/
export interface Pig extends Steerable, Vehicle {

}

/**Represents a Piglin.*/
export interface Piglin extends PiglinAbstract {
    /**Get whether the piglin is able to hunt hoglins.*/
    isAbleToHunt (): boolean;
    /**Sets whether the piglin is able to hunt hoglins.*/
    setIsAbleToHunt (flag: boolean): void
}

/**Piglin / Piglin Brute.*/
export interface PiglinAbstract extends Monster, Ageable {
    /**Gets the amount of ticks until this entity will be converted to a  Zombified Piglin.*/
    getConversionTime (): number;
    /**Get if this entity is in the process of converting to a Zombified Piglin.*/
    isConverting (): boolean;
    /**Gets whether the piglin is immune to zombification.*/
    isImmuneToZombification (): boolean;
    /**Sets the amount of ticks until this entity will be converted to a  Zombified Piglin.*/
    setConversionTime (time: number): void;
    /**Sets whether the piglin is immune to zombification.*/
    setImmuneToZombification (flag: boolean): void
}

/**Represents a Piglin Brute.*/
export interface PiglinBrute extends PiglinAbstract {

}

/**Stores data for pigs being zapped*/
export class PigZapEvent extends EntityZapEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Pig;
    /**Gets the bolt which is striking the pig.*/
    getLightning (): LightningStrike;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a Pig Zombie.*/
export interface PigZombie extends Zombie {
    /**Get the pig zombie's current anger level.*/
    getAnger (): number;
    /**Not applicable to this entity*/
    getConversionTime (): number;
    /**Shorthand; gets whether the zombie is angry.*/
    isAngry (): boolean;
    /**Not applicable to this entity*/
    isConverting (): boolean;
    /**Set the pig zombie's current anger level.*/
    setAnger (level: number): void;
    /**Shorthand; sets to either 0 or the default level.*/
    setAngry (angry: boolean): void;
    /**Not applicable to this entity*/
    setConversionTime (time: number): void
}

/**Called when a Pig Zombie is angered by another entity.    If the event is cancelled, the pig zombie will not be angered.*/
export class PigZombieAngerEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): PigZombie;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new anger resulting from this event.*/
    getNewAnger (): number;
    /**Gets the entity (if any) which triggered this anger update.*/
    getTarget (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the new anger resulting from this event.*/
    setNewAnger (newAnger: number): void
}

/**Illager entity.*/
export interface Pillager extends Illager, InventoryHolder {

}

/**'extended' denotes whether the piston head is currently extended or not.*/
export interface Piston extends Directional {
    /**Gets the value of the 'extended' property.*/
    isExtended (): boolean;
    /**Sets the value of the 'extended' property.*/
    setExtended (extended: boolean): void
}

/**'short' denotes this piston head is shorter than the usual amount because it  is currently retracting.*/
export interface PistonHead extends TechnicalPiston {
    /**Gets the value of the 'short' property.*/
    isShort (): boolean;
    /**Sets the value of the 'short' property.*/
    setShort (_short: boolean): void
}

/**Represents how a block or entity will react when interacting with a piston  when it is extending or retracting.*/
export class PistonMoveReaction extends Enum<PistonMoveReaction> {
    /**Indicates that the block will resist being pushed or pulled.*/
    static BLOCK: PistonMoveReaction;
    /**Indicates the block is fragile and will break if pushed on.*/
    static BREAK: PistonMoveReaction;
    /**Indicates that the entity will ignore any interaction(s) with  pistons.*/
    static IGNORE: PistonMoveReaction;
    /**Indicates that the block can be pushed or pulled.*/
    static MOVE: PistonMoveReaction;
    /**Indicates that the block can only be pushed by pistons, not pulled.*/
    static PUSH_ONLY: PistonMoveReaction
}

/**Represents a player, connected or not*/
export interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient, NetworkClient {
    /**Applies the mending effect to any items just as picking up an orb would.*/
    applyMending (amount: number): number;
    /**Permanently Bans the Profile and IP address currently used by the player.*/
    banPlayerFull (reason: String): BanEntry;
    /**Permanently Bans the Profile and IP address currently used by the player.*/
    banPlayerFull (reason: String, source: String): BanEntry;
    /**Bans the Profile and IP address currently used by the player.*/
    banPlayerFull (reason: String, expires: Date): BanEntry;
    /**Bans the Profile and IP address currently used by the player.*/
    banPlayerFull (reason: String, expires: Date, source: String): BanEntry;
    /**Permanently Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String): BanEntry;
    /**Permanently Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String, kickPlayer: boolean): BanEntry;
    /**Permanently Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String, source: String): BanEntry;
    /**Permanently Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String, source: String, kickPlayer: boolean): BanEntry;
    /**Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String, expires: Date): BanEntry;
    /**Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String, expires: Date, kickPlayer: boolean): BanEntry;
    /**Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String, expires: Date, source: String): BanEntry;
    /**Bans the IP address currently used by the player.*/
    banPlayerIP (reason: String, expires: Date, source: String, kickPlayer: boolean): BanEntry;
    /**Checks to see if a player has been hidden from this player*/
    canSee (player: Player): boolean;
    /**Says a message (or runs a command).*/
    chat (msg: String): void;
    /**Gets the socket address of this player*/
    getAddress (): InetSocketAddress;
    /**Return the player's progression on the specified advancement.*/
    getAdvancementProgress (advancement: Advancement): AdvancementProgress;
    /**Get whether the player can affect mob spawning*/
    getAffectsSpawning (): boolean;
    /**Determines if the Player is allowed to fly via jump key double-tap like  in creative mode.*/
    getAllowFlight (): boolean;
    /**Gets the Location where the player will spawn at their bed, null if  they have not slept in one or their current bed spawn is invalid.*/
    getBedSpawnLocation (): Location;
    /**Returns player's client brand name.*/
    getClientBrandName (): String;
    getClientOption <T>(option: ClientOption<T>): T;
    /**Get the player's current client side view distance.*/
    getClientViewDistance (): number;
    /**Get the previously set compass target.*/
    getCompassTarget (): Location;
    /**Returns the amount of ticks the current cooldown lasts*/
    getCooldownPeriod (): number;
    /**Returns the percentage of attack power available based on the cooldown (zero to one).*/
    getCooledAttackStrength (adjustTicks: number): number;
    /**Gets the "friendly" name to display of this player.*/
    getDisplayName (): String;
    /**Gets the players current exhaustion level.*/
    getExhaustion (): number;
    /**Gets the players current experience points towards the next level.*/
    getExp (): number;
    /**Gets the current allowed speed that a client can fly.*/
    getFlySpeed (): number;
    /**Gets the players current food level*/
    getFoodLevel (): number;
    /**Gets the number that health is scaled to for the client.*/
    getHealthScale (): number;
    /**Gets the players current experience level*/
    getLevel (): number;
    /**Gets the player's current locale.*/
    getLocale (): String;
    /**Gets the currently displayed player list footer for this player.*/
    getPlayerListFooter (): String;
    /**Gets the currently displayed player list header for this player.*/
    getPlayerListHeader (): String;
    /**Gets the name that is shown on the player list.*/
    getPlayerListName (): String;
    /**Gets a copy of this players profile*/
    getPlayerProfile (): PlayerProfile;
    /**Returns the player's current timestamp.*/
    getPlayerTime (): number;
    /**Returns the player's current time offset relative to server time, or  the current player's fixed time if the player's time is absolute.*/
    getPlayerTimeOffset (): number;
    /**Returns the type of weather the player is currently experiencing.*/
    getPlayerWeather (): WeatherType;
    getResourcePackStatus (): PlayerResourcePackStatusEvent$Status;
    /**Gets the players current saturation level.*/
    getSaturation (): number;
    /**Gets the Scoreboard displayed to this player*/
    getScoreboard (): Scoreboard;
    /**Gets the entity which is followed by the camera when in  GameMode.SPECTATOR.*/
    getSpectatorTarget (): Entity;
    /**Gets the players total experience points.*/
    getTotalExperience (): number;
    /**Gets the view distance for this player*/
    getViewDistance (): number;
    /**Gets the current allowed speed that a client can walk.*/
    getWalkSpeed (): number;
    /**Gives the player the amount of experience specified.*/
    giveExp (amount: number): void;
    /**Gives the player the amount of experience specified.*/
    giveExp (amount: number, applyMending: boolean): void;
    /**Gives the player the amount of experience levels specified.*/
    giveExpLevels (amount: number): void;
    hasResourcePack (): boolean;
    /**Hides a player from this player*/
    hidePlayer (plugin: Plugin, player: Player): void;
    /**Hide any title that is currently visible to the player*/
    hideTitle (): void;
    /**Checks to see if this player is currently flying or not.*/
    isFlying (): boolean;
    /**Gets if the client is displayed a 'scaled' health, that is, health on a  scale from 0-getHealthScale().*/
    isHealthScaled (): boolean;
    /**Returns true if the player's time is relative to the server time,  otherwise the player's time is absolute and will not change its current  time unless done so with setPlayerTime().*/
    isPlayerTimeRelative (): boolean;
    /**Returns whether the player is sleeping ignored.*/
    isSleepingIgnored (): boolean;
    /**Returns if the player is in sneak mode*/
    isSneaking (): boolean;
    /**Gets whether the player is sprinting or not.*/
    isSprinting (): boolean;
    /**Kicks player with custom kick message.*/
    kickPlayer (message: String): void;
    /**Loads the players current location, health, inventory, motion, and  other information from the username.dat file, in the world/player  folder.*/
    loadData (): void;
    /**Open a Material.WRITTEN_BOOK for a Player*/
    openBook (book: ItemStack): void;
    /**Makes the player perform the given command*/
    performCommand (command: String): boolean;
    /**Plays an effect to just this player.*/
    playEffect <T>(loc: Location, effect: Effect, data: T): void;
    /**Play a note for a player at a location.*/
    playNote (loc: Location, instrument: Instrument, note: Note): void;
    /**Play a sound for a player at the location.*/
    playSound (location: Location, sound: String, volume: number, pitch: number): void;
    /**Play a sound for a player at the location.*/
    playSound (location: Location, sound: String, category: SoundCategory, volume: number, pitch: number): void;
    /**Play a sound for a player at the location.*/
    playSound (location: Location, sound: Sound, volume: number, pitch: number): void;
    /**Play a sound for a player at the location.*/
    playSound (location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
    /**Reset the cooldown counter to 0, effectively starting the cooldown period.*/
    resetCooldown (): void;
    /**Restores the normal condition where the player's time is synchronized  with the server time.*/
    resetPlayerTime (): void;
    /**Restores the normal condition where the player's weather is controlled  by server conditions.*/
    resetPlayerWeather (): void;
    /**Resets the title displayed to the player.*/
    resetTitle (): void;
    /**Saves the players current location, health, inventory, motion, and  other information into the username.dat file, in the world/player  folder*/
    saveData (): void;
    /**Sends an Action Bar message to the client.*/
    sendActionBar (alternateChar: char, message: String): void;
    /**Sends an Action Bar message to the client.*/
    sendActionBar (message: String): void;
    /**Sends an Action Bar message to the client.*/
    sendActionBar (...message: BaseComponent[]): void;
    /**Send a block change.*/
    sendBlockChange (loc: Location, block: BlockData): void;
    /**Send an experience change.*/
    sendExperienceChange (progress: number): void;
    /**Send an experience change.*/
    sendExperienceChange (progress: number, level: number): void;
    /**Render a map and send it to the player in its entirety.*/
    sendMap (map: MapView): void;
    /**Sends the component to the player*/
    sendMessage (component: BaseComponent): void;
    /**Sends an array of components as a single message to the player*/
    sendMessage (...components: BaseComponent[]): void;
    /**Sends this sender a message raw*/
    sendRawMessage (message: String): void;
    /**Send a sign change.*/
    sendSignChange (loc: Location, lines: String[]): void;
    /**Send a sign change.*/
    sendSignChange (loc: Location, lines: String[], dyeColor: DyeColor): void;
    /**Show the title to the player, overriding any previously displayed title.*/
    sendTitle (title: Title): void;
    /**Sends a title and a subtitle message to the player.*/
    sendTitle (title: String, subtitle: String, fadeIn: number, stay: number, fadeOut: number): void;
    /**Set whether the player can affect mob spawning*/
    setAffectsSpawning (affects: boolean): void;
    /**Sets if the Player is allowed to fly via jump key double-tap like in  creative mode.*/
    setAllowFlight (flight: boolean): void;
    /**Sets the Location where the player will spawn at their bed.*/
    setBedSpawnLocation (location: Location): void;
    /**Sets the Location where the player will spawn at their bed.*/
    setBedSpawnLocation (location: Location, force: boolean): void;
    /**Set the target of the player's compass.*/
    setCompassTarget (loc: Location): void;
    /**Sets the "friendly" name to display of this player.*/
    setDisplayName (name: String): void;
    /**Sets the players current exhaustion level*/
    setExhaustion (value: number): void;
    /**Sets the players current experience points towards the next level*/
    setExp (exp: number): void;
    /**Makes this player start or stop flying.*/
    setFlying (value: boolean): void;
    /**Sets the speed at which a client will fly.*/
    setFlySpeed (value: number): void;
    /**Sets the players current food level*/
    setFoodLevel (value: number): void;
    /**Sets the number to scale health to for the client; this will also  setHealthScaled(true).*/
    setHealthScale (scale: number): void;
    /**Sets if the client is displayed a 'scaled' health, that is, health on a  scale from 0-getHealthScale().*/
    setHealthScaled (scale: boolean): void;
    /**Sets the players current experience level*/
    setLevel (level: number): void;
    /**Sets the currently displayed player list footer for this player.*/
    setPlayerListFooter (footer: String): void;
    /**Sets the currently displayed player list header for this player.*/
    setPlayerListHeader (header: String): void;
    /**Sets the currently displayed player list header and footer for this  player.*/
    setPlayerListHeaderFooter (header: String, footer: String): void;
    /**Set the text displayed in the player list header and footer for this player*/
    setPlayerListHeaderFooter (header: BaseComponent[], footer: BaseComponent[]): void;
    /**Set the text displayed in the player list header and footer for this player*/
    setPlayerListHeaderFooter (header: BaseComponent, footer: BaseComponent): void;
    /**Sets the name that is shown on the in-game player list.*/
    setPlayerListName (name: String): void;
    /**Changes the PlayerProfile for this player.*/
    setPlayerProfile (profile: PlayerProfile): void;
    /**Sets the current time on the player's client.*/
    setPlayerTime (time: number, relative: boolean): void;
    /**Sets the type of weather the player will see.*/
    setPlayerWeather (type: WeatherType): void;
    /**Request that the player's client download and switch resource packs.*/
    setResourcePack (url: String, hash: number[]): void;
    /**Request that the player's client download and switch resource packs.*/
    setResourcePack (url: String, hash: String): void;
    /**Sets the players current saturation level*/
    setSaturation (value: number): void;
    /**Sets the player's visible Scoreboard.*/
    setScoreboard (scoreboard: Scoreboard): void;
    /**Sets whether the player is ignored as not sleeping.*/
    setSleepingIgnored (isSleeping: boolean): void;
    /**Sets the sneak mode the player*/
    setSneaking (sneak: boolean): void;
    /**Sets the entity which is followed by the camera when in  GameMode.SPECTATOR.*/
    setSpectatorTarget (entity: Entity): void;
    /**Sets whether the player is sprinting or not.*/
    setSprinting (sprinting: boolean): void;
    /**Sets the players current experience points.*/
    setTotalExperience (exp: number): void;
    /**Sets the view distance for this player*/
    setViewDistance (viewDistance: number): void;
    /**Sets the speed at which a client will walk.*/
    setWalkSpeed (value: number): void;
    /**Allows this player to see a player that was previously hidden.*/
    showPlayer (plugin: Plugin, player: Player): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, x: number, y: number, z: number, count: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, x: number, y: number, z: number, count: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, location: Location, count: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, location: Location, count: number, data: T): void;
    spigot (): Player$Spigot;
    /**Stop the specified sound from playing.*/
    stopSound (sound: String): void;
    /**Stop the specified sound from playing.*/
    stopSound (sound: String, category: SoundCategory): void;
    /**Stop the specified sound from playing.*/
    stopSound (sound: Sound): void;
    /**Stop the specified sound from playing.*/
    stopSound (sound: Sound, category: SoundCategory): void;
    /**Update the list of commands sent to the client.*/
    updateCommands (): void;
    /**Forces an update of the player's entire inventory.*/
    updateInventory (): void;
    /**Show the title to the player, overriding any previously displayed title.*/
    updateTitle (title: Title): void
}

export class Player$Spigot extends Entity$Spigot {
    /**Gets all players hidden with Player.hidePlayer(org.bukkit.entity.Player).*/
    getHiddenPlayers (): Set<Player>;
    getPing (): number;
    /**Gets the connection address of this player, regardless of whether it  has been spoofed or not.*/
    getRawAddress (): InetSocketAddress;
    /**Respawns the player if dead.*/
    respawn (): void;
    /**Sends this sender a chat component.*/
    sendMessage (component: BaseComponent): void;
    /**Sends an array of components as a single message to the sender.*/
    sendMessage (...components: BaseComponent[]): void
}

/**Called when a player is granted a criteria in an advancement.*/
export class PlayerAdvancementCriterionGrantEvent extends PlayerEvent implements Cancellable {
    /**Get the advancement which has been affected.*/
    getAdvancement (): Advancement;
    /**Get the criterion which has been granted.*/
    getCriterion (): String;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a player has completed all criteria in an advancement.*/
export class PlayerAdvancementDoneEvent extends PlayerEvent {
    /**Get the advancement which has been completed.*/
    getAdvancement (): Advancement;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Represents a player animation event*/
export class PlayerAnimationEvent extends PlayerEvent implements Cancellable {
    /**Get the type of this animation event*/
    getAnimationType (): PlayerAnimationType;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Different types of player animations*/
export class PlayerAnimationType extends Enum<PlayerAnimationType> {
    static ARM_SWING: PlayerAnimationType
}

/**Called when the player themselves change their armor items    Not currently called for environmental factors though it MAY BE IN THE FUTURE*/
export class PlayerArmorChangeEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new item that's replacing the old*/
    getNewItem (): ItemStack;
    /**Gets the existing item that's being replaced*/
    getOldItem (): ItemStack;
    /**Gets the type of slot being altered.*/
    getSlotType (): PlayerArmorChangeEvent$SlotType;
    toString (): String
}

export class PlayerArmorChangeEvent$SlotType extends Enum<PlayerArmorChangeEvent$SlotType> {
    static CHEST: PlayerArmorChangeEvent$SlotType;
    static FEET: PlayerArmorChangeEvent$SlotType;
    static HEAD: PlayerArmorChangeEvent$SlotType;
    static LEGS: PlayerArmorChangeEvent$SlotType
}

/**Called when a player interacts with an armor stand and will either swap, retrieve or place an item.*/
export class PlayerArmorStandManipulateEvent extends PlayerInteractEntityEvent {
    /**Returns the item held by the armor stand.*/
    getArmorStandItem (): ItemStack;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the item held by the player.*/
    getPlayerItem (): ItemStack;
    /**Gets the entity that was right-clicked by the player.*/
    getRightClicked (): ArmorStand;
    /**Returns the raw item slot of the armor stand in this event.*/
    getSlot (): EquipmentSlot
}

/**Called when processing a player's attack on an entity when the player's attack strength cooldown is reset*/
export class PlayerAttackEntityCooldownResetEvent extends PlayerEvent implements Cancellable {
    /**Returns the entity attacked by the player*/
    getAttackedEntity (): Entity;
    /**Get the value of the players cooldown attack strength when they initiated the attack*/
    getCooledAttackStrength (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Cancelling this event will prevent the target player from having their cooldown reset from attacking this entity*/
    setCancelled (cancel: boolean): void
}

/**Thrown when a player attempts to pick an item up from the ground*/
export class PlayerAttemptPickupItemEvent extends PlayerEvent implements Cancellable {
    /**Gets if the item will fly at the player*/
    getFlyAtPlayer (): boolean;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Item attempted by the player.*/
    getItem (): Item;
    /**Gets the amount that will remain on the ground, if any*/
    getRemaining (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set if the item will fly at the player*/
    setFlyAtPlayer (flyAtPlayer: boolean): void
}

/**This event is fired when the player is almost about to enter the bed.*/
export class PlayerBedEnterEvent extends PlayerEvent implements Cancellable {
    /**Returns the bed block involved in this event.*/
    getBed (): Block;
    /**This describes the default outcome of this event.*/
    getBedEnterResult (): PlayerBedEnterEvent$BedEnterResult;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the action to take with the interacted bed.*/
    setUseBed (useBed: Event$Result): void;
    /**This controls the action to take with the bed that was clicked on.*/
    useBed (): Event$Result
}

/**Represents the default possible outcomes of this event.*/
export class PlayerBedEnterEvent$BedEnterResult extends Enum<PlayerBedEnterEvent$BedEnterResult> {
    /**The world doesn't allow sleeping (ex.*/
    static NOT_POSSIBLE_HERE: PlayerBedEnterEvent$BedEnterResult;
    /**Entering the bed is prevented due to it not being night nor  thundering currently.*/
    static NOT_POSSIBLE_NOW: PlayerBedEnterEvent$BedEnterResult;
    /**Entering the bed is prevented due to there being monsters nearby.*/
    static NOT_SAFE: PlayerBedEnterEvent$BedEnterResult;
    /**The player will enter the bed.*/
    static OK: PlayerBedEnterEvent$BedEnterResult;
    /**Entering the bed is prevented due to there being some other problem.*/
    static OTHER_PROBLEM: PlayerBedEnterEvent$BedEnterResult;
    /**Entering the bed is prevented due to the player being too far away.*/
    static TOO_FAR_AWAY: PlayerBedEnterEvent$BedEnterResult
}

/**This event is fired when the player is leaving a bed.*/
export class PlayerBedLeaveEvent extends PlayerEvent {
    /**Returns the bed block involved in this event.*/
    getBed (): Block;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Set if this event should set the new spawn location for the  Player.*/
    setSpawnLocation (setBedSpawn: boolean): void;
    /**Get if this event should set the new spawn location for the  Player.*/
    shouldSetSpawnLocation (): boolean
}

/**Called when a player empties a bucket*/
export class PlayerBucketEmptyEvent extends PlayerBucketEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when a player interacts with a Bucket*/
export class PlayerBucketEvent extends PlayerEvent implements Cancellable {
    /**Gets the block involved in this event.*/
    getBlock (): Block;
    /**Return the block clicked*/
    getBlockClicked (): Block;
    /**Get the face on the clicked block*/
    getBlockFace (): BlockFace;
    /**Returns the bucket used in this event*/
    getBucket (): Material;
    /**The hand used to perform this action.*/
    getHand (): EquipmentSlot;
    /**Get the resulting item in hand after the bucket event*/
    getItemStack (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the item in hand after the event*/
    setItemStack (itemStack: ItemStack): void
}

/**Called when a player fills a bucket*/
export class PlayerBucketFillEvent extends PlayerBucketEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when a player changes their main hand in the client settings.*/
export class PlayerChangedMainHandEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new main hand of the player.*/
    getMainHand (): MainHand
}

/**Called when a player switches to another world.*/
export class PlayerChangedWorldEvent extends PlayerEvent {
    /**Gets the world the player is switching from.*/
    getFrom (): World;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**This event is called after a player registers or unregisters a new plugin  channel.*/
export class PlayerChannelEvent extends PlayerEvent {
    getChannel (): String;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when the player changes his client settings*/
export class PlayerClientOptionsChangeEvent extends PlayerEvent {
    getChatVisibility (): ClientOption$ChatVisibility;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getLocale (): String;
    getMainHand (): MainHand;
    getSkinParts (): SkinParts;
    getViewDistance (): number;
    hasChatColorsEnabled (): boolean;
    hasChatColorsEnabledChanged (): boolean;
    hasChatVisibilityChanged (): boolean;
    hasLocaleChanged (): boolean;
    hasMainHandChanged (): boolean;
    hasSkinPartsChanged (): boolean;
    hasViewDistanceChanged (): boolean
}

/**This event is called whenever a player runs a command (by placing a slash  at the start of their message). It is called early in the command handling  process, and modifications in this event (via setMessage(String))  will be shown in the behavior.    Many plugins will have no use for this event, and you should  attempt to avoid using it if it is not necessary.    Some examples of valid uses for this event are:    Logging executed commands to a separate file  Variable substitution. For example, replacing      ${nearbyPlayer} with the name of the nearest other      player, or simulating the @a and @p      decorators used by Command Blocks in plugins that do not handle it.  Conditionally blocking commands belonging to other plugins. For      example, blocking the use of the /home command in a      combat arena.  Per-sender command aliases. For example, after a player runs the      command /calias cr gamemode creative, the next time they      run /cr, it gets replaced into      /gamemode creative. (Global command aliases should be      done by registering the alias.)      Examples of incorrect uses are:    Using this event to run command logic      If the event is cancelled, processing of the command will halt.    The state of whether or not there is a slash (/) at the  beginning of the message should be preserved. If a slash is added or  removed, unexpected behavior may result.*/
export class PlayerCommandPreprocessEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the command that the player is attempting to send.*/
    getMessage (): String;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the command that the player will send.*/
    setMessage (command: String): void;
    /**Sets the player that this command will be executed as.*/
    setPlayer (player: Player): void
}

/**This event is called when the list of available server commands is sent to  the player.    Commands may be removed from display using this event, but implementations  are not required to securely remove all traces of the command. If secure  removal of commands is required, then the command should be assigned a  permission which is not granted to the player.*/
export class PlayerCommandSendEvent extends PlayerEvent {
    /**Returns a mutable collection of all top level commands to be sent.*/
    getCommands (): Collection<String>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/** This event is invoked when a player has disconnected. It is guaranteed that,  if the server is in online-mode, that the provided uuid and username have been  validated.       The event is invoked for players who have not yet logged into the world, whereas  PlayerQuitEvent is only invoked on players who have logged into the world.       The event is invoked for players who have already logged into the world,  although whether or not the player exists in the world at the time of  firing is undefined. (That is, whether the plugin can retrieve a Player object  using the event parameters is undefined). However, it is guaranteed that this  event is invoked AFTER PlayerQuitEvent, if the player has already logged into the world.       This event is guaranteed to never fire unless AsyncPlayerPreLoginEvent has  been fired beforehand, and this event may not be called in parallel with  AsyncPlayerPreLoginEvent for the same connection.       Cancelling the AsyncPlayerPreLoginEvent guarantees the corresponding  PlayerConnectionCloseEvent is never called.       The event may be invoked asynchronously or synchronously. Plugins should check  Event.isAsynchronous() and handle accordingly.  */
export class PlayerConnectionCloseEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the player's IP address.*/
    getIpAddress (): InetAddress;
    /**Returns the name of the player disconnecting.*/
    getPlayerName (): String;
    /**Returns the UUID of the player disconnecting.*/
    getPlayerUniqueId (): UUID
}

/**Thrown whenever a Player dies*/
export class PlayerDeathEvent extends EntityDeathEvent {
    /**Get the death message that will appear to everyone on the server.*/
    getDeathMessage (): String;
    /**Returns the Entity involved in this event*/
    getEntity (): Player;
    /**A mutable collection to add items that the player should retain in their inventory on death (Similar to KeepInventory game rule)   You MUST remove the item from the .getDrops() collection too or it will duplicate!*/
    getItemsToKeep (): List<ItemStack>;
    /**Gets if the Player keeps inventory on death.*/
    getKeepInventory (): boolean;
    /**Gets if the Player should keep all EXP at respawn.*/
    getKeepLevel (): boolean;
    /**Gets how much EXP the Player should have at respawn.*/
    getNewExp (): number;
    /**Gets the Level the Player should have at respawn.*/
    getNewLevel (): number;
    /**Gets the Total EXP the Player should have at respawn.*/
    getNewTotalExp (): number;
    /**Set the death message that will appear to everyone on the server.*/
    setDeathMessage (deathMessage: String): void;
    /**Sets if the Player keeps inventory on death.*/
    setKeepInventory (keepInventory: boolean): void;
    /**Sets if the Player should keep all EXP at respawn.*/
    setKeepLevel (keepLevel: boolean): void;
    /**Sets how much EXP the Player should have at respawn.*/
    setNewExp (exp: number): void;
    /**Sets the Level the Player should have at respawn.*/
    setNewLevel (level: number): void;
    /**Sets the Total EXP the Player should have at respawn.*/
    setNewTotalExp (totalExp: number): void;
    setShouldDropExperience (doExpDrop: boolean): void;
    shouldDropExperience (): boolean
}

/**Thrown when a player drops an item from their inventory*/
export class PlayerDropItemEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the ItemDrop created by the player*/
    getItemDrop (): Item;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a player edits or signs a book and quill item. If the event is  cancelled, no changes are made to the BookMeta*/
export class PlayerEditBookEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the book meta that the player is attempting to add to the book.*/
    getNewBookMeta (): BookMeta;
    /**Gets the book meta currently on the book.*/
    getPreviousBookMeta (): BookMeta;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Gets whether or not the book is being signed.*/
    isSigning (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the book meta that will actually be added to the book.*/
    setNewBookMeta (newBookMeta: BookMeta): void;
    /**Sets whether or not the book is being signed.*/
    setSigning (signing: boolean): void
}

/**Called when a player throws an egg and it might hatch*/
export class PlayerEggThrowEvent extends PlayerEvent {
    /**Gets the egg involved in this event.*/
    getEgg (): Egg;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the type of the mob being hatched (EntityType.CHICKEN by default)*/
    getHatchingType (): EntityType;
    /**Get the number of mob hatches from the egg.*/
    getNumHatches (): number;
    /**Gets whether the egg is hatching or not.*/
    isHatching (): boolean;
    /**Sets whether the egg will hatch or not.*/
    setHatching (hatching: boolean): void;
    /**Change the type of mob being hatched by the egg*/
    setHatchingType (hatchType: EntityType): void;
    /**Change the number of mobs coming out of the hatched egg*/
    setNumHatches (numHatches: number): void
}

/**Fired when a player boosts elytra flight with a firework*/
export class PlayerElytraBoostEvent extends PlayerEvent implements Cancellable {
    /**Get the firework entity that was spawned*/
    getFirework (): Firework;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the firework itemstack used*/
    getItemStack (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set whether to consume the firework or not*/
    setShouldConsume (consume: boolean): void;
    /**Get whether to consume the firework or not*/
    shouldConsume (): boolean
}

/**Represents a player related event*/
export class PlayerEvent extends Event {
    /**Returns the player involved in this event*/
    getPlayer (): Player
}

/**Called when a players experience changes naturally*/
export class PlayerExpChangeEvent extends PlayerEvent {
    /**Get the amount of experience the player will receive*/
    getAmount (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the source that provided the experience.*/
    getSource (): Entity;
    /**Set the amount of experience the player will receive*/
    setAmount (amount: number): void
}

/**Thrown when a player is fishing*/
export class PlayerFishEvent extends PlayerEvent implements Cancellable {
    /**Gets the entity caught by the player.*/
    getCaught (): Entity;
    /**Gets the amount of experience received when fishing.*/
    getExpToDrop (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the fishing hook.*/
    getHook (): FishHook;
    /**Gets the state of the fishing*/
    getState (): PlayerFishEvent$State;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the amount of experience received when fishing.*/
    setExpToDrop (amount: number): void
}

/**An enum to specify the state of the fishing*/
export class PlayerFishEvent$State extends Enum<PlayerFishEvent$State> {
    /**Called when there is a bite on the hook and it is ready to be reeled  in.*/
    static BITE: PlayerFishEvent$State;
    /**When a player has successfully caught an entity.*/
    static CAUGHT_ENTITY: PlayerFishEvent$State;
    /**When a player has successfully caught a fish and is reeling it in.*/
    static CAUGHT_FISH: PlayerFishEvent$State;
    /**When a player fails to catch a bite while fishing usually due to  poor timing.*/
    static FAILED_ATTEMPT: PlayerFishEvent$State;
    /**When a player is fishing, ie casting the line out.*/
    static FISHING: PlayerFishEvent$State;
    /**When a bobber is stuck in the ground.*/
    static IN_GROUND: PlayerFishEvent$State;
    /**When a player reels in their hook without receiving any bites.*/
    static REEL_IN: PlayerFishEvent$State
}

/**Called when the GameMode of the player is changed.*/
export class PlayerGameModeChangeEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the GameMode the player is switched to.*/
    getNewGameMode (): GameMode;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**This event is fired during a player handshake.   If there are no listeners listening to this event, the logic default  to your server platform will be ran.   WARNING: TAMPERING WITH THIS EVENT CAN BE DANGEROUS*/
export class PlayerHandshakeEvent extends Event implements Cancellable {
    /**Gets the message to display to the client when authentication fails.*/
    getFailMessage (): String;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the original handshake string.*/
    getOriginalHandshake (): String;
    /**Gets the profile properties.*/
    getPropertiesJson (): String;
    /**Gets the server hostname string.*/
    getServerHostname (): String;
    /**Gets the socket address hostname string.*/
    getSocketAddressHostname (): String;
    /**Gets the unique id.*/
    getUniqueId (): UUID;
    /**Determines if this event is cancelled.*/
    isCancelled (): boolean;
    /**Determines if authentication failed.*/
    isFailed (): boolean;
    /**Sets if this event is cancelled.*/
    setCancelled (cancelled: boolean): void;
    /**Sets if authentication failed and the client should be disconnected.*/
    setFailed (failed: boolean): void;
    /**Sets the message to display to the client when authentication fails.*/
    setFailMessage (failMessage: String): void;
    /**Sets the profile properties.*/
    setPropertiesJson (propertiesJson: String): void;
    /**Sets the server hostname string.*/
    setServerHostname (serverHostname: String): void;
    /**Sets the socket address hostname string.*/
    setSocketAddressHostname (socketAddressHostname: String): void;
    /**Sets the unique id.*/
    setUniqueId (uniqueId: UUID): void
}

/**This event is called whenever a player harvests a block.    A 'harvest' is when a block drops an item (usually some sort of crop) and  changes state, but is not broken in order to drop the item.    This event is not called for when a block is broken, to handle that, listen  for BlockBreakEvent and  BlockDropItemEvent.*/
export class PlayerHarvestBlockEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the block that is being harvested.*/
    getHarvestedBlock (): Block;
    /**Gets a list of items that are being harvested from this block.*/
    getItemsHarvested (): List<ItemStack>;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents an event that is called when a player right clicks an entity that  also contains the location where the entity was clicked.    Note that the client may sometimes spuriously send this packet in addition to PlayerInteractEntityEvent.  Users are advised to listen to this (parent) class unless specifically required.    Note that interacting with Armor Stands fires this event only and not its parent and as such users are expressly required  to listen to this event for that scenario.*/
export class PlayerInteractAtEntityEvent extends PlayerInteractEntityEvent {
    getClickedPosition (): Vector;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Represents an event that is called when a player right clicks an entity.*/
export class PlayerInteractEntityEvent extends PlayerEvent implements Cancellable {
    /**The hand used to perform this interaction.*/
    getHand (): EquipmentSlot;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the entity that was right-clicked by the player.*/
    getRightClicked (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents an event that is called when a player interacts with an object or  air, potentially fired once for each hand. The hand can be determined using  getHand().    This event will fire as cancelled if the vanilla behavior is to do nothing  (e.g interacting with air). For the purpose of avoiding doubt, this means  that the event will only be in the cancelled state if it is fired as a result  of some prediction made by the server where no subsequent code will run,  rather than when the subsequent interaction activity (e.g. placing a block in  an illegal position (BlockCanBuildEvent) will fail.*/
export class PlayerInteractEvent extends PlayerEvent implements Cancellable {
    /**Returns the action type*/
    getAction (): Action;
    /**Returns the face of the block that was clicked*/
    getBlockFace (): BlockFace;
    /**Returns the clicked block*/
    getClickedBlock (): Block;
    /**The hand used to perform this interaction.*/
    getHand (): EquipmentSlot;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the item in hand represented by this event*/
    getItem (): ItemStack;
    /**Convenience method.*/
    getMaterial (): Material;
    /**Check if this event involved a block*/
    hasBlock (): boolean;
    /**Check if this event involved an item*/
    hasItem (): boolean;
    /**Convenience method to inform the user whether this was a block  placement event.*/
    isBlockInHand (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    setUseInteractedBlock (useInteractedBlock: Event$Result): void;
    setUseItemInHand (useItemInHand: Event$Result): void;
    /**This controls the action to take with the block (if any) that was  clicked on.*/
    useInteractedBlock (): Event$Result;
    /**This controls the action to take with the item the player is holding.*/
    useItemInHand (): Event$Result
}

/**Interface to the inventory of a Player, including the four armor slots and any extra slots.*/
export interface PlayerInventory extends Inventory {
    /**Get all ItemStacks from the armor slots*/
    getArmorContents (): ItemStack[];
    /**Return the ItemStack from the boots slot*/
    getBoots (): ItemStack;
    /**Return the ItemStack from the chestplate slot*/
    getChestplate (): ItemStack;
    /**Get all additional ItemStacks stored in this inventory.*/
    getExtraContents (): ItemStack[];
    /**Get the slot number of the currently held item*/
    getHeldItemSlot (): number;
    /**Return the ItemStack from the helmet slot*/
    getHelmet (): ItemStack;
    /**Gets the block or entity belonging to the open inventory*/
    getHolder (): HumanEntity;
    /**Gets the ItemStack at the given equipment slot in the inventory.*/
    getItem (slot: EquipmentSlot): ItemStack;
    /**Gets a copy of the item the player is currently holding  in their main hand.*/
    getItemInMainHand (): ItemStack;
    /**Gets a copy of the item the player is currently holding  in their off hand.*/
    getItemInOffHand (): ItemStack;
    /**Return the ItemStack from the leg slot*/
    getLeggings (): ItemStack;
    /**Put the given ItemStacks into the armor slots*/
    setArmorContents (items: ItemStack[]): void;
    /**Put the given ItemStack into the boots slot.*/
    setBoots (boots: ItemStack): void;
    /**Put the given ItemStack into the chestplate slot.*/
    setChestplate (chestplate: ItemStack): void;
    /**Put the given ItemStacks into the extra slots    See getExtraContents() for an explanation of extra slots.*/
    setExtraContents (items: ItemStack[]): void;
    /**Set the slot number of the currently held item.*/
    setHeldItemSlot (slot: number): void;
    /**Put the given ItemStack into the helmet slot.*/
    setHelmet (helmet: ItemStack): void;
    /**Stores the ItemStack at the given index of the inventory.*/
    setItem (index: number, item: ItemStack): void;
    /**Stores the ItemStack at the given equipment slot in the inventory.*/
    setItem (slot: EquipmentSlot, item: ItemStack): void;
    /**Sets the item the player is holding in their main hand.*/
    setItemInMainHand (item: ItemStack): void;
    /**Sets the item the player is holding in their off hand.*/
    setItemInOffHand (item: ItemStack): void;
    /**Put the given ItemStack into the leg slot.*/
    setLeggings (leggings: ItemStack): void
}

/**Fired when a player's item breaks (such as a shovel or flint and steel).    The item that's breaking will exist in the inventory with a stack size of  0. After the event, the item's durability will be reset to 0.*/
export class PlayerItemBreakEvent extends PlayerEvent {
    /**Gets the item that broke*/
    getBrokenItem (): ItemStack;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**This event will fire when a player is finishing consuming an item (food,  potion, milk bucket).    If the ItemStack is modified the server will use the effects of the new  item and not remove the original one from the player's inventory.    If the event is cancelled the effect will not be applied and the item will  not be removed from the player's inventory.*/
export class PlayerItemConsumeEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item that is being consumed.*/
    getItem (): ItemStack;
    /**Return the custom item stack that will replace the consumed item, or null if no  custom replacement has been set (which means the default replacement will be used).*/
    getReplacement (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the item being consumed*/
    setItem (item: ItemStack): void;
    /**Set a custom item stack to replace the consumed item.*/
    setReplacement (replacement: ItemStack): void
}

/**Called when an item used by the player takes durability damage as a result of  being used.*/
export class PlayerItemDamageEvent extends PlayerEvent implements Cancellable {
    /**Gets the amount of durability damage this item will be taking.*/
    getDamage (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item being damaged.*/
    getItem (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    setDamage (damage: number): void
}

/**Fired when a player changes their currently held item*/
export class PlayerItemHeldEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new held slot index*/
    getNewSlot (): number;
    /**Gets the previous held slot index*/
    getPreviousSlot (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents when a player has an item repaired via the Mending enchantment.    This event is fired directly before the PlayerExpChangeEvent, and the  results of this event directly affect the PlayerExpChangeEvent.*/
export class PlayerItemMendEvent extends PlayerEvent implements Cancellable {
    /**Get the experience orb triggering the event.*/
    getExperienceOrb (): ExperienceOrb;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the ItemStack to be repaired.*/
    getItem (): ItemStack;
    /**Get the amount the item is to be repaired.*/
    getRepairAmount (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void;
    /**Set the amount the item will be repaired.*/
    setRepairAmount (amount: number): void
}

/**Called when a player joins a server*/
export class PlayerJoinEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the join message to send to all online players*/
    getJoinMessage (): String;
    /**Sets the join message to send to all online players*/
    setJoinMessage (joinMessage: String): void
}

/**Called when the server detects the player is jumping.    Added to avoid the overhead and special case logic that many plugins use  when checking for jumps via PlayerMoveEvent, this event is fired whenever  the server detects that the player is jumping.*/
export class PlayerJumpEvent extends PlayerEvent implements Cancellable {
    /**Gets the location this player jumped from*/
    getFrom (): Location;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the location this player jumped to   This information is based on what the client sends, it typically  has little relation to the arc of the jump at any given point.*/
    getTo (): Location;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the location to mark as where the player jumped from*/
    setFrom (from: Location): void
}

/**Called when a player gets kicked from the server*/
export class PlayerKickEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the leave message send to all online players*/
    getLeaveMessage (): String;
    /**Gets the reason why the player is getting kicked*/
    getReason (): String;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the leave message send to all online players*/
    setLeaveMessage (leaveMessage: String): void;
    /**Sets the reason why the player is getting kicked*/
    setReason (kickReason: String): void
}

/**Called when a player shoots a projectile*/
export class PlayerLaunchProjectileEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the ItemStack used to fire the projectile*/
    getItemStack (): ItemStack;
    /**Gets the projectile which will be launched by this event*/
    getProjectile (): Projectile;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set whether to consume the ItemStack or not*/
    setShouldConsume (consumeItem: boolean): void;
    /**Get whether to consume the ItemStack or not*/
    shouldConsume (): boolean
}

/**Called immediately prior to a creature being leashed by a player.*/
export class PlayerLeashEntityEvent extends Event implements Cancellable {
    /**Returns the entity being leashed.*/
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the entity that is holding the leash.*/
    getLeashHolder (): Entity;
    /**Returns the player involved in this event*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a players level changes*/
export class PlayerLevelChangeEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new level of the player*/
    getNewLevel (): number;
    /**Gets the old level of the player*/
    getOldLevel (): number
}

/**Called when a player changes their locale in the client settings.*/
export class PlayerLocaleChangeEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getLocale (): String
}

/**Stores details for players attempting to log in.    Note that this event is called early in the player initialization  process. It is recommended that most options involving the Player  entity be postponed to the PlayerJoinEvent instead.*/
export class PlayerLoginEvent extends PlayerEvent {
    /**Allows the player to log in*/
    allow (): void;
    /**Disallows the player from logging in, with the given reason*/
    disallow (result: PlayerLoginEvent$Result, message: String): void;
    /**Gets the InetAddress for the Player associated with this event.*/
    getAddress (): InetAddress;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the hostname that the player used to connect to the server, or  blank if unknown*/
    getHostname (): String;
    /**Gets the current kick message that will be used if getResult() !=  Result.ALLOWED*/
    getKickMessage (): String;
    /**Gets the connection address of this player, regardless of whether it has been spoofed or not.*/
    getRealAddress (): InetAddress;
    /**Gets the current result of the login, as an enum*/
    getResult (): PlayerLoginEvent$Result;
    /**Sets the kick message to display if getResult() != Result.ALLOWED*/
    setKickMessage (message: String): void;
    /**Sets the new result of the login, as an enum*/
    setResult (result: PlayerLoginEvent$Result): void
}

/**Basic kick reasons for communicating to plugins*/
export class PlayerLoginEvent$Result extends Enum<PlayerLoginEvent$Result> {
    /**The player is allowed to log in*/
    static ALLOWED: PlayerLoginEvent$Result;
    /**The player is not allowed to log in, due to them being banned*/
    static KICK_BANNED: PlayerLoginEvent$Result;
    /**The player is not allowed to log in, due to the server being full*/
    static KICK_FULL: PlayerLoginEvent$Result;
    /**The player is not allowed to log in, for reasons undefined*/
    static KICK_OTHER: PlayerLoginEvent$Result;
    /**The player is not allowed to log in, due to them not being on the  white list*/
    static KICK_WHITELIST: PlayerLoginEvent$Result
}

/**Holds information for player movement events*/
export class PlayerMoveEvent extends PlayerEvent implements Cancellable {
    /**Gets the location this player moved from*/
    getFrom (): Location;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the location this player moved to*/
    getTo (): Location;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the location to mark as where the player moved from*/
    setFrom (from: Location): void;
    /**Sets the location that this player will move to*/
    setTo (to: Location): void
}

/**PlayerNamePrompt is the base class for any prompt that requires the player  to enter another player's name.*/
export class PlayerNamePrompt extends ValidatingPrompt {
    /**Override this method to accept and processes the validated input from  the user.*/
    acceptValidatedInput (context: ConversationContext, input: String): Prompt;
    /**Override this method to perform some action with the user's player name  response.*/
    acceptValidatedInput (context: ConversationContext, input: Player): Prompt;
    /**Override this method to check the validity of the player's input.*/
    isInputValid (context: ConversationContext, input: String): boolean
}

/**Fired when the server is calculating what chunks to try to spawn monsters in every Monster Spawn Tick event*/
export class PlayerNaturallySpawnCreaturesEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getSpawnRadius (): number;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    setSpawnRadius (radius: number): void
}

/**Thrown when a player picks up an arrow from the ground.*/
export class PlayerPickupArrowEvent extends PlayerPickupItemEvent {
    /**Get the arrow being picked up by the player*/
    getArrow (): AbstractArrow
}

/**Fired when a player is attempting to pick up an experience orb*/
export class PlayerPickupExperienceEvent extends PlayerEvent implements Cancellable {
    getExperienceOrb (): ExperienceOrb;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**If true, Cancels picking up the experience orb, leaving it in the world*/
    setCancelled (cancel: boolean): void
}

/**Called when a player is about to teleport because it is in contact with a  portal.    For other entities see EntityPortalEvent*/
export class PlayerPortalEvent extends PlayerTeleportEvent {
    /**Returns whether the server will attempt to create a destination portal or  not.*/
    getCanCreatePortal (): boolean;
    /**Gets the maximum radius the world is searched for a free space from the  given location.*/
    getCreationRadius (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the search radius value for finding an available portal.*/
    getSearchRadius (): number;
    /**Sets whether the server should attempt to create a destination portal or  not.*/
    setCanCreatePortal (canCreatePortal: boolean): void;
    /**Sets the maximum radius the world is searched for a free space from the  given location.*/
    setCreationRadius (creationRadius: number): void;
    /**Set the Block radius to search in for available portals.*/
    setSearchRadius (searchRadius: number): void
}

/**Fired after a player has respawned*/
export class PlayerPostRespawnEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the location of the respawned player*/
    getRespawnedLocation (): Location;
    /**Checks if the player respawned to their bed*/
    isBedSpawn (): boolean
}

/**Basic kick reasons for communicating to plugins*/
export class PlayerPreLoginEvent$Result extends Enum<PlayerPreLoginEvent$Result> {
    /**The player is allowed to log in*/
    static ALLOWED: PlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, due to them being banned*/
    static KICK_BANNED: PlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, due to the server being full*/
    static KICK_FULL: PlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, for reasons undefined*/
    static KICK_OTHER: PlayerPreLoginEvent$Result;
    /**The player is not allowed to log in, due to them not being on the  white list*/
    static KICK_WHITELIST: PlayerPreLoginEvent$Result
}

/**Represents a players profile for the game, such as UUID, Name, and textures.*/
export interface PlayerProfile {
    /**Clears all properties on this profile*/
    clearProperties (): void;
    /**If this profile is not complete, then make the API call to complete it.*/
    complete (): boolean;
    /**If this profile is not complete, then make the API call to complete it.*/
    complete (textures: boolean): boolean;
    /**If this profile is not complete, then make the API call to complete it.*/
    complete (textures: boolean, onlineMode: boolean): boolean;
    /**Like complete(boolean) but will try only from cache, and not make network calls  Does not account for textures.*/
    completeFromCache (): boolean;
    /**Like complete(boolean) but will try only from cache, and not make network calls  Does not account for textures.*/
    completeFromCache (onlineMode: boolean): boolean;
    /**Like complete(boolean) but will try only from cache, and not make network calls  Does not account for textures.*/
    completeFromCache (lookupUUID: boolean, onlineMode: boolean): boolean;
    getId (): UUID;
    getName (): String;
    getProperties (): Set<ProfileProperty>;
    /**Check if the Profile has the specified property*/
    hasProperty (property: String): boolean;
    /**Whether or not this Profile has textures associated to it*/
    hasTextures (): boolean;
    isComplete (): boolean;
    /**Removes all properties in the collection*/
    removeProperties (properties: Collection<ProfileProperty>): boolean;
    /**Removes a specific property from this profile*/
    removeProperty (property: ProfileProperty): boolean;
    /**Removes a specific property from this profile*/
    removeProperty (property: String): boolean;
    /**Sets this profiles UUID*/
    setId (uuid: UUID): UUID;
    /**Sets this profiles Name*/
    setName (name: String): String;
    /**Sets multiple properties.*/
    setProperties (properties: Collection<ProfileProperty>): void;
    /**Sets a property.*/
    setProperty (property: ProfileProperty): void
}

/**Called when a player leaves a server*/
export class PlayerQuitEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the quit message to send to all online players*/
    getQuitMessage (): String;
    /**Sets the quit message to send to all online players*/
    setQuitMessage (quitMessage: String): void
}

/**Called when a player is firing a bow and the server is choosing an arrow to use.*/
export class PlayerReadyArrowEvent extends PlayerEvent implements Cancellable {
    getArrow (): ItemStack;
    getBow (): ItemStack;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Whether or not use of this arrow is cancelled.*/
    isCancelled (): boolean;
    /**Cancel use of this arrow.*/
    setCancelled (cancel: boolean): void
}

/**Called when a player clicks a recipe in the recipe book*/
export class PlayerRecipeBookClickEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the namespaced key of the recipe that was clicked by the player*/
    getRecipe (): NamespacedKey;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Gets a boolean which indicates whether or not the player requested to make the maximum amount of results.*/
    isMakeAll (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets whether or not the maximum amount of results should be made.*/
    setMakeAll (makeAll: boolean): void;
    /**Changes what recipe is requested.*/
    setRecipe (recipe: NamespacedKey): void
}

/**Called when a player discovers a new recipe in the recipe book.*/
export class PlayerRecipeDiscoverEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the namespaced key of the discovered recipe.*/
    getRecipe (): NamespacedKey;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**This is called immediately after a player registers for a plugin channel.*/
export class PlayerRegisterChannelEvent extends PlayerChannelEvent {

}

/**Called when a player takes action on a resource pack request sent via  Player.setResourcePack(java.lang.String).*/
export class PlayerResourcePackStatusEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the status of this pack.*/
    getStatus (): PlayerResourcePackStatusEvent$Status
}

/**Status of the resource pack.*/
export class PlayerResourcePackStatusEvent$Status extends Enum<PlayerResourcePackStatusEvent$Status> {
    /**The client accepted the pack and is beginning a download of it.*/
    static ACCEPTED: PlayerResourcePackStatusEvent$Status;
    /**The client refused to accept the resource pack.*/
    static DECLINED: PlayerResourcePackStatusEvent$Status;
    /**The client accepted the pack, but download failed.*/
    static FAILED_DOWNLOAD: PlayerResourcePackStatusEvent$Status;
    /**The resource pack has been successfully downloaded and applied to the  client.*/
    static SUCCESSFULLY_LOADED: PlayerResourcePackStatusEvent$Status
}

/**Called when a player respawns.*/
export class PlayerRespawnEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the current respawn location*/
    getRespawnLocation (): Location;
    /**Gets whether the respawn location is the player's respawn anchor.*/
    isAnchorSpawn (): boolean;
    /**Gets whether the respawn location is the player's bed.*/
    isBedSpawn (): boolean;
    /**Sets the new respawn location*/
    setRespawnLocation (respawnLocation: Location): void
}

/**This event is fired when the player activates the riptide enchantment, using  their trident to propel them through the air.    N.B. the riptide action is currently performed client side, so manipulating  the player in this event may have undesired effects.*/
export class PlayerRiptideEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item containing the used enchantment.*/
    getItem (): ItemStack
}

/**Called when a player shears an entity*/
export class PlayerShearEntityEvent extends PlayerEvent implements Cancellable {
    /**Gets the entity the player is shearing*/
    getEntity (): Entity;
    /**Gets the hand used to shear the entity.*/
    getHand (): EquipmentSlot;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item used to shear the entity.*/
    getItem (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when player is about to spawn in a world after joining the server.*/
export class PlayerSpawnLocationEvent extends PlayerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets player's spawn location.*/
    getSpawnLocation (): Location;
    /**Sets player's spawn location.*/
    setSpawnLocation (location: Location): void
}

/**Triggered when a player starts spectating an entity in spectator mode.*/
export class PlayerStartSpectatingEntityEvent extends PlayerEvent implements Cancellable {
    /**Gets the entity that the player is currently spectating or themselves if they weren't spectating anything*/
    getCurrentSpectatorTarget (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the new entity that the player will now be spectating*/
    getNewSpectatorTarget (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a player statistic is incremented.    This event is not called for some high frequency statistics, e.g. movement  based statistics.*/
export class PlayerStatisticIncrementEvent extends PlayerEvent implements Cancellable {
    /**Gets the EntityType if getStatistic() is an  entity statistic otherwise returns null.*/
    getEntityType (): EntityType;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the Material if getStatistic() is a block  or item statistic otherwise returns null.*/
    getMaterial (): Material;
    /**Gets the new value of the statistic.*/
    getNewValue (): number;
    /**Gets the previous value of the statistic.*/
    getPreviousValue (): number;
    /**Gets the statistic that is being incremented.*/
    getStatistic (): Statistic;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Triggered when a player stops spectating an entity in spectator mode.*/
export class PlayerStopSpectatingEntityEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the entity that the player is spectating*/
    getSpectatorTarget (): Entity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a player swap items between main hand and off hand using the  hotkey.*/
export class PlayerSwapHandItemsEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item switched to the main hand.*/
    getMainHandItem (): ItemStack;
    /**Gets the item switched to the off hand.*/
    getOffHandItem (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the item in the main hand.*/
    setMainHandItem (mainHandItem: ItemStack): void;
    /**Sets the item in the off hand.*/
    setOffHandItem (offHandItem: ItemStack): void
}

/**This event is called when a player clicks the button to take a book of a  Lectern. If this event is cancelled the book remains on the lectern.*/
export class PlayerTakeLecternBookEvent extends PlayerEvent implements Cancellable {
    /**Gets the current ItemStack on the lectern.*/
    getBook (): ItemStack;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the lectern involved.*/
    getLectern (): Lectern;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Fired when a teleport is triggered for an End Gateway*/
export class PlayerTeleportEndGatewayEvent extends PlayerTeleportEvent {
    /**The gateway triggering the teleport*/
    getGateway (): EndGateway
}

/**Holds information for player teleport events*/
export class PlayerTeleportEvent extends PlayerMoveEvent {
    /**Gets the cause of this teleportation event*/
    getCause (): PlayerTeleportEvent$TeleportCause;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

export class PlayerTeleportEvent$TeleportCause extends Enum<PlayerTeleportEvent$TeleportCause> {
    /**Indicates the teleportation was caused by a player consuming chorus  fruit*/
    static CHORUS_FRUIT: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleportation was caused by a player executing a  command*/
    static COMMAND: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleportation was caused by a player entering an End  gateway*/
    static END_GATEWAY: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleportation was caused by a player entering an End  portal*/
    static END_PORTAL: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleporation was caused by a player throwing an Ender  Pearl*/
    static ENDER_PEARL: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleportation was caused by a player entering a  Nether portal*/
    static NETHER_PORTAL: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleportation was caused by a plugin*/
    static PLUGIN: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleportation was caused by a player teleporting to a  Entity/Player via the spectator menu*/
    static SPECTATE: PlayerTeleportEvent$TeleportCause;
    /**Indicates the teleportation was caused by an event not covered by  this enum*/
    static UNKNOWN: PlayerTeleportEvent$TeleportCause
}

/**Called when a player toggles their flying state*/
export class PlayerToggleFlightEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Returns whether the player is trying to start or stop flying.*/
    isFlying (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a player toggles their sneaking state*/
export class PlayerToggleSneakEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Returns whether the player is now sneaking or not.*/
    isSneaking (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a player toggles their sprinting state*/
export class PlayerToggleSprintEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Gets whether the player is now sprinting or not.*/
    isSprinting (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called prior to an entity being unleashed due to a player's action.*/
export class PlayerUnleashEntityEvent extends EntityUnleashEvent implements Cancellable {
    /**Returns the player who is unleashing the entity.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**This is called immediately after a player unregisters for a plugin channel.*/
export class PlayerUnregisterChannelEvent extends PlayerChannelEvent {

}

export class PlayerUseUnknownEntityEvent extends PlayerEvent {
    getEntityId (): number;
    getHand (): EquipmentSlot;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    isAttack (): boolean
}

/**Called when the velocity of a player changes.*/
export class PlayerVelocityEvent extends PlayerEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the velocity vector that will be sent to the player*/
    getVelocity (): Vector;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the velocity vector that will be sent to the player*/
    setVelocity (velocity: Vector): void
}

/**Represents a Plugin    The use of PluginBase is recommended for actual Implementation*/
export interface Plugin extends TabExecutor {
    /**Gets a FileConfiguration for this plugin, read through  "config.yml"*/
    getConfig (): FileConfiguration;
    /**Returns the folder that the plugin data's files are located in.*/
    getDataFolder (): File;
    /**Gets a ChunkGenerator for use in a default world, as specified  in the server configuration*/
    getDefaultWorldGenerator (worldName: String, id: String): ChunkGenerator;
    /**Returns the plugin.yaml file containing the details for this plugin*/
    getDescription (): PluginDescriptionFile;
    /**Returns the plugin logger associated with this server's logger.*/
    getLogger (): Logger;
    /**Returns the name of the plugin.*/
    getName (): String;
    /**Gets the associated PluginLoader responsible for this plugin*/
    getPluginLoader (): PluginLoader;
    /**Gets an embedded resource in this plugin*/
    getResource (filename: String): InputStream;
    /**Returns the Server instance currently running this plugin*/
    getServer (): Server;
    getSLF4JLogger (): org$slf4j$Logger;
    /**Returns a value indicating whether or not this plugin is currently  enabled*/
    isEnabled (): boolean;
    /**Simple boolean if we can still nag to the logs about things*/
    isNaggable (): boolean;
    /**Called when this plugin is disabled*/
    onDisable (): void;
    /**Called when this plugin is enabled*/
    onEnable (): void;
    /**Called after a plugin is loaded but before it has been enabled.*/
    onLoad (): void;
    /**Discards any data in getConfig() and reloads from disk.*/
    reloadConfig (): void;
    /**Saves the FileConfiguration retrievable by getConfig().*/
    saveConfig (): void;
    /**Saves the raw contents of the default config.yml file to the location  retrievable by getConfig().*/
    saveDefaultConfig (): void;
    /**Saves the raw contents of any resource embedded with a plugin's .jar  file assuming it can be found using getResource(String).*/
    saveResource (resourcePath: String, replace: boolean): void;
    /**Set naggable state*/
    setNaggable (canNag: boolean): void
}

/**Represents a concept that a plugin is aware of.    The internal representation may be singleton, or be a parameterized  instance, but must be immutable.*/
export interface PluginAwareness {

}

/**Each entry here represents a particular plugin's awareness. These can  be checked by using PluginDescriptionFile.getAwareness().contains(flag).*/
export class PluginAwareness$Flags extends Enum<PluginAwareness$Flags> implements PluginAwareness {
    /**Deprecated. all plugins are now assumed to be UTF-8 aware.*/
    static UTF8: PluginAwareness$Flags
}

/**Represents a base Plugin    Extend this class if your plugin is not a JavaPlugin*/
export class PluginBase extends Object implements Plugin {
    equals (obj: Object): boolean;
    /**Returns the name of the plugin.*/
    getName (): String;
    hashCode (): number
}

/**Represents the different directions a plugin channel may go.*/
export class PluginChannelDirection extends Enum<PluginChannelDirection> {
    /**The plugin channel is being sent to the server from a client.*/
    static INCOMING: PluginChannelDirection;
    /**The plugin channel is being sent to a client from the server.*/
    static OUTGOING: PluginChannelDirection
}

/**A ClassLoader for plugins, to allow shared classes across multiple plugins*/
export class PluginClassLoader extends URLClassLoader {
    close (): void;
    findClass (name: String): Class<X>;
    getPlugin (): JavaPlugin;
    getResource (name: String): URL;
    getResources (name: String): Enumeration<URL>;
    toString (): String
}

/**Represents a Command belonging to a plugin*/
export class PluginCommand extends Command implements PluginIdentifiableCommand {
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, commandLabel: String, args: String[]): boolean;
    /**Gets the CommandExecutor associated with this command*/
    getExecutor (): CommandExecutor;
    /**Gets the owner of this PluginCommand*/
    getPlugin (): Plugin;
    /**Gets the TabCompleter associated with this command.*/
    getTabCompleter (): TabCompleter;
    /**Sets the CommandExecutor to run when parsing this command*/
    setExecutor (executor: CommandExecutor): void;
    /**Sets the TabCompleter to run when tab-completing this command.*/
    setTabCompleter (completer: TabCompleter): void;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[]): List<String>;
    toString (): String
}

export class PluginCommandYamlParser extends Object {
    static parse (plugin: Plugin): List<Command>
}

/**This type is the runtime-container for the information in the plugin.yml.  All plugins must have a respective plugin.yml. For plugins written in java  using the standard plugin loader, this file must be in the root of the jar  file.    When Bukkit loads a plugin, it needs to know some basic information about  it. It reads this information from a YAML file, 'plugin.yml'. This file  consists of a set of attributes, each defined on a new line and with no  indentation.    Every (almost* every) method corresponds with a specific entry in the  plugin.yml. These are the required entries for every plugin.yml:    getName() - name  getVersion() - version  getMain() - main      Failing to include any of these items will throw an exception and cause the  server to ignore your plugin.    This is a list of the possible yaml keys, with specific details included in  the respective method documentations:    The description of the plugin.yml layout        Node      Method      Summary        name      getName()      The unique name of plugin        provides      getProvides()      The plugin APIs which this plugin provides        version      getVersion()      A plugin revision identifier        main      getMain()      The plugin's initial class file        authorauthors      getAuthors()      The plugin authors        contributors      getContributors()      The plugin contributors        description      getDescription()      Human readable plugin summary        website      getWebsite()      The URL to the plugin's site        prefix      getPrefix()      The token to prefix plugin log entries        load      getLoad()      The phase of server-startup this plugin will load during        depend      getDepend()      Other required plugins        softdepend      getSoftDepend()      Other plugins that add functionality        loadbefore      getLoadBefore()      The inverse softdepend        commands      getCommands()      The commands the plugin will register        permissions      getPermissions()      The permissions the plugin will register        default-permission      getPermissionDefault()      The default default permission          state for defined permissions the plugin          will register        awareness      getAwareness()      The concepts that the plugin acknowledges        api-version      getAPIVersion()      The API version which this plugin was programmed against        A plugin.yml example:name: Inferno provides: [Hell] version: 1.4.1 description: This plugin is so 31337. You can set yourself on fire. # We could place every author in the authors list, but chose not to for illustrative purposes # Also, having an author distinguishes that person as the project lead, and ensures their # name is displayed first author: CaptainInflamo authors: [Cogito, verrier, EvilSeph] contributors: [Choco, md_5] website: http://www.curse.com/server-mods/minecraft/myplugin  main: com.captaininflamo.bukkit.inferno.Inferno depend: [NewFire, FlameWire] api-version: 1.13  commands:   flagrate:     description: Set yourself on fire.     aliases: [combust_me, combustMe]     permission: inferno.flagrate     usage: Syntax error! Simply type /<command> to ignite yourself.   burningdeaths:     description: List how many times you have died by fire.     aliases: [burning_deaths, burningDeaths]     permission: inferno.burningdeaths     usage: |       /<command> [player]       Example: /<command> - see how many times you have burned to death       Example: /<command> CaptainIce - see how many times CaptainIce has burned to death  permissions:   inferno.*:     description: Gives access to all Inferno commands     children:       inferno.flagrate: true       inferno.burningdeaths: true       inferno.burningdeaths.others: true   inferno.flagrate:     description: Allows you to ignite yourself     default: true   inferno.burningdeaths:     description: Allows you to see how many times you have burned to death     default: true   inferno.burningdeaths.others:     description: Allows you to see how many times others have burned to death     default: op     children:       inferno.burningdeaths: true*/
export class PluginDescriptionFile extends Object {
    /**Gives the API version which this plugin is designed to support.*/
    getAPIVersion (): String;
    /**Gives the list of authors for the plugin.*/
    getAuthors (): List<String>;
    /**Gives a set of every PluginAwareness for a plugin.*/
    getAwareness (): Set<PluginAwareness>;
    /**Gives the map of command-name to command-properties.*/
    getCommands (): Map<String,Map<String,Object>>;
    /**Gives the list of contributors for the plugin.*/
    getContributors (): List<String>;
    /**Gives a list of other plugins that the plugin requires.*/
    getDepend (): List<String>;
    /**Gives a human-friendly description of the functionality the plugin  provides.*/
    getDescription (): String;
    /**Returns the name of a plugin, including the version.*/
    getFullName (): String;
    /**Gives the phase of server startup that the plugin should be loaded.*/
    getLoad (): PluginLoadOrder;
    /**Gets the list of plugins that should consider this plugin a  soft-dependency.*/
    getLoadBefore (): List<String>;
    /**Gives the fully qualified name of the main class for a plugin.*/
    getMain (): String;
    /**Gives the name of the plugin.*/
    getName (): String;
    /**Gives the default default state of  permissions registered for the plugin.*/
    getPermissionDefault (): PermissionDefault;
    /**Gives the list of permissions the plugin will register at runtime,  immediately proceding enabling.*/
    getPermissions (): List<Permission>;
    /**Gives the token to prefix plugin-specific logging messages with.*/
    getPrefix (): String;
    /**Gives the list of other plugin APIs which this plugin provides.*/
    getProvides (): List<String>;
    /**Gives a list of other plugins that the plugin requires for full  functionality.*/
    getSoftDepend (): List<String>;
    /**Gives the version of the plugin.*/
    getVersion (): String;
    /**Gives the plugin's or plugin's author's website.*/
    getWebsite (): String;
    /**Saves this PluginDescriptionFile to the given writer*/
    save (writer: Writer): void
}

/**Called when a plugin is disabled.*/
export class PluginDisableEvent extends PluginEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when a plugin is enabled.*/
export class PluginEnableEvent extends PluginEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Used for plugin enable and disable events*/
export class PluginEvent extends ServerEvent {
    /**Gets the plugin involved in this event*/
    getPlugin (): Plugin
}

/**This interface is used by the help system to group commands into  sub-indexes based on the Plugin they are a part of. Custom command  implementations will need to implement this interface to have a sub-index  automatically generated on the plugin's behalf.*/
export interface PluginIdentifiableCommand {
    /**Gets the owner of this PluginIdentifiableCommand.*/
    getPlugin (): Plugin
}

/**Represents a plugin loader, which handles direct access to specific types  of plugins*/
export interface PluginLoader {
    /**Creates and returns registered listeners for the event classes used in  this listener*/
    createRegisteredListeners (listener: Listener, plugin: Plugin): Map<Class<Event>,Set<RegisteredListener>>;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin): void;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin, closeClassloader: boolean): void;
    /**Enables the specified plugin*/
    enablePlugin (plugin: Plugin): void;
    /**Loads a PluginDescriptionFile from the specified file*/
    getPluginDescription (file: File): PluginDescriptionFile;
    /**Returns a list of all filename filters expected by this PluginLoader*/
    getPluginFileFilters (): Pattern[];
    /**Loads the plugin contained in the specified file*/
    loadPlugin (file: File): Plugin
}

/**Represents the order in which a plugin should be initialized and enabled*/
export class PluginLoadOrder extends Enum<PluginLoadOrder> {
    /**Indicates that the plugin will be loaded after the first/default world  was created*/
    static POSTWORLD: PluginLoadOrder;
    /**Indicates that the plugin will be loaded at startup*/
    static STARTUP: PluginLoadOrder
}

/**The PluginLogger class is a modified Logger that prepends all  logging calls with the name of the plugin doing the logging. The API for  PluginLogger is exactly the same as Logger.*/
export class PluginLogger extends Logger {
    log (logRecord: LogRecord): void
}

/**Handles all plugin management from the Server*/
export interface PluginManager {
    /**Adds a Permission to this plugin manager.*/
    addPermission (perm: Permission): void;
    /**Calls an event with the given details*/
    callEvent (event: Event): void;
    /**Disables and removes all plugins*/
    clearPlugins (): void;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin): void;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin, closeClassloader: boolean): void;
    /**Disables all the loaded plugins*/
    disablePlugins (): void;
    /**Enables the specified plugin*/
    enablePlugin (plugin: Plugin): void;
    /**Gets the default permissions for the given op status*/
    getDefaultPermissions (op: boolean): Set<Permission>;
    /**Gets a set containing all subscribed Permissibles to the given  default list, by op status*/
    getDefaultPermSubscriptions (op: boolean): Set<Permissible>;
    /**Gets a Permission from its fully qualified name*/
    getPermission (name: String): Permission;
    /**Gets a set of all registered permissions.*/
    getPermissions (): Set<Permission>;
    /**Gets a set containing all subscribed Permissibles to the given  permission, by name*/
    getPermissionSubscriptions (permission: String): Set<Permissible>;
    /**Checks if the given plugin is loaded and returns it when applicable*/
    getPlugin (name: String): Plugin;
    /**Gets a list of all currently loaded plugins*/
    getPlugins (): Plugin[];
    /**Checks if the given plugin is enabled or not*/
    isPluginEnabled (name: String): boolean;
    /**Checks if the given plugin is enabled or not*/
    isPluginEnabled (plugin: Plugin): boolean;
    /**Loads the plugin in the specified file*/
    loadPlugin (file: File): Plugin;
    /**Loads the plugins contained within the specified directory*/
    loadPlugins (directory: File): Plugin[];
    /**Recalculates the defaults for the given Permission.*/
    recalculatePermissionDefaults (perm: Permission): void;
    /**Registers the specified executor to the given event class*/
    registerEvent (event: Class<X>, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
    /**Registers the specified executor to the given event class*/
    registerEvent (event: Class<X>, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
    /**Registers all the events in the given listener class*/
    registerEvents (listener: Listener, plugin: Plugin): void;
    /**Registers the specified plugin loader*/
    registerInterface (loader: Class<X>): void;
    /**Removes a Permission registration from this plugin manager.*/
    removePermission (name: String): void;
    /**Removes a Permission registration from this plugin manager.*/
    removePermission (perm: Permission): void;
    /**Subscribes to the given Default permissions by operator status*/
    subscribeToDefaultPerms (op: boolean, permissible: Permissible): void;
    /**Subscribes the given Permissible for information about the requested  Permission, by name.*/
    subscribeToPermission (permission: String, permissible: Permissible): void;
    /**Unsubscribes from the given Default permissions by operator status*/
    unsubscribeFromDefaultPerms (op: boolean, permissible: Permissible): void;
    /**Unsubscribes the given Permissible for information about the requested  Permission, by name.*/
    unsubscribeFromPermission (permission: String, permissible: Permissible): void;
    /**Returns whether or not timing code should be used for event calls*/
    useTimings (): boolean
}

/**A listener for a specific Plugin Channel, which will receive notifications  of messages sent from a client.*/
export interface PluginMessageListener {
    /**A method that will be thrown when a PluginMessageSource sends a plugin  message on a registered channel.*/
    onPluginMessageReceived (channel: String, player: Player, message: number[]): void
}

/**Contains information about a Plugins registration to a plugin  channel.*/
export class PluginMessageListenerRegistration extends Object {
    equals (obj: Object): boolean;
    /**Gets the plugin channel that this registration is about.*/
    getChannel (): String;
    /**Gets the registered listener described by this registration.*/
    getListener (): PluginMessageListener;
    /**Gets the plugin that this registration is for.*/
    getPlugin (): Plugin;
    hashCode (): number;
    /**Checks if this registration is still valid.*/
    isValid (): boolean
}

/**Represents a possible recipient for a Plugin Message.*/
export interface PluginMessageRecipient {
    /**Gets a set containing all the Plugin Channels that this client is  listening on.*/
    getListeningPluginChannels (): Set<String>;
    /**Sends this recipient a Plugin Message on the specified outgoing  channel.*/
    sendPluginMessage (source: Plugin, channel: String, message: number[]): void
}

/**PluginNameConversationPrefix is a ConversationPrefix implementation  that displays the plugin name in front of conversation output.*/
export class PluginNameConversationPrefix extends Object implements ConversationPrefix {
    /**Prepends each conversation message with the plugin name.*/
    getPrefix (context: ConversationContext): String
}

export class PluginsCommand extends BukkitCommand {
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, currentAlias: String, args: String[]): boolean;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[]): List<String>
}

/**Represents a polar bear.*/
export interface PolarBear extends Animals {

}

/**Called when a portal is created*/
export class PortalCreateEvent extends WorldEvent implements Cancellable {
    /**Gets an array list of all the blocks associated with the created portal*/
    getBlocks (): List<BlockState>;
    /**Returns the Entity that triggered this portal creation (if available)*/
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the reason for the portal's creation*/
    getReason (): PortalCreateEvent$CreateReason;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**An enum to specify the various reasons for a portal's creation*/
export class PortalCreateEvent$CreateReason extends Enum<PortalCreateEvent$CreateReason> {
    /**When the target end platform is created as a result of a player  entering an end portal.*/
    static END_PLATFORM: PortalCreateEvent$CreateReason;
    /**When the blocks inside a portal are created due to a portal frame  being set on fire.*/
    static FIRE: PortalCreateEvent$CreateReason;
    /**When a nether portal frame and portal is created at the exit of an  entered nether portal.*/
    static NETHER_PAIR: PortalCreateEvent$CreateReason
}

/**Represents various types of portals that can be made in a world.*/
export class PortalType extends Enum<PortalType> {
    /**This is a custom Plugin portal.*/
    static CUSTOM: PortalType;
    /**This is an Ender portal.*/
    static ENDER: PortalType;
    /**This is a Nether portal, made of obsidian.*/
    static NETHER: PortalType
}

/**Represents an entity body pose.*/
export class Pose extends Enum<Pose> {
    /**Entity is dead.*/
    static DYING: Pose;
    /**Entity is gliding.*/
    static FALL_FLYING: Pose;
    /**Entity is sleeping.*/
    static SLEEPING: Pose;
    /**Entity is sneaking.*/
    static SNEAKING: Pose;
    /**Entity is riptiding with a trident.*/
    static SPIN_ATTACK: Pose;
    /**Entity is standing normally.*/
    static STANDING: Pose;
    /**Entity is swimming.*/
    static SWIMMING: Pose
}

/**Represents a brewer that can create PotionEffects.*/
export interface PotionBrewer {
    /**Creates a PotionEffect from the given PotionEffectType,  applying duration modifiers and checks.*/
    createEffect (potion: PotionEffectType, duration: number, amplifier: number): PotionEffect;
    /**Returns a collection of PotionEffect that would be applied from  a potion with the given type.*/
    getEffects (type: PotionType, upgraded: boolean, extended: boolean): Collection<PotionEffect>
}

export class PotionData extends Object {
    equals (obj: Object): boolean;
    /**Gets the type of the potion, Type matches up with each kind of craftable  potion*/
    getType (): PotionType;
    hashCode (): number;
    /**Checks if the potion is in an extended state.*/
    isExtended (): boolean;
    /**Checks if the potion is in an upgraded state.*/
    isUpgraded (): boolean
}

/**Represents a potion effect, that can be added to a LivingEntity. A  potion effect has a duration that it will last for, an amplifier that will  enhance its effects, and a PotionEffectType, that represents its  effect on an entity.*/
export class PotionEffect extends Object implements ConfigurationSerializable {
    /**Attempts to add the effect represented by this object to the given  LivingEntity.*/
    apply (entity: LivingEntity): boolean;
    equals (obj: Object): boolean;
    /**Returns the amplifier of this effect.*/
    getAmplifier (): number;
    /**Returns the duration (in ticks) that this effect will run for when  applied to a LivingEntity.*/
    getDuration (): number;
    /**Returns the PotionEffectType of this effect.*/
    getType (): PotionEffectType;
    hashCode (): number;
    hasIcon (): boolean;
    hasParticles (): boolean;
    /**Makes potion effect produce more, translucent, particles.*/
    isAmbient (): boolean;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    toString (): String;
    withAmbient (ambient: boolean): PotionEffect;
    withAmplifier (amplifier: number): PotionEffect;
    withDuration (duration: number): PotionEffect;
    withIcon (icon: boolean): PotionEffect;
    withParticles (particles: boolean): PotionEffect;
    withType (type: PotionEffectType): PotionEffect
}

/**Represents a type of potion and its effect on an entity.*/
export class PotionEffectType extends Object {
    /**Creates a PotionEffect from this PotionEffectType, applying duration  modifiers and checks.*/
    createEffect (duration: number, amplifier: number): PotionEffect;
    equals (obj: Object): boolean;
    /**Gets the effect type specified by the given name.*/
    static getByName (name: String): PotionEffectType;
    /**Returns the color of this effect type.*/
    getColor (): Color;
    /**Returns the name of this effect type.*/
    getName (): String;
    hashCode (): number;
    /**Returns whether the effect of this type happens once, immediately.*/
    isInstant (): boolean;
    /**Registers an effect type with the given object.*/
    static registerPotionEffectType (type: PotionEffectType): void;
    /**Stops accepting any effect type registrations.*/
    static stopAcceptingRegistrations (): void;
    toString (): String;
    /**Returns an array of all the registered PotionEffectTypes.*/
    static values (): PotionEffectType[]
}

export class PotionEffectTypeWrapper extends PotionEffectType {
    /**Returns the color of this effect type.*/
    getColor (): Color;
    /**Returns the duration modifier applied to effects of this type.*/
    getDurationModifier (): number;
    /**Returns the name of this effect type.*/
    getName (): String;
    /**Get the potion type bound to this wrapper.*/
    getType (): PotionEffectType;
    /**Returns whether the effect of this type happens once, immediately.*/
    isInstant (): boolean
}

/**Represents a potion or item that can have custom effects.*/
export interface PotionMeta extends ItemMeta {
    /**Adds a custom potion effect to this potion.*/
    addCustomEffect (effect: PotionEffect, overwrite: boolean): boolean;
    /**Removes all custom potion effects from this potion.*/
    clearCustomEffects (): boolean;
    clone (): PotionMeta;
    /**Returns the potion data about the base potion*/
    getBasePotionData (): PotionData;
    /**Gets the potion color that is set.*/
    getColor (): Color;
    /**Gets an immutable list containing all custom potion effects applied to  this potion.*/
    getCustomEffects (): List<PotionEffect>;
    /**Checks for existence of a potion color.*/
    hasColor (): boolean;
    /**Checks for a specific custom potion effect type on this potion.*/
    hasCustomEffect (type: PotionEffectType): boolean;
    /**Checks for the presence of custom potion effects.*/
    hasCustomEffects (): boolean;
    /**Removes a custom potion effect from this potion.*/
    removeCustomEffect (type: PotionEffectType): boolean;
    /**Sets the underlying potion data*/
    setBasePotionData (data: PotionData): void;
    /**Sets the potion color.*/
    setColor (color: Color): void
}

/**Called when a splash potion hits an area*/
export class PotionSplashEvent extends ProjectileHitEvent implements Cancellable {
    /**Retrieves a list of all effected entities*/
    getAffectedEntities (): Collection<LivingEntity>;
    /**Returns the Entity involved in this event*/
    getEntity (): ThrownPotion;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the intensity of the potion's effects for given entity; This  depends on the distance to the impact center*/
    getIntensity (entity: LivingEntity): number;
    /**Gets the potion which caused this event*/
    getPotion (): ThrownPotion;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Overwrites the intensity for a given entity*/
    setIntensity (entity: LivingEntity, intensity: number): void
}

/**This enum reflects and matches each potion state that can be obtained from  the Creative mode inventory*/
export class PotionType extends Enum<PotionType> {
    static AWKWARD: PotionType;
    static FIRE_RESISTANCE: PotionType;
    static INSTANT_DAMAGE: PotionType;
    static INSTANT_HEAL: PotionType;
    static INVISIBILITY: PotionType;
    static JUMP: PotionType;
    static LUCK: PotionType;
    static MUNDANE: PotionType;
    static NIGHT_VISION: PotionType;
    static POISON: PotionType;
    static REGEN: PotionType;
    static SLOW_FALLING: PotionType;
    static SLOWNESS: PotionType;
    static SPEED: PotionType;
    static STRENGTH: PotionType;
    static THICK: PotionType;
    static TURTLE_MASTER: PotionType;
    static UNCRAFTABLE: PotionType;
    static WATER: PotionType;
    static WATER_BREATHING: PotionType;
    static WEAKNESS: PotionType
}

/**'powered' indicates whether this block is in the powered state or not, i.e.  receiving a redstone current of power > 0.*/
export interface Powerable extends BlockData {
    /**Gets the value of the 'powered' property.*/
    isPowered (): boolean;
    /**Sets the value of the 'powered' property.*/
    setPowered (powered: boolean): void
}

/**Represents a powered minecart. A powered minecart moves on its own when a  player deposits fuel.*/
export interface PoweredMinecart extends Minecart {

}

/**WARNING: This event only fires for a limited number of cases, and not for every case that CreatureSpawnEvent does.   You should still listen to CreatureSpawnEvent as a backup, and only use this event as an "enhancement".  The intent of this event is to improve server performance, so limited use cases.    Currently: NATURAL and SPAWNER based reasons. Please submit a Pull Request for future additions.  Also, Plugins that replace Entity Registrations with their own custom entities might not fire this event.*/
export class PreCreatureSpawnEvent extends Event implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getReason (): CreatureSpawnEvent$SpawnReason;
    getSpawnLocation (): Location;
    getType (): EntityType;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Cancelling this event is more effecient than cancelling CreatureSpawnEvent*/
    setCancelled (cancel: boolean): void;
    /**Set this if you are more blanket blocking all types of these spawns, and wish to abort the spawn process from  trying more attempts after this cancellation.*/
    setShouldAbortSpawn (shouldAbortSpawn: boolean): void;
    shouldAbortSpawn (): boolean
}

/**Fired when the server is requesting to fill in properties of an incomplete profile, such as textures.   Allows plugins to pre populate cached properties and avoid a call to the Mojang API*/
export class PreFillProfileEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getPlayerProfile (): PlayerProfile;
    /**Sets the properties on the profile, avoiding the call to the Mojang API  Same as .getPlayerProfile().setProperties(properties);*/
    setProperties (properties: Collection<ProfileProperty>): void
}

/**Allows a plugin to intercept a Profile Lookup for a Profile by name   At the point of event fire, the UUID and properties are unset.   If a plugin sets the UUID, and optionally the properties, the API call to look up the profile may be skipped.   No guarantees are made about thread execution context for this event. If you need to know, check  event.isAsync()*/
export class PreLookupProfileEvent extends Event {
    /**Adds any properties currently missing to the prepopulated properties set, replacing any that already were set.*/
    addProfileProperties (properties: Set<ProfileProperty>): void;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getName (): String;
    getProfileProperties (): Set<ProfileProperty>;
    /**If this value is left null by the completion of the event call, then the server will  trigger a call to the Mojang API to look up the UUID (Network Request), and subsequently, fire a  LookupProfileEvent*/
    getUUID (): UUID;
    /**Clears any existing prepopulated properties and uses the supplied properties  Any property in this Set will be automatically prefilled on this Profile*/
    setProfileProperties (properties: Set<ProfileProperty>): void;
    /**Sets the UUID for this player name.*/
    setUUID (uuid: UUID): void
}

/**Called when an item is put in a slot for repair by an anvil.*/
export class PrepareAnvilEvent extends PrepareResultEvent {
    /**Gets the primary Inventory involved in this transaction*/
    getInventory (): AnvilInventory;
    /**Get result item, may be null.*/
    getResult (): ItemStack;
    setResult (result: ItemStack): void
}

export class PrepareItemCraftEvent extends InventoryEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the primary Inventory involved in this transaction*/
    getInventory (): CraftingInventory;
    /**Get the recipe that has been formed.*/
    getRecipe (): Recipe;
    /**Check if this event was triggered by a tool repair operation rather  than a crafting recipe.*/
    isRepair (): boolean
}

/**Called when an ItemStack is inserted in an enchantment table - can be  called multiple times*/
export class PrepareItemEnchantEvent extends InventoryEvent implements Cancellable {
    /**Gets the block being used to enchant the item*/
    getEnchantBlock (): Block;
    /**Gets the player enchanting the item*/
    getEnchanter (): Player;
    /**Get enchantment bonus in effect - corresponds to number of bookshelves*/
    getEnchantmentBonus (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the item to be enchanted.*/
    getItem (): ItemStack;
    /**Get a list of available EnchantmentOffer for the player.*/
    getOffers (): EnchantmentOffer[];
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when an item is put in an inventory containing a result slot*/
export class PrepareResultEvent extends InventoryEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get result item, may be null.*/
    getResult (): ItemStack;
    setResult (result: ItemStack): void
}

/**Called when an item is put in a slot for upgrade by a Smithing Table.*/
export class PrepareSmithingEvent extends PrepareResultEvent {
    /**Gets the primary Inventory involved in this transaction*/
    getInventory (): SmithingInventory;
    /**Get result item, may be null.*/
    getResult (): ItemStack;
    setResult (result: ItemStack): void
}

/**Called before an entity is spawned into a world by a spawner.   This only includes the spawner's location and not the full BlockState snapshot for performance reasons.  If you really need it you have to get the spawner yourself.*/
export class PreSpawnerSpawnEvent extends PreCreatureSpawnEvent {
    getSpawnerLocation (): Location
}

export interface PressureSensor {
    isPressed (): boolean
}

/**Represents a property on a PlayerProfile*/
export class ProfileProperty extends Object {
    equals (o: Object): boolean;
    getName (): String;
    getSignature (): String;
    getValue (): String;
    hashCode (): number;
    isSigned (): boolean
}

/**Fires when the server needs to verify if a player is whitelisted.   Plugins may override/control the servers whitelist with this event,  and dynamically change the kick message.*/
export class ProfileWhitelistVerifyEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getKickMessage (): String;
    getPlayerProfile (): PlayerProfile;
    isOp (): boolean;
    isWhitelisted (): boolean;
    isWhitelistEnabled (): boolean;
    setKickMessage (kickMessage: String): void;
    /**Changes the players whitelisted state.*/
    setWhitelisted (whitelisted: boolean): void
}

/**Represents a shootable entity.*/
export interface Projectile extends Entity {
    /**Determine if this projectile should bounce or not when it hits.*/
    doesBounce (): boolean;
    /**Retrieve the shooter of this projectile.*/
    getShooter (): ProjectileSource;
    /**Set whether or not this projectile should bounce or not when it hits  something.*/
    setBounce (doesBounce: boolean): void;
    /**Set the shooter of this projectile.*/
    setShooter (source: ProjectileSource): void
}

/**Called when an projectile collides with an entity    This event is called before EntityDamageByEntityEvent, and cancelling it will allow the projectile to continue flying*/
export class ProjectileCollideEvent extends EntityEvent implements Cancellable {
    /**Get the entity the projectile collided with*/
    getCollidedWith (): Entity;
    /**Get the projectile that collided*/
    getEntity (): Projectile;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a projectile hits an object*/
export class ProjectileHitEvent extends EntityEvent {
    /**Returns the Entity involved in this event*/
    getEntity (): Projectile;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the block that was hit, if it was a block that was hit.*/
    getHitBlock (): Block;
    /**Gets the block face that was hit, if it was a block that was hit and the  face was provided in the vent.*/
    getHitBlockFace (): BlockFace;
    /**Gets the entity that was hit, if it was an entity that was hit.*/
    getHitEntity (): Entity
}

/**Called when a projectile is launched.*/
export class ProjectileLaunchEvent extends EntitySpawnEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Projectile;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a valid source of a projectile.*/
export interface ProjectileSource {
    /**Launches a Projectile from the ProjectileSource.*/
    launchProjectile <T extends Projectile>(projectile: Class<X>): T;
    /**Launches a Projectile from the ProjectileSource with an  initial velocity.*/
    launchProjectile <T extends Projectile>(projectile: Class<X>, velocity: Vector): T
}

/**A Prompt is the main constituent of a Conversation. Each prompt  displays text to the user and optionally waits for a user's response.  Prompts are chained together into a directed graph that represents the  conversation flow. To halt a conversation, END_OF_CONVERSATION is returned  in liu of another Prompt object.*/
export interface Prompt extends Cloneable {
    /**Accepts and processes input from the user.*/
    acceptInput (context: ConversationContext, input: String): Prompt;
    /**Checks to see if this prompt implementation should wait for user input  or immediately display the next prompt.*/
    blocksForInput (context: ConversationContext): boolean;
    /**Gets the text to display to the user when this prompt is first  presented.*/
    getPromptText (context: ConversationContext): String
}

export interface ProxiedCommandSender extends CommandSender {
    /**Returns the CommandSender which is being used to call the command*/
    getCallee (): CommandSender;
    /**Returns the CommandSender which triggered this proxied command*/
    getCaller (): CommandSender
}

/**Represents a puffer fish.*/
export interface PufferFish extends Fish {
    /**Returns the current puff state of this fish (i.e.*/
    getPuffState (): number;
    /**Sets the current puff state of this fish (i.e.*/
    setPuffState (state: number): void
}

export interface Rabbit extends Animals {
    getRabbitType (): Rabbit$Type;
    setRabbitType (type: Rabbit$Type): void
}

/**Represents the various types a Rabbit might be.*/
export class Rabbit$Type extends Enum<Rabbit$Type> {
    /**Black rabbit.*/
    static BLACK: Rabbit$Type;
    /**Black with white patches, or white with black patchesX*/
    static BLACK_AND_WHITE: Rabbit$Type;
    /**Chocolate colored rabbit.*/
    static BROWN: Rabbit$Type;
    /**Golden bunny.*/
    static GOLD: Rabbit$Type;
    /**Salt and pepper colored, whatever that means.*/
    static SALT_AND_PEPPER: Rabbit$Type;
    /**Rabbit with pure white fur, blood red horizontal eyes, and is hostile to players.*/
    static THE_KILLER_BUNNY: Rabbit$Type;
    /**Pure white rabbit.*/
    static WHITE: Rabbit$Type
}

/**Represents a raid event.*/
export interface Raid {
    /**Gets the amount of ticks this raid has existed.*/
    getActiveTicks (): number;
    /**Gets the Bad Omen level of this raid.*/
    getBadOmenLevel (): number;
    /**Get the UUID of all heroes in this raid.*/
    getHeroes (): Set<UUID>;
    /**Gets the center location where the raid occurs.*/
    getLocation (): Location;
    /**Gets all remaining Raider in the present wave.*/
    getRaiders (): List<Raider>;
    /**Gets the number of raider groups which have spawned.*/
    getSpawnedGroups (): number;
    /**Gets the current status of the raid.*/
    getStatus (): Raid$RaidStatus;
    /**Gets the number of raider groups which would spawn.*/
    getTotalGroups (): number;
    /**Gets the sum of all raider's health.*/
    getTotalHealth (): number;
    /**Gets the number of waves in this raid (exclude the additional wave).*/
    getTotalWaves (): number;
    /**Get whether this raid started.*/
    isStarted (): boolean;
    /**Sets the Bad Omen level.*/
    setBadOmenLevel (badOmenLevel: number): void
}

/**Represents the status of a Raid.*/
export class Raid$RaidStatus extends Enum<Raid$RaidStatus> {
    /**The village has fallen (i.e.*/
    static LOSS: Raid$RaidStatus;
    /**The raid is in progress.*/
    static ONGOING: Raid$RaidStatus;
    /**The raid was terminated.*/
    static STOPPED: Raid$RaidStatus;
    /**The raid was beaten by heroes.*/
    static VICTORY: Raid$RaidStatus
}

export interface Raider extends Monster {
    /**Gets the block the raider is targeting to patrol.*/
    getPatrolTarget (): Block;
    /**Gets whether this mob can join an active raid.*/
    isCanJoinRaid (): boolean;
    /**Gets whether this entity is a patrol leader.*/
    isPatrolLeader (): boolean;
    /**Sets whether this mob can join an active raid.*/
    setCanJoinRaid (join: boolean): void;
    /**Sets whether this entity is a patrol leader.*/
    setPatrolLeader (leader: boolean): void;
    /**Sets the block the raider is targeting to patrol.*/
    setPatrolTarget (block: Block): void
}

/**Represents events related to raids.*/
export class RaidEvent extends WorldEvent {
    /**Returns the raid involved with this event.*/
    getRaid (): Raid
}

/**This event is called when a Raid was complete with a clear result.*/
export class RaidFinishEvent extends RaidEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns an immutable list contains all winners.*/
    getWinners (): List<Player>
}

/**Called when a raid wave spawns.*/
export class RaidSpawnWaveEvent extends RaidEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the patrol leader.*/
    getPatrolLeader (): Raider;
    /**Returns all Raider that spawned in this wave.*/
    getRaiders (): List<Raider>
}

/**Called when a Raid is stopped.*/
export class RaidStopEvent extends RaidEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the stop reason.*/
    getReason (): RaidStopEvent$Reason
}

export class RaidStopEvent$Reason extends Enum<RaidStopEvent$Reason> {
    /**Finished the raid.*/
    static FINISHED: RaidStopEvent$Reason;
    /**The place where the raid occurs no longer be a village.*/
    static NOT_IN_VILLAGE: RaidStopEvent$Reason;
    /**Because the difficulty has been changed to peaceful.*/
    static PEACE: RaidStopEvent$Reason;
    /**The raid took a long time without a final result.*/
    static TIMEOUT: RaidStopEvent$Reason;
    /**Couldn't find a suitable place to spawn raiders.*/
    static UNSPAWNABLE: RaidStopEvent$Reason
}

/**Called when a Raid is triggered (e.g: a player with Bad Omen effect  enters a village).*/
export class RaidTriggerEvent extends RaidEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Returns the player who triggered the raid.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**'shape' represents the current layout of a minecart rail.    Some types of rail may not be able to be laid out in all shapes, use  getShapes() to get those applicable to this block.*/
export interface Rail extends BlockData {
    /**Gets the value of the 'shape' property.*/
    getShape (): Rail$Shape;
    /**Gets the shapes which are applicable to this block.*/
    getShapes (): Set<Rail$Shape>;
    /**Sets the value of the 'shape' property.*/
    setShape (shape: Rail$Shape): void
}

/**The different types of shapes a rail block can occupy.*/
export class Rail$Shape extends Enum<Rail$Shape> {
    /**The rail ascends in the east (positive X) direction.*/
    static ASCENDING_EAST: Rail$Shape;
    /**The rail ascends in the north (negative Z) direction.*/
    static ASCENDING_NORTH: Rail$Shape;
    /**The rail ascends in the south (positive Z) direction.*/
    static ASCENDING_SOUTH: Rail$Shape;
    /**The rail ascends in the west (negative X) direction.*/
    static ASCENDING_WEST: Rail$Shape;
    /**The rail runs flat along the east/west (X) axis.*/
    static EAST_WEST: Rail$Shape;
    /**The rail forms a curve connecting the north and east faces of the  block.*/
    static NORTH_EAST: Rail$Shape;
    /**The rail runs flat along the north/south (Z) axis.*/
    static NORTH_SOUTH: Rail$Shape;
    /**The rail forms a curve connecting the north and west faces of the  block.*/
    static NORTH_WEST: Rail$Shape;
    /**The rail forms a curve connecting the south and east faces of the  block.*/
    static SOUTH_EAST: Rail$Shape;
    /**The rail forms a curve connecting the south and west faces of the  block.*/
    static SOUTH_WEST: Rail$Shape
}

export interface RangedEntity extends Mob {
    /**Alias to LivingEntity.isHandRaised(), if the entity is charging an attack*/
    isChargingAttack (): boolean;
    /**Attack the specified entity using a ranged attack.*/
    rangedAttack (target: LivingEntity, charge: number): void;
    /**Sets that the Entity is "charging" up an attack, by raising its hands*/
    setChargingAttack (raiseHands: boolean): void
}

/**Illager beast.*/
export interface Ravager extends Raider {

}

/**The hit result of a ray trace.    Only the hit position is guaranteed to always be available. The availability  of the other attributes depends on what got hit and on the context in which  the ray trace was performed.*/
export class RayTraceResult extends Object {
    equals (obj: Object): boolean;
    /**Gets the hit block.*/
    getHitBlock (): Block;
    /**Gets the hit block face.*/
    getHitBlockFace (): BlockFace;
    /**Gets the hit entity.*/
    getHitEntity (): Entity;
    /**Gets the exact position of the hit.*/
    getHitPosition (): Vector;
    hashCode (): number;
    toString (): String
}

/**Represents some type of crafting recipe.*/
export interface Recipe {
    /**Get the result of this recipe.*/
    getResult (): ItemStack
}

/**Represents a potential item match within a recipe. All choices within a  recipe must be satisfied for it to be craftable.   This class is not legal for implementation by plugins!*/
export interface RecipeChoice extends Predicate<ItemStack>, Cloneable {
    clone (): RecipeChoice;
    test (itemStack: ItemStack): boolean
}

/**Represents a choice of multiple matching Materials.*/
export class RecipeChoice$MaterialChoice extends Object implements RecipeChoice {
    clone (): RecipeChoice$MaterialChoice;
    equals (obj: Object): boolean;
    getChoices (): List<Material>;
    /**Gets a single item stack representative of this stack choice.*/
    getItemStack (): ItemStack;
    hashCode (): number;
    test (t: ItemStack): boolean;
    toString (): String
}

/**Indicated a Material that may carry or create a Redstone current*/
export interface Redstone {
    /**Gets the current state of this Material, indicating if it's powered or  unpowered*/
    isPowered (): boolean
}

/**A type of minecart rail which interacts with redstone in one way or another.*/
export interface RedstoneRail extends Powerable, Rail {

}

export interface RedstoneWallTorch extends Directional, Lightable {

}

/**'north', 'east', 'south', 'west' represent the types of connections this  redstone wire has to adjacent blocks.*/
export interface RedstoneWire extends AnaloguePowerable {
    /**Gets all of this faces which may be set on this block.*/
    getAllowedFaces (): Set<BlockFace>;
    /**Checks the type of connection on the specified face.*/
    getFace (face: BlockFace): RedstoneWire$Connection;
    /**Sets the type of connection on the specified face.*/
    setFace (face: BlockFace, connection: RedstoneWire$Connection): void
}

/**The way in which a redstone wire can connect to an adjacent block face.*/
export class RedstoneWire$Connection extends Enum<RedstoneWire$Connection> {
    /**The wire does not connect in this direction.*/
    static NONE: RedstoneWire$Connection;
    /**The wire travels flat from this face and into the adjacent block.*/
    static SIDE: RedstoneWire$Connection;
    /**The wire travels up the side of the block adjacent to this face.*/
    static UP: RedstoneWire$Connection
}

/**RegexPrompt is the base class for any prompt that requires an input  validated by a regular expression.*/
export class RegexPrompt extends ValidatingPrompt {
    /**Override this method to check the validity of the player's input.*/
    isInputValid (context: ConversationContext, input: String): boolean
}

/**Stores relevant information for plugin listeners*/
export class RegisteredListener extends Object {
    /**Calls the event executor*/
    callEvent (event: Event): void;
    /**Gets the listener for this registration*/
    getListener (): Listener;
    /**Gets the plugin for this registration*/
    getPlugin (): Plugin;
    /**Gets the priority for this registration*/
    getPriority (): EventPriority;
    /**Whether this listener accepts cancelled events*/
    isIgnoringCancelled (): boolean
}

/**A registered service provider.*/
export class RegisteredServiceProvider<T> extends Object implements Comparable<RegisteredServiceProvider<X>> {
    compareTo (other: RegisteredServiceProvider<X>): number;
    getPlugin (): Plugin;
    getPriority (): ServicePriority;
    getProvider (): T;
    getService (): Class<T>
}

/**Represents a registry of Bukkit objects that may be retrieved by  NamespacedKey.*/
export interface Registry<T extends Keyed> extends Iterable<T> {
    /**Get the object by its key.*/
    get (key: NamespacedKey): T
}

export class Registry$SimpleRegistry<T extends Enum<T> & Keyed> extends Object implements Registry<T> {
    /**Get the object by its key.*/
    get (key: NamespacedKey): T;
    iterator (): Iterator<T>
}

export class ReloadCommand extends BukkitCommand {
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, currentAlias: String, args: String[]): boolean;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[]): List<String>
}

export interface RemoteConsoleCommandSender extends CommandSender {

}

/**This event is called when a command is received over RCON. See the javadocs  of ServerCommandEvent for more information.*/
export class RemoteServerCommandEvent extends ServerCommandEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Controls the way in which an Objective is rendered client side.*/
export class RenderType extends Enum<RenderType> {
    /**Display number of hearts corresponding to value.*/
    static HEARTS: RenderType;
    /**Display integer value.*/
    static INTEGER: RenderType
}

/**Represents an item that can be repaired at an anvil.*/
export interface Repairable {
    clone (): Repairable;
    /**Gets the repair penalty*/
    getRepairCost (): number;
    /**Checks to see if this has a repair penalty*/
    hasRepairCost (): boolean;
    /**Sets the repair penalty*/
    setRepairCost (cost: number): void
}

/**'delay' is the propagation delay of a repeater, i.e. how many ticks before it  will be activated from a current change and propagate it to the next block.    Delay may not be lower than getMinimumDelay() or higher than  getMaximumDelay().    'locked' denotes whether the repeater is in the locked state or not.    A locked repeater will not change its output until it is unlocked. In game, a  locked repeater is created by having a constant current perpendicularly  entering the block.*/
export interface Repeater extends Directional, Powerable {
    /**Gets the value of the 'delay' property.*/
    getDelay (): number;
    /**Gets the maximum allowed value of the 'delay' property.*/
    getMaximumDelay (): number;
    /**Gets the minimum allowed value of the 'delay' property.*/
    getMinimumDelay (): number;
    /**Gets the value of the 'locked' property.*/
    isLocked (): boolean;
    /**Sets the value of the 'delay' property.*/
    setDelay (delay: number): void;
    /**Sets the value of the 'locked' property.*/
    setLocked (locked: boolean): void
}

/**A reputation score for a player on a villager.*/
export class Reputation extends Object {
    /**Gets the reputation value for a specific ReputationType.*/
    getReputation (type: ReputationType): number;
    /**Sets the reputation value for a specific ReputationType.*/
    setReputation (type: ReputationType, value: number): void
}

/**A type of reputation gained with a Villager.    All types but MAJOR_POSITIVE are shared to other villagers.*/
export class ReputationType extends Enum<ReputationType> {
    /**A gossip with a majorly negative effect.*/
    static MAJOR_NEGATIVE: ReputationType;
    /**A gossip with a major positive effect.*/
    static MAJOR_POSITIVE: ReputationType;
    /**A gossip with a minor negative effect.*/
    static MINOR_NEGATIVE: ReputationType;
    /**A gossip with a minor positive effect.*/
    static MINOR_POSITIVE: ReputationType;
    /**A gossip with a minor positive effect.*/
    static TRADING: ReputationType
}

/**Thrown if a plugin attempts to register for a reserved channel (such as  "REGISTER")*/
export class ReservedChannelException extends RuntimeException {

}

/**'charges' represents the amount of times the anchor may still be used.*/
export interface RespawnAnchor extends BlockData {
    /**Gets the value of the 'charges' property.*/
    getCharges (): number;
    /**Gets the maximum allowed value of the 'charges' property.*/
    getMaximumCharges (): number;
    /**Sets the value of the 'charges' property.*/
    setCharges (charges: number): void
}

/**Represents a minecart that can have certain entities as passengers. Normal passengers  include all living entities with  the exception of iron golems.  Non-player entities that meet normal passenger criteria automatically  mount these minecarts when close enough.*/
export interface RideableMinecart extends Minecart {

}

/**'rotation' represents the current rotation of this block.*/
export interface Rotatable extends BlockData {
    /**Gets the value of the 'rotation' property.*/
    getRotation (): BlockFace;
    /**Sets the value of the 'rotation' property.*/
    setRotation (rotation: BlockFace): void
}

/**An enum to specify a rotation based orientation, like that on a clock.    It represents how something is viewed, as opposed to cardinal directions.*/
export class Rotation extends Enum<Rotation> {
    /**Rotated clockwise by 90 degrees*/
    static CLOCKWISE: Rotation;
    /**Rotated clockwise by 135 degrees*/
    static CLOCKWISE_135: Rotation;
    /**Rotated clockwise by 45 degrees*/
    static CLOCKWISE_45: Rotation;
    /**Rotated counter-clockwise by 90 degrees*/
    static COUNTER_CLOCKWISE: Rotation;
    /**Rotated counter-clockwise by 45 degrees*/
    static COUNTER_CLOCKWISE_45: Rotation;
    /**Flipped upside-down, a 180 degree rotation*/
    static FLIPPED: Rotation;
    /**Flipped upside-down + 45 degree rotation*/
    static FLIPPED_45: Rotation;
    /**No rotation*/
    static NONE: Rotation
}

export interface SaddledHorseInventory extends AbstractHorseInventory {

}

export class SafeClassDefiner extends Object implements ClassDefiner {
    /**Define a class*/
    defineClass (parentLoader: ClassLoader, name: String, data: number[]): Class<X>
}

/**Represents a salmon fish.*/
export interface Salmon extends Fish {

}

/**Represents the three different types of Sandstone*/
export class SandstoneType extends Enum<SandstoneType> {
    static CRACKED: SandstoneType;
    static GLYPHED: SandstoneType;
    static SMOOTH: SandstoneType
}

/**'stage' represents the growth stage of a sapling.    When the sapling reaches getMaximumStage() it will attempt to grow  into a tree as the next stage.*/
export interface Sapling extends BlockData {
    /**Gets the maximum allowed value of the 'stage' property.*/
    getMaximumStage (): number;
    /**Gets the value of the 'stage' property.*/
    getStage (): number;
    /**Sets the value of the 'stage' property.*/
    setStage (stage: number): void
}

/**'bottom' indicates whether the scaffolding is floating or not.    'distance' indicates the distance from a scaffolding block placed above a  'bottom' scaffold.    When 'distance' reaches getMaximumDistance() the block will drop.*/
export interface Scaffolding extends Waterlogged {
    /**Gets the value of the 'distance' property.*/
    getDistance (): number;
    /**Gets the maximum allowed value of the 'distance' property.*/
    getMaximumDistance (): number;
    /**Gets the value of the 'bottom' property.*/
    isBottom (): boolean;
    /**Sets the value of the 'bottom' property.*/
    setBottom (bottom: boolean): void;
    /**Sets the value of the 'distance' property.*/
    setDistance (distance: number): void
}

/**A score entry for an entry on an objective. Changing this will not affect any other  objective or scoreboard.*/
export interface Score {
    /**Gets the entry being tracked by this Score*/
    getEntry (): String;
    /**Gets the Objective being tracked by this Score*/
    getObjective (): Objective;
    /**Gets the current score*/
    getScore (): number;
    /**Gets the scoreboard for the associated objective.*/
    getScoreboard (): Scoreboard;
    /**Shows if this score has been set at any point in time.*/
    isScoreSet (): boolean;
    /**Sets the current score.*/
    setScore (score: number): void
}

/**A scoreboard*/
export interface Scoreboard {
    /**Clears any objective in the specified slot.*/
    clearSlot (slot: DisplaySlot): void;
    /**Gets all entries tracked by this Scoreboard*/
    getEntries (): Set<String>;
    /**Gets a entries Team on this Scoreboard*/
    getEntryTeam (entry: String): Team;
    /**Gets an Objective on this Scoreboard by name*/
    getObjective (name: String): Objective;
    /**Gets the Objective currently displayed in a DisplaySlot on this  Scoreboard*/
    getObjective (slot: DisplaySlot): Objective;
    /**Gets all Objectives on this Scoreboard*/
    getObjectives (): Set<Objective>;
    /**Gets all Objectives of a Criteria on the Scoreboard*/
    getObjectivesByCriteria (criteria: String): Set<Objective>;
    /**Gets all scores for an entry on this Scoreboard*/
    getScores (entry: String): Set<Score>;
    /**Gets a Team by name on this Scoreboard*/
    getTeam (teamName: String): Team;
    /**Gets all teams on this Scoreboard*/
    getTeams (): Set<Team>;
    /**Registers an Objective on this Scoreboard*/
    registerNewObjective (name: String, criteria: String, displayName: String): Objective;
    /**Registers an Objective on this Scoreboard*/
    registerNewObjective (name: String, criteria: String, displayName: String, renderType: RenderType): Objective;
    /**Registers a Team on this Scoreboard*/
    registerNewTeam (name: String): Team;
    /**Removes all scores for an entry on this Scoreboard*/
    resetScores (entry: String): void
}

/**Manager of Scoreboards*/
export interface ScoreboardManager {
    /**Gets the primary Scoreboard controlled by the server.*/
    getMainScoreboard (): Scoreboard;
    /**Gets a new Scoreboard to be tracked by the server.*/
    getNewScoreboard (): Scoreboard
}

/**'pickles' indicates the number of pickles in this block.*/
export interface SeaPickle extends Waterlogged {
    /**Gets the maximum allowed value of the 'pickles' property.*/
    getMaximumPickles (): number;
    /**Gets the minimum allowed value of the 'pickles' property.*/
    getMinimumPickles (): number;
    /**Gets the value of the 'pickles' property.*/
    getPickles (): number;
    /**Sets the value of the 'pickles' property.*/
    setPickles (pickles: number): void
}

/**Represents a server implementation.*/
export interface Server extends PluginMessageRecipient {
    /**Adds a recipe to the crafting manager.*/
    addRecipe (recipe: Recipe): boolean;
    /**Get an iterator through all advancements.*/
    advancementIterator (): Iterator<Advancement>;
    /**Bans the specified address from the server.*/
    banIP (address: String): void;
    /**Broadcasts the specified message to every user with the given  permission name.*/
    broadcast (message: String, permission: String): number;
    /**Sends the component to all online players.*/
    broadcast (component: BaseComponent): void;
    /**Sends an array of components as a single message to all online players.*/
    broadcast (...components: BaseComponent[]): void;
    /**Broadcast a message to all players.*/
    broadcastMessage (message: String): number;
    /**Clears the list of crafting recipes.*/
    clearRecipes (): void;
    /**Creates a new BlockData instance with material and properties  parsed from provided data.*/
    createBlockData (data: String): BlockData;
    /**Creates a new BlockData instance for the specified Material, with  all properties initialized to unspecified defaults.*/
    createBlockData (material: Material): BlockData;
    /**Creates a new BlockData instance for the specified Material, with  all properties initialized to unspecified defaults, except for those  provided in data.*/
    createBlockData (material: Material, data: String): BlockData;
    /**Creates a new BlockData instance for the specified Material, with  all properties initialized to unspecified defaults.*/
    createBlockData (material: Material, consumer: Consumer<BlockData>): BlockData;
    /**Creates a boss bar instance to display to players.*/
    createBossBar (title: String, color: BarColor, style: BarStyle, ...flags: BarFlag[]): BossBar;
    /**Creates a boss bar instance to display to players.*/
    createBossBar (key: NamespacedKey, title: String, color: BarColor, style: BarStyle, ...flags: BarFlag[]): KeyedBossBar;
    /**Create a ChunkData for use in a generator.*/
    createChunkData (world: World): ChunkGenerator$ChunkData;
    /**Create a new explorer map targeting the closest nearby structure of a  given StructureType.*/
    createExplorerMap (world: World, location: Location, structureType: StructureType): ItemStack;
    /**Create a new explorer map targeting the closest nearby structure of a  given StructureType.*/
    createExplorerMap (world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
    /**Creates an empty inventory of type InventoryType.CHEST with the  specified size.*/
    createInventory (owner: InventoryHolder, size: number): Inventory;
    /**Creates an empty inventory of type InventoryType.CHEST with the  specified size and title.*/
    createInventory (owner: InventoryHolder, size: number, title: String): Inventory;
    /**Creates an empty inventory with the specified type.*/
    createInventory (owner: InventoryHolder, type: InventoryType): Inventory;
    /**Creates an empty inventory with the specified type and title.*/
    createInventory (owner: InventoryHolder, type: InventoryType, title: String): Inventory;
    /**Create a new map with an automatically assigned ID.*/
    createMap (world: World): MapView;
    /**Creates an empty merchant.*/
    createMerchant (title: String): Merchant;
    /**Creates a PlayerProfile for the specified name, with UUID as null*/
    createProfile (name: String): PlayerProfile;
    /**Creates a PlayerProfile for the specified uuid, with name as null*/
    createProfile (uuid: UUID): PlayerProfile;
    /**Creates a PlayerProfile for the specified name/uuid   Both UUID and Name can not be null at same time.*/
    createProfile (uuid: UUID, name: String): PlayerProfile;
    /**Create a ChunkData for use in a generator, that is populated by the vanilla generator for that world*/
    createVanillaChunkData (world: World, x: number, z: number): ChunkGenerator$ChunkData;
    /**Creates or loads a world with the given name using the specified  options.*/
    createWorld (creator: WorldCreator): World;
    /**Dispatches a command on this server, and executes it if found.*/
    dispatchCommand (sender: CommandSender, commandLine: String): boolean;
    /**Get the advancement specified by this key.*/
    getAdvancement (key: NamespacedKey): Advancement;
    /**Gets whether this server allows the End or not.*/
    getAllowEnd (): boolean;
    /**Gets whether this server allows flying or not.*/
    getAllowFlight (): boolean;
    /**Gets whether this server allows the Nether or not.*/
    getAllowNether (): boolean;
    /**Gets user-specified limit for number of ambient mobs that can spawn in  a chunk.*/
    getAmbientSpawnLimit (): number;
    /**Gets user-specified limit for number of animals that can spawn in a  chunk.*/
    getAnimalSpawnLimit (): number;
    /**Get the average tick time (in millis)*/
    getAverageTickTime (): number;
    /**Gets a ban list for the supplied type.*/
    getBanList (type: BanList$Type): BanList;
    /**Gets a set containing all banned players.*/
    getBannedPlayers (): Set<OfflinePlayer>;
    /**Gets the KeyedBossBar specified by this key.*/
    getBossBar (key: NamespacedKey): KeyedBossBar;
    /**Gets an unmodifiable iterator through all persistent bossbars.*/
    getBossBars (): Iterator<KeyedBossBar>;
    /**Gets the Bukkit version that this server is running.*/
    getBukkitVersion (): String;
    /**Gets a list of command aliases defined in the server properties.*/
    getCommandAliases (): Map<String,String[]>;
    /**Gets the active CommandMap*/
    getCommandMap (): CommandMap;
    /**Gets the value of the connection throttle setting.*/
    getConnectionThrottle (): number;
    /**Gets a ConsoleCommandSender that may be used as an input source  for this server.*/
    getConsoleSender (): ConsoleCommandSender;
    /**Get the current internal server tick*/
    getCurrentTick (): number;
    /**Gets the default GameMode for new players.*/
    getDefaultGameMode (): GameMode;
    /**Gets an entity on the server by its UUID*/
    getEntity (uuid: UUID): Entity;
    /**Get generate-structures setting.*/
    getGenerateStructures (): boolean;
    /**Gets the HelpMap providing help topics for this server.*/
    getHelpMap (): HelpMap;
    /**Gets the idle kick timeout.*/
    getIdleTimeout (): number;
    /**Get the IP that this server is bound to, or empty string if not  specified.*/
    getIp (): String;
    /**Gets a set containing all current IPs that are banned.*/
    getIPBans (): Set<String>;
    /**Gets the instance of the item factory (for ItemMeta).*/
    getItemFactory (): ItemFactory;
    /**Returns the primary logger associated with this server instance.*/
    getLogger (): Logger;
    /**Gets the specified LootTable.*/
    getLootTable (key: NamespacedKey): LootTable;
    /**Get the maximum amount of players which can login to this server.*/
    getMaxPlayers (): number;
    /**Gets the Messenger responsible for this server.*/
    getMessenger (): Messenger;
    /**Gets the version of game this server implements*/
    getMinecraftVersion (): String;
    /**Returns the MobGoals manager*/
    getMobGoals (): MobGoals;
    /**Gets user-specified limit for number of monsters that can spawn in a  chunk.*/
    getMonsterSpawnLimit (): number;
    /**Gets the message that is displayed on the server list.*/
    getMotd (): String;
    /**Gets the name of this server implementation.*/
    getName (): String;
    /**Gets the player by the given UUID, regardless if they are offline or  online.*/
    getOfflinePlayer (id: UUID): OfflinePlayer;
    /**Gets every player that has ever played on this server.*/
    getOfflinePlayers (): OfflinePlayer[];
    /**Gets whether the Server is in online mode or not.*/
    getOnlineMode (): boolean;
    /**Gets a view of all currently logged in players.*/
    getOnlinePlayers (): Collection<Player>;
    /**Gets a set containing all player operators.*/
    getOperators (): Set<OfflinePlayer>;
    getPermissionMessage (): String;
    /**Gets a player object by the given username.*/
    getPlayer (name: String): Player;
    /**Gets the player with the given UUID.*/
    getPlayer (id: UUID): Player;
    /**Gets the player with the exact given name, case insensitive.*/
    getPlayerExact (name: String): Player;
    /**Gets the unique ID of the player currently known as the specified player name  In Offline Mode, will return an Offline UUID*/
    getPlayerUniqueId (playerName: String): UUID;
    /**Gets a PluginCommand with the given name or alias.*/
    getPluginCommand (name: String): PluginCommand;
    /**Gets the plugin manager for interfacing with plugins.*/
    getPluginManager (): PluginManager;
    /**Get the game port that the server runs on.*/
    getPort (): number;
    /**Get the Recipe for the given key.*/
    getRecipe (recipeKey: NamespacedKey): Recipe;
    /**Get a list of all recipes for a given item.*/
    getRecipesFor (result: ItemStack): List<Recipe>;
    /**Gets the scheduler for managing scheduled events.*/
    getScheduler (): BukkitScheduler;
    /**Gets the instance of the scoreboard manager.*/
    getScoreboardManager (): ScoreboardManager;
    /**Gets an instance of the server's default server-icon.*/
    getServerIcon (): CachedServerIcon;
    /**Gets a services manager.*/
    getServicesManager (): ServicesManager;
    /**Gets the default message that is displayed when the server is stopped.*/
    getShutdownMessage (): String;
    /**Gets the radius, in blocks, around each worlds spawn point to protect.*/
    getSpawnRadius (): number;
    /**Gets a tag which has already been defined within the server.*/
    getTag <T extends Keyed>(registry: String, tag: NamespacedKey, clazz: Class<T>): Tag<T>;
    /**Gets a all tags which have been defined within the server.*/
    getTags <T extends Keyed>(registry: String, clazz: Class<T>): Iterable<Tag<T>>;
    /**Gets the default ticks per ambient mob spawns value.*/
    getTicksPerAmbientSpawns (): number;
    /**Gets default ticks per animal spawns value.*/
    getTicksPerAnimalSpawns (): number;
    /**Gets the default ticks per monster spawns value.*/
    getTicksPerMonsterSpawns (): number;
    /**Gets the default ticks per water ambient mob spawns value.*/
    getTicksPerWaterAmbientSpawns (): number;
    /**Gets the default ticks per water mob spawns value.*/
    getTicksPerWaterSpawns (): number;
    /**Get a sample of the servers last tick times (in nanos)*/
    getTickTimes (): number[];
    /**Gets the current server TPS*/
    getTPS (): number[];
    /**Gets the name of the update folder.*/
    getUpdateFolder (): String;
    /**Gets the update folder.*/
    getUpdateFolderFile (): File;
    /**Gets the version string of this server implementation.*/
    getVersion (): String;
    /**Get the view distance from this server.*/
    getViewDistance (): number;
    /**Gets the current warning state for the server.*/
    getWarningState (): Warning$WarningState;
    /**Gets user-specified limit for number of water ambient mobs that can spawn  in a chunk.*/
    getWaterAmbientSpawnLimit (): number;
    /**Gets user-specified limit for number of water animals that can spawn in  a chunk.*/
    getWaterAnimalSpawnLimit (): number;
    /**Gets a list of whitelisted players.*/
    getWhitelistedPlayers (): Set<OfflinePlayer>;
    /**Gets the world with the given name.*/
    getWorld (name: String): World;
    /**Gets the world from the given Unique ID.*/
    getWorld (uid: UUID): World;
    /**Gets the folder that contains all of the various Worlds.*/
    getWorldContainer (): File;
    /**Gets a list of all worlds on this server.*/
    getWorlds (): List<World>;
    /**Get world type (level-type setting) for default world.*/
    getWorldType (): String;
    /**Gets whether this server has a whitelist or not.*/
    hasWhitelist (): boolean;
    /**Gets whether the server is in hardcore mode or not.*/
    isHardcore (): boolean;
    /**Checks the current thread against the expected primary thread for the  server.*/
    isPrimaryThread (): boolean;
    /**Checks if the server is in the process of being shutdown.*/
    isStopping (): boolean;
    /**Creates a cached server-icon for the specific image.*/
    loadServerIcon (image: BufferedImage): CachedServerIcon;
    /**Loads an image from a file, and returns a cached image for the specific  server-icon.*/
    loadServerIcon (file: File): CachedServerIcon;
    /**Attempts to match any players with the given name, and returns a list  of all possibly matches.*/
    matchPlayer (name: String): List<Player>;
    /**Get an iterator through the list of crafting recipes.*/
    recipeIterator (): Iterator<Recipe>;
    /**Reloads the server, refreshing settings and plugin information.*/
    reload (): void;
    reloadCommandAliases (): boolean;
    /**Reload only the Minecraft data for the server.*/
    reloadData (): void;
    reloadPermissions (): void;
    /**Reloads the whitelist from disk.*/
    reloadWhitelist (): void;
    /**Removes a KeyedBossBar specified by this key.*/
    removeBossBar (key: NamespacedKey): boolean;
    /**Remove a recipe from the server.*/
    removeRecipe (key: NamespacedKey): boolean;
    /**Resets the list of crafting recipes to the default.*/
    resetRecipes (): void;
    /**Writes loaded players to disk.*/
    savePlayers (): void;
    /**Selects entities using the given Vanilla selector.*/
    selectEntities (sender: CommandSender, selector: String): List<Entity>;
    /**Sets the default GameMode for new players.*/
    setDefaultGameMode (mode: GameMode): void;
    /**Set the idle kick timeout.*/
    setIdleTimeout (threshold: number): void;
    /**Set the maximum amount of players which can login to this server.*/
    setMaxPlayers (maxPlayers: number): void;
    /**Sets the radius, in blocks, around each worlds spawn point to protect.*/
    setSpawnRadius (value: number): void;
    /**Sets if the server is whitelisted.*/
    setWhitelist (value: boolean): void;
    /**Shutdowns the server, stopping everything.*/
    shutdown (): void;
    spigot (): Server$Spigot;
    /**Checks if player names should be suggested when a command returns null as  their tab completion result.*/
    suggestPlayerNamesWhenNullTabCompletions (): boolean;
    /**Unbans the specified address from the server.*/
    unbanIP (address: String): void;
    /**Unloads a world with the given name.*/
    unloadWorld (name: String, save: boolean): boolean;
    /**Unloads the given world.*/
    unloadWorld (world: World, save: boolean): boolean
}

export class Server$Spigot extends Object {
    /**Sends the component to the player*/
    broadcast (component: BaseComponent): void;
    /**Sends an array of components as a single message to the player*/
    broadcast (...components: BaseComponent[]): void;
    getBukkitConfig (): YamlConfiguration;
    getConfig (): YamlConfiguration;
    getPaperConfig (): YamlConfiguration;
    getSpigotConfig (): YamlConfiguration;
    /**Restart the server.*/
    restart (): void
}

/**This event is called when a command is run by a non-player. It is  called early in the command handling process, and modifications in this  event (via setCommand(String)) will be shown in the behavior.    Many plugins will have no use for this event, and you should  attempt to avoid using it if it is not necessary.    Some examples of valid uses for this event are:    Logging executed commands to a separate file  Variable substitution. For example, replacing ${ip:Steve}      with the connection IP of the player named Steve, or simulating the      @a and @p decorators used by Command Blocks      for plugins that do not handle it.  Conditionally blocking commands belonging to other plugins.  Per-sender command aliases. For example, after the console runs the      command /calias cr gamemode creative, the next time they      run /cr, it gets replaced into      /gamemode creative. (Global command aliases should be      done by registering the alias.)      Examples of incorrect uses are:    Using this event to run command logic      If the event is cancelled, processing of the command will halt.    The state of whether or not there is a slash (/) at the  beginning of the message should be preserved. If a slash is added or  removed, unexpected behavior may result.*/
export class ServerCommandEvent extends ServerEvent implements Cancellable {
    /**Gets the command that the user is attempting to execute from the  console*/
    getCommand (): String;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the command sender.*/
    getSender (): CommandSender;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the command that the server will execute*/
    setCommand (message: String): void
}

/**Thrown when a command throws an exception*/
export class ServerCommandException extends ServerException {
    /**Gets the arguments which threw the exception for the command*/
    getArguments (): String[];
    /**Gets the command which threw the exception*/
    getCommand (): Command;
    /**Gets the command sender which executed the command request*/
    getCommandSender (): CommandSender
}

/**Miscellaneous server events*/
export class ServerEvent extends Event {

}

/**Exception thrown when a server event listener throws an exception*/
export class ServerEventException extends ServerPluginException {
    /**Gets the event which caused the exception*/
    getEvent (): Event;
    /**Gets the listener which threw the exception*/
    getListener (): Listener
}

/**Wrapper exception for all exceptions that are thrown by the server.*/
export class ServerException extends Exception {

}

/**Called whenever an exception is thrown in a recoverable section of the server.*/
export class ServerExceptionEvent extends Event {
    /**Gets the wrapped exception that was thrown.*/
    getException (): ServerException;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Thrown when the internal server throws a recoverable exception.*/
export class ServerInternalException extends ServerException {
    static reportInternalException (cause: Throwable): void
}

/**Called when a server list ping is coming in. Displayed players can be  checked and removed by iterating over this event.*/
export class ServerListPingEvent extends ServerEvent implements Iterable<Player> {
    /**Get the address the ping is coming from.*/
    getAddress (): InetAddress;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the maximum number of players sent.*/
    getMaxPlayers (): number;
    /**Get the message of the day message.*/
    getMotd (): String;
    /**Get the number of players sent.*/
    getNumPlayers (): number;
    iterator (): Iterator<Player>;
    /**Set the maximum number of players sent.*/
    setMaxPlayers (maxPlayers: number): void;
    /**Change the message of the day message.*/
    setMotd (motd: String): void;
    /**Sets the server-icon sent to the client.*/
    setServerIcon (icon: CachedServerIcon): void
}

/**This event is called when either the server startup or reload has completed.*/
export class ServerLoadEvent extends ServerEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the context in which the server was loaded.*/
    getType (): ServerLoadEvent$LoadType
}

/**Represents the context in which the enclosing event has been completed.*/
export class ServerLoadEvent$LoadType extends Enum<ServerLoadEvent$LoadType> {
    static RELOAD: ServerLoadEvent$LoadType;
    static STARTUP: ServerLoadEvent$LoadType
}

/**Represents an object that may become a server operator, such as a Player*/
export interface ServerOperator {
    /**Checks if this object is a server operator*/
    isOp (): boolean;
    /**Sets the operator status of this object*/
    setOp (value: boolean): void
}

/**Thrown whenever there is an exception with any enabling or disabling of plugins.*/
export class ServerPluginEnableDisableException extends ServerPluginException {

}

/**Wrapper exception for all cases to which a plugin can be immediately blamed for*/
export class ServerPluginException extends ServerException {
    /**Gets the plugin which is directly responsible for the exception being thrown*/
    getResponsiblePlugin (): Plugin
}

/**Thrown when an incoming plugin message channel throws an exception*/
export class ServerPluginMessageException extends ServerPluginException {
    /**Gets the channel to which the error occurred from recieving data from*/
    getChannel (): String;
    /**Gets the data to which the error occurred from*/
    getData (): number[];
    /**Gets the player which the plugin message causing the exception originated from*/
    getPlayer (): Player
}

/**Thrown when a plugin's scheduler fails with an exception*/
export class ServerSchedulerException extends ServerPluginException {
    /**Gets the task which threw the exception*/
    getTask (): BukkitTask
}

/**Called when a tab-complete request throws an exception*/
export class ServerTabCompleteException extends ServerCommandException {

}

/**Called when the server has finished ticking the main loop*/
export class ServerTickEndEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getTickDuration (): number;
    getTickNumber (): number;
    /**Amount of nanoseconds remaining before the next tick should start.*/
    getTimeRemaining (): number
}

export class ServerTickStartEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getTickNumber (): number
}

/**An event relating to a registered service. This is called in a ServicesManager*/
export class ServiceEvent extends ServerEvent {
    getProvider (): RegisteredServiceProvider<X>
}

/**Represents various priorities of a provider.*/
export class ServicePriority extends Enum<ServicePriority> {
    static High: ServicePriority;
    static Highest: ServicePriority;
    static Low: ServicePriority;
    static Lowest: ServicePriority;
    static Normal: ServicePriority
}

/**This event is called when a service is registered.    Warning: The order in which register and unregister events are called  should not be relied upon.*/
export class ServiceRegisterEvent extends ServiceEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Manages services and service providers. Services are an interface  specifying a list of methods that a provider must implement. Providers are  implementations of these services. A provider can be queried from the  services manager in order to use a service (if one is available). If  multiple plugins register a service, then the service with the highest  priority takes precedence.*/
export interface ServicesManager {
    /**Get a list of known services.*/
    getKnownServices (): Collection<Class<X>>;
    /**Queries for a provider registration.*/
    getRegistration <T>(service: Class<T>): RegisteredServiceProvider<T>;
    /**Get registrations of providers for a service.*/
    getRegistrations <T>(service: Class<T>): Collection<RegisteredServiceProvider<T>>;
    /**Get registrations of providers for a plugin.*/
    getRegistrations (plugin: Plugin): List<RegisteredServiceProvider<X>>;
    /**Returns whether a provider has been registered for a service.*/
    isProvidedFor <T>(service: Class<T>): boolean;
    /**Queries for a provider.*/
    load <T>(service: Class<T>): T;
    /**Register a provider of a service.*/
    register <T>(service: Class<T>, provider: T, plugin: Plugin, priority: ServicePriority): void;
    /**Unregister a particular provider for a particular service.*/
    unregister (service: Class<X>, provider: Object): void;
    /**Unregister a particular provider.*/
    unregister (provider: Object): void;
    /**Unregister all the providers registered by a particular plugin.*/
    unregisterAll (plugin: Plugin): void
}

/**This event is called when a service is unregistered.    Warning: The order in which register and unregister events are called  should not be relied upon.*/
export class ServiceUnregisterEvent extends ServiceEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Represents a shaped (ie normal) crafting recipe.*/
export class ShapedRecipe extends Object implements Recipe, Keyed {
    getChoiceMap (): Map<Character,RecipeChoice>;
    /**Get the group of this recipe.*/
    getGroup (): String;
    /**Get a copy of the ingredients map.*/
    getIngredientMap (): Map<Character,ItemStack>;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Get the result.*/
    getResult (): ItemStack;
    /**Get the shape.*/
    getShape (): String[];
    /**Set the group of this recipe.*/
    setGroup (group: String): void;
    setIngredient (key: char, item: ItemStack): ShapedRecipe;
    setIngredient (key: char, ingredient: RecipeChoice): ShapedRecipe;
    /**Sets the material that a character in the recipe shape refers to.*/
    setIngredient (key: char, ingredient: Material): ShapedRecipe;
    /**Sets the material that a character in the recipe shape refers to.*/
    setIngredient (key: char, ingredient: MaterialData): ShapedRecipe;
    /**Set the shape of this recipe to the specified rows.*/
    shape (...shape: String[]): ShapedRecipe
}

/**Represents a shapeless recipe, where the arrangement of the ingredients on  the crafting grid does not matter.*/
export class ShapelessRecipe extends Object implements Recipe, Keyed {
    addIngredient (count: number, item: ItemStack): ShapelessRecipe;
    /**Adds multiples of the specified ingredient.*/
    addIngredient (count: number, ingredient: Material): ShapelessRecipe;
    /**Adds multiples of the specified ingredient.*/
    addIngredient (count: number, ingredient: MaterialData): ShapelessRecipe;
    addIngredient (item: ItemStack): ShapelessRecipe;
    addIngredient (ingredient: RecipeChoice): ShapelessRecipe;
    /**Adds the specified ingredient.*/
    addIngredient (ingredient: Material): ShapelessRecipe;
    /**Adds the specified ingredient.*/
    addIngredient (ingredient: MaterialData): ShapelessRecipe;
    getChoiceList (): List<RecipeChoice>;
    /**Get the group of this recipe.*/
    getGroup (): String;
    /**Get the list of ingredients used for this recipe.*/
    getIngredientList (): List<ItemStack>;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Get the result of this recipe.*/
    getResult (): ItemStack;
    removeIngredient (count: number, item: ItemStack): ShapelessRecipe;
    /**Removes multiple instances of an ingredient from the list.*/
    removeIngredient (count: number, ingredient: Material): ShapelessRecipe;
    /**Removes multiple instances of an ingredient from the list.*/
    removeIngredient (count: number, ingredient: MaterialData): ShapelessRecipe;
    removeIngredient (item: ItemStack): ShapelessRecipe;
    /**Removes an ingredient from the list.*/
    removeIngredient (ingredient: RecipeChoice): ShapelessRecipe;
    /**Removes an ingredient from the list.*/
    removeIngredient (ingredient: Material): ShapelessRecipe;
    /**Removes an ingredient from the list.*/
    removeIngredient (ingredient: MaterialData): ShapelessRecipe;
    /**Set the group of this recipe.*/
    setGroup (group: String): void
}

/**Represents a Sheep.*/
export interface Sheep extends Animals, Colorable {
    isSheared (): boolean;
    setSheared (flag: boolean): void
}

/**Called when a sheep's wool is dyed*/
export class SheepDyeWoolEvent extends EntityEvent implements Cancellable {
    /**Gets the DyeColor the sheep is being dyed*/
    getColor (): DyeColor;
    /**Returns the Entity involved in this event*/
    getEntity (): Sheep;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the DyeColor the sheep is being dyed*/
    setColor (color: DyeColor): void
}

/**Called when a sheep regrows its wool*/
export class SheepRegrowWoolEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Sheep;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

export interface Shulker extends Golem, Colorable {

}

/**Represents a captured state of a ShulkerBox.*/
export interface ShulkerBox extends Container, LootableBlockInventory, Lidded {
    /**Get the DyeColor corresponding to this ShulkerBox*/
    getColor (): DyeColor
}

export interface ShulkerBullet extends Projectile {
    /**Retrieve the target of this bullet.*/
    getTarget (): Entity;
    /**Sets the target of this bullet*/
    setTarget (target: Entity): void
}

export interface Sign extends Rotatable, Waterlogged {

}

/**Represents a captured state of either a SignPost or a WallSign.*/
export interface Sign extends TileState, Colorable {
    /**Gets the line of text at the specified index.*/
    getLine (index: number): String;
    /**Gets all the lines of text currently on this sign.*/
    getLines (): String[];
    /**Marks whether this sign can be edited by players.*/
    isEditable (): boolean;
    /**Marks whether this sign can be edited by players.*/
    setEditable (editable: boolean): void;
    /**Sets the line of text at the specified index.*/
    setLine (index: number, line: String): void
}

/**Called when a sign is changed by a player.    If a Sign Change event is cancelled, the sign will not be changed.*/
export class SignChangeEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets a single line of text from the sign involved in this event.*/
    getLine (index: number): String;
    /**Gets all of the lines of text from the sign involved in this event.*/
    getLines (): String[];
    /**Gets the player changing the sign involved in this event.*/
    getPlayer (): Player;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets a single line for the sign involved in this event*/
    setLine (index: number, line: String): void
}

/**Represents a Silverfish.*/
export interface Silverfish extends Monster {

}

export class SimpleCommandMap extends Object implements CommandMap {
    /**Clears all registered commands.*/
    clearCommands (): void;
    /**Looks for the requested command and executes it if found.*/
    dispatch (sender: CommandSender, commandLine: String): boolean;
    /**Gets the command registered to the specified name*/
    getCommand (name: String): Command;
    getCommands (): Collection<Command>;
    /**Return a Map of known commands*/
    getKnownCommands (): Map<String,Command>;
    /**Registers a command.*/
    register (label: String, fallbackPrefix: String, command: Command): boolean;
    /**Registers a command.*/
    register (fallbackPrefix: String, command: Command): boolean;
    /**Registers all the commands belonging to a certain plugin.*/
    registerAll (fallbackPrefix: String, commands: List<Command>): void;
    registerServerAliases (): void;
    setFallbackCommands (): void;
    /**Looks for the requested command and executes an appropriate  tab-completer if found.*/
    tabComplete (sender: CommandSender, cmdLine: String): List<String>;
    /**Looks for the requested command and executes an appropriate  tab-completer if found.*/
    tabComplete (sender: CommandSender, cmdLine: String, location: Location): List<String>
}

/**Handles all plugin management from the Server*/
export class SimplePluginManager extends Object implements PluginManager {
    /**Adds a Permission to this plugin manager.*/
    addPermission (perm: Permission): void;
    /**Calls an event with the given details.*/
    callEvent (event: Event): void;
    clearPermissions (): void;
    /**Disables and removes all plugins*/
    clearPlugins (): void;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin): void;
    /**Disables the specified plugin*/
    disablePlugin (plugin: Plugin, closeClassloader: boolean): void;
    /**Disables all the loaded plugins*/
    disablePlugins (): void;
    disablePlugins (closeClassloaders: boolean): void;
    /**Enables the specified plugin*/
    enablePlugin (plugin: Plugin): void;
    /**Gets the default permissions for the given op status*/
    getDefaultPermissions (op: boolean): Set<Permission>;
    /**Gets a set containing all subscribed Permissibles to the given  default list, by op status*/
    getDefaultPermSubscriptions (op: boolean): Set<Permissible>;
    /**Gets a Permission from its fully qualified name*/
    getPermission (name: String): Permission;
    /**Gets a set of all registered permissions.*/
    getPermissions (): Set<Permission>;
    /**Gets a set containing all subscribed Permissibles to the given  permission, by name*/
    getPermissionSubscriptions (permission: String): Set<Permissible>;
    /**Checks if the given plugin is loaded and returns it when applicable*/
    getPlugin (name: String): Plugin;
    /**Gets a list of all currently loaded plugins*/
    getPlugins (): Plugin[];
    /**Checks if the given plugin is enabled or not*/
    isPluginEnabled (name: String): boolean;
    /**Checks if the given plugin is enabled or not*/
    isPluginEnabled (plugin: Plugin): boolean;
    isTransitiveDepend (plugin: PluginDescriptionFile, depend: PluginDescriptionFile): boolean;
    /**Loads the plugin in the specified file*/
    loadPlugin (file: File): Plugin;
    /**Loads the plugins contained within the specified directory*/
    loadPlugins (directory: File): Plugin[];
    /**Recalculates the defaults for the given Permission.*/
    recalculatePermissionDefaults (perm: Permission): void;
    /**Registers the specified executor to the given event class*/
    registerEvent (event: Class<X>, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
    /**Registers the given event to the specified listener using a directly  passed EventExecutor*/
    registerEvent (event: Class<X>, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
    /**Registers all the events in the given listener class*/
    registerEvents (listener: Listener, plugin: Plugin): void;
    /**Registers the specified plugin loader*/
    registerInterface (loader: Class<X>): void;
    /**Removes a Permission registration from this plugin manager.*/
    removePermission (name: String): void;
    /**Removes a Permission registration from this plugin manager.*/
    removePermission (perm: Permission): void;
    /**Subscribes to the given Default permissions by operator status*/
    subscribeToDefaultPerms (op: boolean, permissible: Permissible): void;
    /**Subscribes the given Permissible for information about the requested  Permission, by name.*/
    subscribeToPermission (permission: String, permissible: Permissible): void;
    /**Unsubscribes from the given Default permissions by operator status*/
    unsubscribeFromDefaultPerms (op: boolean, permissible: Permissible): void;
    /**Unsubscribes the given Permissible for information about the requested  Permission, by name.*/
    unsubscribeFromPermission (permission: String, permissible: Permissible): void;
    /**Returns whether or not timing code should be used for event calls*/
    useTimings (): boolean;
    /**Sets whether or not per event timing code should be used*/
    useTimings (use: boolean): void
}

/**A simple services manager.*/
export class SimpleServicesManager extends Object implements ServicesManager {
    /**Get a list of known services.*/
    getKnownServices (): Set<Class<X>>;
    /**Queries for a provider registration.*/
    getRegistration <T>(service: Class<T>): RegisteredServiceProvider<T>;
    /**Get registrations of providers for a service.*/
    getRegistrations <T>(service: Class<T>): List<RegisteredServiceProvider<T>>;
    /**Get registrations of providers for a plugin.*/
    getRegistrations (plugin: Plugin): List<RegisteredServiceProvider<X>>;
    /**Returns whether a provider has been registered for a service.*/
    isProvidedFor <T>(service: Class<T>): boolean;
    /**Queries for a provider.*/
    load <T>(service: Class<T>): T;
    /**Register a provider of a service.*/
    register <T>(service: Class<T>, provider: T, plugin: Plugin, priority: ServicePriority): void;
    /**Unregister a particular provider for a particular service.*/
    unregister (service: Class<X>, provider: Object): void;
    /**Unregister a particular provider.*/
    unregister (provider: Object): void;
    /**Unregister all the providers registered by a particular plugin.*/
    unregisterAll (plugin: Plugin): void
}

/**Generates simplex-based noise.    This is a modified version of the freely published version in the paper by  Stefan Gustavson at    http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf*/
export class SimplexNoiseGenerator extends PerlinNoiseGenerator {
    static dot (g: number[], x: number, y: number): number;
    static dot (g: number[], x: number, y: number, z: number): number;
    static dot (g: number[], x: number, y: number, z: number, w: number): number;
    /**Gets the singleton unseeded instance of this generator*/
    static getInstance (): SimplexNoiseGenerator;
    /**Computes and returns the 1D unseeded simplex noise for the given  coordinates in 1D space*/
    static getNoise (xin: number): number;
    /**Computes and returns the 2D unseeded simplex noise for the given  coordinates in 2D space*/
    static getNoise (xin: number, yin: number): number;
    /**Computes and returns the 3D unseeded simplex noise for the given  coordinates in 3D space*/
    static getNoise (xin: number, yin: number, zin: number): number;
    /**Computes and returns the 4D simplex noise for the given coordinates in  4D space*/
    static getNoise (x: number, y: number, z: number, w: number): number;
    /**Computes and returns the 2D noise for the given coordinates in 2D space*/
    noise (xin: number, yin: number): number;
    /**Computes and returns the 3D noise for the given coordinates in 3D space*/
    noise (xin: number, yin: number, zin: number): number;
    /**Computes and returns the 4D simplex noise for the given coordinates in  4D space*/
    noise (x: number, y: number, z: number, w: number): number
}

/**Creates simplex noise through unbiased octaves*/
export class SimplexOctaveGenerator extends OctaveGenerator {
    /**Gets the scale used for each W-coordinates passed*/
    getWScale (): number;
    /**Generates noise for the 3D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
    /**Generates noise for the 3D coordinates using the specified number of  octaves and parameters*/
    noise (x: number, y: number, z: number, w: number, frequency: number, amplitude: number, normalized: boolean): number;
    /**Sets the scale used for all coordinates passed to this generator.*/
    setScale (scale: number): void;
    /**Sets the scale used for each W-coordinates passed*/
    setWScale (scale: number): void
}

/**An animal that can sit still.*/
export interface Sittable {
    /**Checks if this animal is sitting*/
    isSitting (): boolean;
    /**Sets if this animal is sitting.*/
    setSitting (sitting: boolean): void
}

/**Represents a sized fireball.*/
export interface SizedFireball extends Fireball {
    /**Gets the display ItemStack.*/
    getDisplayItem (): ItemStack;
    /**Sets the display ItemStack for the fireball.*/
    setDisplayItem (item: ItemStack): void
}

/**Represents a Skeleton.*/
export interface Skeleton extends Monster, RangedEntity {

}

/**Represents a SkeletonHorse - variant of AbstractHorse.*/
export interface SkeletonHorse extends AbstractHorse {
    getTrapTime (): number;
    isTrap (): boolean;
    setTrap (trap: boolean): void
}

/**Event called when a player gets close to a skeleton horse and triggers the lightning trap*/
export class SkeletonHorseTrapEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): SkeletonHorse;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

export interface SkinParts {
    getRaw (): number;
    hasCapeEnabled (): boolean;
    hasHatsEnabled (): boolean;
    hasJacketEnabled (): boolean;
    hasLeftPantsEnabled (): boolean;
    hasLeftSleeveEnabled (): boolean;
    hasRightPantsEnabled (): boolean;
    hasRightSleeveEnabled (): boolean
}

/**Represents a captured state of a skull block.*/
export interface Skull extends TileState {
    /**Get the player which owns the skull.*/
    getOwningPlayer (): OfflinePlayer;
    /**If the skull has an owner, per hasOwner(), return the owners PlayerProfile*/
    getPlayerProfile (): PlayerProfile;
    /**Checks to see if the skull has an owner*/
    hasOwner (): boolean;
    /**Set the player which owns the skull.*/
    setOwningPlayer (player: OfflinePlayer): void;
    /**Sets this skull to use the supplied Player Profile, which can include textures already prefilled.*/
    setPlayerProfile (profile: PlayerProfile): void
}

/**Represents a skull that can have an owner.*/
export interface SkullMeta extends ItemMeta {
    clone (): SkullMeta;
    /**Gets the owner of the skull.*/
    getOwningPlayer (): OfflinePlayer;
    /**If the skull has an owner, per hasOwner(), return the owners PlayerProfile*/
    getPlayerProfile (): PlayerProfile;
    /**Checks to see if the skull has an owner.*/
    hasOwner (): boolean;
    /**Sets the owner of the skull.*/
    setOwningPlayer (owner: OfflinePlayer): boolean;
    /**Sets this skull to use the supplied Player Profile, which can include textures already prefilled.*/
    setPlayerProfile (profile: PlayerProfile): void
}

/**'type' represents what state the slab is in - either top, bottom, or a double  slab occupying the full block.*/
export interface Slab extends Waterlogged {
    /**Gets the value of the 'type' property.*/
    getType (): Slab$Type;
    /**Sets the value of the 'type' property.*/
    setType (type: Slab$Type): void
}

/**The type of the slab.*/
export class Slab$Type extends Enum<Slab$Type> {
    /**The slab occupies the lower y half of the block.*/
    static BOTTOM: Slab$Type;
    /**The slab occupies the entire block.*/
    static DOUBLE: Slab$Type;
    /**The slab occupies the upper y half of the block.*/
    static TOP: Slab$Type
}

/**Represents a Slime.*/
export interface Slime extends Mob {
    /**Get whether this slime can randomly wander/jump around on its own*/
    canWander (): boolean;
    getSize (): number;
    setSize (sz: number): void;
    /**Set whether this slime can randomly wander/jump around on its own*/
    setWander (canWander: boolean): void
}

/**Fired when a Slime decides to change it's facing direction.    This event does not fire for the entity's actual movement. Only when it  is choosing to change direction.*/
export class SlimeChangeDirectionEvent extends SlimePathfindEvent implements Cancellable {
    /**Get the new chosen yaw*/
    getNewYaw (): number;
    /**Set the new chosen yaw*/
    setNewYaw (yaw: number): void
}

/**Fired when a Slime decides to start pathfinding.    This event does not fire for the entity's actual movement. Only when it  is choosing to start moving.*/
export class SlimePathfindEvent extends EntityEvent implements Cancellable {
    /**The Slime that is pathfinding.*/
    getEntity (): Slime;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Called when a Slime splits into smaller Slimes upon death*/
export class SlimeSplitEvent extends EntityEvent implements Cancellable {
    /**Gets the amount of smaller slimes to spawn*/
    getCount (): number;
    /**Returns the Entity involved in this event*/
    getEntity (): Slime;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets how many smaller slimes will spawn on the split*/
    setCount (count: number): void
}

/**Fired when a Slime decides to start jumping while swimming in water/lava.    This event does not fire for the entity's actual movement. Only when it  is choosing to start jumping.*/
export class SlimeSwimEvent extends SlimeWanderEvent implements Cancellable {

}

/**Fired when a Slime decides to change direction to target a LivingEntity.    This event does not fire for the entity's actual movement. Only when it  is choosing to start moving.*/
export class SlimeTargetLivingEntityEvent extends SlimePathfindEvent implements Cancellable {
    /**Get the targeted entity*/
    getTarget (): LivingEntity
}

/**Fired when a Slime decides to start wandering.    This event does not fire for the entity's actual movement. Only when it  is choosing to start moving.*/
export class SlimeWanderEvent extends SlimePathfindEvent implements Cancellable {

}

/**Represents a small Fireball*/
export interface SmallFireball extends SizedFireball {

}

/**Interface to the inventory of a Smithing table.*/
export interface SmithingInventory extends Inventory {
    /**Gets the input equipment (first slot).*/
    getInputEquipment (): ItemStack;
    /**Gets the input mineral (second slot).*/
    getInputMineral (): ItemStack;
    /**Gets the result item.*/
    getResult (): ItemStack;
    /**Sets the input equipment (first slot).*/
    setInputEquipment (itemStack: ItemStack): void;
    /**Sets the input mineral (second slot).*/
    setInputMineral (itemStack: ItemStack): void;
    /**Sets the result item.*/
    setResult (itemStack: ItemStack): void
}

/**Represents a smithing recipe.*/
export class SmithingRecipe extends Object implements Recipe, Keyed {
    /**Get the addition recipe item.*/
    getAddition (): RecipeChoice;
    /**Get the base recipe item.*/
    getBase (): RecipeChoice;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Get the result of this recipe.*/
    getResult (): ItemStack
}

/**Represents a captured state of a smoker.*/
export interface Smoker extends Furnace {

}

/**Represents a campfire recipe.*/
export class SmokingRecipe extends CookingRecipe<SmokingRecipe> {

}

export class SneakyThrow extends Object {
    static sneaky (exception: Throwable): void
}

/**'layers' represents the amount of layers of snow which are present in this  block.    May not be lower than getMinimumLayers() or higher than  getMaximumLayers().*/
export interface Snow extends BlockData {
    /**Gets the value of the 'layers' property.*/
    getLayers (): number;
    /**Gets the maximum allowed value of the 'layers' property.*/
    getMaximumLayers (): number;
    /**Gets the minimum allowed value of the 'layers' property.*/
    getMinimumLayers (): number;
    /**Sets the value of the 'layers' property.*/
    setLayers (layers: number): void
}

/**'snowy' denotes whether this block has a snow covered side and top texture  (normally because the block above is snow).*/
export interface Snowable extends BlockData {
    /**Gets the value of the 'snowy' property.*/
    isSnowy (): boolean;
    /**Sets the value of the 'snowy' property.*/
    setSnowy (snowy: boolean): void
}

/**Represents a snowball.*/
export interface Snowball extends ThrowableProjectile {

}

/**Represents a snowman entity*/
export interface Snowman extends Golem, RangedEntity {
    /**Gets whether this snowman is in "derp mode", meaning it is not wearing a  pumpkin.*/
    isDerp (): boolean;
    /**Sets whether this snowman is in "derp mode", meaning it is not wearing a  pumpkin.*/
    setDerp (derpMode: boolean): void
}

/**An Enum of Sounds the server is able to send to players.    WARNING: At any time, sounds may be added/removed from this Enum or even  MineCraft itself! There is no guarantee the sounds will play. There is no  guarantee values will not be removed from this Enum. As such, you should not  depend on the ordinal values of this class.*/
export class Sound extends Enum<Sound> {
    static AMBIENT_BASALT_DELTAS_ADDITIONS: Sound;
    static AMBIENT_BASALT_DELTAS_LOOP: Sound;
    static AMBIENT_BASALT_DELTAS_MOOD: Sound;
    static AMBIENT_CAVE: Sound;
    static AMBIENT_CRIMSON_FOREST_ADDITIONS: Sound;
    static AMBIENT_CRIMSON_FOREST_LOOP: Sound;
    static AMBIENT_CRIMSON_FOREST_MOOD: Sound;
    static AMBIENT_NETHER_WASTES_ADDITIONS: Sound;
    static AMBIENT_NETHER_WASTES_LOOP: Sound;
    static AMBIENT_NETHER_WASTES_MOOD: Sound;
    static AMBIENT_SOUL_SAND_VALLEY_ADDITIONS: Sound;
    static AMBIENT_SOUL_SAND_VALLEY_LOOP: Sound;
    static AMBIENT_SOUL_SAND_VALLEY_MOOD: Sound;
    static AMBIENT_UNDERWATER_ENTER: Sound;
    static AMBIENT_UNDERWATER_EXIT: Sound;
    static AMBIENT_UNDERWATER_LOOP: Sound;
    static AMBIENT_UNDERWATER_LOOP_ADDITIONS: Sound;
    static AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE: Sound;
    static AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE: Sound;
    static AMBIENT_WARPED_FOREST_ADDITIONS: Sound;
    static AMBIENT_WARPED_FOREST_LOOP: Sound;
    static AMBIENT_WARPED_FOREST_MOOD: Sound;
    static BLOCK_ANCIENT_DEBRIS_BREAK: Sound;
    static BLOCK_ANCIENT_DEBRIS_FALL: Sound;
    static BLOCK_ANCIENT_DEBRIS_HIT: Sound;
    static BLOCK_ANCIENT_DEBRIS_PLACE: Sound;
    static BLOCK_ANCIENT_DEBRIS_STEP: Sound;
    static BLOCK_ANVIL_BREAK: Sound;
    static BLOCK_ANVIL_DESTROY: Sound;
    static BLOCK_ANVIL_FALL: Sound;
    static BLOCK_ANVIL_HIT: Sound;
    static BLOCK_ANVIL_LAND: Sound;
    static BLOCK_ANVIL_PLACE: Sound;
    static BLOCK_ANVIL_STEP: Sound;
    static BLOCK_ANVIL_USE: Sound;
    static BLOCK_BAMBOO_BREAK: Sound;
    static BLOCK_BAMBOO_FALL: Sound;
    static BLOCK_BAMBOO_HIT: Sound;
    static BLOCK_BAMBOO_PLACE: Sound;
    static BLOCK_BAMBOO_SAPLING_BREAK: Sound;
    static BLOCK_BAMBOO_SAPLING_HIT: Sound;
    static BLOCK_BAMBOO_SAPLING_PLACE: Sound;
    static BLOCK_BAMBOO_STEP: Sound;
    static BLOCK_BARREL_CLOSE: Sound;
    static BLOCK_BARREL_OPEN: Sound;
    static BLOCK_BASALT_BREAK: Sound;
    static BLOCK_BASALT_FALL: Sound;
    static BLOCK_BASALT_HIT: Sound;
    static BLOCK_BASALT_PLACE: Sound;
    static BLOCK_BASALT_STEP: Sound;
    static BLOCK_BEACON_ACTIVATE: Sound;
    static BLOCK_BEACON_AMBIENT: Sound;
    static BLOCK_BEACON_DEACTIVATE: Sound;
    static BLOCK_BEACON_POWER_SELECT: Sound;
    static BLOCK_BEEHIVE_DRIP: Sound;
    static BLOCK_BEEHIVE_ENTER: Sound;
    static BLOCK_BEEHIVE_EXIT: Sound;
    static BLOCK_BEEHIVE_SHEAR: Sound;
    static BLOCK_BEEHIVE_WORK: Sound;
    static BLOCK_BELL_RESONATE: Sound;
    static BLOCK_BELL_USE: Sound;
    static BLOCK_BLASTFURNACE_FIRE_CRACKLE: Sound;
    static BLOCK_BONE_BLOCK_BREAK: Sound;
    static BLOCK_BONE_BLOCK_FALL: Sound;
    static BLOCK_BONE_BLOCK_HIT: Sound;
    static BLOCK_BONE_BLOCK_PLACE: Sound;
    static BLOCK_BONE_BLOCK_STEP: Sound;
    static BLOCK_BREWING_STAND_BREW: Sound;
    static BLOCK_BUBBLE_COLUMN_BUBBLE_POP: Sound;
    static BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT: Sound;
    static BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE: Sound;
    static BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT: Sound;
    static BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE: Sound;
    static BLOCK_CAMPFIRE_CRACKLE: Sound;
    static BLOCK_CHAIN_BREAK: Sound;
    static BLOCK_CHAIN_FALL: Sound;
    static BLOCK_CHAIN_HIT: Sound;
    static BLOCK_CHAIN_PLACE: Sound;
    static BLOCK_CHAIN_STEP: Sound;
    static BLOCK_CHEST_CLOSE: Sound;
    static BLOCK_CHEST_LOCKED: Sound;
    static BLOCK_CHEST_OPEN: Sound;
    static BLOCK_CHORUS_FLOWER_DEATH: Sound;
    static BLOCK_CHORUS_FLOWER_GROW: Sound;
    static BLOCK_COMPARATOR_CLICK: Sound;
    static BLOCK_COMPOSTER_EMPTY: Sound;
    static BLOCK_COMPOSTER_FILL: Sound;
    static BLOCK_COMPOSTER_FILL_SUCCESS: Sound;
    static BLOCK_COMPOSTER_READY: Sound;
    static BLOCK_CONDUIT_ACTIVATE: Sound;
    static BLOCK_CONDUIT_AMBIENT: Sound;
    static BLOCK_CONDUIT_AMBIENT_SHORT: Sound;
    static BLOCK_CONDUIT_ATTACK_TARGET: Sound;
    static BLOCK_CONDUIT_DEACTIVATE: Sound;
    static BLOCK_CORAL_BLOCK_BREAK: Sound;
    static BLOCK_CORAL_BLOCK_FALL: Sound;
    static BLOCK_CORAL_BLOCK_HIT: Sound;
    static BLOCK_CORAL_BLOCK_PLACE: Sound;
    static BLOCK_CORAL_BLOCK_STEP: Sound;
    static BLOCK_CROP_BREAK: Sound;
    static BLOCK_DISPENSER_DISPENSE: Sound;
    static BLOCK_DISPENSER_FAIL: Sound;
    static BLOCK_DISPENSER_LAUNCH: Sound;
    static BLOCK_ENCHANTMENT_TABLE_USE: Sound;
    static BLOCK_END_GATEWAY_SPAWN: Sound;
    static BLOCK_END_PORTAL_FRAME_FILL: Sound;
    static BLOCK_END_PORTAL_SPAWN: Sound;
    static BLOCK_ENDER_CHEST_CLOSE: Sound;
    static BLOCK_ENDER_CHEST_OPEN: Sound;
    static BLOCK_FENCE_GATE_CLOSE: Sound;
    static BLOCK_FENCE_GATE_OPEN: Sound;
    static BLOCK_FIRE_AMBIENT: Sound;
    static BLOCK_FIRE_EXTINGUISH: Sound;
    static BLOCK_FUNGUS_BREAK: Sound;
    static BLOCK_FUNGUS_FALL: Sound;
    static BLOCK_FUNGUS_HIT: Sound;
    static BLOCK_FUNGUS_PLACE: Sound;
    static BLOCK_FUNGUS_STEP: Sound;
    static BLOCK_FURNACE_FIRE_CRACKLE: Sound;
    static BLOCK_GILDED_BLACKSTONE_BREAK: Sound;
    static BLOCK_GILDED_BLACKSTONE_FALL: Sound;
    static BLOCK_GILDED_BLACKSTONE_HIT: Sound;
    static BLOCK_GILDED_BLACKSTONE_PLACE: Sound;
    static BLOCK_GILDED_BLACKSTONE_STEP: Sound;
    static BLOCK_GLASS_BREAK: Sound;
    static BLOCK_GLASS_FALL: Sound;
    static BLOCK_GLASS_HIT: Sound;
    static BLOCK_GLASS_PLACE: Sound;
    static BLOCK_GLASS_STEP: Sound;
    static BLOCK_GRASS_BREAK: Sound;
    static BLOCK_GRASS_FALL: Sound;
    static BLOCK_GRASS_HIT: Sound;
    static BLOCK_GRASS_PLACE: Sound;
    static BLOCK_GRASS_STEP: Sound;
    static BLOCK_GRAVEL_BREAK: Sound;
    static BLOCK_GRAVEL_FALL: Sound;
    static BLOCK_GRAVEL_HIT: Sound;
    static BLOCK_GRAVEL_PLACE: Sound;
    static BLOCK_GRAVEL_STEP: Sound;
    static BLOCK_GRINDSTONE_USE: Sound;
    static BLOCK_HONEY_BLOCK_BREAK: Sound;
    static BLOCK_HONEY_BLOCK_FALL: Sound;
    static BLOCK_HONEY_BLOCK_HIT: Sound;
    static BLOCK_HONEY_BLOCK_PLACE: Sound;
    static BLOCK_HONEY_BLOCK_SLIDE: Sound;
    static BLOCK_HONEY_BLOCK_STEP: Sound;
    static BLOCK_IRON_DOOR_CLOSE: Sound;
    static BLOCK_IRON_DOOR_OPEN: Sound;
    static BLOCK_IRON_TRAPDOOR_CLOSE: Sound;
    static BLOCK_IRON_TRAPDOOR_OPEN: Sound;
    static BLOCK_LADDER_BREAK: Sound;
    static BLOCK_LADDER_FALL: Sound;
    static BLOCK_LADDER_HIT: Sound;
    static BLOCK_LADDER_PLACE: Sound;
    static BLOCK_LADDER_STEP: Sound;
    static BLOCK_LANTERN_BREAK: Sound;
    static BLOCK_LANTERN_FALL: Sound;
    static BLOCK_LANTERN_HIT: Sound;
    static BLOCK_LANTERN_PLACE: Sound;
    static BLOCK_LANTERN_STEP: Sound;
    static BLOCK_LAVA_AMBIENT: Sound;
    static BLOCK_LAVA_EXTINGUISH: Sound;
    static BLOCK_LAVA_POP: Sound;
    static BLOCK_LEVER_CLICK: Sound;
    static BLOCK_LILY_PAD_PLACE: Sound;
    static BLOCK_LODESTONE_BREAK: Sound;
    static BLOCK_LODESTONE_FALL: Sound;
    static BLOCK_LODESTONE_HIT: Sound;
    static BLOCK_LODESTONE_PLACE: Sound;
    static BLOCK_LODESTONE_STEP: Sound;
    static BLOCK_METAL_BREAK: Sound;
    static BLOCK_METAL_FALL: Sound;
    static BLOCK_METAL_HIT: Sound;
    static BLOCK_METAL_PLACE: Sound;
    static BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF: Sound;
    static BLOCK_METAL_PRESSURE_PLATE_CLICK_ON: Sound;
    static BLOCK_METAL_STEP: Sound;
    static BLOCK_NETHER_BRICKS_BREAK: Sound;
    static BLOCK_NETHER_BRICKS_FALL: Sound;
    static BLOCK_NETHER_BRICKS_HIT: Sound;
    static BLOCK_NETHER_BRICKS_PLACE: Sound;
    static BLOCK_NETHER_BRICKS_STEP: Sound;
    static BLOCK_NETHER_GOLD_ORE_BREAK: Sound;
    static BLOCK_NETHER_GOLD_ORE_FALL: Sound;
    static BLOCK_NETHER_GOLD_ORE_HIT: Sound;
    static BLOCK_NETHER_GOLD_ORE_PLACE: Sound;
    static BLOCK_NETHER_GOLD_ORE_STEP: Sound;
    static BLOCK_NETHER_ORE_BREAK: Sound;
    static BLOCK_NETHER_ORE_FALL: Sound;
    static BLOCK_NETHER_ORE_HIT: Sound;
    static BLOCK_NETHER_ORE_PLACE: Sound;
    static BLOCK_NETHER_ORE_STEP: Sound;
    static BLOCK_NETHER_SPROUTS_BREAK: Sound;
    static BLOCK_NETHER_SPROUTS_FALL: Sound;
    static BLOCK_NETHER_SPROUTS_HIT: Sound;
    static BLOCK_NETHER_SPROUTS_PLACE: Sound;
    static BLOCK_NETHER_SPROUTS_STEP: Sound;
    static BLOCK_NETHER_WART_BREAK: Sound;
    static BLOCK_NETHERITE_BLOCK_BREAK: Sound;
    static BLOCK_NETHERITE_BLOCK_FALL: Sound;
    static BLOCK_NETHERITE_BLOCK_HIT: Sound;
    static BLOCK_NETHERITE_BLOCK_PLACE: Sound;
    static BLOCK_NETHERITE_BLOCK_STEP: Sound;
    static BLOCK_NETHERRACK_BREAK: Sound;
    static BLOCK_NETHERRACK_FALL: Sound;
    static BLOCK_NETHERRACK_HIT: Sound;
    static BLOCK_NETHERRACK_PLACE: Sound;
    static BLOCK_NETHERRACK_STEP: Sound;
    static BLOCK_NOTE_BLOCK_BANJO: Sound;
    static BLOCK_NOTE_BLOCK_BASEDRUM: Sound;
    static BLOCK_NOTE_BLOCK_BASS: Sound;
    static BLOCK_NOTE_BLOCK_BELL: Sound;
    static BLOCK_NOTE_BLOCK_BIT: Sound;
    static BLOCK_NOTE_BLOCK_CHIME: Sound;
    static BLOCK_NOTE_BLOCK_COW_BELL: Sound;
    static BLOCK_NOTE_BLOCK_DIDGERIDOO: Sound;
    static BLOCK_NOTE_BLOCK_FLUTE: Sound;
    static BLOCK_NOTE_BLOCK_GUITAR: Sound;
    static BLOCK_NOTE_BLOCK_HARP: Sound;
    static BLOCK_NOTE_BLOCK_HAT: Sound;
    static BLOCK_NOTE_BLOCK_IRON_XYLOPHONE: Sound;
    static BLOCK_NOTE_BLOCK_PLING: Sound;
    static BLOCK_NOTE_BLOCK_SNARE: Sound;
    static BLOCK_NOTE_BLOCK_XYLOPHONE: Sound;
    static BLOCK_NYLIUM_BREAK: Sound;
    static BLOCK_NYLIUM_FALL: Sound;
    static BLOCK_NYLIUM_HIT: Sound;
    static BLOCK_NYLIUM_PLACE: Sound;
    static BLOCK_NYLIUM_STEP: Sound;
    static BLOCK_PISTON_CONTRACT: Sound;
    static BLOCK_PISTON_EXTEND: Sound;
    static BLOCK_PORTAL_AMBIENT: Sound;
    static BLOCK_PORTAL_TRAVEL: Sound;
    static BLOCK_PORTAL_TRIGGER: Sound;
    static BLOCK_PUMPKIN_CARVE: Sound;
    static BLOCK_REDSTONE_TORCH_BURNOUT: Sound;
    static BLOCK_RESPAWN_ANCHOR_AMBIENT: Sound;
    static BLOCK_RESPAWN_ANCHOR_CHARGE: Sound;
    static BLOCK_RESPAWN_ANCHOR_DEPLETE: Sound;
    static BLOCK_RESPAWN_ANCHOR_SET_SPAWN: Sound;
    static BLOCK_ROOTS_BREAK: Sound;
    static BLOCK_ROOTS_FALL: Sound;
    static BLOCK_ROOTS_HIT: Sound;
    static BLOCK_ROOTS_PLACE: Sound;
    static BLOCK_ROOTS_STEP: Sound;
    static BLOCK_SAND_BREAK: Sound;
    static BLOCK_SAND_FALL: Sound;
    static BLOCK_SAND_HIT: Sound;
    static BLOCK_SAND_PLACE: Sound;
    static BLOCK_SAND_STEP: Sound;
    static BLOCK_SCAFFOLDING_BREAK: Sound;
    static BLOCK_SCAFFOLDING_FALL: Sound;
    static BLOCK_SCAFFOLDING_HIT: Sound;
    static BLOCK_SCAFFOLDING_PLACE: Sound;
    static BLOCK_SCAFFOLDING_STEP: Sound;
    static BLOCK_SHROOMLIGHT_BREAK: Sound;
    static BLOCK_SHROOMLIGHT_FALL: Sound;
    static BLOCK_SHROOMLIGHT_HIT: Sound;
    static BLOCK_SHROOMLIGHT_PLACE: Sound;
    static BLOCK_SHROOMLIGHT_STEP: Sound;
    static BLOCK_SHULKER_BOX_CLOSE: Sound;
    static BLOCK_SHULKER_BOX_OPEN: Sound;
    static BLOCK_SLIME_BLOCK_BREAK: Sound;
    static BLOCK_SLIME_BLOCK_FALL: Sound;
    static BLOCK_SLIME_BLOCK_HIT: Sound;
    static BLOCK_SLIME_BLOCK_PLACE: Sound;
    static BLOCK_SLIME_BLOCK_STEP: Sound;
    static BLOCK_SMITHING_TABLE_USE: Sound;
    static BLOCK_SMOKER_SMOKE: Sound;
    static BLOCK_SNOW_BREAK: Sound;
    static BLOCK_SNOW_FALL: Sound;
    static BLOCK_SNOW_HIT: Sound;
    static BLOCK_SNOW_PLACE: Sound;
    static BLOCK_SNOW_STEP: Sound;
    static BLOCK_SOUL_SAND_BREAK: Sound;
    static BLOCK_SOUL_SAND_FALL: Sound;
    static BLOCK_SOUL_SAND_HIT: Sound;
    static BLOCK_SOUL_SAND_PLACE: Sound;
    static BLOCK_SOUL_SAND_STEP: Sound;
    static BLOCK_SOUL_SOIL_BREAK: Sound;
    static BLOCK_SOUL_SOIL_FALL: Sound;
    static BLOCK_SOUL_SOIL_HIT: Sound;
    static BLOCK_SOUL_SOIL_PLACE: Sound;
    static BLOCK_SOUL_SOIL_STEP: Sound;
    static BLOCK_STEM_BREAK: Sound;
    static BLOCK_STEM_FALL: Sound;
    static BLOCK_STEM_HIT: Sound;
    static BLOCK_STEM_PLACE: Sound;
    static BLOCK_STEM_STEP: Sound;
    static BLOCK_STONE_BREAK: Sound;
    static BLOCK_STONE_BUTTON_CLICK_OFF: Sound;
    static BLOCK_STONE_BUTTON_CLICK_ON: Sound;
    static BLOCK_STONE_FALL: Sound;
    static BLOCK_STONE_HIT: Sound;
    static BLOCK_STONE_PLACE: Sound;
    static BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF: Sound;
    static BLOCK_STONE_PRESSURE_PLATE_CLICK_ON: Sound;
    static BLOCK_STONE_STEP: Sound;
    static BLOCK_SWEET_BERRY_BUSH_BREAK: Sound;
    static BLOCK_SWEET_BERRY_BUSH_PLACE: Sound;
    static BLOCK_TRIPWIRE_ATTACH: Sound;
    static BLOCK_TRIPWIRE_CLICK_OFF: Sound;
    static BLOCK_TRIPWIRE_CLICK_ON: Sound;
    static BLOCK_TRIPWIRE_DETACH: Sound;
    static BLOCK_VINE_STEP: Sound;
    static BLOCK_WART_BLOCK_BREAK: Sound;
    static BLOCK_WART_BLOCK_FALL: Sound;
    static BLOCK_WART_BLOCK_HIT: Sound;
    static BLOCK_WART_BLOCK_PLACE: Sound;
    static BLOCK_WART_BLOCK_STEP: Sound;
    static BLOCK_WATER_AMBIENT: Sound;
    static BLOCK_WEEPING_VINES_BREAK: Sound;
    static BLOCK_WEEPING_VINES_FALL: Sound;
    static BLOCK_WEEPING_VINES_HIT: Sound;
    static BLOCK_WEEPING_VINES_PLACE: Sound;
    static BLOCK_WEEPING_VINES_STEP: Sound;
    static BLOCK_WET_GRASS_BREAK: Sound;
    static BLOCK_WET_GRASS_FALL: Sound;
    static BLOCK_WET_GRASS_HIT: Sound;
    static BLOCK_WET_GRASS_PLACE: Sound;
    static BLOCK_WET_GRASS_STEP: Sound;
    static BLOCK_WOOD_BREAK: Sound;
    static BLOCK_WOOD_FALL: Sound;
    static BLOCK_WOOD_HIT: Sound;
    static BLOCK_WOOD_PLACE: Sound;
    static BLOCK_WOOD_STEP: Sound;
    static BLOCK_WOODEN_BUTTON_CLICK_OFF: Sound;
    static BLOCK_WOODEN_BUTTON_CLICK_ON: Sound;
    static BLOCK_WOODEN_DOOR_CLOSE: Sound;
    static BLOCK_WOODEN_DOOR_OPEN: Sound;
    static BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF: Sound;
    static BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON: Sound;
    static BLOCK_WOODEN_TRAPDOOR_CLOSE: Sound;
    static BLOCK_WOODEN_TRAPDOOR_OPEN: Sound;
    static BLOCK_WOOL_BREAK: Sound;
    static BLOCK_WOOL_FALL: Sound;
    static BLOCK_WOOL_HIT: Sound;
    static BLOCK_WOOL_PLACE: Sound;
    static BLOCK_WOOL_STEP: Sound;
    static ENCHANT_THORNS_HIT: Sound;
    static ENTITY_ARMOR_STAND_BREAK: Sound;
    static ENTITY_ARMOR_STAND_FALL: Sound;
    static ENTITY_ARMOR_STAND_HIT: Sound;
    static ENTITY_ARMOR_STAND_PLACE: Sound;
    static ENTITY_ARROW_HIT: Sound;
    static ENTITY_ARROW_HIT_PLAYER: Sound;
    static ENTITY_ARROW_SHOOT: Sound;
    static ENTITY_BAT_AMBIENT: Sound;
    static ENTITY_BAT_DEATH: Sound;
    static ENTITY_BAT_HURT: Sound;
    static ENTITY_BAT_LOOP: Sound;
    static ENTITY_BAT_TAKEOFF: Sound;
    static ENTITY_BEE_DEATH: Sound;
    static ENTITY_BEE_HURT: Sound;
    static ENTITY_BEE_LOOP: Sound;
    static ENTITY_BEE_LOOP_AGGRESSIVE: Sound;
    static ENTITY_BEE_POLLINATE: Sound;
    static ENTITY_BEE_STING: Sound;
    static ENTITY_BLAZE_AMBIENT: Sound;
    static ENTITY_BLAZE_BURN: Sound;
    static ENTITY_BLAZE_DEATH: Sound;
    static ENTITY_BLAZE_HURT: Sound;
    static ENTITY_BLAZE_SHOOT: Sound;
    static ENTITY_BOAT_PADDLE_LAND: Sound;
    static ENTITY_BOAT_PADDLE_WATER: Sound;
    static ENTITY_CAT_AMBIENT: Sound;
    static ENTITY_CAT_BEG_FOR_FOOD: Sound;
    static ENTITY_CAT_DEATH: Sound;
    static ENTITY_CAT_EAT: Sound;
    static ENTITY_CAT_HISS: Sound;
    static ENTITY_CAT_HURT: Sound;
    static ENTITY_CAT_PURR: Sound;
    static ENTITY_CAT_PURREOW: Sound;
    static ENTITY_CAT_STRAY_AMBIENT: Sound;
    static ENTITY_CHICKEN_AMBIENT: Sound;
    static ENTITY_CHICKEN_DEATH: Sound;
    static ENTITY_CHICKEN_EGG: Sound;
    static ENTITY_CHICKEN_HURT: Sound;
    static ENTITY_CHICKEN_STEP: Sound;
    static ENTITY_COD_AMBIENT: Sound;
    static ENTITY_COD_DEATH: Sound;
    static ENTITY_COD_FLOP: Sound;
    static ENTITY_COD_HURT: Sound;
    static ENTITY_COW_AMBIENT: Sound;
    static ENTITY_COW_DEATH: Sound;
    static ENTITY_COW_HURT: Sound;
    static ENTITY_COW_MILK: Sound;
    static ENTITY_COW_STEP: Sound;
    static ENTITY_CREEPER_DEATH: Sound;
    static ENTITY_CREEPER_HURT: Sound;
    static ENTITY_CREEPER_PRIMED: Sound;
    static ENTITY_DOLPHIN_AMBIENT: Sound;
    static ENTITY_DOLPHIN_AMBIENT_WATER: Sound;
    static ENTITY_DOLPHIN_ATTACK: Sound;
    static ENTITY_DOLPHIN_DEATH: Sound;
    static ENTITY_DOLPHIN_EAT: Sound;
    static ENTITY_DOLPHIN_HURT: Sound;
    static ENTITY_DOLPHIN_JUMP: Sound;
    static ENTITY_DOLPHIN_PLAY: Sound;
    static ENTITY_DOLPHIN_SPLASH: Sound;
    static ENTITY_DOLPHIN_SWIM: Sound;
    static ENTITY_DONKEY_AMBIENT: Sound;
    static ENTITY_DONKEY_ANGRY: Sound;
    static ENTITY_DONKEY_CHEST: Sound;
    static ENTITY_DONKEY_DEATH: Sound;
    static ENTITY_DONKEY_EAT: Sound;
    static ENTITY_DONKEY_HURT: Sound;
    static ENTITY_DRAGON_FIREBALL_EXPLODE: Sound;
    static ENTITY_DROWNED_AMBIENT: Sound;
    static ENTITY_DROWNED_AMBIENT_WATER: Sound;
    static ENTITY_DROWNED_DEATH: Sound;
    static ENTITY_DROWNED_DEATH_WATER: Sound;
    static ENTITY_DROWNED_HURT: Sound;
    static ENTITY_DROWNED_HURT_WATER: Sound;
    static ENTITY_DROWNED_SHOOT: Sound;
    static ENTITY_DROWNED_STEP: Sound;
    static ENTITY_DROWNED_SWIM: Sound;
    static ENTITY_EGG_THROW: Sound;
    static ENTITY_ELDER_GUARDIAN_AMBIENT: Sound;
    static ENTITY_ELDER_GUARDIAN_AMBIENT_LAND: Sound;
    static ENTITY_ELDER_GUARDIAN_CURSE: Sound;
    static ENTITY_ELDER_GUARDIAN_DEATH: Sound;
    static ENTITY_ELDER_GUARDIAN_DEATH_LAND: Sound;
    static ENTITY_ELDER_GUARDIAN_FLOP: Sound;
    static ENTITY_ELDER_GUARDIAN_HURT: Sound;
    static ENTITY_ELDER_GUARDIAN_HURT_LAND: Sound;
    static ENTITY_ENDER_DRAGON_AMBIENT: Sound;
    static ENTITY_ENDER_DRAGON_DEATH: Sound;
    static ENTITY_ENDER_DRAGON_FLAP: Sound;
    static ENTITY_ENDER_DRAGON_GROWL: Sound;
    static ENTITY_ENDER_DRAGON_HURT: Sound;
    static ENTITY_ENDER_DRAGON_SHOOT: Sound;
    static ENTITY_ENDER_EYE_DEATH: Sound;
    static ENTITY_ENDER_EYE_LAUNCH: Sound;
    static ENTITY_ENDER_PEARL_THROW: Sound;
    static ENTITY_ENDERMAN_AMBIENT: Sound;
    static ENTITY_ENDERMAN_DEATH: Sound;
    static ENTITY_ENDERMAN_HURT: Sound;
    static ENTITY_ENDERMAN_SCREAM: Sound;
    static ENTITY_ENDERMAN_STARE: Sound;
    static ENTITY_ENDERMAN_TELEPORT: Sound;
    static ENTITY_ENDERMITE_AMBIENT: Sound;
    static ENTITY_ENDERMITE_DEATH: Sound;
    static ENTITY_ENDERMITE_HURT: Sound;
    static ENTITY_ENDERMITE_STEP: Sound;
    static ENTITY_EVOKER_AMBIENT: Sound;
    static ENTITY_EVOKER_CAST_SPELL: Sound;
    static ENTITY_EVOKER_CELEBRATE: Sound;
    static ENTITY_EVOKER_DEATH: Sound;
    static ENTITY_EVOKER_FANGS_ATTACK: Sound;
    static ENTITY_EVOKER_HURT: Sound;
    static ENTITY_EVOKER_PREPARE_ATTACK: Sound;
    static ENTITY_EVOKER_PREPARE_SUMMON: Sound;
    static ENTITY_EVOKER_PREPARE_WOLOLO: Sound;
    static ENTITY_EXPERIENCE_BOTTLE_THROW: Sound;
    static ENTITY_EXPERIENCE_ORB_PICKUP: Sound;
    static ENTITY_FIREWORK_ROCKET_BLAST: Sound;
    static ENTITY_FIREWORK_ROCKET_BLAST_FAR: Sound;
    static ENTITY_FIREWORK_ROCKET_LARGE_BLAST: Sound;
    static ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR: Sound;
    static ENTITY_FIREWORK_ROCKET_LAUNCH: Sound;
    static ENTITY_FIREWORK_ROCKET_SHOOT: Sound;
    static ENTITY_FIREWORK_ROCKET_TWINKLE: Sound;
    static ENTITY_FIREWORK_ROCKET_TWINKLE_FAR: Sound;
    static ENTITY_FISH_SWIM: Sound;
    static ENTITY_FISHING_BOBBER_RETRIEVE: Sound;
    static ENTITY_FISHING_BOBBER_SPLASH: Sound;
    static ENTITY_FISHING_BOBBER_THROW: Sound;
    static ENTITY_FOX_AGGRO: Sound;
    static ENTITY_FOX_AMBIENT: Sound;
    static ENTITY_FOX_BITE: Sound;
    static ENTITY_FOX_DEATH: Sound;
    static ENTITY_FOX_EAT: Sound;
    static ENTITY_FOX_HURT: Sound;
    static ENTITY_FOX_SCREECH: Sound;
    static ENTITY_FOX_SLEEP: Sound;
    static ENTITY_FOX_SNIFF: Sound;
    static ENTITY_FOX_SPIT: Sound;
    static ENTITY_FOX_TELEPORT: Sound;
    static ENTITY_GENERIC_BIG_FALL: Sound;
    static ENTITY_GENERIC_BURN: Sound;
    static ENTITY_GENERIC_DEATH: Sound;
    static ENTITY_GENERIC_DRINK: Sound;
    static ENTITY_GENERIC_EAT: Sound;
    static ENTITY_GENERIC_EXPLODE: Sound;
    static ENTITY_GENERIC_EXTINGUISH_FIRE: Sound;
    static ENTITY_GENERIC_HURT: Sound;
    static ENTITY_GENERIC_SMALL_FALL: Sound;
    static ENTITY_GENERIC_SPLASH: Sound;
    static ENTITY_GENERIC_SWIM: Sound;
    static ENTITY_GHAST_AMBIENT: Sound;
    static ENTITY_GHAST_DEATH: Sound;
    static ENTITY_GHAST_HURT: Sound;
    static ENTITY_GHAST_SCREAM: Sound;
    static ENTITY_GHAST_SHOOT: Sound;
    static ENTITY_GHAST_WARN: Sound;
    static ENTITY_GUARDIAN_AMBIENT: Sound;
    static ENTITY_GUARDIAN_AMBIENT_LAND: Sound;
    static ENTITY_GUARDIAN_ATTACK: Sound;
    static ENTITY_GUARDIAN_DEATH: Sound;
    static ENTITY_GUARDIAN_DEATH_LAND: Sound;
    static ENTITY_GUARDIAN_FLOP: Sound;
    static ENTITY_GUARDIAN_HURT: Sound;
    static ENTITY_GUARDIAN_HURT_LAND: Sound;
    static ENTITY_HOGLIN_AMBIENT: Sound;
    static ENTITY_HOGLIN_ANGRY: Sound;
    static ENTITY_HOGLIN_ATTACK: Sound;
    static ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED: Sound;
    static ENTITY_HOGLIN_DEATH: Sound;
    static ENTITY_HOGLIN_HURT: Sound;
    static ENTITY_HOGLIN_RETREAT: Sound;
    static ENTITY_HOGLIN_STEP: Sound;
    static ENTITY_HORSE_AMBIENT: Sound;
    static ENTITY_HORSE_ANGRY: Sound;
    static ENTITY_HORSE_ARMOR: Sound;
    static ENTITY_HORSE_BREATHE: Sound;
    static ENTITY_HORSE_DEATH: Sound;
    static ENTITY_HORSE_EAT: Sound;
    static ENTITY_HORSE_GALLOP: Sound;
    static ENTITY_HORSE_HURT: Sound;
    static ENTITY_HORSE_JUMP: Sound;
    static ENTITY_HORSE_LAND: Sound;
    static ENTITY_HORSE_SADDLE: Sound;
    static ENTITY_HORSE_STEP: Sound;
    static ENTITY_HORSE_STEP_WOOD: Sound;
    static ENTITY_HOSTILE_BIG_FALL: Sound;
    static ENTITY_HOSTILE_DEATH: Sound;
    static ENTITY_HOSTILE_HURT: Sound;
    static ENTITY_HOSTILE_SMALL_FALL: Sound;
    static ENTITY_HOSTILE_SPLASH: Sound;
    static ENTITY_HOSTILE_SWIM: Sound;
    static ENTITY_HUSK_AMBIENT: Sound;
    static ENTITY_HUSK_CONVERTED_TO_ZOMBIE: Sound;
    static ENTITY_HUSK_DEATH: Sound;
    static ENTITY_HUSK_HURT: Sound;
    static ENTITY_HUSK_STEP: Sound;
    static ENTITY_ILLUSIONER_AMBIENT: Sound;
    static ENTITY_ILLUSIONER_CAST_SPELL: Sound;
    static ENTITY_ILLUSIONER_DEATH: Sound;
    static ENTITY_ILLUSIONER_HURT: Sound;
    static ENTITY_ILLUSIONER_MIRROR_MOVE: Sound;
    static ENTITY_ILLUSIONER_PREPARE_BLINDNESS: Sound;
    static ENTITY_ILLUSIONER_PREPARE_MIRROR: Sound;
    static ENTITY_IRON_GOLEM_ATTACK: Sound;
    static ENTITY_IRON_GOLEM_DAMAGE: Sound;
    static ENTITY_IRON_GOLEM_DEATH: Sound;
    static ENTITY_IRON_GOLEM_HURT: Sound;
    static ENTITY_IRON_GOLEM_REPAIR: Sound;
    static ENTITY_IRON_GOLEM_STEP: Sound;
    static ENTITY_ITEM_BREAK: Sound;
    static ENTITY_ITEM_FRAME_ADD_ITEM: Sound;
    static ENTITY_ITEM_FRAME_BREAK: Sound;
    static ENTITY_ITEM_FRAME_PLACE: Sound;
    static ENTITY_ITEM_FRAME_REMOVE_ITEM: Sound;
    static ENTITY_ITEM_FRAME_ROTATE_ITEM: Sound;
    static ENTITY_ITEM_PICKUP: Sound;
    static ENTITY_LEASH_KNOT_BREAK: Sound;
    static ENTITY_LEASH_KNOT_PLACE: Sound;
    static ENTITY_LIGHTNING_BOLT_IMPACT: Sound;
    static ENTITY_LIGHTNING_BOLT_THUNDER: Sound;
    static ENTITY_LINGERING_POTION_THROW: Sound;
    static ENTITY_LLAMA_AMBIENT: Sound;
    static ENTITY_LLAMA_ANGRY: Sound;
    static ENTITY_LLAMA_CHEST: Sound;
    static ENTITY_LLAMA_DEATH: Sound;
    static ENTITY_LLAMA_EAT: Sound;
    static ENTITY_LLAMA_HURT: Sound;
    static ENTITY_LLAMA_SPIT: Sound;
    static ENTITY_LLAMA_STEP: Sound;
    static ENTITY_LLAMA_SWAG: Sound;
    static ENTITY_MAGMA_CUBE_DEATH: Sound;
    static ENTITY_MAGMA_CUBE_DEATH_SMALL: Sound;
    static ENTITY_MAGMA_CUBE_HURT: Sound;
    static ENTITY_MAGMA_CUBE_HURT_SMALL: Sound;
    static ENTITY_MAGMA_CUBE_JUMP: Sound;
    static ENTITY_MAGMA_CUBE_SQUISH: Sound;
    static ENTITY_MAGMA_CUBE_SQUISH_SMALL: Sound;
    static ENTITY_MINECART_INSIDE: Sound;
    static ENTITY_MINECART_RIDING: Sound;
    static ENTITY_MOOSHROOM_CONVERT: Sound;
    static ENTITY_MOOSHROOM_EAT: Sound;
    static ENTITY_MOOSHROOM_MILK: Sound;
    static ENTITY_MOOSHROOM_SHEAR: Sound;
    static ENTITY_MOOSHROOM_SUSPICIOUS_MILK: Sound;
    static ENTITY_MULE_AMBIENT: Sound;
    static ENTITY_MULE_ANGRY: Sound;
    static ENTITY_MULE_CHEST: Sound;
    static ENTITY_MULE_DEATH: Sound;
    static ENTITY_MULE_EAT: Sound;
    static ENTITY_MULE_HURT: Sound;
    static ENTITY_OCELOT_AMBIENT: Sound;
    static ENTITY_OCELOT_DEATH: Sound;
    static ENTITY_OCELOT_HURT: Sound;
    static ENTITY_PAINTING_BREAK: Sound;
    static ENTITY_PAINTING_PLACE: Sound;
    static ENTITY_PANDA_AGGRESSIVE_AMBIENT: Sound;
    static ENTITY_PANDA_AMBIENT: Sound;
    static ENTITY_PANDA_BITE: Sound;
    static ENTITY_PANDA_CANT_BREED: Sound;
    static ENTITY_PANDA_DEATH: Sound;
    static ENTITY_PANDA_EAT: Sound;
    static ENTITY_PANDA_HURT: Sound;
    static ENTITY_PANDA_PRE_SNEEZE: Sound;
    static ENTITY_PANDA_SNEEZE: Sound;
    static ENTITY_PANDA_STEP: Sound;
    static ENTITY_PANDA_WORRIED_AMBIENT: Sound;
    static ENTITY_PARROT_AMBIENT: Sound;
    static ENTITY_PARROT_DEATH: Sound;
    static ENTITY_PARROT_EAT: Sound;
    static ENTITY_PARROT_FLY: Sound;
    static ENTITY_PARROT_HURT: Sound;
    static ENTITY_PARROT_IMITATE_BLAZE: Sound;
    static ENTITY_PARROT_IMITATE_CREEPER: Sound;
    static ENTITY_PARROT_IMITATE_DROWNED: Sound;
    static ENTITY_PARROT_IMITATE_ELDER_GUARDIAN: Sound;
    static ENTITY_PARROT_IMITATE_ENDER_DRAGON: Sound;
    static ENTITY_PARROT_IMITATE_ENDERMITE: Sound;
    static ENTITY_PARROT_IMITATE_EVOKER: Sound;
    static ENTITY_PARROT_IMITATE_GHAST: Sound;
    static ENTITY_PARROT_IMITATE_GUARDIAN: Sound;
    static ENTITY_PARROT_IMITATE_HOGLIN: Sound;
    static ENTITY_PARROT_IMITATE_HUSK: Sound;
    static ENTITY_PARROT_IMITATE_ILLUSIONER: Sound;
    static ENTITY_PARROT_IMITATE_MAGMA_CUBE: Sound;
    static ENTITY_PARROT_IMITATE_PHANTOM: Sound;
    static ENTITY_PARROT_IMITATE_PIGLIN: Sound;
    static ENTITY_PARROT_IMITATE_PIGLIN_BRUTE: Sound;
    static ENTITY_PARROT_IMITATE_PILLAGER: Sound;
    static ENTITY_PARROT_IMITATE_RAVAGER: Sound;
    static ENTITY_PARROT_IMITATE_SHULKER: Sound;
    static ENTITY_PARROT_IMITATE_SILVERFISH: Sound;
    static ENTITY_PARROT_IMITATE_SKELETON: Sound;
    static ENTITY_PARROT_IMITATE_SLIME: Sound;
    static ENTITY_PARROT_IMITATE_SPIDER: Sound;
    static ENTITY_PARROT_IMITATE_STRAY: Sound;
    static ENTITY_PARROT_IMITATE_VEX: Sound;
    static ENTITY_PARROT_IMITATE_VINDICATOR: Sound;
    static ENTITY_PARROT_IMITATE_WITCH: Sound;
    static ENTITY_PARROT_IMITATE_WITHER: Sound;
    static ENTITY_PARROT_IMITATE_WITHER_SKELETON: Sound;
    static ENTITY_PARROT_IMITATE_ZOGLIN: Sound;
    static ENTITY_PARROT_IMITATE_ZOMBIE: Sound;
    static ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER: Sound;
    static ENTITY_PARROT_STEP: Sound;
    static ENTITY_PHANTOM_AMBIENT: Sound;
    static ENTITY_PHANTOM_BITE: Sound;
    static ENTITY_PHANTOM_DEATH: Sound;
    static ENTITY_PHANTOM_FLAP: Sound;
    static ENTITY_PHANTOM_HURT: Sound;
    static ENTITY_PHANTOM_SWOOP: Sound;
    static ENTITY_PIG_AMBIENT: Sound;
    static ENTITY_PIG_DEATH: Sound;
    static ENTITY_PIG_HURT: Sound;
    static ENTITY_PIG_SADDLE: Sound;
    static ENTITY_PIG_STEP: Sound;
    static ENTITY_PIGLIN_ADMIRING_ITEM: Sound;
    static ENTITY_PIGLIN_AMBIENT: Sound;
    static ENTITY_PIGLIN_ANGRY: Sound;
    static ENTITY_PIGLIN_BRUTE_AMBIENT: Sound;
    static ENTITY_PIGLIN_BRUTE_ANGRY: Sound;
    static ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED: Sound;
    static ENTITY_PIGLIN_BRUTE_DEATH: Sound;
    static ENTITY_PIGLIN_BRUTE_HURT: Sound;
    static ENTITY_PIGLIN_BRUTE_STEP: Sound;
    static ENTITY_PIGLIN_CELEBRATE: Sound;
    static ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED: Sound;
    static ENTITY_PIGLIN_DEATH: Sound;
    static ENTITY_PIGLIN_HURT: Sound;
    static ENTITY_PIGLIN_JEALOUS: Sound;
    static ENTITY_PIGLIN_RETREAT: Sound;
    static ENTITY_PIGLIN_STEP: Sound;
    static ENTITY_PILLAGER_AMBIENT: Sound;
    static ENTITY_PILLAGER_CELEBRATE: Sound;
    static ENTITY_PILLAGER_DEATH: Sound;
    static ENTITY_PILLAGER_HURT: Sound;
    static ENTITY_PLAYER_ATTACK_CRIT: Sound;
    static ENTITY_PLAYER_ATTACK_KNOCKBACK: Sound;
    static ENTITY_PLAYER_ATTACK_NODAMAGE: Sound;
    static ENTITY_PLAYER_ATTACK_STRONG: Sound;
    static ENTITY_PLAYER_ATTACK_SWEEP: Sound;
    static ENTITY_PLAYER_ATTACK_WEAK: Sound;
    static ENTITY_PLAYER_BIG_FALL: Sound;
    static ENTITY_PLAYER_BREATH: Sound;
    static ENTITY_PLAYER_BURP: Sound;
    static ENTITY_PLAYER_DEATH: Sound;
    static ENTITY_PLAYER_HURT: Sound;
    static ENTITY_PLAYER_HURT_DROWN: Sound;
    static ENTITY_PLAYER_HURT_ON_FIRE: Sound;
    static ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH: Sound;
    static ENTITY_PLAYER_LEVELUP: Sound;
    static ENTITY_PLAYER_SMALL_FALL: Sound;
    static ENTITY_PLAYER_SPLASH: Sound;
    static ENTITY_PLAYER_SPLASH_HIGH_SPEED: Sound;
    static ENTITY_PLAYER_SWIM: Sound;
    static ENTITY_POLAR_BEAR_AMBIENT: Sound;
    static ENTITY_POLAR_BEAR_AMBIENT_BABY: Sound;
    static ENTITY_POLAR_BEAR_DEATH: Sound;
    static ENTITY_POLAR_BEAR_HURT: Sound;
    static ENTITY_POLAR_BEAR_STEP: Sound;
    static ENTITY_POLAR_BEAR_WARNING: Sound;
    static ENTITY_PUFFER_FISH_AMBIENT: Sound;
    static ENTITY_PUFFER_FISH_BLOW_OUT: Sound;
    static ENTITY_PUFFER_FISH_BLOW_UP: Sound;
    static ENTITY_PUFFER_FISH_DEATH: Sound;
    static ENTITY_PUFFER_FISH_FLOP: Sound;
    static ENTITY_PUFFER_FISH_HURT: Sound;
    static ENTITY_PUFFER_FISH_STING: Sound;
    static ENTITY_RABBIT_AMBIENT: Sound;
    static ENTITY_RABBIT_ATTACK: Sound;
    static ENTITY_RABBIT_DEATH: Sound;
    static ENTITY_RABBIT_HURT: Sound;
    static ENTITY_RABBIT_JUMP: Sound;
    static ENTITY_RAVAGER_AMBIENT: Sound;
    static ENTITY_RAVAGER_ATTACK: Sound;
    static ENTITY_RAVAGER_CELEBRATE: Sound;
    static ENTITY_RAVAGER_DEATH: Sound;
    static ENTITY_RAVAGER_HURT: Sound;
    static ENTITY_RAVAGER_ROAR: Sound;
    static ENTITY_RAVAGER_STEP: Sound;
    static ENTITY_RAVAGER_STUNNED: Sound;
    static ENTITY_SALMON_AMBIENT: Sound;
    static ENTITY_SALMON_DEATH: Sound;
    static ENTITY_SALMON_FLOP: Sound;
    static ENTITY_SALMON_HURT: Sound;
    static ENTITY_SHEEP_AMBIENT: Sound;
    static ENTITY_SHEEP_DEATH: Sound;
    static ENTITY_SHEEP_HURT: Sound;
    static ENTITY_SHEEP_SHEAR: Sound;
    static ENTITY_SHEEP_STEP: Sound;
    static ENTITY_SHULKER_AMBIENT: Sound;
    static ENTITY_SHULKER_BULLET_HIT: Sound;
    static ENTITY_SHULKER_BULLET_HURT: Sound;
    static ENTITY_SHULKER_CLOSE: Sound;
    static ENTITY_SHULKER_DEATH: Sound;
    static ENTITY_SHULKER_HURT: Sound;
    static ENTITY_SHULKER_HURT_CLOSED: Sound;
    static ENTITY_SHULKER_OPEN: Sound;
    static ENTITY_SHULKER_SHOOT: Sound;
    static ENTITY_SHULKER_TELEPORT: Sound;
    static ENTITY_SILVERFISH_AMBIENT: Sound;
    static ENTITY_SILVERFISH_DEATH: Sound;
    static ENTITY_SILVERFISH_HURT: Sound;
    static ENTITY_SILVERFISH_STEP: Sound;
    static ENTITY_SKELETON_AMBIENT: Sound;
    static ENTITY_SKELETON_DEATH: Sound;
    static ENTITY_SKELETON_HORSE_AMBIENT: Sound;
    static ENTITY_SKELETON_HORSE_AMBIENT_WATER: Sound;
    static ENTITY_SKELETON_HORSE_DEATH: Sound;
    static ENTITY_SKELETON_HORSE_GALLOP_WATER: Sound;
    static ENTITY_SKELETON_HORSE_HURT: Sound;
    static ENTITY_SKELETON_HORSE_JUMP_WATER: Sound;
    static ENTITY_SKELETON_HORSE_STEP_WATER: Sound;
    static ENTITY_SKELETON_HORSE_SWIM: Sound;
    static ENTITY_SKELETON_HURT: Sound;
    static ENTITY_SKELETON_SHOOT: Sound;
    static ENTITY_SKELETON_STEP: Sound;
    static ENTITY_SLIME_ATTACK: Sound;
    static ENTITY_SLIME_DEATH: Sound;
    static ENTITY_SLIME_DEATH_SMALL: Sound;
    static ENTITY_SLIME_HURT: Sound;
    static ENTITY_SLIME_HURT_SMALL: Sound;
    static ENTITY_SLIME_JUMP: Sound;
    static ENTITY_SLIME_JUMP_SMALL: Sound;
    static ENTITY_SLIME_SQUISH: Sound;
    static ENTITY_SLIME_SQUISH_SMALL: Sound;
    static ENTITY_SNOW_GOLEM_AMBIENT: Sound;
    static ENTITY_SNOW_GOLEM_DEATH: Sound;
    static ENTITY_SNOW_GOLEM_HURT: Sound;
    static ENTITY_SNOW_GOLEM_SHEAR: Sound;
    static ENTITY_SNOW_GOLEM_SHOOT: Sound;
    static ENTITY_SNOWBALL_THROW: Sound;
    static ENTITY_SPIDER_AMBIENT: Sound;
    static ENTITY_SPIDER_DEATH: Sound;
    static ENTITY_SPIDER_HURT: Sound;
    static ENTITY_SPIDER_STEP: Sound;
    static ENTITY_SPLASH_POTION_BREAK: Sound;
    static ENTITY_SPLASH_POTION_THROW: Sound;
    static ENTITY_SQUID_AMBIENT: Sound;
    static ENTITY_SQUID_DEATH: Sound;
    static ENTITY_SQUID_HURT: Sound;
    static ENTITY_SQUID_SQUIRT: Sound;
    static ENTITY_STRAY_AMBIENT: Sound;
    static ENTITY_STRAY_DEATH: Sound;
    static ENTITY_STRAY_HURT: Sound;
    static ENTITY_STRAY_STEP: Sound;
    static ENTITY_STRIDER_AMBIENT: Sound;
    static ENTITY_STRIDER_DEATH: Sound;
    static ENTITY_STRIDER_EAT: Sound;
    static ENTITY_STRIDER_HAPPY: Sound;
    static ENTITY_STRIDER_HURT: Sound;
    static ENTITY_STRIDER_RETREAT: Sound;
    static ENTITY_STRIDER_SADDLE: Sound;
    static ENTITY_STRIDER_STEP: Sound;
    static ENTITY_STRIDER_STEP_LAVA: Sound;
    static ENTITY_TNT_PRIMED: Sound;
    static ENTITY_TROPICAL_FISH_AMBIENT: Sound;
    static ENTITY_TROPICAL_FISH_DEATH: Sound;
    static ENTITY_TROPICAL_FISH_FLOP: Sound;
    static ENTITY_TROPICAL_FISH_HURT: Sound;
    static ENTITY_TURTLE_AMBIENT_LAND: Sound;
    static ENTITY_TURTLE_DEATH: Sound;
    static ENTITY_TURTLE_DEATH_BABY: Sound;
    static ENTITY_TURTLE_EGG_BREAK: Sound;
    static ENTITY_TURTLE_EGG_CRACK: Sound;
    static ENTITY_TURTLE_EGG_HATCH: Sound;
    static ENTITY_TURTLE_HURT: Sound;
    static ENTITY_TURTLE_HURT_BABY: Sound;
    static ENTITY_TURTLE_LAY_EGG: Sound;
    static ENTITY_TURTLE_SHAMBLE: Sound;
    static ENTITY_TURTLE_SHAMBLE_BABY: Sound;
    static ENTITY_TURTLE_SWIM: Sound;
    static ENTITY_VEX_AMBIENT: Sound;
    static ENTITY_VEX_CHARGE: Sound;
    static ENTITY_VEX_DEATH: Sound;
    static ENTITY_VEX_HURT: Sound;
    static ENTITY_VILLAGER_AMBIENT: Sound;
    static ENTITY_VILLAGER_CELEBRATE: Sound;
    static ENTITY_VILLAGER_DEATH: Sound;
    static ENTITY_VILLAGER_HURT: Sound;
    static ENTITY_VILLAGER_NO: Sound;
    static ENTITY_VILLAGER_TRADE: Sound;
    static ENTITY_VILLAGER_WORK_ARMORER: Sound;
    static ENTITY_VILLAGER_WORK_BUTCHER: Sound;
    static ENTITY_VILLAGER_WORK_CARTOGRAPHER: Sound;
    static ENTITY_VILLAGER_WORK_CLERIC: Sound;
    static ENTITY_VILLAGER_WORK_FARMER: Sound;
    static ENTITY_VILLAGER_WORK_FISHERMAN: Sound;
    static ENTITY_VILLAGER_WORK_FLETCHER: Sound;
    static ENTITY_VILLAGER_WORK_LEATHERWORKER: Sound;
    static ENTITY_VILLAGER_WORK_LIBRARIAN: Sound;
    static ENTITY_VILLAGER_WORK_MASON: Sound;
    static ENTITY_VILLAGER_WORK_SHEPHERD: Sound;
    static ENTITY_VILLAGER_WORK_TOOLSMITH: Sound;
    static ENTITY_VILLAGER_WORK_WEAPONSMITH: Sound;
    static ENTITY_VILLAGER_YES: Sound;
    static ENTITY_VINDICATOR_AMBIENT: Sound;
    static ENTITY_VINDICATOR_CELEBRATE: Sound;
    static ENTITY_VINDICATOR_DEATH: Sound;
    static ENTITY_VINDICATOR_HURT: Sound;
    static ENTITY_WANDERING_TRADER_AMBIENT: Sound;
    static ENTITY_WANDERING_TRADER_DEATH: Sound;
    static ENTITY_WANDERING_TRADER_DISAPPEARED: Sound;
    static ENTITY_WANDERING_TRADER_DRINK_MILK: Sound;
    static ENTITY_WANDERING_TRADER_DRINK_POTION: Sound;
    static ENTITY_WANDERING_TRADER_HURT: Sound;
    static ENTITY_WANDERING_TRADER_NO: Sound;
    static ENTITY_WANDERING_TRADER_REAPPEARED: Sound;
    static ENTITY_WANDERING_TRADER_TRADE: Sound;
    static ENTITY_WANDERING_TRADER_YES: Sound;
    static ENTITY_WITCH_AMBIENT: Sound;
    static ENTITY_WITCH_CELEBRATE: Sound;
    static ENTITY_WITCH_DEATH: Sound;
    static ENTITY_WITCH_DRINK: Sound;
    static ENTITY_WITCH_HURT: Sound;
    static ENTITY_WITCH_THROW: Sound;
    static ENTITY_WITHER_AMBIENT: Sound;
    static ENTITY_WITHER_BREAK_BLOCK: Sound;
    static ENTITY_WITHER_DEATH: Sound;
    static ENTITY_WITHER_HURT: Sound;
    static ENTITY_WITHER_SHOOT: Sound;
    static ENTITY_WITHER_SKELETON_AMBIENT: Sound;
    static ENTITY_WITHER_SKELETON_DEATH: Sound;
    static ENTITY_WITHER_SKELETON_HURT: Sound;
    static ENTITY_WITHER_SKELETON_STEP: Sound;
    static ENTITY_WITHER_SPAWN: Sound;
    static ENTITY_WOLF_AMBIENT: Sound;
    static ENTITY_WOLF_DEATH: Sound;
    static ENTITY_WOLF_GROWL: Sound;
    static ENTITY_WOLF_HOWL: Sound;
    static ENTITY_WOLF_HURT: Sound;
    static ENTITY_WOLF_PANT: Sound;
    static ENTITY_WOLF_SHAKE: Sound;
    static ENTITY_WOLF_STEP: Sound;
    static ENTITY_WOLF_WHINE: Sound;
    static ENTITY_ZOGLIN_AMBIENT: Sound;
    static ENTITY_ZOGLIN_ANGRY: Sound;
    static ENTITY_ZOGLIN_ATTACK: Sound;
    static ENTITY_ZOGLIN_DEATH: Sound;
    static ENTITY_ZOGLIN_HURT: Sound;
    static ENTITY_ZOGLIN_STEP: Sound;
    static ENTITY_ZOMBIE_AMBIENT: Sound;
    static ENTITY_ZOMBIE_ATTACK_IRON_DOOR: Sound;
    static ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR: Sound;
    static ENTITY_ZOMBIE_BREAK_WOODEN_DOOR: Sound;
    static ENTITY_ZOMBIE_CONVERTED_TO_DROWNED: Sound;
    static ENTITY_ZOMBIE_DEATH: Sound;
    static ENTITY_ZOMBIE_DESTROY_EGG: Sound;
    static ENTITY_ZOMBIE_HORSE_AMBIENT: Sound;
    static ENTITY_ZOMBIE_HORSE_DEATH: Sound;
    static ENTITY_ZOMBIE_HORSE_HURT: Sound;
    static ENTITY_ZOMBIE_HURT: Sound;
    static ENTITY_ZOMBIE_INFECT: Sound;
    static ENTITY_ZOMBIE_STEP: Sound;
    static ENTITY_ZOMBIE_VILLAGER_AMBIENT: Sound;
    static ENTITY_ZOMBIE_VILLAGER_CONVERTED: Sound;
    static ENTITY_ZOMBIE_VILLAGER_CURE: Sound;
    static ENTITY_ZOMBIE_VILLAGER_DEATH: Sound;
    static ENTITY_ZOMBIE_VILLAGER_HURT: Sound;
    static ENTITY_ZOMBIE_VILLAGER_STEP: Sound;
    static ENTITY_ZOMBIFIED_PIGLIN_AMBIENT: Sound;
    static ENTITY_ZOMBIFIED_PIGLIN_ANGRY: Sound;
    static ENTITY_ZOMBIFIED_PIGLIN_DEATH: Sound;
    static ENTITY_ZOMBIFIED_PIGLIN_HURT: Sound;
    static EVENT_RAID_HORN: Sound;
    static ITEM_ARMOR_EQUIP_CHAIN: Sound;
    static ITEM_ARMOR_EQUIP_DIAMOND: Sound;
    static ITEM_ARMOR_EQUIP_ELYTRA: Sound;
    static ITEM_ARMOR_EQUIP_GENERIC: Sound;
    static ITEM_ARMOR_EQUIP_GOLD: Sound;
    static ITEM_ARMOR_EQUIP_IRON: Sound;
    static ITEM_ARMOR_EQUIP_LEATHER: Sound;
    static ITEM_ARMOR_EQUIP_NETHERITE: Sound;
    static ITEM_ARMOR_EQUIP_TURTLE: Sound;
    static ITEM_AXE_STRIP: Sound;
    static ITEM_BOOK_PAGE_TURN: Sound;
    static ITEM_BOOK_PUT: Sound;
    static ITEM_BOTTLE_EMPTY: Sound;
    static ITEM_BOTTLE_FILL: Sound;
    static ITEM_BOTTLE_FILL_DRAGONBREATH: Sound;
    static ITEM_BUCKET_EMPTY: Sound;
    static ITEM_BUCKET_EMPTY_FISH: Sound;
    static ITEM_BUCKET_EMPTY_LAVA: Sound;
    static ITEM_BUCKET_FILL: Sound;
    static ITEM_BUCKET_FILL_FISH: Sound;
    static ITEM_BUCKET_FILL_LAVA: Sound;
    static ITEM_CHORUS_FRUIT_TELEPORT: Sound;
    static ITEM_CROP_PLANT: Sound;
    static ITEM_CROSSBOW_HIT: Sound;
    static ITEM_CROSSBOW_LOADING_END: Sound;
    static ITEM_CROSSBOW_LOADING_MIDDLE: Sound;
    static ITEM_CROSSBOW_LOADING_START: Sound;
    static ITEM_CROSSBOW_QUICK_CHARGE_1: Sound;
    static ITEM_CROSSBOW_QUICK_CHARGE_2: Sound;
    static ITEM_CROSSBOW_QUICK_CHARGE_3: Sound;
    static ITEM_CROSSBOW_SHOOT: Sound;
    static ITEM_ELYTRA_FLYING: Sound;
    static ITEM_FIRECHARGE_USE: Sound;
    static ITEM_FLINTANDSTEEL_USE: Sound;
    static ITEM_HOE_TILL: Sound;
    static ITEM_HONEY_BOTTLE_DRINK: Sound;
    static ITEM_LODESTONE_COMPASS_LOCK: Sound;
    static ITEM_NETHER_WART_PLANT: Sound;
    static ITEM_SHIELD_BLOCK: Sound;
    static ITEM_SHIELD_BREAK: Sound;
    static ITEM_SHOVEL_FLATTEN: Sound;
    static ITEM_SWEET_BERRIES_PICK_FROM_BUSH: Sound;
    static ITEM_TOTEM_USE: Sound;
    static ITEM_TRIDENT_HIT: Sound;
    static ITEM_TRIDENT_HIT_GROUND: Sound;
    static ITEM_TRIDENT_RETURN: Sound;
    static ITEM_TRIDENT_RIPTIDE_1: Sound;
    static ITEM_TRIDENT_RIPTIDE_2: Sound;
    static ITEM_TRIDENT_RIPTIDE_3: Sound;
    static ITEM_TRIDENT_THROW: Sound;
    static ITEM_TRIDENT_THUNDER: Sound;
    static MUSIC_CREATIVE: Sound;
    static MUSIC_CREDITS: Sound;
    static MUSIC_DISC_11: Sound;
    static MUSIC_DISC_13: Sound;
    static MUSIC_DISC_BLOCKS: Sound;
    static MUSIC_DISC_CAT: Sound;
    static MUSIC_DISC_CHIRP: Sound;
    static MUSIC_DISC_FAR: Sound;
    static MUSIC_DISC_MALL: Sound;
    static MUSIC_DISC_MELLOHI: Sound;
    static MUSIC_DISC_PIGSTEP: Sound;
    static MUSIC_DISC_STAL: Sound;
    static MUSIC_DISC_STRAD: Sound;
    static MUSIC_DISC_WAIT: Sound;
    static MUSIC_DISC_WARD: Sound;
    static MUSIC_DRAGON: Sound;
    static MUSIC_END: Sound;
    static MUSIC_GAME: Sound;
    static MUSIC_MENU: Sound;
    static MUSIC_NETHER_BASALT_DELTAS: Sound;
    static MUSIC_NETHER_CRIMSON_FOREST: Sound;
    static MUSIC_NETHER_NETHER_WASTES: Sound;
    static MUSIC_NETHER_SOUL_SAND_VALLEY: Sound;
    static MUSIC_NETHER_WARPED_FOREST: Sound;
    static MUSIC_UNDER_WATER: Sound;
    static PARTICLE_SOUL_ESCAPE: Sound;
    static UI_BUTTON_CLICK: Sound;
    static UI_CARTOGRAPHY_TABLE_TAKE_RESULT: Sound;
    static UI_LOOM_SELECT_PATTERN: Sound;
    static UI_LOOM_TAKE_RESULT: Sound;
    static UI_STONECUTTER_SELECT_RECIPE: Sound;
    static UI_STONECUTTER_TAKE_RESULT: Sound;
    static UI_TOAST_CHALLENGE_COMPLETE: Sound;
    static UI_TOAST_IN: Sound;
    static UI_TOAST_OUT: Sound;
    static WEATHER_RAIN: Sound;
    static WEATHER_RAIN_ABOVE: Sound
}

/**An Enum of categories for sounds.*/
export class SoundCategory extends Enum<SoundCategory> {
    static AMBIENT: SoundCategory;
    static BLOCKS: SoundCategory;
    static HOSTILE: SoundCategory;
    static MASTER: SoundCategory;
    static MUSIC: SoundCategory;
    static NEUTRAL: SoundCategory;
    static PLAYERS: SoundCategory;
    static RECORDS: SoundCategory;
    static VOICE: SoundCategory;
    static WEATHER: SoundCategory
}

/**An event that is called when a world's spawn changes. The world's previous  spawn location is included.*/
export class SpawnChangeEvent extends WorldEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the previous spawn location*/
    getPreviousLocation (): Location
}

/**Represents a spawn egg and it's spawned type.*/
export interface SpawnEggMeta extends ItemMeta {
    clone (): SpawnEggMeta
}

/**Represents a Minecart with an entity spawner inside it.*/
export interface SpawnerMinecart extends Minecart {

}

/**Called when an entity is spawned into a world by a spawner.    If a Spawner Spawn event is cancelled, the entity will not spawn.*/
export class SpawnerSpawnEvent extends EntitySpawnEvent {
    getSpawner (): CreatureSpawner
}

/**Represents a spectral arrow.*/
export interface SpectralArrow extends AbstractArrow {
    /**Returns the amount of time that this arrow will apply  the glowing effect for.*/
    getGlowingTicks (): number;
    /**Sets the amount of time to apply the glowing effect for.*/
    setGlowingTicks (duration: number): void
}

/**Represents a spell casting "Illager".*/
export interface Spellcaster extends Illager {
    /**Gets the Spellcaster.Spell the entity is currently using.*/
    getSpell (): Spellcaster$Spell;
    /**Sets the Spellcaster.Spell the entity is currently using.*/
    setSpell (spell: Spellcaster$Spell): void
}

/**Represents the current spell the entity is using.*/
export class Spellcaster$Spell extends Enum<Spellcaster$Spell> {
    /**The spell that makes the target blind.*/
    static BLINDNESS: Spellcaster$Spell;
    /**The spell that makes the casting entity invisible.*/
    static DISAPPEAR: Spellcaster$Spell;
    /**The spell that summons Fangs.*/
    static FANGS: Spellcaster$Spell;
    /**No spell is being used..*/
    static NONE: Spellcaster$Spell;
    /**The spell that summons Vexes.*/
    static SUMMON_VEX: Spellcaster$Spell;
    /**The "wololo" spell.*/
    static WOLOLO: Spellcaster$Spell
}

/**Represents a Spider.*/
export interface Spider extends Monster {

}

/**Called when a sponge absorbs water from the world.    The world will be in its previous state, and getBlocks() will  represent the changes to be made to the world, if the event is not cancelled.    As this is a physics based event it may be called multiple times for "the  same" changes.*/
export class SpongeAbsorbEvent extends BlockEvent implements Cancellable {
    /**Get a list of all blocks to be removed by the sponge.*/
    getBlocks (): List<BlockState>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents a Squid.*/
export interface Squid extends WaterMob {

}

/**'shape' represents the texture and bounding box shape of these stairs.*/
export interface Stairs extends Bisected, Directional, Waterlogged {
    /**Gets the value of the 'shape' property.*/
    getShape (): Stairs$Shape;
    /**Sets the value of the 'shape' property.*/
    setShape (shape: Stairs$Shape): void
}

/**The shape of a stair block - used for constructing corners.*/
export class Stairs$Shape extends Enum<Stairs$Shape> {
    /**Inner corner stair block with higher left side.*/
    static INNER_LEFT: Stairs$Shape;
    /**Inner corner stair block with higher right side.*/
    static INNER_RIGHT: Stairs$Shape;
    /**Outer corner stair block with higher left side.*/
    static OUTER_LEFT: Stairs$Shape;
    /**Outer corner stair block with higher right side.*/
    static OUTER_RIGHT: Stairs$Shape;
    /**Regular stair block.*/
    static STRAIGHT: Stairs$Shape
}

/**Standard implementation to Messenger*/
export class StandardMessenger extends Object implements Messenger {
    /**Dispatches the specified incoming message to any registered listeners.*/
    dispatchIncomingMessage (source: Player, channel: String, message: number[]): void;
    /**Gets a set containing all the incoming plugin channel registrations  that are on the requested channel.*/
    getIncomingChannelRegistrations (channel: String): Set<PluginMessageListenerRegistration>;
    /**Gets a set containing all the incoming plugin channel registrations  that the specified plugin has.*/
    getIncomingChannelRegistrations (plugin: Plugin): Set<PluginMessageListenerRegistration>;
    /**Gets a set containing all the incoming plugin channel registrations  that the specified plugin has on the requested channel.*/
    getIncomingChannelRegistrations (plugin: Plugin, channel: String): Set<PluginMessageListenerRegistration>;
    /**Gets a set containing all the incoming plugin channels.*/
    getIncomingChannels (): Set<String>;
    /**Gets a set containing all the incoming plugin channels that the  specified plugin is registered for.*/
    getIncomingChannels (plugin: Plugin): Set<String>;
    /**Gets a set containing all the outgoing plugin channels.*/
    getOutgoingChannels (): Set<String>;
    /**Gets a set containing all the outgoing plugin channels that the  specified plugin is registered to.*/
    getOutgoingChannels (plugin: Plugin): Set<String>;
    /**Checks if the specified plugin has registered to receive incoming  messages through the requested channel.*/
    isIncomingChannelRegistered (plugin: Plugin, channel: String): boolean;
    /**Checks if the specified plugin has registered to send outgoing messages  through the requested channel.*/
    isOutgoingChannelRegistered (plugin: Plugin, channel: String): boolean;
    /**Checks if the specified plugin message listener registration is valid.*/
    isRegistrationValid (registration: PluginMessageListenerRegistration): boolean;
    /**Checks if the specified channel is a reserved name.*/
    isReservedChannel (channel: String): boolean;
    /**Registers the specific plugin for listening on the requested incoming  plugin channel, allowing it to act upon any plugin messages.*/
    registerIncomingPluginChannel (plugin: Plugin, channel: String, listener: PluginMessageListener): PluginMessageListenerRegistration;
    /**Registers the specific plugin to the requested outgoing plugin channel,  allowing it to send messages through that channel to any clients.*/
    registerOutgoingPluginChannel (plugin: Plugin, channel: String): void;
    /**Unregisters the specific plugin from listening on all plugin channels  through all listeners.*/
    unregisterIncomingPluginChannel (plugin: Plugin): void;
    /**Unregisters the specific plugin from listening on the requested  incoming plugin channel, no longer allowing it to act upon any plugin  messages.*/
    unregisterIncomingPluginChannel (plugin: Plugin, channel: String): void;
    /**Unregisters the specific plugin's listener from listening on the  requested incoming plugin channel, no longer allowing it to act upon  any plugin messages.*/
    unregisterIncomingPluginChannel (plugin: Plugin, channel: String, listener: PluginMessageListener): void;
    /**Unregisters the specific plugin from all outgoing plugin channels, no  longer allowing it to send any plugin messages.*/
    unregisterOutgoingPluginChannel (plugin: Plugin): void;
    /**Unregisters the specific plugin from the requested outgoing plugin  channel, no longer allowing it to send messages through that channel to  any clients.*/
    unregisterOutgoingPluginChannel (plugin: Plugin, channel: String): void;
    /**Validates the input of a Plugin Message, ensuring the arguments are all  valid.*/
    static validatePluginMessage (messenger: Messenger, source: Plugin, channel: String, message: number[]): void
}

export class StaticMethodHandleEventExecutor extends Object implements EventExecutor {
    execute (listener: Listener, event: Event): void
}

/**Represents a countable statistic, which is tracked by the server.*/
export class Statistic extends Enum<Statistic> implements Keyed {
    static ANIMALS_BRED: Statistic;
    static ARMOR_CLEANED: Statistic;
    static AVIATE_ONE_CM: Statistic;
    static BANNER_CLEANED: Statistic;
    static BEACON_INTERACTION: Statistic;
    static BELL_RING: Statistic;
    static BOAT_ONE_CM: Statistic;
    static BREAK_ITEM: Statistic;
    static BREWINGSTAND_INTERACTION: Statistic;
    static CAKE_SLICES_EATEN: Statistic;
    static CAULDRON_FILLED: Statistic;
    static CAULDRON_USED: Statistic;
    static CHEST_OPENED: Statistic;
    static CLEAN_SHULKER_BOX: Statistic;
    static CLIMB_ONE_CM: Statistic;
    static CRAFT_ITEM: Statistic;
    static CRAFTING_TABLE_INTERACTION: Statistic;
    static CROUCH_ONE_CM: Statistic;
    static DAMAGE_ABSORBED: Statistic;
    static DAMAGE_BLOCKED_BY_SHIELD: Statistic;
    static DAMAGE_DEALT: Statistic;
    static DAMAGE_DEALT_ABSORBED: Statistic;
    static DAMAGE_DEALT_RESISTED: Statistic;
    static DAMAGE_RESISTED: Statistic;
    static DAMAGE_TAKEN: Statistic;
    static DEATHS: Statistic;
    static DISPENSER_INSPECTED: Statistic;
    static DROP: Statistic;
    static DROP_COUNT: Statistic;
    static DROPPER_INSPECTED: Statistic;
    static ENDERCHEST_OPENED: Statistic;
    static ENTITY_KILLED_BY: Statistic;
    static FALL_ONE_CM: Statistic;
    static FISH_CAUGHT: Statistic;
    static FLOWER_POTTED: Statistic;
    static FLY_ONE_CM: Statistic;
    static FURNACE_INTERACTION: Statistic;
    static HOPPER_INSPECTED: Statistic;
    static HORSE_ONE_CM: Statistic;
    static INTERACT_WITH_ANVIL: Statistic;
    static INTERACT_WITH_BLAST_FURNACE: Statistic;
    static INTERACT_WITH_CAMPFIRE: Statistic;
    static INTERACT_WITH_CARTOGRAPHY_TABLE: Statistic;
    static INTERACT_WITH_GRINDSTONE: Statistic;
    static INTERACT_WITH_LECTERN: Statistic;
    static INTERACT_WITH_LOOM: Statistic;
    static INTERACT_WITH_SMITHING_TABLE: Statistic;
    static INTERACT_WITH_SMOKER: Statistic;
    static INTERACT_WITH_STONECUTTER: Statistic;
    static ITEM_ENCHANTED: Statistic;
    static JUMP: Statistic;
    static KILL_ENTITY: Statistic;
    static LEAVE_GAME: Statistic;
    static MINE_BLOCK: Statistic;
    static MINECART_ONE_CM: Statistic;
    static MOB_KILLS: Statistic;
    static NOTEBLOCK_PLAYED: Statistic;
    static NOTEBLOCK_TUNED: Statistic;
    static OPEN_BARREL: Statistic;
    static PICKUP: Statistic;
    static PIG_ONE_CM: Statistic;
    /**Name is misleading, actually records ticks played.*/
    static PLAY_ONE_MINUTE: Statistic;
    static PLAYER_KILLS: Statistic;
    static RAID_TRIGGER: Statistic;
    static RAID_WIN: Statistic;
    static RECORD_PLAYED: Statistic;
    static SHULKER_BOX_OPENED: Statistic;
    static SLEEP_IN_BED: Statistic;
    static SNEAK_TIME: Statistic;
    static SPRINT_ONE_CM: Statistic;
    static STRIDER_ONE_CM: Statistic;
    static SWIM_ONE_CM: Statistic;
    static TALKED_TO_VILLAGER: Statistic;
    static TARGET_HIT: Statistic;
    static TIME_SINCE_DEATH: Statistic;
    static TIME_SINCE_REST: Statistic;
    static TRADED_WITH_VILLAGER: Statistic;
    static TRAPPED_CHEST_TRIGGERED: Statistic;
    static USE_ITEM: Statistic;
    static WALK_ON_WATER_ONE_CM: Statistic;
    static WALK_ONE_CM: Statistic;
    static WALK_UNDER_WATER_ONE_CM: Statistic
}

/**The type of statistic.*/
export class Statistic$Type extends Enum<Statistic$Type> {
    /**Statistics of this type require a Block Material qualifier.*/
    static BLOCK: Statistic$Type;
    /**Statistics of this type require an EntityType qualifier.*/
    static ENTITY: Statistic$Type;
    /**Statistics of this type require an Item Material qualifier.*/
    static ITEM: Statistic$Type;
    /**Statistics of this type do not require a qualifier.*/
    static UNTYPED: Statistic$Type
}

/**Represents a client requesting the current status from the server (e.g. from  the server list).*/
export interface StatusClient extends NetworkClient {
    /**Returns whether the client is using an older version that doesn't  support all of the features in PaperServerListPingEvent.*/
    isLegacy (): boolean
}

/**Represents an entity which may be saddled, ridden and steered using an item.*/
export interface Steerable extends Animals {
    /**Get the time in ticks this entity's movement is being increased.*/
    getBoostTicks (): number;
    /**Get the time in ticks this entity's movement has been increased as of the  most recent boost.*/
    getCurrentBoostTicks (): number;
    /**Get the material used to steer this entity when ridden by a player.*/
    getSteerMaterial (): Material;
    /**Check if the pig has a saddle.*/
    hasSaddle (): boolean;
    /**Set the time in ticks this entity's movement will be increased.*/
    setBoostTicks (ticks: number): void;
    /**Set the time in ticks this entity's movement has been increased relative  to the most recent boost.*/
    setCurrentBoostTicks (ticks: number): void;
    /**Sets if the pig has a saddle or not*/
    setSaddle (saddled: boolean): void
}

/**Interface to the inventory of a Stonecutter.*/
export interface StonecutterInventory extends Inventory {
    /**Gets the input item.*/
    getInputItem (): ItemStack;
    /**Gets the result item.*/
    getResult (): ItemStack;
    /**Sets the input item.*/
    setInputItem (itemStack: ItemStack): void;
    /**Sets the result item.*/
    setResult (itemStack: ItemStack): void
}

/**Represents a Stonecutting recipe.*/
export class StonecuttingRecipe extends Object implements Recipe, Keyed {
    /**Get the group of this recipe.*/
    getGroup (): String;
    /**Get the input material.*/
    getInput (): ItemStack;
    /**Get the input choice.*/
    getInputChoice (): RecipeChoice;
    /**Return the namespaced identifier for this object.*/
    getKey (): NamespacedKey;
    /**Get the result of this recipe.*/
    getResult (): ItemStack;
    /**Set the group of this recipe.*/
    setGroup (group: String): void;
    /**Sets the input of this cooking recipe.*/
    setInput (input: Material): StonecuttingRecipe;
    /**Sets the input of this cooking recipe.*/
    setInputChoice (input: RecipeChoice): StonecuttingRecipe
}

/**Represents a minecart with a chest. These types of minecarts have their own inventory that can be accessed using methods  from the InventoryHolder interface.*/
export interface StorageMinecart extends Minecart, InventoryHolder, LootableEntityInventory {

}

/**Represents a Stray - variant of Skeleton.*/
export interface Stray extends Skeleton {

}

/**Represents a Strider.*/
export interface Strider extends Steerable, Vehicle {
    /**Check whether or not this strider is out of warm blocks and shivering.*/
    isShivering (): boolean;
    /**Set whether or not this strider is shivering.*/
    setShivering (shivering: boolean): void
}

/**Called when a Strider's temperature has changed as a result of  entering or existing blocks it considers warm.*/
export class StriderTemperatureChangeEvent extends EntityEvent {
    /**Returns the Entity involved in this event*/
    getEntity (): Strider;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the Strider's new shivering state.*/
    isShivering (): boolean
}

/**StringPrompt is the base class for any prompt that accepts an arbitrary  string from the user.*/
export class StringPrompt extends Object implements Prompt {
    /**Ensures that the prompt waits for the user to provide input.*/
    blocksForInput (context: ConversationContext): boolean
}

export class StringUtil extends Object {
    /**Copies all elements from the iterable collection of originals to the  collection provided.*/
    static copyPartialMatches <T extends Collection<X>>(token: String, originals: Iterable<String>, collection: T): T;
    /**This method uses a region to check case-insensitive equality.*/
    static startsWithIgnoreCase (string: String, prefix: String): boolean
}

/**Represents a structure block that can save and load blocks from a file. They  can only be used by OPs, and are not obtainable in survival.*/
export interface Structure extends TileState {
    /**Get the name of who created this structure.*/
    getAuthor (): String;
    /**Get the integrity of this structure.*/
    getIntegrity (): number;
    /**Get the metadata function this structure block will perform when  activated.*/
    getMetadata (): String;
    /**How this structure is mirrored.*/
    getMirror (): Mirror;
    /**The relative position of the structure outline based on the position of  the structure block.*/
    getRelativePosition (): BlockVector;
    /**Get how this structure is rotated.*/
    getRotation (): StructureRotation;
    /**The seed used to determine how many blocks are removed upon loading of  this structure.*/
    getSeed (): number;
    /**The name of this structure.*/
    getStructureName (): String;
    /**The distance to the opposite corner of this structure.*/
    getStructureSize (): BlockVector;
    /**Get the UsageMode of this structure block.*/
    getUsageMode (): UsageMode;
    /**Get if this structure block is currently showing the bounding box.*/
    isBoundingBoxVisible (): boolean;
    /**Get if this structure block should ignore entities.*/
    isIgnoreEntities (): boolean;
    /**Check if this structure block is currently showing all air blocks*/
    isShowAir (): boolean;
    /**Set the name of whoever created this structure.*/
    setAuthor (author: String): void;
    /**Set the name of whoever created this structure using a  LivingEntity.*/
    setAuthor (livingEntity: LivingEntity): void;
    /**Set if this structure box should show the bounding box.*/
    setBoundingBoxVisible (showBoundingBox: boolean): void;
    /**While in UsageMode.SAVE mode, this will ignore any entities when  saving the structure.*/
    setIgnoreEntities (ignoreEntities: boolean): void;
    /**Set the integrity of the structure.*/
    setIntegrity (integrity: number): void;
    /**Only applicable while in UsageMode.DATA.*/
    setMetadata (metadata: String): void;
    /**Sets the mirroring of the structure.*/
    setMirror (mirror: Mirror): void;
    /**Set the relative position from the structure block.*/
    setRelativePosition (vector: BlockVector): void;
    /**Set how this structure is rotated.*/
    setRotation (rotation: StructureRotation): void;
    /**The seed used to determine which blocks will be removed upon loading.*/
    setSeed (seed: number): void;
    /**Set if the structure outline should show air blocks.*/
    setShowAir (showAir: boolean): void;
    /**Set the name of this structure.*/
    setStructureName (name: String): void;
    /**Set the maximum size of this structure from the origin point.*/
    setStructureSize (vector: BlockVector): void;
    /**Set the UsageMode of this structure block.*/
    setUsageMode (mode: UsageMode): void
}

/**'mode' represents the different modes in which this structure block may  operate.*/
export interface StructureBlock extends BlockData {
    /**Gets the value of the 'mode' property.*/
    getMode (): StructureBlock$Mode;
    /**Sets the value of the 'mode' property.*/
    setMode (mode: StructureBlock$Mode): void
}

/**Operating mode of a structure block.*/
export class StructureBlock$Mode extends Enum<StructureBlock$Mode> {
    /**Used for detection of two opposite corners of a structure.*/
    static CORNER: StructureBlock$Mode;
    /**Dummy block used to run a custom function during world generation  before being removed.*/
    static DATA: StructureBlock$Mode;
    /**Allows loading of a structure.*/
    static LOAD: StructureBlock$Mode;
    /**Allows selection and saving of a structure.*/
    static SAVE: StructureBlock$Mode
}

/**Event that is called when an organic structure attempts to grow (Sapling ->  Tree), (Mushroom -> Huge Mushroom), naturally or using bonemeal.*/
export class StructureGrowEvent extends WorldEvent implements Cancellable {
    /**Gets a list of all blocks associated with the structure.*/
    getBlocks (): List<BlockState>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the location of the structure.*/
    getLocation (): Location;
    /**Gets the player that created the structure.*/
    getPlayer (): Player;
    /**Gets the species type (birch, normal, pine, red mushroom, brown  mushroom)*/
    getSpecies (): TreeType;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Checks if structure was grown using bonemeal.*/
    isFromBonemeal (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Represents how a Structure can be rotated.*/
export class StructureRotation extends Enum<StructureRotation> {
    /**Rotated clockwise 180 degrees.*/
    static CLOCKWISE_180: StructureRotation;
    /**Rotated clockwise 90 degrees.*/
    static CLOCKWISE_90: StructureRotation;
    /**Rotated counter clockwise 90 degrees.*/
    static COUNTERCLOCKWISE_90: StructureRotation;
    /**No rotation.*/
    static NONE: StructureRotation
}

/**This class handles the creation and storage of all structure types for  Bukkit. Structure Types are the different kinds of structures that can be  generated during world/chunk generation. These include Villages, Mineshafts,  Mansions, etc.    The registration of new StructureTypes is case-sensitive.*/
export class StructureType extends Object {
    equals (other: Object): boolean;
    /**Get the MapCursor.Type that this structure can use on maps.*/
    getMapIcon (): MapCursor$Type;
    /**Get the name of this structure.*/
    getName (): String;
    /**Get all registered StructureTypes.*/
    static getStructureTypes (): Map<String,StructureType>;
    hashCode (): number;
    toString (): String
}

/**Represents a suspicious stew that can have custom effects.*/
export interface SuspiciousStewMeta extends ItemMeta {
    /**Adds a custom potion effect to this suspicious stew.*/
    addCustomEffect (effect: PotionEffect, overwrite: boolean): boolean;
    /**Removes all custom potion effects from this suspicious stew.*/
    clearCustomEffects (): boolean;
    clone (): SuspiciousStewMeta;
    /**Gets an immutable list containing all custom potion effects applied to  this suspicious stew.*/
    getCustomEffects (): List<PotionEffect>;
    /**Checks for a specific custom potion effect type on this suspicious stew.*/
    hasCustomEffect (type: PotionEffectType): boolean;
    /**Checks for the presence of custom potion effects.*/
    hasCustomEffects (): boolean;
    /**Removes a custom potion effect from this suspicious stew.*/
    removeCustomEffect (type: PotionEffectType): boolean
}

export interface Switch extends Directional, FaceAttachable, Powerable {

}

/**Called when a CommandSender of any description (ie: player or  console) attempts to tab complete.    Note that due to client changes, if the sender is a Player, this event will  only begin to fire once command arguments are specified, not commands  themselves. Plugins wishing to remove commands from tab completion are  advised to ensure the client does not have permission for the relevant  commands, or use PlayerCommandSendEvent.*/
export class TabCompleteEvent extends Event implements Cancellable {
    /**Return the entire buffer which formed the basis of this completion.*/
    getBuffer (): String;
    /**The list of completions which will be offered to the sender, in order.*/
    getCompletions (): List<String>;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getLocation (): Location;
    /**Get the sender completing this command.*/
    getSender (): CommandSender;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    isCommand (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void;
    /**Set the completions offered, overriding any already set.*/
    setCompletions (completions: List<String>): void
}

/**Represents a class which can suggest tab completions for commands.*/
export interface TabCompleter {
    /**Requests a list of possible completions for a command argument.*/
    onTabComplete (sender: CommandSender, command: Command, alias: String, args: String[]): List<String>
}

/**This class is provided as a convenience to implement both TabCompleter and  CommandExecutor.*/
export interface TabExecutor extends TabCompleter, CommandExecutor {

}

/**Represents a tag that may be defined by the server or a resource pack to  group like things together.   Note that whilst all tags defined within this interface must be present in  implementations, their existence is not guaranteed across future versions.*/
export interface Tag<T extends Keyed> extends Keyed {
    /**Gets an immutable set of all tagged items.*/
    getValues (): Set<T>;
    /**Returns whether or not this tag has an entry for the specified item.*/
    isTagged (item: T): boolean
}

export interface Tameable extends Animals {
    /**Gets the current owning AnimalTamer*/
    getOwner (): AnimalTamer;
    /**Gets the owners UUID*/
    getOwnerUniqueId (): UUID;
    /**Check if this is tamed*/
    isTamed (): boolean;
    /**Set this to be owned by given AnimalTamer.*/
    setOwner (tamer: AnimalTamer): void;
    /**Sets if this has been tamed.*/
    setTamed (tame: boolean): void
}

/**Represents information about a targeted block*/
export class TargetBlockInfo extends Object {
    /**Get the block that is targeted*/
    getBlock (): Block;
    /**Get the targeted BlockFace*/
    getBlockFace (): BlockFace;
    /**Get the relative Block to the targeted block on the side it is targeted at*/
    getRelativeBlock (): Block
}

export class TargetBlockInfo$FluidMode extends Enum<TargetBlockInfo$FluidMode> {
    static ALWAYS: TargetBlockInfo$FluidMode;
    static NEVER: TargetBlockInfo$FluidMode;
    static SOURCE_ONLY: TargetBlockInfo$FluidMode
}

/**Represents information about a targeted entity*/
export class TargetEntityInfo extends Object {
    /**Get the entity that is targeted*/
    getEntity (): Entity;
    /**Get the position the entity is targeted at*/
    getHitVector (): Vector
}

/**A team on a scoreboard that has a common display theme and other  properties. This team is only relevant to the display of the associated  scoreboard.*/
export interface Team {
    /**This puts the specified entry onto this team for the scoreboard.*/
    addEntry (entry: String): void;
    /**Gets the team friendly fire state*/
    allowFriendlyFire (): boolean;
    /**Gets the team's ability to see invisible teammates.*/
    canSeeFriendlyInvisibles (): boolean;
    /**Gets the color of the team.*/
    getColor (): ChatColor;
    /**Gets the name displayed to entries for this team*/
    getDisplayName (): String;
    /**Gets the Set of entries on the team*/
    getEntries (): Set<String>;
    /**Gets the name of this Team*/
    getName (): String;
    /**Get an option for this team*/
    getOption (option: Team$Option): Team$OptionStatus;
    /**Gets the prefix prepended to the display of entries on this team.*/
    getPrefix (): String;
    /**Gets the Scoreboard to which this team is attached*/
    getScoreboard (): Scoreboard;
    /**Gets the size of the team*/
    getSize (): number;
    /**Gets the suffix appended to the display of entries on this team.*/
    getSuffix (): String;
    /**Checks to see if the specified entry is a member of this team.*/
    hasEntry (entry: String): boolean;
    /**Removes the entry from this team.*/
    removeEntry (entry: String): boolean;
    /**Sets the team friendly fire state*/
    setAllowFriendlyFire (enabled: boolean): void;
    /**Sets the team's ability to see invisible teammates.*/
    setCanSeeFriendlyInvisibles (enabled: boolean): void;
    /**Sets the color of the team.*/
    setColor (color: ChatColor): void;
    /**Sets the name displayed to entries for this team*/
    setDisplayName (displayName: String): void;
    /**Set an option for this team*/
    setOption (option: Team$Option, status: Team$OptionStatus): void;
    /**Sets the prefix prepended to the display of entries on this team.*/
    setPrefix (prefix: String): void;
    /**Sets the suffix appended to the display of entries on this team.*/
    setSuffix (suffix: String): void;
    /**Unregisters this team from the Scoreboard*/
    unregister (): void
}

/**Represents an option which may be applied to this team.*/
export class Team$Option extends Enum<Team$Option> {
    /**How players of this team collide with others.*/
    static COLLISION_RULE: Team$Option;
    /**How to display the death messages for players on this team.*/
    static DEATH_MESSAGE_VISIBILITY: Team$Option;
    /**How to display the name tags of players on this team.*/
    static NAME_TAG_VISIBILITY: Team$Option
}

/**How an option may be applied to members of this team.*/
export class Team$OptionStatus extends Enum<Team$OptionStatus> {
    /**Apply this option to everyone.*/
    static ALWAYS: Team$OptionStatus;
    /**Apply this option only for opposing teams.*/
    static FOR_OTHER_TEAMS: Team$OptionStatus;
    /**Apply this option for only team members.*/
    static FOR_OWN_TEAM: Team$OptionStatus;
    /**Never apply this option.*/
    static NEVER: Team$OptionStatus
}

/**'type' represents the type of piston which this (technical) block corresponds  to.*/
export interface TechnicalPiston extends Directional {
    /**Gets the value of the 'type' property.*/
    getType (): TechnicalPiston$Type;
    /**Sets the value of the 'type' property.*/
    setType (type: TechnicalPiston$Type): void
}

/**Different piston variants.*/
export class TechnicalPiston$Type extends Enum<TechnicalPiston$Type> {
    /**A normal piston which does not pull connected blocks backwards on  retraction.*/
    static NORMAL: TechnicalPiston$Type;
    /**A sticky piston which will also retract connected blocks.*/
    static STICKY: TechnicalPiston$Type
}

export interface ThrowableProjectile extends Projectile {
    /**Gets the ItemStack the thrown projectile will display.*/
    getItem (): ItemStack;
    /**Sets the display ItemStack for the thrown projectile.*/
    setItem (item: ItemStack): void
}

/**Called when a thrown egg might hatch.    This event fires for all thrown eggs that may hatch, players, dispensers, etc.*/
export class ThrownEggHatchEvent extends Event {
    /**Gets the egg involved in this event.*/
    getEgg (): Egg;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the type of the mob being hatched (EntityType.CHICKEN by default)*/
    getHatchingType (): EntityType;
    /**Get the number of mob hatches from the egg.*/
    getNumHatches (): number;
    /**Gets whether the egg is hatching or not.*/
    isHatching (): boolean;
    /**Sets whether the egg will hatch or not.*/
    setHatching (hatching: boolean): void;
    /**Change the type of mob being hatched by the egg*/
    setHatchingType (hatchType: EntityType): void;
    /**Change the number of mobs coming out of the hatched egg*/
    setNumHatches (numHatches: number): void
}

/**Represents a thrown Experience bottle.*/
export interface ThrownExpBottle extends ThrowableProjectile {

}

/**Represents a thrown potion bottle*/
export interface ThrownPotion extends Projectile {
    /**Returns the effects that are applied by this potion.*/
    getEffects (): Collection<PotionEffect>;
    /**Returns a copy of the ItemStack for this thrown potion.*/
    getItem (): ItemStack;
    /**Set the ItemStack for this thrown potion.*/
    setItem (item: ItemStack): void
}

/**Stores data for thunder state changing in a world*/
export class ThunderChangeEvent extends WeatherEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Gets the state of thunder that the world is being set to*/
    toThunderState (): boolean
}

/**Represents a block state that also hosts a tile entity at the given location.   This interface alone is merely a marker that does not provide any data.   Data about the tile entities is provided by the respective interface for each  tile entity type.   After modifying the data provided by a TileState, BlockState.update() needs to  be called to store the data.*/
export interface TileState extends BlockState, PersistentDataHolder {
    /**Returns a custom tag container capable of storing tags on the object.*/
    getPersistentDataContainer (): PersistentDataContainer
}

export class TimedEventExecutor extends Object implements EventExecutor {
    execute (listener: Listener, event: Event): void
}

/**Extends RegisteredListener to include timing information*/
export class TimedRegisteredListener extends RegisteredListener {
    /**Calls the event executor*/
    callEvent (event: Event): void;
    /**Gets the total times this listener has been called*/
    getCount (): number;
    /**Gets the class of the events this listener handled.*/
    getEventClass (): Class<Event>;
    /**Gets the total time calls to this listener have taken*/
    getTotalTime (): number;
    /**Gets whether this listener has handled multiple events, such that for  some two events, eventA.getClass() != eventB.getClass().*/
    hasMultiple (): boolean;
    /**Resets the call count and total time for this listener*/
    reset (): void
}

/**Called when the time skips in a world.    If the event is cancelled the time will not change.*/
export class TimeSkipEvent extends WorldEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the amount of time that was skipped.*/
    getSkipAmount (): number;
    /**Gets the reason why the time has skipped.*/
    getSkipReason (): TimeSkipEvent$SkipReason;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the amount of time to skip.*/
    setSkipAmount (skipAmount: number): void
}

/**An enum specifying the reason the time skipped.*/
export class TimeSkipEvent$SkipReason extends Enum<TimeSkipEvent$SkipReason> {
    /**When time is changed using the vanilla /time command.*/
    static COMMAND: TimeSkipEvent$SkipReason;
    /**When time is changed by a plugin.*/
    static CUSTOM: TimeSkipEvent$SkipReason;
    /**When time is changed by all players sleeping in their beds and the  night skips.*/
    static NIGHT_SKIP: TimeSkipEvent$SkipReason
}

/**Provides an ability to time sections of code within the Minecraft Server*/
export interface Timing extends AutoCloseable {
    close (): void;
    /**Used internally to get the actual backing Handler in the case of delegated Handlers*/
    getTimingHandler (): co$aikar$timings$TimingHandler;
    /**Starts timing the execution until stopTiming() is called.*/
    startTiming (): Timing;
    /**Starts timing the execution until stopTiming() is called.*/
    startTimingIfSync (): Timing;
    /**Stops timing and records the data.*/
    stopTiming (): void;
    /**Stops timing and records the data.*/
    stopTimingIfSync (): void
}

export class TimingHistory extends Object {

}

export class Timings extends Object {
    /**Generates a report and sends it to the specified listener.*/
    static generateReport (sender: TimingsReportListener): void;
    /**Generates a report and sends it to the specified command sender.*/
    static generateReport (sender: CommandSender): void;
    /**Gets the interval between Timing History report generation.*/
    static getHistoryInterval (): number;
    /**Gets how long in ticks Timings history is kept for the server.*/
    static getHistoryLength (): number;
    /**Gets whether or not the Spigot Timings system is enabled*/
    static isTimingsEnabled (): boolean;
    /**Sets whether or not the Timings should monitor at Verbose level.*/
    static isVerboseTimingsEnabled (): boolean;
    /**Returns a Timing for a plugin corresponding to a name.*/
    static of (plugin: Plugin, name: String): Timing;
    /**Returns a handler that has a groupHandler timer handler.*/
    static of (plugin: Plugin, name: String, groupHandler: Timing): Timing;
    /**Returns a Timing object after starting it, useful for Java7 try-with-resources.*/
    static ofStart (plugin: Plugin, name: String): Timing;
    /**Returns a Timing object after starting it, useful for Java7 try-with-resources.*/
    static ofStart (plugin: Plugin, name: String, groupHandler: Timing): Timing;
    /**Resets all Timing Data*/
    static reset (): void;
    /**Sets the interval between Timing History report generations.*/
    static setHistoryInterval (interval: number): void;
    /**Sets how long Timing History reports are kept for the server.*/
    static setHistoryLength (length: number): void;
    /**Sets whether or not the Spigot Timings system should be enabled*/
    static setTimingsEnabled (enabled: boolean): void;
    /**Sets whether or not the Timings should monitor at Verbose level.*/
    static setVerboseTimingsEnabled (enabled: boolean): void
}

export class TimingsCommand extends BukkitCommand {
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, currentAlias: String, args: String[]): boolean;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[]): List<String>
}

export class TimingsManager extends Object {
    /**Due to access restrictions, we need a helper method to get a Command TimingHandler with String group*/
    static getCommandTiming (pluginName: String, command: Command): Timing;
    /**Looks up the class loader for the specified class, and if it is a PluginClassLoader, return the  Plugin that created this class.*/
    static getPluginByClassloader (clazz: Class<X>): Plugin
}

export class TimingsReportListener extends Object implements MessageCommandSender {
    addConsoleIfNeeded (): void;
    done (): void;
    done (url: String): void;
    getTimingsURL (): String;
    /**Sends this sender a message*/
    sendMessage (message: String): void
}

/**Represents a title to may be sent to a Player.   A title can be sent without subtitle text.*/
export class Title extends Object {
    static builder (): Title$Builder;
    /**Gets the number of ticks to fade in.*/
    getFadeIn (): number;
    /**Gets the number of ticks to fade out.*/
    getFadeOut (): number;
    /**Gets the number of ticks to stay.*/
    getStay (): number;
    /**Gets the text of this title's subtitle*/
    getSubtitle (): BaseComponent[];
    /**Gets the text of this title*/
    getTitle (): BaseComponent[]
}

/**A builder for creating titles*/
export class Title$Builder extends Object {
    /**Create a title based on the values in the builder.*/
    build (): Title;
    /**Sets the number of ticks for the title to fade in*/
    fadeIn (fadeIn: number): Title$Builder;
    /**Sets the number of ticks for the title to fade out.*/
    fadeOut (fadeOut: number): Title$Builder;
    /**Sets the number of ticks for the title to stay.*/
    stay (stay: number): Title$Builder;
    /**Sets the subtitle to the given text.*/
    subtitle (subtitle: String): Title$Builder;
    /**Sets the subtitle to the given text.*/
    subtitle (subtitle: BaseComponent): Title$Builder;
    /**Sets the subtitle to the given text.*/
    subtitle (subtitle: BaseComponent[]): Title$Builder;
    /**Sets the title to the given text.*/
    title (title: String): Title$Builder;
    /**Sets the title to the given text.*/
    title (title: BaseComponent): Title$Builder;
    /**Sets the title to the given text.*/
    title (title: BaseComponent[]): Title$Builder
}

/**'unstable' indicates whether this TNT will explode on punching.*/
export interface TNT extends BlockData {
    /**Gets the value of the 'unstable' property.*/
    isUnstable (): boolean;
    /**Sets the value of the 'unstable' property.*/
    setUnstable (unstable: boolean): void
}

/**Represents a Primed TNT.*/
export interface TNTPrimed extends Explosive {
    /**Retrieve the number of ticks until the explosion of this TNTPrimed  entity*/
    getFuseTicks (): number;
    /**Gets the source of this primed TNT.*/
    getSource (): Entity;
    /**Set the number of ticks until the TNT blows up after being primed.*/
    setFuseTicks (fuseTicks: number): void
}

/**Called when TNT block is about to turn into TNTPrimed    Cancelling it won't turn TNT into TNTPrimed and leaves  the TNT block as-is*/
export class TNTPrimeEvent extends BlockEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the TNT primer Entity.*/
    getPrimerEntity (): Entity;
    /**Gets the TNT prime reason*/
    getReason (): TNTPrimeEvent$PrimeReason;
    /**Gets whether spawning TNTPrimed should be cancelled or not*/
    isCancelled (): boolean;
    /**Sets whether to cancel spawning TNTPrimed or not*/
    setCancelled (cancel: boolean): void
}

export class TNTPrimeEvent$PrimeReason extends Enum<TNTPrimeEvent$PrimeReason> {
    /**When TNT prime was caused by other explosion (chain reaction)*/
    static EXPLOSION: TNTPrimeEvent$PrimeReason;
    /**When TNT prime was caused by fire*/
    static FIRE: TNTPrimeEvent$PrimeReason;
    /**When Player used Material.FLINT_AND_STEEL or  Material.FIRE_CHARGE on given TNT block*/
    static ITEM: TNTPrimeEvent$PrimeReason;
    /**When TNT prime was caused by an Entity shooting TNT  using a bow with Enchantment.ARROW_FIRE enchantment*/
    static PROJECTILE: TNTPrimeEvent$PrimeReason;
    /**When redstone power triggered the TNT prime*/
    static REDSTONE: TNTPrimeEvent$PrimeReason
}

/**Represents a trader Llama.*/
export interface TraderLlama extends Llama {

}

/**This event is called whenever a player clicks a new trade on the trades  sidebar.    This event allows the user to get the index of the trade, letting them get  the MerchantRecipe via the Merchant.*/
export class TradeSelectEvent extends InventoryInteractEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Used to get the index of the trade the player clicked on.*/
    getIndex (): number;
    /**Gets the primary Inventory involved in this transaction*/
    getInventory (): MerchantInventory;
    /**Get the Merchant involved.*/
    getMerchant (): Merchant
}

export interface TrapDoor extends Bisected, Directional, Openable, Powerable, Waterlogged {

}

/**Represents the different species of trees regardless of size.*/
export class TreeSpecies extends Enum<TreeSpecies> {
    /**Represents acacia trees.*/
    static ACACIA: TreeSpecies;
    /**Represents birches.*/
    static BIRCH: TreeSpecies;
    /**Represents dark oak trees.*/
    static DARK_OAK: TreeSpecies;
    /**Represents the common tree species.*/
    static GENERIC: TreeSpecies;
    /**Represents jungle trees.*/
    static JUNGLE: TreeSpecies;
    /**Represents the darker barked/leaved tree species.*/
    static REDWOOD: TreeSpecies
}

/**Tree and organic structure types.*/
export class TreeType extends Enum<TreeType> {
    /**Acacia tree.*/
    static ACACIA: TreeType;
    /**Regular tree, extra tall with branches*/
    static BIG_TREE: TreeType;
    /**Birch tree*/
    static BIRCH: TreeType;
    /**Big brown mushroom; tall and umbrella-like*/
    static BROWN_MUSHROOM: TreeType;
    /**Large plant native to The End*/
    static CHORUS_PLANT: TreeType;
    /**Jungle tree with cocoa plants; 1 block wide*/
    static COCOA_TREE: TreeType;
    /**Large crimson fungus native to the nether*/
    static CRIMSON_FUNGUS: TreeType;
    /**Dark Oak tree.*/
    static DARK_OAK: TreeType;
    /**Standard jungle tree; 4 blocks wide and tall*/
    static JUNGLE: TreeType;
    /**Small bush that grows in the jungle*/
    static JUNGLE_BUSH: TreeType;
    /**Mega redwood tree; 4 blocks wide and tall*/
    static MEGA_REDWOOD: TreeType;
    /**Big red mushroom; short and fat*/
    static RED_MUSHROOM: TreeType;
    /**Redwood tree, shaped like a pine tree*/
    static REDWOOD: TreeType;
    /**Smaller jungle tree; 1 block wide*/
    static SMALL_JUNGLE: TreeType;
    /**Swamp tree (regular with vines on the side)*/
    static SWAMP: TreeType;
    /**Tall birch tree*/
    static TALL_BIRCH: TreeType;
    /**Tall redwood tree with just a few leaves at the top*/
    static TALL_REDWOOD: TreeType;
    /**Regular tree, no branches*/
    static TREE: TreeType;
    /**Large warped fungus native to the nether*/
    static WARPED_FUNGUS: TreeType
}

/**Represents a thrown trident.*/
export interface Trident extends AbstractArrow {

}

/**'disarmed' denotes that the tripwire was broken with shears and will not  subsequently produce a current when destroyed.*/
export interface Tripwire extends Attachable, MultipleFacing, Powerable {
    /**Gets the value of the 'disarmed' property.*/
    isDisarmed (): boolean;
    /**Sets the value of the 'disarmed' property.*/
    setDisarmed (disarmed: boolean): void
}

export interface TripwireHook extends Attachable, Directional, Powerable {

}

/**Tropical fish.*/
export interface TropicalFish extends Fish {
    /**Gets the color of the fish's body.*/
    getBodyColor (): DyeColor;
    /**Gets the fish's pattern.*/
    getPattern (): TropicalFish$Pattern;
    /**Gets the color of the fish's pattern.*/
    getPatternColor (): DyeColor;
    /**Sets the color of the fish's body*/
    setBodyColor (color: DyeColor): void;
    /**Sets the fish's pattern*/
    setPattern (pattern: TropicalFish$Pattern): void;
    /**Sets the color of the fish's pattern*/
    setPatternColor (color: DyeColor): void
}

/**Enumeration of all different fish patterns. Refer to the  Minecraft Wiki  for pictures.*/
export class TropicalFish$Pattern extends Enum<TropicalFish$Pattern> {
    static BETTY: TropicalFish$Pattern;
    static BLOCKFISH: TropicalFish$Pattern;
    static BRINELY: TropicalFish$Pattern;
    static CLAYFISH: TropicalFish$Pattern;
    static DASHER: TropicalFish$Pattern;
    static FLOPPER: TropicalFish$Pattern;
    static GLITTER: TropicalFish$Pattern;
    static KOB: TropicalFish$Pattern;
    static SNOOPER: TropicalFish$Pattern;
    static SPOTTY: TropicalFish$Pattern;
    static STRIPEY: TropicalFish$Pattern;
    static SUNSTREAK: TropicalFish$Pattern
}

/**Represents a bucket of tropical fish.*/
export interface TropicalFishBucketMeta extends ItemMeta {
    clone (): TropicalFishBucketMeta;
    /**Gets the color of the fish's body.*/
    getBodyColor (): DyeColor;
    /**Gets the fish's pattern.*/
    getPattern (): TropicalFish$Pattern;
    /**Gets the color of the fish's pattern.*/
    getPatternColor (): DyeColor;
    /**Checks for existence of a variant tag indicating a specific fish will be  spawned.*/
    hasVariant (): boolean;
    /**Sets the color of the fish's body.*/
    setBodyColor (color: DyeColor): void;
    /**Sets the fish's pattern.*/
    setPattern (pattern: TropicalFish$Pattern): void;
    /**Sets the color of the fish's pattern.*/
    setPatternColor (color: DyeColor): void
}

/**Represents a turtle.*/
export interface Turtle extends Animals {
    /**Get the turtle's home location*/
    getHome (): Location;
    /**Get if turtle is carrying egg*/
    hasEgg (): boolean;
    /**Get if turtle is digging to lay eggs*/
    isDigging (): boolean;
    /**Check if turtle is currently pathfinding to it's home*/
    isGoingHome (): boolean;
    /**Set if turtle is carrying egg*/
    setHasEgg (hasEgg: boolean): void;
    /**Set the turtle's home location*/
    setHome (location: Location): void
}

/**'hatch' is the number of turtles which may hatch from these eggs.    'eggs' is the number of eggs which appear in this block.*/
export interface TurtleEgg extends BlockData {
    /**Gets the value of the 'eggs' property.*/
    getEggs (): number;
    /**Gets the value of the 'hatch' property.*/
    getHatch (): number;
    /**Gets the maximum allowed value of the 'eggs' property.*/
    getMaximumEggs (): number;
    /**Gets the maximum allowed value of the 'hatch' property.*/
    getMaximumHatch (): number;
    /**Gets the minimum allowed value of the 'eggs' property.*/
    getMinimumEggs (): number;
    /**Sets the value of the 'eggs' property.*/
    setEggs (eggs: number): void;
    /**Sets the value of the 'hatch' property.*/
    setHatch (hatch: number): void
}

/**Fired when a Turtle decides to go home*/
export class TurtleGoHomeEvent extends EntityEvent implements Cancellable {
    /**The turtle going home*/
    getEntity (): Turtle;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Fired when a Turtle lays eggs*/
export class TurtleLayEggEvent extends EntityEvent implements Cancellable {
    /**Get the number of eggs being laid*/
    getEggCount (): number;
    /**The turtle laying the eggs*/
    getEntity (): Turtle;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the location where the eggs are being laid*/
    getLocation (): Location;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the number of eggs being laid*/
    setEggCount (eggCount: number): void
}

/**Fired when a Turtle starts digging to lay eggs*/
export class TurtleStartDiggingEvent extends EntityEvent implements Cancellable {
    /**The turtle digging*/
    getEntity (): Turtle;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the location where the turtle is digging*/
    getLocation (): Location;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Thrown when a player executes a command that is not defined*/
export class UnknownCommandEvent extends Event {
    /**Gets the command that was send*/
    getCommandLine (): String;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets message that will be returned*/
    getMessage (): String;
    /**Gets the CommandSender or ConsoleCommandSender*/
    getSender (): CommandSender;
    /**Sets message that will be returned*/
    setMessage (message: String): void
}

/**Thrown when attempting to load an invalid Plugin file*/
export class UnknownDependencyException extends RuntimeException {

}

export class UnsafeUtils extends Object {
    static getUnsafe (): sun$misc$Unsafe;
    static isUnsafeSupported (): boolean
}

/**Represents how a Structure can be used.*/
export class UsageMode extends Enum<UsageMode> {
    /**Used when saving a structure for easy size calculation.*/
    static CORNER: UsageMode;
    /**Used to run specific custom functions, which can only be used for certain  Structures.*/
    static DATA: UsageMode;
    /**The mode used when loading a structure.*/
    static LOAD: UsageMode;
    /**The mode used when saving a structure.*/
    static SAVE: UsageMode
}

/**ValidatingPrompt is the base class for any prompt that requires validation.  ValidatingPrompt will keep replaying the prompt text until the user enters  a valid response.*/
export class ValidatingPrompt extends Object implements Prompt {
    /**Accepts and processes input from the user and validates it.*/
    acceptInput (context: ConversationContext, input: String): Prompt;
    /**Override this method to accept and processes the validated input from  the user.*/
    acceptValidatedInput (context: ConversationContext, input: String): Prompt;
    /**Ensures that the prompt waits for the user to provide input.*/
    blocksForInput (context: ConversationContext): boolean;
    /**Optionally override this method to display an additional message if the  user enters an invalid input.*/
    getFailedValidationText (context: ConversationContext, invalidInput: String): String;
    /**Override this method to check the validity of the player's input.*/
    isInputValid (context: ConversationContext, input: String): boolean
}

/**Represents a vanilla goal. Plugins should never implement this.  Generated by VanillaPathfinderTest in paper-server*/
export interface VanillaGoal<T extends Mob> extends Goal<T> {

}

/**Represents a mutable vector. Because the components of Vectors are mutable,  storing Vectors long term may be dangerous if passing code modifies the  Vector later. If you want to keep around a Vector, it may be wise to call  clone() in order to get a copy.*/
export class Vector extends Object implements Cloneable, ConfigurationSerializable {
    /**Adds a vector to this one*/
    add (vec: Vector): Vector;
    /**Gets the angle between this vector and another in radians.*/
    angle (other: Vector): number;
    /**Check if each component of this Vector is finite.*/
    checkFinite (): void;
    /**Get a new vector.*/
    clone (): Vector;
    /**Copies another vector*/
    copy (vec: Vector): Vector;
    /**Calculates the cross product of this vector with another.*/
    crossProduct (o: Vector): Vector;
    static deserialize (args: Map<String,Object>): Vector;
    /**Get the distance between this vector and another.*/
    distance (o: Vector): number;
    /**Get the squared distance between this vector and another.*/
    distanceSquared (o: Vector): number;
    /**Divides the vector by another.*/
    divide (vec: Vector): Vector;
    /**Calculates the dot product of this vector with another.*/
    dot (other: Vector): number;
    /**Checks to see if two objects are equal.*/
    equals (obj: Object): boolean;
    /**Gets the floored value of the X component, indicating the block that  this vector is contained with.*/
    getBlockX (): number;
    /**Gets the floored value of the Y component, indicating the block that  this vector is contained with.*/
    getBlockY (): number;
    /**Gets the floored value of the Z component, indicating the block that  this vector is contained with.*/
    getBlockZ (): number;
    /**Calculates the cross product of this vector with another without mutating  the original.*/
    getCrossProduct (o: Vector): Vector;
    /**Get the threshold used for equals().*/
    static getEpsilon (): number;
    /**Gets the maximum components of two vectors.*/
    static getMaximum (v1: Vector, v2: Vector): Vector;
    /**Gets a new midpoint vector between this vector and another.*/
    getMidpoint (other: Vector): Vector;
    /**Gets the minimum components of two vectors.*/
    static getMinimum (v1: Vector, v2: Vector): Vector;
    /**Gets a random vector with components having a random value between 0  and 1.*/
    static getRandom (): Vector;
    /**Gets the X component.*/
    getX (): number;
    /**Gets the Y component.*/
    getY (): number;
    /**Gets the Z component.*/
    getZ (): number;
    /**Returns a hash code for this vector*/
    hashCode (): number;
    /**Returns whether this vector is in an axis-aligned bounding box.*/
    isInAABB (min: Vector, max: Vector): boolean;
    /**Returns whether this vector is within a sphere.*/
    isInSphere (origin: Vector, radius: number): boolean;
    /**Returns if a vector is normalized*/
    isNormalized (): boolean;
    /**Gets the magnitude of the vector, defined as sqrt(x^2+y^2+z^2).*/
    length (): number;
    /**Gets the magnitude of the vector squared.*/
    lengthSquared (): number;
    /**Sets this vector to the midpoint between this vector and another.*/
    midpoint (other: Vector): Vector;
    /**Performs scalar multiplication, multiplying all components with a  scalar.*/
    multiply (m: number): Vector;
    /**Performs scalar multiplication, multiplying all components with a  scalar.*/
    multiply (m: number): Vector;
    /**Performs scalar multiplication, multiplying all components with a  scalar.*/
    multiply (m: number): Vector;
    /**Multiplies the vector by another.*/
    multiply (vec: Vector): Vector;
    /**Converts this vector to a unit vector (a vector with length of 1).*/
    normalize (): Vector;
    /**Rotates the vector around a given arbitrary axis in 3 dimensional space.*/
    rotateAroundAxis (axis: Vector, angle: number): Vector;
    /**Rotates the vector around a given arbitrary axis in 3 dimensional space.*/
    rotateAroundNonUnitAxis (axis: Vector, angle: number): Vector;
    /**Rotates the vector around the x axis.*/
    rotateAroundX (angle: number): Vector;
    /**Rotates the vector around the y axis.*/
    rotateAroundY (angle: number): Vector;
    /**Rotates the vector around the z axis*/
    rotateAroundZ (angle: number): Vector;
    /**Creates a Map representation of this class.*/
    serialize (): Map<String,Object>;
    /**Set the X component.*/
    setX (x: number): Vector;
    /**Set the X component.*/
    setX (x: number): Vector;
    /**Set the X component.*/
    setX (x: number): Vector;
    /**Set the Y component.*/
    setY (y: number): Vector;
    /**Set the Y component.*/
    setY (y: number): Vector;
    /**Set the Y component.*/
    setY (y: number): Vector;
    /**Set the Z component.*/
    setZ (z: number): Vector;
    /**Set the Z component.*/
    setZ (z: number): Vector;
    /**Set the Z component.*/
    setZ (z: number): Vector;
    /**Subtracts a vector from this one.*/
    subtract (vec: Vector): Vector;
    /**Get the block vector of this vector.*/
    toBlockVector (): BlockVector;
    /**Gets a Location version of this vector with yaw and pitch being 0.*/
    toLocation (world: World): Location;
    /**Gets a Location version of this vector.*/
    toLocation (world: World, yaw: number, pitch: number): Location;
    /**Returns this vector's components as x,y,z.*/
    toString (): String;
    /**Zero this vector's components.*/
    zero (): Vector
}

/**Represents a vehicle entity.*/
export interface Vehicle extends Entity {
    /**Gets the vehicle's velocity.*/
    getVelocity (): Vector;
    /**Sets the vehicle's velocity.*/
    setVelocity (vel: Vector): void
}

/**Raised when a vehicle collides with a block.*/
export class VehicleBlockCollisionEvent extends VehicleCollisionEvent {
    /**Gets the block the vehicle collided with*/
    getBlock (): Block;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Raised when a vehicle collides.*/
export class VehicleCollisionEvent extends VehicleEvent {

}

/**Raised when a vehicle is created.*/
export class VehicleCreateEvent extends VehicleEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancelled: boolean): void
}

/**Raised when a vehicle receives damage.*/
export class VehicleDamageEvent extends VehicleEvent implements Cancellable {
    /**Gets the Entity that is attacking the vehicle*/
    getAttacker (): Entity;
    /**Gets the damage done to the vehicle*/
    getDamage (): number;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the damage done to the vehicle*/
    setDamage (damage: number): void
}

/**Raised when a vehicle is destroyed, which could be caused by either a  player or the environment. This is not raised if the boat is simply  'removed' due to other means.*/
export class VehicleDestroyEvent extends VehicleEvent implements Cancellable {
    /**Gets the Entity that has destroyed the vehicle, potentially null*/
    getAttacker (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Raised when an entity enters a vehicle.*/
export class VehicleEnterEvent extends VehicleEvent implements Cancellable {
    /**Gets the Entity that entered the vehicle.*/
    getEntered (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Raised when a vehicle collides with an entity.*/
export class VehicleEntityCollisionEvent extends VehicleCollisionEvent implements Cancellable {
    getEntity (): Entity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    isCollisionCancelled (): boolean;
    isPickupCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    setCollisionCancelled (cancel: boolean): void;
    setPickupCancelled (cancel: boolean): void
}

/**Represents a vehicle-related event.*/
export class VehicleEvent extends Event {
    /**Get the vehicle.*/
    getVehicle (): Vehicle
}

/**Raised when a living entity exits a vehicle.*/
export class VehicleExitEvent extends VehicleEvent implements Cancellable {
    /**Get the living entity that exited the vehicle.*/
    getExited (): LivingEntity;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    isCancellable (): boolean;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**Raised when a vehicle moves.*/
export class VehicleMoveEvent extends VehicleEvent {
    /**Get the previous position.*/
    getFrom (): Location;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the next position.*/
    getTo (): Location
}

/**Called when a vehicle updates*/
export class VehicleUpdateEvent extends VehicleEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

export class VersionCommand extends BukkitCommand {
    /**Executes the command, returning its success*/
    execute (sender: CommandSender, currentAlias: String, args: String[]): boolean;
    /**Executed on tab completion for this command, returning a list of  options the player can tab through.*/
    tabComplete (sender: CommandSender, alias: String, args: String[]): List<String>
}

export interface VersionFetcher {
    /**Amount of time to cache results for in milliseconds*/
    getCacheTime (): number;
    /**Gets the version message to cache and show to command senders.*/
    getVersionMessage (serverVersion: String): String
}

export class VersionFetcher$DummyVersionFetcher extends Object implements VersionFetcher {
    /**Amount of time to cache results for in milliseconds*/
    getCacheTime (): number;
    /**Gets the version message to cache and show to command senders.*/
    getVersionMessage (serverVersion: String): String
}

/**Represents a Vex.*/
export interface Vex extends Monster {
    /**Get the Mob that summoned this vex*/
    getSummoner (): Mob;
    /**Gets the charging state of this entity.*/
    isCharging (): boolean;
    /**Sets the charging state of this entity.*/
    setCharging (charging: boolean): void;
    /**Set the summoner of this vex*/
    setSummoner (summoner: Mob): void
}

/**Represents a villager NPC*/
export interface Villager extends AbstractVillager {
    /**Clear all reputations from this villager.*/
    clearReputations (): void;
    /**Gets the current profession of this villager.*/
    getProfession (): Villager$Profession;
    /**Get the reputation  for a specific player by UUID.*/
    getReputation (uniqueId: UUID): Reputation;
    /**Get all reputations  for all players mapped by their unique IDs.*/
    getReputations (): Map<UUID,Reputation>;
    /**Gets the amount of times a villager has restocked their trades today*/
    getRestocksToday (): number;
    /**Gets the trading experience of this villager.*/
    getVillagerExperience (): number;
    /**Gets the level of this villager.*/
    getVillagerLevel (): number;
    /**Gets the current type of this villager.*/
    getVillagerType (): Villager$Type;
    /**Sets the new profession of this villager.*/
    setProfession (profession: Villager$Profession): void;
    /**Set the reputation  for a specific player by UUID.*/
    setReputation (uniqueId: UUID, reputation: Reputation): void;
    /**Set all reputations  for all players mapped by their unique IDs.*/
    setReputations (reputations: Map<UUID,Reputation>): void;
    /**Sets the amount of times a villager has restocked their trades today*/
    setRestocksToday (restocksToday: number): void;
    /**Sets the trading experience of this villager.*/
    setVillagerExperience (experience: number): void;
    /**Sets the level of this villager.*/
    setVillagerLevel (level: number): void;
    /**Sets the new type of this villager.*/
    setVillagerType (type: Villager$Type): void;
    /**Attempts to make this villager sleep at the given location.*/
    sleep (location: Location): boolean;
    /**Causes this villager to wake up if he's currently sleeping.*/
    wakeup (): void
}

/**Represents the various different Villager professions there may be.  Villagers have different trading options depending on their profession,*/
export class Villager$Profession extends Enum<Villager$Profession> implements Keyed {
    /**Armorer profession.*/
    static ARMORER: Villager$Profession;
    /**Butcher profession.*/
    static BUTCHER: Villager$Profession;
    /**Cartographer profession.*/
    static CARTOGRAPHER: Villager$Profession;
    /**Cleric profession.*/
    static CLERIC: Villager$Profession;
    /**Farmer profession.*/
    static FARMER: Villager$Profession;
    /**Fisherman profession.*/
    static FISHERMAN: Villager$Profession;
    /**Fletcher profession.*/
    static FLETCHER: Villager$Profession;
    /**Leatherworker profession.*/
    static LEATHERWORKER: Villager$Profession;
    /**Librarian profession.*/
    static LIBRARIAN: Villager$Profession;
    /**Mason profession.*/
    static MASON: Villager$Profession;
    /**Nitwit profession.*/
    static NITWIT: Villager$Profession;
    static NONE: Villager$Profession;
    /**Sheperd profession.*/
    static SHEPHERD: Villager$Profession;
    /**Toolsmith profession.*/
    static TOOLSMITH: Villager$Profession;
    /**Weaponsmith profession.*/
    static WEAPONSMITH: Villager$Profession
}

/**Represents Villager type, usually corresponding to what biome they spawn  in.*/
export class Villager$Type extends Enum<Villager$Type> implements Keyed {
    static DESERT: Villager$Type;
    static JUNGLE: Villager$Type;
    static PLAINS: Villager$Type;
    static SAVANNA: Villager$Type;
    static SNOW: Villager$Type;
    static SWAMP: Villager$Type;
    static TAIGA: Villager$Type
}

/**Called whenever a villager acquires a new trade.*/
export class VillagerAcquireTradeEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): AbstractVillager;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the recipe to be acquired.*/
    getRecipe (): MerchantRecipe;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the recipe to be acquired.*/
    setRecipe (recipe: MerchantRecipe): void
}

export class VillagerCareerChangeEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Villager;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the future profession of the villager.*/
    getProfession (): Villager$Profession;
    /**Gets the reason for why the villager's career is changing.*/
    getReason (): VillagerCareerChangeEvent$ChangeReason;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the profession the villager will become from this event.*/
    setProfession (profession: Villager$Profession): void
}

/**Reasons for the villager's profession changing.*/
export class VillagerCareerChangeEvent$ChangeReason extends Enum<VillagerCareerChangeEvent$ChangeReason> {
    /**Villager gained employment.*/
    static EMPLOYED: VillagerCareerChangeEvent$ChangeReason;
    /**Villager lost their job due to too little experience.*/
    static LOSING_JOB: VillagerCareerChangeEvent$ChangeReason
}

/**Called when a villager's trade's maximum uses is increased, due to a player's  trade.*/
export class VillagerReplenishTradeEvent extends EntityEvent implements Cancellable {
    /**Get the bonus uses added.*/
    getBonus (): number;
    /**Returns the Entity involved in this event*/
    getEntity (): AbstractVillager;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Get the recipe to replenish.*/
    getRecipe (): MerchantRecipe;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Set the bonus uses added.*/
    setBonus (bonus: number): void;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Set the recipe to replenish.*/
    setRecipe (recipe: MerchantRecipe): void
}

/**Represents a Vindicator.*/
export interface Vindicator extends Illager {
    /**Check if this Vindicator is set to Johnny mode.*/
    isJohnny (): boolean;
    /**Set this Vindicator's Johnny mode.*/
    setJohnny (johnny: boolean): void
}

/**This class encompasses the 'north', 'east', 'south', 'west', height flags  which are used to set the height of a wall.   'up' denotes whether the well has a center post.*/
export interface Wall extends Waterlogged {
    /**Gets the height of the specified face.*/
    getHeight (face: BlockFace): Wall$Height;
    /**Gets the value of the 'up' property.*/
    isUp (): boolean;
    /**Set the height of the specified face.*/
    setHeight (face: BlockFace, height: Wall$Height): void;
    /**Sets the value of the 'up' property.*/
    setUp (up: boolean): void
}

/**The different heights a face of a wall may have.*/
export class Wall$Height extends Enum<Wall$Height> {
    /**Low wall present.*/
    static LOW: Wall$Height;
    /**No wall present.*/
    static NONE: Wall$Height;
    /**Tall wall present.*/
    static TALL: Wall$Height
}

export interface WallSign extends Directional, Waterlogged {

}

/**Represents a wandering trader NPC*/
export interface WanderingTrader extends AbstractVillager {

}

/**This represents the states that server verbose for warnings may be.*/
export class Warning$WarningState extends Enum<Warning$WarningState> {
    /**Indicates each warning would default to the configured Warning annotation, or always if annotation not found.*/
    static DEFAULT: Warning$WarningState;
    /**Indicates no warnings should be printed for deprecated items.*/
    static OFF: Warning$WarningState;
    /**Indicates all warnings should be printed for deprecated items.*/
    static ON: Warning$WarningState
}

/**'waterlogged' denotes whether this block has fluid in it.*/
export interface Waterlogged extends BlockData {
    /**Gets the value of the 'waterlogged' property.*/
    isWaterlogged (): boolean;
    /**Sets the value of the 'waterlogged' property.*/
    setWaterlogged (waterlogged: boolean): void
}

/**Represents a Water Mob*/
export interface WaterMob extends Creature {

}

/**Stores data for weather changing in a world*/
export class WeatherChangeEvent extends WeatherEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Gets the state of weather that the world is being set to*/
    toWeatherState (): boolean
}

/**Represents a Weather-related event*/
export class WeatherEvent extends Event {
    /**Returns the World where this event is occurring*/
    getWorld (): World
}

/**An enum of all current weather types*/
export class WeatherType extends Enum<WeatherType> {
    /**Clear weather, clouds but no rain.*/
    static CLEAR: WeatherType;
    /**Raining or snowing depending on biome.*/
    static DOWNFALL: WeatherType
}

/**This event is fired when whitelist is toggled*/
export class WhitelistToggleEvent extends Event {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets whether whitelist is going to be enabled or not*/
    isEnabled (): boolean
}

/**Represents a Witch*/
export interface Witch extends Raider, RangedEntity {
    /**Get the potion the Witch is drinking*/
    getDrinkingPotion (): ItemStack;
    /**Get time remaining (in ticks) the Witch is drinking a potion*/
    getPotionUseTimeLeft (): number;
    /**Check if Witch is drinking a potion*/
    isDrinkingPotion (): boolean;
    /**Set the potion the Witch should drink*/
    setDrinkingPotion (potion: ItemStack): void
}

/**Fired when a witch consumes the potion in their hand to buff themselves.*/
export class WitchConsumePotionEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Witch;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getPotion (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the potion to be consumed and applied to the witch.*/
    setPotion (potion: ItemStack): void
}

export class WitchReadyPotionEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Witch;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getPotion (): ItemStack;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Fires thee event, returning the desired potion, or air of cancelled*/
    static process (witch: Witch, potion: ItemStack): ItemStack;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the potion the which is going to hold and use*/
    setPotion (potion: ItemStack): void
}

/**Fired when a witch throws a potion at a player*/
export class WitchThrowPotionEvent extends EntityEvent implements Cancellable {
    /**Returns the Entity involved in this event*/
    getEntity (): Witch;
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    getPotion (): ItemStack;
    getTarget (): LivingEntity;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void;
    /**Sets the potion to be thrown at a player*/
    setPotion (potion: ItemStack): void
}

/**Represents a Wither boss*/
export interface Wither extends Monster, Boss, RangedEntity {

}

/**Represents a WitherSkeleton - variant of Skeleton.*/
export interface WitherSkeleton extends Skeleton {

}

/**Represents a wither skull Fireball.*/
export interface WitherSkull extends Fireball {
    /**Gets whether or not the wither skull is charged.*/
    isCharged (): boolean;
    /**Sets the charged status of the wither skull.*/
    setCharged (charged: boolean): void
}

/**Represents a Wolf*/
export interface Wolf extends Tameable, Sittable {
    /**Get the collar color of this wolf*/
    getCollarColor (): DyeColor;
    /**Checks if this wolf is angry*/
    isAngry (): boolean;
    /**Sets the anger of this wolf.*/
    setAngry (angry: boolean): void;
    /**Set the collar color of this wolf*/
    setCollarColor (color: DyeColor): void
}

/**Represents a world, which may contain entities, chunks and blocks*/
export interface World extends PluginMessageRecipient, Metadatable {
    /**Adds a plugin ticket for the specified chunk, loading the chunk if it is  not already loaded.*/
    addPluginChunkTicket (x: number, z: number, plugin: Plugin): boolean;
    /**Gets whether or not structures are being generated.*/
    canGenerateStructures (): boolean;
    /**Creates explosion at given coordinates with given power*/
    createExplosion (x: number, y: number, z: number, power: number): boolean;
    /**Creates explosion at given coordinates with given power and optionally  setting blocks on fire.*/
    createExplosion (x: number, y: number, z: number, power: number, setFire: boolean): boolean;
    /**Creates explosion at given coordinates with given power and optionally  setting blocks on fire or breaking blocks.*/
    createExplosion (x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean): boolean;
    /**Creates explosion at given coordinates with given power and optionally  setting blocks on fire or breaking blocks.*/
    createExplosion (x: number, y: number, z: number, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
    /**Creates explosion at given entities location with given power and optionally  setting blocks on fire, with the specified entity as the source.*/
    createExplosion (source: Entity, power: number): boolean;
    /**Creates explosion at given entities location with given power and optionally  setting blocks on fire, with the specified entity as the source.*/
    createExplosion (source: Entity, power: number, setFire: boolean): boolean;
    /**Creates explosion at given entities location with given power and optionally  setting blocks on fire, with the specified entity as the source.*/
    createExplosion (source: Entity, power: number, setFire: boolean, breakBlocks: boolean): boolean;
    /**Creates explosion at given location with given power, with the specified entity as the source.*/
    createExplosion (source: Entity, loc: Location, power: number): boolean;
    /**Creates explosion at given location with given power and optionally  setting blocks on fire, with the specified entity as the source.*/
    createExplosion (source: Entity, loc: Location, power: number, setFire: boolean): boolean;
    /**Creates explosion at given location with given power and optionally  setting blocks on fire, with the specified entity as the source.*/
    createExplosion (source: Entity, loc: Location, power: number, setFire: boolean, breakBlocks: boolean): boolean;
    /**Creates explosion at given coordinates with given power*/
    createExplosion (loc: Location, power: number): boolean;
    /**Creates explosion at given coordinates with given power and optionally  setting blocks on fire.*/
    createExplosion (loc: Location, power: number, setFire: boolean): boolean;
    /**Creates explosion at given coordinates with given power and optionally  setting blocks on fire or breaking blocks.*/
    createExplosion (loc: Location, power: number, setFire: boolean, breakBlocks: boolean): boolean;
    /**Creates explosion at given coordinates with given power and optionally  setting blocks on fire or breaking blocks.*/
    createExplosion (loc: Location, power: number, setFire: boolean, breakBlocks: boolean, source: Entity): boolean;
    /**Drops an item at the specified Location*/
    dropItem (location: Location, item: ItemStack): Item;
    /**Drops an item at the specified Location with a random offset*/
    dropItemNaturally (location: Location, item: ItemStack): Item;
    /**Creates a tree at the given Location*/
    generateTree (location: Location, type: TreeType): boolean;
    /**Creates a tree at the given Location*/
    generateTree (loc: Location, type: TreeType, delegate: BlockChangeDelegate): boolean;
    /**Gets whether animals can spawn in this world.*/
    getAllowAnimals (): boolean;
    /**Gets whether monsters can spawn in this world.*/
    getAllowMonsters (): boolean;
    /**Gets the limit for number of ambient mobs that can spawn in a chunk in  this world*/
    getAmbientSpawnLimit (): number;
    /**Gets the limit for number of animals that can spawn in a chunk in this  world*/
    getAnimalSpawnLimit (): number;
    /**Gets the biome for the given block coordinates.*/
    getBiome (x: number, y: number, z: number): Biome;
    /**Gets the Block at the given coordinates*/
    getBlockAt (x: number, y: number, z: number): Block;
    /**Gets the Block at the given Location*/
    getBlockAt (location: Location): Block;
    /**Gets the Block at the given block key*/
    getBlockAtKey (key: number): Block;
    /**Gets the Chunk at the given coordinates*/
    getChunkAt (x: number, z: number): Chunk;
    /**Gets the chunk at the specified chunk key, which is the X and Z packed into a long.*/
    getChunkAt (chunkKey: number): Chunk;
    /**Gets the Chunk that contains the given Block*/
    getChunkAt (block: Block): Chunk;
    /**Gets the Chunk at the given Location*/
    getChunkAt (location: Location): Chunk;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (x: number, z: number): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (x: number, z: number, gen: boolean): CompletableFuture<Chunk>;
    getChunkAtAsync (x: number, z: number, gen: boolean, urgent: boolean): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (x: number, z: number, gen: boolean, cb: Consumer<Chunk>): void;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (x: number, z: number, cb: Consumer<Chunk>): void;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (block: Block): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (block: Block, gen: boolean): CompletableFuture<Chunk>;
    /**Requests Chunk to be loaded that contains the given Block   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (block: Block, gen: boolean, cb: Consumer<Chunk>): void;
    /**Requests Chunk to be loaded that contains the given Block   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (block: Block, cb: Consumer<Chunk>): void;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (loc: Location): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (loc: Location, gen: boolean): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given Location   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (loc: Location, gen: boolean, cb: Consumer<Chunk>): void;
    /**Requests a Chunk to be loaded at the given Location   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsync (loc: Location, cb: Consumer<Chunk>): void;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsyncUrgently (x: number, z: number): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsyncUrgently (block: Block): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsyncUrgently (block: Block, gen: boolean): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsyncUrgently (loc: Location): CompletableFuture<Chunk>;
    /**Requests a Chunk to be loaded at the given coordinates   This method makes no guarantee on how fast the chunk will load,  and will return the chunk to the callback at a later time.*/
    getChunkAtAsyncUrgently (loc: Location, gen: boolean): CompletableFuture<Chunk>;
    getChunkCount (): number;
    /**Gets the Difficulty of the world.*/
    getDifficulty (): Difficulty;
    /**Get empty chunk snapshot (equivalent to all air blocks), optionally  including valid biome data.*/
    getEmptyChunkSnapshot (x: number, z: number, includeBiome: boolean, includeBiomeTemp: boolean): ChunkSnapshot;
    /**Get the DragonBattle associated with this world.*/
    getEnderDragonBattle (): DragonBattle;
    /**Get a list of all entities in this World*/
    getEntities (): List<Entity>;
    /**Get a collection of all entities in this World matching the given  class/interface*/
    getEntitiesByClass <T extends Entity>(cls: Class<T>): Collection<T>;
    /**Get a collection of all entities in this World matching any of the  given classes/interfaces*/
    getEntitiesByClasses (...classes: Class<X>[]): Collection<Entity>;
    /**Gets an entity in this world by its UUID*/
    getEntity (uuid: UUID): Entity;
    getEntityCount (): number;
    /**Gets the World.Environment type of this world*/
    getEnvironment (): World$Environment;
    /**Returns all force loaded chunks in this world.*/
    getForceLoadedChunks (): Collection<Chunk>;
    /**Gets the full in-game time on this world*/
    getFullTime (): number;
    /**Get the default value for a given GameRule.*/
    getGameRuleDefault <T>(rule: GameRule<T>): T;
    /**Get an array containing the names of all the GameRules.*/
    getGameRules (): String[];
    /**Get the current value for a given GameRule.*/
    getGameRuleValue <T>(rule: GameRule<T>): T;
    /**Gets the chunk generator for this world*/
    getGenerator (): ChunkGenerator;
    /**Gets the highest non-empty (impassable) block at the given coordinates.*/
    getHighestBlockAt (x: number, z: number): Block;
    /**Gets the highest block corresponding to the HeightMap at the  given coordinates.*/
    getHighestBlockAt (x: number, z: number, heightMap: HeightMap): Block;
    /**Gets the highest non-empty (impassable) block at the given coordinates.*/
    getHighestBlockAt (location: Location): Block;
    /**Gets the highest block corresponding to the HeightMap at the  given coordinates.*/
    getHighestBlockAt (location: Location, heightMap: HeightMap): Block;
    /**Gets the highest non-empty (impassable) coordinate at the given  coordinates.*/
    getHighestBlockYAt (x: number, z: number): number;
    /**Gets the highest coordinate corresponding to the HeightMap at the  given coordinates.*/
    getHighestBlockYAt (x: number, z: number, heightMap: HeightMap): number;
    /**Gets the highest non-empty (impassable) coordinate at the given  Location.*/
    getHighestBlockYAt (location: Location): number;
    /**Gets the highest coordinate corresponding to the HeightMap at the  given Location.*/
    getHighestBlockYAt (location: Location, heightMap: HeightMap): number;
    /**Gets the humidity for the given block coordinates.*/
    getHumidity (x: number, y: number, z: number): number;
    /**Gets whether the world's spawn area should be kept loaded into memory  or not.*/
    getKeepSpawnInMemory (): boolean;
    /**Get a list of all living entities in this World*/
    getLivingEntities (): List<LivingEntity>;
    /**Gets an array of all loaded Chunks*/
    getLoadedChunks (): Chunk[];
    /**Gets the Location at the given block key*/
    getLocationAtKey (key: number): Location;
    /**Gets the maximum height of this world.*/
    getMaxHeight (): number;
    /**Gets limit for number of monsters that can spawn in a chunk in this  world*/
    getMonsterSpawnLimit (): number;
    getMoonPhase (): MoonPhase;
    /**Gets the unique name of this world*/
    getName (): String;
    /**Returns a list of entities within a bounding box centered around a  Location.*/
    getNearbyEntities (location: Location, x: number, y: number, z: number): Collection<Entity>;
    /**Returns a list of entities within a bounding box centered around a  Location.*/
    getNearbyEntities (location: Location, x: number, y: number, z: number, filter: Predicate<Entity>): Collection<Entity>;
    /**Returns a list of entities within the given bounding box.*/
    getNearbyEntities (boundingBox: BoundingBox): Collection<Entity>;
    /**Returns a list of entities within the given bounding box.*/
    getNearbyEntities (boundingBox: BoundingBox, filter: Predicate<Entity>): Collection<Entity>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, loc: Location, xRadius: number, yRadius: number, zRadius: number, predicate: Predicate<T>): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, loc: Location, radius: number): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius, with x and x radius matching (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, loc: Location, xzRadius: number, yRadius: number): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, loc: Location, xRadius: number, yRadius: number, zRadius: number): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius, with x and x radius matching (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, loc: Location, xzRadius: number, yRadius: number, predicate: Predicate<T>): Collection<T>;
    /**Gets all nearby entities of the specified type, within the specified radius (bounding box)*/
    getNearbyEntitiesByType <T extends Entity>(clazz: Class<X>, loc: Location, radius: number, predicate: Predicate<T>): Collection<T>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (loc: Location, radius: number): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (loc: Location, xzRadius: number, yRadius: number): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (loc: Location, xRadius: number, yRadius: number, zRadius: number): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (loc: Location, xRadius: number, yRadius: number, zRadius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (loc: Location, xzRadius: number, yRadius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyLivingEntities (loc: Location, radius: number, predicate: Predicate<LivingEntity>): Collection<LivingEntity>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (loc: Location, radius: number): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (loc: Location, xzRadius: number, yRadius: number): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (loc: Location, xRadius: number, yRadius: number, zRadius: number): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (loc: Location, xRadius: number, yRadius: number, zRadius: number, predicate: Predicate<Player>): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (loc: Location, xzRadius: number, yRadius: number, predicate: Predicate<Player>): Collection<Player>;
    /**Gets nearby players within the specified radius (bounding box)*/
    getNearbyPlayers (loc: Location, radius: number, predicate: Predicate<Player>): Collection<Player>;
    /**Returns the no-tick view distance for this world.*/
    getNoTickViewDistance (): number;
    getPlayerCount (): number;
    /**Get a list of all players in this World*/
    getPlayers (): List<Player>;
    /**Returns a map of which plugins have tickets for what chunks.*/
    getPluginChunkTickets (): Map<Plugin,Collection<Chunk>>;
    /**Retrieves a collection specifying which plugins have tickets for the  specified chunk.*/
    getPluginChunkTickets (x: number, z: number): Collection<Plugin>;
    /**Gets a list of all applied BlockPopulators for this World*/
    getPopulators (): List<BlockPopulator>;
    /**Gets the current PVP setting for this world.*/
    getPVP (): boolean;
    /**Gets all raids that are going on over this world.*/
    getRaids (): List<Raid>;
    /**Gets the sea level for this world.*/
    getSeaLevel (): number;
    /**Gets the Seed for this world.*/
    getSeed (): number;
    /**Gets the default spawn Location of this world*/
    getSpawnLocation (): Location;
    /**Gets the temperature for the given block coordinates.*/
    getTemperature (x: number, y: number, z: number): number;
    /**Get the thundering duration.*/
    getThunderDuration (): number;
    getTickableTileEntityCount (): number;
    /**Gets the world's ticks per ambient mob spawns value*/
    getTicksPerAmbientSpawns (): number;
    /**Gets the world's ticks per animal spawns value*/
    getTicksPerAnimalSpawns (): number;
    /**Gets the world's ticks per monster spawns value*/
    getTicksPerMonsterSpawns (): number;
    /**Gets the default ticks per water ambient mob spawns value.*/
    getTicksPerWaterAmbientSpawns (): number;
    /**Gets the world's ticks per water mob spawns value*/
    getTicksPerWaterSpawns (): number;
    getTileEntityCount (): number;
    /**Gets the relative in-game time of this world.*/
    getTime (): number;
    /**Gets the Unique ID of this world*/
    getUID (): UUID;
    /**Returns the view distance used for this world.*/
    getViewDistance (): number;
    /**Gets user-specified limit for number of water ambient mobs that can spawn  in a chunk.*/
    getWaterAmbientSpawnLimit (): number;
    /**Gets the limit for number of water animals that can spawn in a chunk in  this world*/
    getWaterAnimalSpawnLimit (): number;
    /**Get the remaining time in ticks of the current conditions.*/
    getWeatherDuration (): number;
    /**Gets the world border for this world.*/
    getWorldBorder (): WorldBorder;
    /**Gets the folder of this world on disk.*/
    getWorldFolder (): File;
    /**Returns whether the world has an ongoing storm.*/
    hasStorm (): boolean;
    /**Gets whether or not the world will automatically save*/
    isAutoSave (): boolean;
    /**Gets whether the chunk at the specified chunk coordinates is force  loaded.*/
    isChunkForceLoaded (x: number, z: number): boolean;
    /**Checks if the Chunk at the specified coordinates is generated*/
    isChunkGenerated (x: number, z: number): boolean;
    /**Checks if a Chunk has been generated at the specified chunk key,  which is the X and Z packed into a long.*/
    isChunkGenerated (chunkKey: number): boolean;
    /**Checks if the Chunk at the specified coordinates is loaded*/
    isChunkLoaded (x: number, z: number): boolean;
    /**Checks if the specified Chunk is loaded*/
    isChunkLoaded (chunk: Chunk): boolean;
    /**Check if it is currently daytime in this world*/
    isDayTime (): boolean;
    /**Checks if string is a valid game rule*/
    isGameRule (rule: String): boolean;
    /**Gets whether the world is hardcore or not.*/
    isHardcore (): boolean;
    /**Returns whether there is thunder.*/
    isThundering (): boolean;
    /**Loads the Chunk at the specified coordinates.*/
    loadChunk (x: number, z: number): void;
    /**Loads the Chunk at the specified coordinates.*/
    loadChunk (x: number, z: number, generate: boolean): boolean;
    /**Loads the specified Chunk.*/
    loadChunk (chunk: Chunk): void;
    /**Finds the nearest raid close to the given location.*/
    locateNearestRaid (location: Location, radius: number): Raid;
    /**Find the closest nearby structure of a given StructureType.*/
    locateNearestStructure (origin: Location, structureType: StructureType, radius: number, findUnexplored: boolean): Location;
    /**Plays an effect to all players within a default radius around a given  location.*/
    playEffect (location: Location, effect: Effect, data: number): void;
    /**Plays an effect to all players within a given radius around a location.*/
    playEffect (location: Location, effect: Effect, data: number, radius: number): void;
    /**Plays an effect to all players within a default radius around a given  location.*/
    playEffect <T>(location: Location, effect: Effect, data: T): void;
    /**Plays an effect to all players within a given radius around a location.*/
    playEffect <T>(location: Location, effect: Effect, data: T, radius: number): void;
    /**Play a Sound at the provided Location in the World.*/
    playSound (location: Location, sound: String, volume: number, pitch: number): void;
    /**Play a Sound at the provided Location in the World.*/
    playSound (location: Location, sound: String, category: SoundCategory, volume: number, pitch: number): void;
    /**Play a Sound at the provided Location in the World*/
    playSound (location: Location, sound: Sound, volume: number, pitch: number): void;
    /**Play a Sound at the provided Location in the World.*/
    playSound (location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
    /**Performs a ray trace that checks for both block and entity collisions.*/
    rayTrace (start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean, raySize: number, filter: Predicate<Entity>): RayTraceResult;
    /**Performs a ray trace that checks for block collisions using the blocks'  precise collision shapes.*/
    rayTraceBlocks (start: Location, direction: Vector, maxDistance: number): RayTraceResult;
    /**Performs a ray trace that checks for block collisions using the blocks'  precise collision shapes.*/
    rayTraceBlocks (start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
    /**Performs a ray trace that checks for block collisions using the blocks'  precise collision shapes.*/
    rayTraceBlocks (start: Location, direction: Vector, maxDistance: number, fluidCollisionMode: FluidCollisionMode, ignorePassableBlocks: boolean): RayTraceResult;
    /**Performs a ray trace that checks for entity collisions.*/
    rayTraceEntities (start: Location, direction: Vector, maxDistance: number): RayTraceResult;
    /**Performs a ray trace that checks for entity collisions.*/
    rayTraceEntities (start: Location, direction: Vector, maxDistance: number, raySize: number): RayTraceResult;
    /**Performs a ray trace that checks for entity collisions.*/
    rayTraceEntities (start: Location, direction: Vector, maxDistance: number, raySize: number, filter: Predicate<Entity>): RayTraceResult;
    /**Performs a ray trace that checks for entity collisions.*/
    rayTraceEntities (start: Location, direction: Vector, maxDistance: number, filter: Predicate<Entity>): RayTraceResult;
    /**Removes the specified plugin's ticket for the specified chunk*/
    removePluginChunkTicket (x: number, z: number, plugin: Plugin): boolean;
    /**Removes all plugin tickets for the specified plugin*/
    removePluginChunkTickets (plugin: Plugin): void;
    /**Saves world to disk*/
    save (): void;
    /**Sets the limit for number of ambient mobs that can spawn in a chunk in  this world*/
    setAmbientSpawnLimit (limit: number): void;
    /**Sets the limit for number of animals that can spawn in a chunk in this  world*/
    setAnimalSpawnLimit (limit: number): void;
    /**Sets whether or not the world will automatically save*/
    setAutoSave (value: boolean): void;
    /**Sets the biome for the given block coordinates*/
    setBiome (x: number, y: number, z: number, bio: Biome): void;
    /**Sets whether the chunk at the specified chunk coordinates is force  loaded.*/
    setChunkForceLoaded (x: number, z: number, forced: boolean): void;
    /**Sets the Difficulty of the world.*/
    setDifficulty (difficulty: Difficulty): void;
    /**Sets the in-game time on the server*/
    setFullTime (time: number): void;
    /**Set the given GameRule's new value.*/
    setGameRule <T>(rule: GameRule<T>, newValue: T): boolean;
    /**Sets whether the world is hardcore or not.*/
    setHardcore (hardcore: boolean): void;
    /**Sets whether the world's spawn area should be kept loaded into memory  or not.*/
    setKeepSpawnInMemory (keepLoaded: boolean): void;
    /**Sets the limit for number of monsters that can spawn in a chunk in this  world*/
    setMonsterSpawnLimit (limit: number): void;
    /**Sets the no-tick view distance for this world.*/
    setNoTickViewDistance (viewDistance: number): void;
    /**Sets the PVP setting for this world.*/
    setPVP (pvp: boolean): void;
    /**Sets the spawn flags for this.*/
    setSpawnFlags (allowMonsters: boolean, allowAnimals: boolean): void;
    /**Sets the spawn location of the world*/
    setSpawnLocation (x: number, y: number, z: number): boolean;
    /**Sets the spawn location of the world*/
    setSpawnLocation (x: number, y: number, z: number, angle: number): boolean;
    /**Sets the spawn location of the world.*/
    setSpawnLocation (location: Location): boolean;
    /**Set whether there is a storm.*/
    setStorm (hasStorm: boolean): void;
    /**Set the thundering duration.*/
    setThunderDuration (duration: number): void;
    /**Set whether it is thundering.*/
    setThundering (thundering: boolean): void;
    /**Sets the world's ticks per ambient mob spawns value*/
    setTicksPerAmbientSpawns (ticksPerAmbientSpawns: number): void;
    /**Sets the world's ticks per animal spawns value*/
    setTicksPerAnimalSpawns (ticksPerAnimalSpawns: number): void;
    /**Sets the world's ticks per monster spawns value*/
    setTicksPerMonsterSpawns (ticksPerMonsterSpawns: number): void;
    /**Sets the world's ticks per water ambient mob spawns value*/
    setTicksPerWaterAmbientSpawns (ticksPerAmbientSpawns: number): void;
    /**Sets the world's ticks per water mob spawns value*/
    setTicksPerWaterSpawns (ticksPerWaterSpawns: number): void;
    /**Sets the relative in-game time on the server.*/
    setTime (time: number): void;
    /**Sets the view distance for this world.*/
    setViewDistance (viewDistance: number): void;
    /**Sets the limit for number of water ambient mobs that can spawn in a chunk  in this world*/
    setWaterAmbientSpawnLimit (limit: number): void;
    /**Sets the limit for number of water animals that can spawn in a chunk in  this world*/
    setWaterAnimalSpawnLimit (limit: number): void;
    /**Set the remaining time in ticks of the current conditions.*/
    setWeatherDuration (duration: number): void;
    /**Spawn an entity of a specific class at the given Location*/
    spawn <T extends Entity>(location: Location, clazz: Class<T>): T;
    spawn <T extends Entity>(location: Location, clazz: Class<T>, reason: CreatureSpawnEvent$SpawnReason): T;
    spawn <T extends Entity>(location: Location, clazz: Class<T>, reason: CreatureSpawnEvent$SpawnReason, _function: Consumer<T>): T;
    /**Spawn an entity of a specific class at the given Location, with  the supplied function run before the entity is added to the world.*/
    spawn <T extends Entity>(location: Location, clazz: Class<T>, _function: Consumer<T>): T;
    spawn <T extends Entity>(location: Location, clazz: Class<T>, _function: Consumer<T>, reason: CreatureSpawnEvent$SpawnReason): T;
    /**Creates an Arrow entity at the given Location*/
    spawnArrow (location: Location, direction: Vector, speed: number, spread: number): Arrow;
    /**Creates an arrow entity of the given class at the given Location*/
    spawnArrow <T extends AbstractArrow>(location: Location, direction: Vector, speed: number, spread: number, clazz: Class<T>): T;
    /**Creates a entity at the given Location*/
    spawnEntity (loc: Location, type: EntityType): Entity;
    spawnEntity (loc: Location, type: EntityType, reason: CreatureSpawnEvent$SpawnReason): Entity;
    spawnEntity (loc: Location, type: EntityType, reason: CreatureSpawnEvent$SpawnReason, _function: Consumer<Entity>): Entity;
    /**Spawn a FallingBlock entity at the given Location of  the specified Material.*/
    spawnFallingBlock (location: Location, data: BlockData): FallingBlock;
    /**Spawn a FallingBlock entity at the given Location of  the specified Material.*/
    spawnFallingBlock (location: Location, data: MaterialData): FallingBlock;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, x: number, y: number, z: number, count: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T, force: boolean): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, x: number, y: number, z: number, count: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, receivers: List<Player>, source: Player, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, receivers: List<Player>, source: Player, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T, force: boolean): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, location: Location, count: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle (particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: T, force: boolean): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: T): void;
    /**Spawns the particle (the number of times specified by count)  at the target location.*/
    spawnParticle <T>(particle: Particle, location: Location, count: number, data: T): void;
    spigot (): World$Spigot;
    /**Strikes lightning at the given Location*/
    strikeLightning (loc: Location): LightningStrike;
    /**Strikes lightning at the given Location without doing damage*/
    strikeLightningEffect (loc: Location): LightningStrike;
    /**Safely unloads and saves the Chunk at the specified coordinates*/
    unloadChunk (x: number, z: number): boolean;
    /**Safely unloads and optionally saves the Chunk at the specified  coordinates.*/
    unloadChunk (x: number, z: number, save: boolean): boolean;
    /**Safely unloads and saves the Chunk at the specified coordinates*/
    unloadChunk (chunk: Chunk): boolean;
    /**Safely queues the Chunk at the specified coordinates for  unloading.*/
    unloadChunkRequest (x: number, z: number): boolean
}

/**Represents various map environment types that a world may be*/
export class World$Environment extends Enum<World$Environment> {
    /**Represents a nether based map ("hell")*/
    static NETHER: World$Environment;
    /**Represents the "normal"/"surface world" map*/
    static NORMAL: World$Environment;
    /**Represents the "end" map*/
    static THE_END: World$Environment
}

export class World$Spigot extends Object {
    /**Strikes lightning at the given Location and possibly without sound*/
    strikeLightning (loc: Location, isSilent: boolean): LightningStrike;
    /**Strikes lightning at the given Location without doing damage and possibly without sound*/
    strikeLightningEffect (loc: Location, isSilent: boolean): LightningStrike
}

export interface WorldBorder {
    /**Gets the current border center.*/
    getCenter (): Location;
    /**Gets the current border damage amount.*/
    getDamageAmount (): number;
    /**Gets the current border damage buffer.*/
    getDamageBuffer (): number;
    /**Gets the current side length of the border.*/
    getSize (): number;
    /**Gets the current border warning distance.*/
    getWarningDistance (): number;
    /**Gets the current border warning time in seconds.*/
    getWarningTime (): number;
    /**Check if the specified location is inside this border.*/
    isInside (location: Location): boolean;
    /**Resets the border to default values.*/
    reset (): void;
    /**Sets the new border center.*/
    setCenter (x: number, z: number): void;
    /**Sets the new border center.*/
    setCenter (location: Location): void;
    /**Sets the amount of damage a player takes when outside the border plus the border buffer.*/
    setDamageAmount (damage: number): void;
    /**Sets the amount of blocks a player may safely be outside the border before taking damage.*/
    setDamageBuffer (blocks: number): void;
    /**Sets the border to a square region with the specified side length in blocks.*/
    setSize (newSize: number): void;
    /**Sets the border to a square region with the specified side length in blocks.*/
    setSize (newSize: number, seconds: number): void;
    /**Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border.*/
    setWarningDistance (distance: number): void;
    /**Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time.*/
    setWarningTime (seconds: number): void
}

/**Represents various types of options that may be used to create a world.*/
export class WorldCreator extends Object {
    /**Copies the options from the specified world*/
    copy (world: World): WorldCreator;
    /**Copies the options from the specified WorldCreator*/
    copy (creator: WorldCreator): WorldCreator;
    /**Creates a world with the specified options.*/
    createWorld (): World;
    /**Gets the environment that will be used to create or load the world*/
    environment (): World$Environment;
    /**Sets the environment that will be used to create or load the world*/
    environment (env: World$Environment): WorldCreator;
    /**Gets whether or not structures will be generated in the world.*/
    generateStructures (): boolean;
    /**Sets whether or not worlds created or loaded with this creator will  have structures.*/
    generateStructures (generate: boolean): WorldCreator;
    /**Gets the generator that will be used to create or load the world.*/
    generator (): ChunkGenerator;
    /**Sets the generator that will be used to create or load the world.*/
    generator (generator: String): WorldCreator;
    /**Sets the generator that will be used to create or load the world.*/
    generator (generator: String, output: CommandSender): WorldCreator;
    /**Sets the generator that will be used to create or load the world.*/
    generator (generator: ChunkGenerator): WorldCreator;
    /**Gets the generator settings of the world that will be created or loaded.*/
    generatorSettings (): String;
    /**Sets the generator settings of the world that will be created or loaded.*/
    generatorSettings (generatorSettings: String): WorldCreator;
    /**Attempts to get the ChunkGenerator with the given name.*/
    static getGeneratorForName (world: String, name: String, output: CommandSender): ChunkGenerator;
    /**Gets whether the world will be hardcore or not.*/
    hardcore (): boolean;
    /**Sets whether the world will be hardcore or not.*/
    hardcore (hardcore: boolean): WorldCreator;
    /**Gets the name of the world that is to be loaded or created.*/
    name (): String;
    /**Creates a new WorldCreator for the given world name*/
    static name (name: String): WorldCreator;
    /**Gets the seed that will be used to create this world*/
    seed (): number;
    /**Sets the seed that will be used to create this world*/
    seed (seed: number): WorldCreator;
    /**Gets the type of the world that will be created or loaded*/
    type (): WorldType;
    /**Sets the type of the world that will be created or loaded*/
    type (type: WorldType): WorldCreator
}

/**Represents events within a world*/
export class WorldEvent extends Event {
    /**Gets the world primarily involved with this event*/
    getWorld (): World
}

/**Called when a World is initializing*/
export class WorldInitEvent extends WorldEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when a World is loaded*/
export class WorldLoadEvent extends WorldEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Called when a World is saved.*/
export class WorldSaveEvent extends WorldEvent {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList
}

/**Represents various types of worlds that may exist*/
export class WorldType extends Enum<WorldType> {
    static AMPLIFIED: WorldType;
    static FLAT: WorldType;
    static LARGE_BIOMES: WorldType;
    static NORMAL: WorldType
}

/**Called when a World is unloaded*/
export class WorldUnloadEvent extends WorldEvent implements Cancellable {
    static getHandlerList (): HandlerList;
    getHandlers (): HandlerList;
    /**Gets the cancellation state of this event.*/
    isCancelled (): boolean;
    /**Sets the cancellation state of this event.*/
    setCancelled (cancel: boolean): void
}

/**An implementation of Configuration which saves all files in Yaml.  Note that this implementation is not synchronized.*/
export class YamlConfiguration extends FileConfiguration {
    /**Compiles the header for this FileConfiguration and returns the  result.*/
    buildHeader (): String;
    convertMapsToSections (input: Map<X,X>, section: ConfigurationSection): void;
    /**Creates a new YamlConfiguration, loading from the given file.*/
    static loadConfiguration (file: File): YamlConfiguration;
    /**Creates a new YamlConfiguration, loading from the given reader.*/
    static loadConfiguration (reader: Reader): YamlConfiguration;
    /**Loads this FileConfiguration from the specified string, as  opposed to from file.*/
    loadFromString (contents: String): void;
    /**Gets the ConfigurationOptions for this Configuration.*/
    options (): YamlConfigurationOptions;
    parseHeader (input: String): String;
    /**Saves this FileConfiguration to a string, and returns it.*/
    saveToString (): String
}

/**Various settings for controlling the input and output of a YamlConfiguration*/
export class YamlConfigurationOptions extends FileConfigurationOptions {
    /**Returns the Configuration that this object is responsible for.*/
    configuration (): YamlConfiguration;
    /**Sets if the Configuration should copy values from its default  Configuration directly.*/
    copyDefaults (value: boolean): YamlConfigurationOptions;
    /**Sets whether or not the header should be copied from a default source.*/
    copyHeader (value: boolean): YamlConfigurationOptions;
    /**Sets the header that will be applied to the top of the saved output.*/
    header (value: String): YamlConfigurationOptions;
    /**Gets how much spaces should be used to indent each line.*/
    indent (): number;
    /**Sets how much spaces should be used to indent each line.*/
    indent (value: number): YamlConfigurationOptions;
    /**Sets the char that will be used to separate ConfigurationSections*/
    pathSeparator (value: char): YamlConfigurationOptions
}

export class YamlConstructor extends SafeConstructor {

}

export class YamlRepresenter extends Representer {
    addClassTag (arg0: Class<X>, arg1: Tag): Tag;
    getTag (arg0: Class<X>, arg1: Tag): Tag;
    getTimeZone (): TimeZone;
    setTimeZone (arg0: TimeZone): void
}

/**Represents a Zoglin.*/
export interface Zoglin extends Monster, Ageable {

}

/**Represents a Zombie.*/
export interface Zombie extends Monster, Ageable {
    /**Gets the amount of ticks until this entity will be converted to a Drowned  as a result of being underwater.*/
    getConversionTime (): number;
    /**Check if zombie has arms raised*/
    isArmsRaised (): boolean;
    /**Get if this entity is in the process of converting to a Drowned as a  result of being underwater.*/
    isConverting (): boolean;
    /**Check if zombie is drowning*/
    isDrowning (): boolean;
    /**Set if zombie has its arms raised*/
    setArmsRaised (raised: boolean): void;
    /**Sets the amount of ticks until this entity will be converted to a Drowned  as a result of being underwater.*/
    setConversionTime (time: number): void;
    /**Set if this zombie should burn in the sunlight*/
    setShouldBurnInDay (shouldBurnInDay: boolean): void;
    /**Check if this zombie will burn in the sunlight*/
    shouldBurnInDay (): boolean;
    /**Stop a zombie from starting the drowning conversion process*/
    stopDrowning (): void
}

/**Represents a ZombieHorse - variant of AbstractHorse.*/
export interface ZombieHorse extends AbstractHorse {

}

/**Represents a Zombie which was once a Villager.*/
export interface ZombieVillager extends Zombie {
    /**Gets the player who initiated the conversion.*/
    getConversionPlayer (): OfflinePlayer;
    /**Gets the amount of ticks until this entity will be converted to a  Villager as a result of being cured.*/
    getConversionTime (): number;
    /**Returns the villager profession of this zombie.*/
    getVillagerProfession (): Villager$Profession;
    /**Gets the current type of this villager.*/
    getVillagerType (): Villager$Type;
    /**Get if this entity is in the process of converting to a Villager as a  result of being cured.*/
    isConverting (): boolean;
    /**Sets the player who initiated the conversion.*/
    setConversionPlayer (conversionPlayer: OfflinePlayer): void;
    /**Sets the amount of ticks until this entity will be converted to a  Villager as a result of being cured.*/
    setConversionTime (time: number): void;
    /**Sets the villager profession of this zombie.*/
    setVillagerProfession (profession: Villager$Profession): void;
    /**Sets the new type of this villager.*/
    setVillagerType (type: Villager$Type): void
}
