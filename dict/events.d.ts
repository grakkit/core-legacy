import * as classes from './classes'
export class events {
    static event (
        name: 'java.awt.desktop.AboutEvent',
        ...listeners: ((event: classes.jadAboutEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.AccessWatchpointEvent',
        ...listeners: ((event: classes.csjeAccessWatchpointEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ActionEvent',
        ...listeners: ((event: classes.jaeActionEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.ActiveEvent',
        ...listeners: ((event: classes.jaActiveEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.AdjustmentEvent',
        ...listeners: ((event: classes.jaeAdjustmentEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.AncestorEvent',
        ...listeners: ((event: classes.jseAncestorEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppEvent',
        ...listeners: ((event: classes.jadAppEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppForegroundEvent',
        ...listeners: ((event: classes.jadAppForegroundEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppHiddenEvent',
        ...listeners: ((event: classes.jadAppHiddenEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppReopenedEvent',
        ...listeners: ((event: classes.jadAppReopenedEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.AssociationChangeNotification.AssocChangeEvent',
        ...listeners: ((event: classes.csnsAAssocChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.AWTEvent',
        ...listeners: ((event: classes.jaAWTEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextEvent',
        ...listeners: ((event: classes.jbbBeanContextEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextMembershipEvent',
        ...listeners: ((event: classes.jbbBeanContextMembershipEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceAvailableEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceAvailableEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceRevokedEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceRevokedEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.BreakpointEvent',
        ...listeners: ((event: classes.csjeBreakpointEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.CaretEvent',
        ...listeners: ((event: classes.jseCaretEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.ChangeEvent',
        ...listeners: ((event: classes.jseChangeEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassPrepareEvent',
        ...listeners: ((event: classes.csjeClassPrepareEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassUnloadEvent',
        ...listeners: ((event: classes.csjeClassUnloadEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ComponentEvent',
        ...listeners: ((event: classes.jaeComponentEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sql.ConnectionEvent',
        ...listeners: ((event: classes.jsConnectionEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ContainerEvent',
        ...listeners: ((event: classes.jaeContainerEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.DocumentEvent',
        ...listeners: ((event: classes.jseDocumentEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.DocumentEvent',
        ...listeners: ((event: classes.owdeDocumentEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragGestureEvent',
        ...listeners: ((event: classes.jadDragGestureEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDragEvent',
        ...listeners: ((event: classes.jadDragSourceDragEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDropEvent',
        ...listeners: ((event: classes.jadDragSourceDropEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceEvent',
        ...listeners: ((event: classes.jadDragSourceEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDragEvent',
        ...listeners: ((event: classes.jadDropTargetDragEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDropEvent',
        ...listeners: ((event: classes.jadDropTargetDropEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetEvent',
        ...listeners: ((event: classes.jadDropTargetEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.Event',
        ...listeners: ((event: classes.csjeEvent) => any)[]
    ): void;
    static event (
        name: 'jdk.jfr.Event',
        ...listeners: ((event: classes.jjEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.Event',
        ...listeners: ((event: classes.owdeEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ExceptionEvent',
        ...listeners: ((event: classes.csjeExceptionEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.FilesEvent',
        ...listeners: ((event: classes.jadFilesEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.datatransfer.FlavorEvent',
        ...listeners: ((event: classes.jadFlavorEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.FocusEvent',
        ...listeners: ((event: classes.jaeFocusEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.text.html.FormSubmitEvent',
        ...listeners: ((event: classes.jsthFormSubmitEvent) => any)[]
    ): void;
    static event (
        name: 'javax.net.ssl.HandshakeCompletedEvent',
        ...listeners: ((event: classes.jnsHandshakeCompletedEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.HierarchyEvent',
        ...listeners: ((event: classes.jaeHierarchyEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.text.html.HTMLFrameHyperlinkEvent',
        ...listeners: ((event: classes.jsthHTMLFrameHyperlinkEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.HyperlinkEvent',
        ...listeners: ((event: classes.jseHyperlinkEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.IndexedPropertyChangeEvent',
        ...listeners: ((event: classes.jbIndexedPropertyChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.InputEvent',
        ...listeners: ((event: classes.jaeInputEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.InputMethodEvent',
        ...listeners: ((event: classes.jaeInputMethodEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.InternalFrameEvent',
        ...listeners: ((event: classes.jseInternalFrameEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.InvocationEvent',
        ...listeners: ((event: classes.jaeInvocationEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.ItemEvent',
        ...listeners: ((event: classes.jaeItemEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.KeyEvent',
        ...listeners: ((event: classes.jaeKeyEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sound.sampled.LineEvent',
        ...listeners: ((event: classes.jssLineEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.ListDataEvent',
        ...listeners: ((event: classes.jseListDataEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.ListSelectionEvent',
        ...listeners: ((event: classes.jseListSelectionEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.LocatableEvent',
        ...listeners: ((event: classes.csjeLocatableEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSLoadEvent',
        ...listeners: ((event: classes.owdlLSLoadEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSProgressEvent',
        ...listeners: ((event: classes.owdlLSProgressEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuDragMouseEvent',
        ...listeners: ((event: classes.jseMenuDragMouseEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuEvent',
        ...listeners: ((event: classes.jseMenuEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuKeyEvent',
        ...listeners: ((event: classes.jseMenuKeyEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodEntryEvent',
        ...listeners: ((event: classes.csjeMethodEntryEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodExitEvent',
        ...listeners: ((event: classes.csjeMethodExitEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sound.midi.MidiEvent',
        ...listeners: ((event: classes.jsmMidiEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ModificationWatchpointEvent',
        ...listeners: ((event: classes.csjeModificationWatchpointEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnteredEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnteredEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnterEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnterEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitedEvent',
        ...listeners: ((event: classes.csjeMonitorWaitedEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitEvent',
        ...listeners: ((event: classes.csjeMonitorWaitEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.MouseEvent',
        ...listeners: ((event: classes.jaeMouseEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MouseEvent',
        ...listeners: ((event: classes.owdeMouseEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.MouseWheelEvent',
        ...listeners: ((event: classes.jaeMouseWheelEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MutationEvent',
        ...listeners: ((event: classes.owdeMutationEvent) => any)[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingEvent',
        ...listeners: ((event: classes.jneNamingEvent) => any)[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingExceptionEvent',
        ...listeners: ((event: classes.jneNamingExceptionEvent) => any)[]
    ): void;
    static event (
        name: 'java.util.prefs.NodeChangeEvent',
        ...listeners: ((event: classes.jupNodeChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenFilesEvent',
        ...listeners: ((event: classes.jadOpenFilesEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenURIEvent',
        ...listeners: ((event: classes.jadOpenURIEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.PaintEvent',
        ...listeners: ((event: classes.jaePaintEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.PeerAddressChangeNotification.AddressChangeEvent',
        ...listeners: ((event: classes.csnsPAddressChangeEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.PopupMenuEvent',
        ...listeners: ((event: classes.jsePopupMenuEvent) => any)[]
    ): void;
    static event (
        name: 'java.util.prefs.PreferenceChangeEvent',
        ...listeners: ((event: classes.jupPreferenceChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.PreferencesEvent',
        ...listeners: ((event: classes.jadPreferencesEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintEvent',
        ...listeners: ((event: classes.jpePrintEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.PrintFilesEvent',
        ...listeners: ((event: classes.jadPrintFilesEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobAttributeEvent',
        ...listeners: ((event: classes.jpePrintJobAttributeEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobEvent',
        ...listeners: ((event: classes.jpePrintJobEvent) => any)[]
    ): void;
    static event (
        name: 'javax.print.event.PrintServiceAttributeEvent',
        ...listeners: ((event: classes.jpePrintServiceAttributeEvent) => any)[]
    ): void;
    static event (
        name: 'java.beans.PropertyChangeEvent',
        ...listeners: ((event: classes.jbPropertyChangeEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.QuitEvent',
        ...listeners: ((event: classes.jadQuitEvent) => any)[]
    ): void;
    static event (
        name: 'jdk.jfr.consumer.RecordedEvent',
        ...listeners: ((event: classes.jjcRecordedEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sql.RowSetEvent',
        ...listeners: ((event: classes.jsRowSetEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.RowSorterEvent',
        ...listeners: ((event: classes.jseRowSorterEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.ScreenSleepEvent',
        ...listeners: ((event: classes.jadScreenSleepEvent) => any)[]
    ): void;
    static event (
        name: 'jdk.jshell.SnippetEvent',
        ...listeners: ((event: classes.jjSnippetEvent) => any)[]
    ): void;
    static event (
        name: 'javax.net.ssl.SSLSessionBindingEvent',
        ...listeners: ((event: classes.jnsSSLSessionBindingEvent) => any)[]
    ): void;
    static event (
        name: 'javax.sql.StatementEvent',
        ...listeners: ((event: classes.jsStatementEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.StepEvent',
        ...listeners: ((event: classes.csjeStepEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.SystemSleepEvent',
        ...listeners: ((event: classes.jadSystemSleepEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TableColumnModelEvent',
        ...listeners: ((event: classes.jseTableColumnModelEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TableModelEvent',
        ...listeners: ((event: classes.jseTableModelEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.source.util.TaskEvent',
        ...listeners: ((event: classes.cssuTaskEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.TextEvent',
        ...listeners: ((event: classes.jaeTextEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadDeathEvent',
        ...listeners: ((event: classes.csjeThreadDeathEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadStartEvent',
        ...listeners: ((event: classes.csjeThreadStartEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeExpansionEvent',
        ...listeners: ((event: classes.jseTreeExpansionEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeModelEvent',
        ...listeners: ((event: classes.jseTreeModelEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeSelectionEvent',
        ...listeners: ((event: classes.jseTreeSelectionEvent) => any)[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.UIEvent',
        ...listeners: ((event: classes.owdeUIEvent) => any)[]
    ): void;
    static event (
        name: 'javax.swing.event.UndoableEditEvent',
        ...listeners: ((event: classes.jseUndoableEditEvent) => any)[]
    ): void;
    static event (
        name: 'javax.naming.ldap.UnsolicitedNotificationEvent',
        ...listeners: ((event: classes.jnlUnsolicitedNotificationEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.desktop.UserSessionEvent',
        ...listeners: ((event: classes.jadUserSessionEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDeathEvent',
        ...listeners: ((event: classes.csjeVMDeathEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDisconnectEvent',
        ...listeners: ((event: classes.csjeVMDisconnectEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMStartEvent',
        ...listeners: ((event: classes.csjeVMStartEvent) => any)[]
    ): void;
    static event (
        name: 'java.nio.file.WatchEvent',
        ...listeners: ((event: classes.jnfWatchEvent) => any)[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.WatchpointEvent',
        ...listeners: ((event: classes.csjeWatchpointEvent) => any)[]
    ): void;
    static event (
        name: 'java.awt.event.WindowEvent',
        ...listeners: ((event: classes.jaeWindowEvent) => any)[]
    ): void;
    static event (
        name: 'javax.xml.stream.events.XMLEvent',
        ...listeners: ((event: classes.jxseXMLEvent) => any)[]
    ): void;

    static event (
        name: 'org.graalvm.polyglot.management.ExecutionEvent',
        ...listeners: ((event: classes.ogpmExecutionEvent) => any)[]
    ): void;
    static event (
        name: 'org.graalvm.polyglot.ResourceLimitEvent',
        ...listeners: ((event: classes.ogpResourceLimitEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.AnvilDamagedEvent',
        ...listeners: ((event: classes.cdpebAnvilDamagedEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.AreaEffectCloudApplyEvent',
        ...listeners: ((event: classes.obeeAreaEffectCloudApplyEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ArrowBodyCountChangeEvent',
        ...listeners: ((event: classes.obeeArrowBodyCountChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.AsyncPlayerChatEvent',
        ...listeners: ((event: classes.obepAsyncPlayerChatEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.AsyncPlayerPreLoginEvent',
        ...listeners: ((event: classes.obepAsyncPlayerPreLoginEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.AsyncTabCompleteEvent',
        ...listeners: ((event: classes.cdpesAsyncTabCompleteEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.BatToggleSleepEvent',
        ...listeners: ((event: classes.obeeBatToggleSleepEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.BeaconEffectEvent',
        ...listeners: ((event: classes.cdpebBeaconEffectEvent) => any)[]
    ): void;
    static event (
        name: 'io.papermc.paper.event.block.BellRingEvent',
        ...listeners: ((event: classes.ippebBellRingEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockBreakEvent',
        ...listeners: ((event: classes.obebBlockBreakEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockBurnEvent',
        ...listeners: ((event: classes.obebBlockBurnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockCanBuildEvent',
        ...listeners: ((event: classes.obebBlockCanBuildEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockCookEvent',
        ...listeners: ((event: classes.obebBlockCookEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDamageEvent',
        ...listeners: ((event: classes.obebBlockDamageEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.BlockDestroyEvent',
        ...listeners: ((event: classes.cdpebBlockDestroyEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDispenseArmorEvent',
        ...listeners: ((event: classes.obebBlockDispenseArmorEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDispenseEvent',
        ...listeners: ((event: classes.obebBlockDispenseEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDropItemEvent',
        ...listeners: ((event: classes.obebBlockDropItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockEvent',
        ...listeners: ((event: classes.obebBlockEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockExpEvent',
        ...listeners: ((event: classes.obebBlockExpEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockExplodeEvent',
        ...listeners: ((event: classes.obebBlockExplodeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFadeEvent',
        ...listeners: ((event: classes.obebBlockFadeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFertilizeEvent',
        ...listeners: ((event: classes.obebBlockFertilizeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFormEvent',
        ...listeners: ((event: classes.obebBlockFormEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFromToEvent',
        ...listeners: ((event: classes.obebBlockFromToEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockGrowEvent',
        ...listeners: ((event: classes.obebBlockGrowEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockIgniteEvent',
        ...listeners: ((event: classes.obebBlockIgniteEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockMultiPlaceEvent',
        ...listeners: ((event: classes.obebBlockMultiPlaceEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPhysicsEvent',
        ...listeners: ((event: classes.obebBlockPhysicsEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPistonEvent',
        ...listeners: ((event: classes.obebBlockPistonEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPistonExtendEvent',
        ...listeners: ((event: classes.obebBlockPistonExtendEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPistonRetractEvent',
        ...listeners: ((event: classes.obebBlockPistonRetractEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPlaceEvent',
        ...listeners: ((event: classes.obebBlockPlaceEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockRedstoneEvent',
        ...listeners: ((event: classes.obebBlockRedstoneEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockShearEntityEvent',
        ...listeners: ((event: classes.obebBlockShearEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockSpreadEvent',
        ...listeners: ((event: classes.obebBlockSpreadEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.BrewEvent',
        ...listeners: ((event: classes.obeiBrewEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.BrewingStandFuelEvent',
        ...listeners: ((event: classes.obeiBrewingStandFuelEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.BroadcastMessageEvent',
        ...listeners: ((event: classes.obesBroadcastMessageEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.CauldronLevelChangeEvent',
        ...listeners: ((event: classes.obebCauldronLevelChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkEvent',
        ...listeners: ((event: classes.obewChunkEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkLoadEvent',
        ...listeners: ((event: classes.obewChunkLoadEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkPopulateEvent',
        ...listeners: ((event: classes.obewChunkPopulateEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkUnloadEvent',
        ...listeners: ((event: classes.obewChunkUnloadEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.conversations.ConversationAbandonedEvent',
        ...listeners: ((event: classes.obcConversationAbandonedEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.CraftItemEvent',
        ...listeners: ((event: classes.obeiCraftItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.CreatureSpawnEvent',
        ...listeners: ((event: classes.obeeCreatureSpawnEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.CreeperIgniteEvent',
        ...listeners: ((event: classes.cdpeeCreeperIgniteEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.CreeperPowerEvent',
        ...listeners: ((event: classes.obeeCreeperPowerEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.enchantment.EnchantItemEvent',
        ...listeners: ((event: classes.obeeEnchantItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EnderDragonChangePhaseEvent',
        ...listeners: ((event: classes.obeeEnderDragonChangePhaseEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent',
        ...listeners: ((event: classes.cdpeeEnderDragonFireballHitEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EnderDragonFlameEvent',
        ...listeners: ((event: classes.cdpeeEnderDragonFlameEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent',
        ...listeners: ((event: classes.cdpeeEnderDragonShootFireballEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent',
        ...listeners: ((event: classes.cdpeeEndermanAttackPlayerEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent',
        ...listeners: ((event: classes.cdpeeEndermanEscapeEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityAddToWorldEvent',
        ...listeners: ((event: classes.cdpeeEntityAddToWorldEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityAirChangeEvent',
        ...listeners: ((event: classes.obeeEntityAirChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.EntityBlockFormEvent',
        ...listeners: ((event: classes.obebEntityBlockFormEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityBreakDoorEvent',
        ...listeners: ((event: classes.obeeEntityBreakDoorEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityBreedEvent',
        ...listeners: ((event: classes.obeeEntityBreedEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityChangeBlockEvent',
        ...listeners: ((event: classes.obeeEntityChangeBlockEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityCombustByBlockEvent',
        ...listeners: ((event: classes.obeeEntityCombustByBlockEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityCombustByEntityEvent',
        ...listeners: ((event: classes.obeeEntityCombustByEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityCombustEvent',
        ...listeners: ((event: classes.obeeEntityCombustEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDamageByBlockEvent',
        ...listeners: ((event: classes.obeeEntityDamageByBlockEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDamageByEntityEvent',
        ...listeners: ((event: classes.obeeEntityDamageByEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDamageEvent',
        ...listeners: ((event: classes.obeeEntityDamageEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDeathEvent',
        ...listeners: ((event: classes.obeeEntityDeathEvent) => any)[]
    ): void;
    static event (
        name: 'org.spigotmc.event.entity.EntityDismountEvent',
        ...listeners: ((event: classes.oseeEntityDismountEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDropItemEvent',
        ...listeners: ((event: classes.obeeEntityDropItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityEnterBlockEvent',
        ...listeners: ((event: classes.obeeEntityEnterBlockEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityEnterLoveModeEvent',
        ...listeners: ((event: classes.obeeEntityEnterLoveModeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityEvent',
        ...listeners: ((event: classes.obeeEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityExplodeEvent',
        ...listeners: ((event: classes.obeeEntityExplodeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityInteractEvent',
        ...listeners: ((event: classes.obeeEntityInteractEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityJumpEvent',
        ...listeners: ((event: classes.cdpeeEntityJumpEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent',
        ...listeners: ((event: classes.cdpeeEntityKnockbackByEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.spigotmc.event.entity.EntityMountEvent',
        ...listeners: ((event: classes.oseeEntityMountEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityPathfindEvent',
        ...listeners: ((event: classes.cdpeeEntityPathfindEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPickupItemEvent',
        ...listeners: ((event: classes.obeeEntityPickupItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPortalEnterEvent',
        ...listeners: ((event: classes.obeeEntityPortalEnterEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPortalEvent',
        ...listeners: ((event: classes.obeeEntityPortalEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPortalExitEvent',
        ...listeners: ((event: classes.obeeEntityPortalExitEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPoseChangeEvent',
        ...listeners: ((event: classes.obeeEntityPoseChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPotionEffectEvent',
        ...listeners: ((event: classes.obeeEntityPotionEffectEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityRegainHealthEvent',
        ...listeners: ((event: classes.obeeEntityRegainHealthEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent',
        ...listeners: ((event: classes.cdpeeEntityRemoveFromWorldEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityResurrectEvent',
        ...listeners: ((event: classes.obeeEntityResurrectEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityShootBowEvent',
        ...listeners: ((event: classes.obeeEntityShootBowEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntitySpawnEvent',
        ...listeners: ((event: classes.obeeEntitySpawnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntitySpellCastEvent',
        ...listeners: ((event: classes.obeeEntitySpellCastEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTameEvent',
        ...listeners: ((event: classes.obeeEntityTameEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTargetEvent',
        ...listeners: ((event: classes.obeeEntityTargetEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTargetLivingEntityEvent',
        ...listeners: ((event: classes.obeeEntityTargetLivingEntityEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent',
        ...listeners: ((event: classes.cdpeeEntityTeleportEndGatewayEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTeleportEvent',
        ...listeners: ((event: classes.obeeEntityTeleportEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityToggleGlideEvent',
        ...listeners: ((event: classes.obeeEntityToggleGlideEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityToggleSwimEvent',
        ...listeners: ((event: classes.obeeEntityToggleSwimEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTransformEvent',
        ...listeners: ((event: classes.obeeEntityTransformEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityUnleashEvent',
        ...listeners: ((event: classes.obeeEntityUnleashEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityZapEvent',
        ...listeners: ((event: classes.cdpeeEntityZapEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.Event',
        ...listeners: ((event: classes.obeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ExpBottleEvent',
        ...listeners: ((event: classes.obeeExpBottleEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent',
        ...listeners: ((event: classes.cdpeeExperienceOrbMergeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ExplosionPrimeEvent',
        ...listeners: ((event: classes.obeeExplosionPrimeEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.FillProfileEvent',
        ...listeners: ((event: classes.cdpepFillProfileEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.FireworkExplodeEvent',
        ...listeners: ((event: classes.obeeFireworkExplodeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.FluidLevelChangeEvent',
        ...listeners: ((event: classes.obebFluidLevelChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.FoodLevelChangeEvent',
        ...listeners: ((event: classes.obeeFoodLevelChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.FurnaceBurnEvent',
        ...listeners: ((event: classes.obeiFurnaceBurnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.FurnaceExtractEvent',
        ...listeners: ((event: classes.obeiFurnaceExtractEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.FurnaceSmeltEvent',
        ...listeners: ((event: classes.obeiFurnaceSmeltEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.GS4QueryEvent',
        ...listeners: ((event: classes.cdpesGS4QueryEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingBreakByEntityEvent',
        ...listeners: ((event: classes.obehHangingBreakByEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingBreakEvent',
        ...listeners: ((event: classes.obehHangingBreakEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingEvent',
        ...listeners: ((event: classes.obehHangingEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingPlaceEvent',
        ...listeners: ((event: classes.obehHangingPlaceEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.HorseJumpEvent',
        ...listeners: ((event: classes.obeeHorseJumpEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.IllegalPacketEvent',
        ...listeners: ((event: classes.cdpepIllegalPacketEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryClickEvent',
        ...listeners: ((event: classes.obeiInventoryClickEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryCloseEvent',
        ...listeners: ((event: classes.obeiInventoryCloseEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryCreativeEvent',
        ...listeners: ((event: classes.obeiInventoryCreativeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryDragEvent',
        ...listeners: ((event: classes.obeiInventoryDragEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryEvent',
        ...listeners: ((event: classes.obeiInventoryEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryInteractEvent',
        ...listeners: ((event: classes.obeiInventoryInteractEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryMoveItemEvent',
        ...listeners: ((event: classes.obeiInventoryMoveItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryOpenEvent',
        ...listeners: ((event: classes.obeiInventoryOpenEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryPickupItemEvent',
        ...listeners: ((event: classes.obeiInventoryPickupItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ItemDespawnEvent',
        ...listeners: ((event: classes.obeeItemDespawnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ItemMergeEvent',
        ...listeners: ((event: classes.obeeItemMergeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ItemSpawnEvent',
        ...listeners: ((event: classes.obeeItemSpawnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.LeavesDecayEvent',
        ...listeners: ((event: classes.obebLeavesDecayEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.LightningStrikeEvent',
        ...listeners: ((event: classes.obewLightningStrikeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.LingeringPotionSplashEvent',
        ...listeners: ((event: classes.obeeLingeringPotionSplashEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.LookupProfileEvent',
        ...listeners: ((event: classes.cdpepLookupProfileEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.loottable.LootableInventoryReplenishEvent',
        ...listeners: ((event: classes.cdplLootableInventoryReplenishEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.LootGenerateEvent',
        ...listeners: ((event: classes.obewLootGenerateEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.MapInitializeEvent',
        ...listeners: ((event: classes.obesMapInitializeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.MoistureChangeEvent',
        ...listeners: ((event: classes.obebMoistureChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.NotePlayEvent',
        ...listeners: ((event: classes.obebNotePlayEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.PaperServerListPingEvent',
        ...listeners: ((event: classes.cdpesPaperServerListPingEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent',
        ...listeners: ((event: classes.cdpeePhantomPreSpawnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PigZapEvent',
        ...listeners: ((event: classes.obeePigZapEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PigZombieAngerEvent',
        ...listeners: ((event: classes.obeePigZombieAngerEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent',
        ...listeners: ((event: classes.cdpepPlayerAdvancementCriterionGrantEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerAdvancementDoneEvent',
        ...listeners: ((event: classes.obepPlayerAdvancementDoneEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerAnimationEvent',
        ...listeners: ((event: classes.obepPlayerAnimationEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent',
        ...listeners: ((event: classes.cdpepPlayerArmorChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerArmorStandManipulateEvent',
        ...listeners: ((event: classes.obepPlayerArmorStandManipulateEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent',
        ...listeners: ((event: classes.cdpepPlayerAttackEntityCooldownResetEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerAttemptPickupItemEvent',
        ...listeners: ((event: classes.obepPlayerAttemptPickupItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBedEnterEvent',
        ...listeners: ((event: classes.obepPlayerBedEnterEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBedLeaveEvent',
        ...listeners: ((event: classes.obepPlayerBedLeaveEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBucketEmptyEvent',
        ...listeners: ((event: classes.obepPlayerBucketEmptyEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBucketEvent',
        ...listeners: ((event: classes.obepPlayerBucketEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBucketFillEvent',
        ...listeners: ((event: classes.obepPlayerBucketFillEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerChangedMainHandEvent',
        ...listeners: ((event: classes.obepPlayerChangedMainHandEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerChangedWorldEvent',
        ...listeners: ((event: classes.obepPlayerChangedWorldEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerChannelEvent',
        ...listeners: ((event: classes.obepPlayerChannelEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent',
        ...listeners: ((event: classes.cdpepPlayerClientOptionsChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerCommandPreprocessEvent',
        ...listeners: ((event: classes.obepPlayerCommandPreprocessEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerCommandSendEvent',
        ...listeners: ((event: classes.obepPlayerCommandSendEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent',
        ...listeners: ((event: classes.cdpepPlayerConnectionCloseEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PlayerDeathEvent',
        ...listeners: ((event: classes.obeePlayerDeathEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerDropItemEvent',
        ...listeners: ((event: classes.obepPlayerDropItemEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerEditBookEvent',
        ...listeners: ((event: classes.obepPlayerEditBookEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerEggThrowEvent',
        ...listeners: ((event: classes.obepPlayerEggThrowEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerElytraBoostEvent',
        ...listeners: ((event: classes.cdpepPlayerElytraBoostEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerEvent',
        ...listeners: ((event: classes.obepPlayerEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerExpChangeEvent',
        ...listeners: ((event: classes.obepPlayerExpChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerFishEvent',
        ...listeners: ((event: classes.obepPlayerFishEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerGameModeChangeEvent',
        ...listeners: ((event: classes.obepPlayerGameModeChangeEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerHandshakeEvent',
        ...listeners: ((event: classes.cdpepPlayerHandshakeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerHarvestBlockEvent',
        ...listeners: ((event: classes.obepPlayerHarvestBlockEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerInteractAtEntityEvent',
        ...listeners: ((event: classes.obepPlayerInteractAtEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerInteractEntityEvent',
        ...listeners: ((event: classes.obepPlayerInteractEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerInteractEvent',
        ...listeners: ((event: classes.obepPlayerInteractEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemBreakEvent',
        ...listeners: ((event: classes.obepPlayerItemBreakEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemConsumeEvent',
        ...listeners: ((event: classes.obepPlayerItemConsumeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemDamageEvent',
        ...listeners: ((event: classes.obepPlayerItemDamageEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemHeldEvent',
        ...listeners: ((event: classes.obepPlayerItemHeldEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemMendEvent',
        ...listeners: ((event: classes.obepPlayerItemMendEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerJoinEvent',
        ...listeners: ((event: classes.obepPlayerJoinEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerJumpEvent',
        ...listeners: ((event: classes.cdpepPlayerJumpEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerKickEvent',
        ...listeners: ((event: classes.obepPlayerKickEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent',
        ...listeners: ((event: classes.cdpepPlayerLaunchProjectileEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PlayerLeashEntityEvent',
        ...listeners: ((event: classes.obeePlayerLeashEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerLevelChangeEvent',
        ...listeners: ((event: classes.obepPlayerLevelChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerLocaleChangeEvent',
        ...listeners: ((event: classes.obepPlayerLocaleChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerLoginEvent',
        ...listeners: ((event: classes.obepPlayerLoginEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerMoveEvent',
        ...listeners: ((event: classes.obepPlayerMoveEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent',
        ...listeners: ((event: classes.cdpeePlayerNaturallySpawnCreaturesEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerPickupArrowEvent',
        ...listeners: ((event: classes.obepPlayerPickupArrowEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent',
        ...listeners: ((event: classes.cdpepPlayerPickupExperienceEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerPortalEvent',
        ...listeners: ((event: classes.obepPlayerPortalEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerPostRespawnEvent',
        ...listeners: ((event: classes.cdpepPlayerPostRespawnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerQuitEvent',
        ...listeners: ((event: classes.obepPlayerQuitEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerReadyArrowEvent',
        ...listeners: ((event: classes.cdpepPlayerReadyArrowEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent',
        ...listeners: ((event: classes.cdpepPlayerRecipeBookClickEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRecipeDiscoverEvent',
        ...listeners: ((event: classes.obepPlayerRecipeDiscoverEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRegisterChannelEvent',
        ...listeners: ((event: classes.obepPlayerRegisterChannelEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerResourcePackStatusEvent',
        ...listeners: ((event: classes.obepPlayerResourcePackStatusEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRespawnEvent',
        ...listeners: ((event: classes.obepPlayerRespawnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRiptideEvent',
        ...listeners: ((event: classes.obepPlayerRiptideEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerShearEntityEvent',
        ...listeners: ((event: classes.obepPlayerShearEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.spigotmc.event.player.PlayerSpawnLocationEvent',
        ...listeners: ((event: classes.osepPlayerSpawnLocationEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent',
        ...listeners: ((event: classes.cdpepPlayerStartSpectatingEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerStatisticIncrementEvent',
        ...listeners: ((event: classes.obepPlayerStatisticIncrementEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent',
        ...listeners: ((event: classes.cdpepPlayerStopSpectatingEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerSwapHandItemsEvent',
        ...listeners: ((event: classes.obepPlayerSwapHandItemsEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerTakeLecternBookEvent',
        ...listeners: ((event: classes.obepPlayerTakeLecternBookEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent',
        ...listeners: ((event: classes.cdpepPlayerTeleportEndGatewayEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerTeleportEvent',
        ...listeners: ((event: classes.obepPlayerTeleportEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerToggleFlightEvent',
        ...listeners: ((event: classes.obepPlayerToggleFlightEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerToggleSneakEvent',
        ...listeners: ((event: classes.obepPlayerToggleSneakEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerToggleSprintEvent',
        ...listeners: ((event: classes.obepPlayerToggleSprintEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerUnleashEntityEvent',
        ...listeners: ((event: classes.obepPlayerUnleashEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerUnregisterChannelEvent',
        ...listeners: ((event: classes.obepPlayerUnregisterChannelEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent',
        ...listeners: ((event: classes.cdpepPlayerUseUnknownEntityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerVelocityEvent',
        ...listeners: ((event: classes.obepPlayerVelocityEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.PluginDisableEvent',
        ...listeners: ((event: classes.obesPluginDisableEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.PluginEnableEvent',
        ...listeners: ((event: classes.obesPluginEnableEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.PluginEvent',
        ...listeners: ((event: classes.obesPluginEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.PortalCreateEvent',
        ...listeners: ((event: classes.obewPortalCreateEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PotionSplashEvent',
        ...listeners: ((event: classes.obeePotionSplashEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent',
        ...listeners: ((event: classes.cdpeePreCreatureSpawnEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.PreFillProfileEvent',
        ...listeners: ((event: classes.cdpepPreFillProfileEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.PreLookupProfileEvent',
        ...listeners: ((event: classes.cdpepPreLookupProfileEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.PrepareAnvilEvent',
        ...listeners: ((event: classes.obeiPrepareAnvilEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.PrepareItemCraftEvent',
        ...listeners: ((event: classes.obeiPrepareItemCraftEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.enchantment.PrepareItemEnchantEvent',
        ...listeners: ((event: classes.obeePrepareItemEnchantEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.inventory.PrepareResultEvent',
        ...listeners: ((event: classes.cdpeiPrepareResultEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.PrepareSmithingEvent',
        ...listeners: ((event: classes.obeiPrepareSmithingEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent',
        ...listeners: ((event: classes.cdpeePreSpawnerSpawnEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.ProfileWhitelistVerifyEvent',
        ...listeners: ((event: classes.cdpepProfileWhitelistVerifyEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.ProjectileCollideEvent',
        ...listeners: ((event: classes.cdpeeProjectileCollideEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ProjectileHitEvent',
        ...listeners: ((event: classes.obeeProjectileHitEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ProjectileLaunchEvent',
        ...listeners: ((event: classes.obeeProjectileLaunchEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidEvent',
        ...listeners: ((event: classes.oberRaidEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidFinishEvent',
        ...listeners: ((event: classes.oberRaidFinishEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidSpawnWaveEvent',
        ...listeners: ((event: classes.oberRaidSpawnWaveEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidStopEvent',
        ...listeners: ((event: classes.oberRaidStopEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidTriggerEvent',
        ...listeners: ((event: classes.oberRaidTriggerEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.RemoteServerCommandEvent',
        ...listeners: ((event: classes.obesRemoteServerCommandEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerCommandEvent',
        ...listeners: ((event: classes.obesServerCommandEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerEvent',
        ...listeners: ((event: classes.obesServerEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.ServerExceptionEvent',
        ...listeners: ((event: classes.cdpesServerExceptionEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerListPingEvent',
        ...listeners: ((event: classes.obesServerListPingEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerLoadEvent',
        ...listeners: ((event: classes.obesServerLoadEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.ServerTickEndEvent',
        ...listeners: ((event: classes.cdpesServerTickEndEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.ServerTickStartEvent',
        ...listeners: ((event: classes.cdpesServerTickStartEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServiceEvent',
        ...listeners: ((event: classes.obesServiceEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServiceRegisterEvent',
        ...listeners: ((event: classes.obesServiceRegisterEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServiceUnregisterEvent',
        ...listeners: ((event: classes.obesServiceUnregisterEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SheepDyeWoolEvent',
        ...listeners: ((event: classes.obeeSheepDyeWoolEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SheepRegrowWoolEvent',
        ...listeners: ((event: classes.obeeSheepRegrowWoolEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.SignChangeEvent',
        ...listeners: ((event: classes.obebSignChangeEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent',
        ...listeners: ((event: classes.cdpeeSkeletonHorseTrapEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent',
        ...listeners: ((event: classes.cdpeeSlimeChangeDirectionEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimePathfindEvent',
        ...listeners: ((event: classes.cdpeeSlimePathfindEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SlimeSplitEvent',
        ...listeners: ((event: classes.obeeSlimeSplitEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeSwimEvent',
        ...listeners: ((event: classes.cdpeeSlimeSwimEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent',
        ...listeners: ((event: classes.cdpeeSlimeTargetLivingEntityEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeWanderEvent',
        ...listeners: ((event: classes.cdpeeSlimeWanderEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.SpawnChangeEvent',
        ...listeners: ((event: classes.obewSpawnChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SpawnerSpawnEvent',
        ...listeners: ((event: classes.obeeSpawnerSpawnEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.SpongeAbsorbEvent',
        ...listeners: ((event: classes.obebSpongeAbsorbEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.StriderTemperatureChangeEvent',
        ...listeners: ((event: classes.obeeStriderTemperatureChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.StructureGrowEvent',
        ...listeners: ((event: classes.obewStructureGrowEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.TabCompleteEvent',
        ...listeners: ((event: classes.obesTabCompleteEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.ThrownEggHatchEvent',
        ...listeners: ((event: classes.cdpeeThrownEggHatchEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.ThunderChangeEvent',
        ...listeners: ((event: classes.obewThunderChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.TimeSkipEvent',
        ...listeners: ((event: classes.obewTimeSkipEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.TNTPrimeEvent',
        ...listeners: ((event: classes.cdpebTNTPrimeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.TradeSelectEvent',
        ...listeners: ((event: classes.obeiTradeSelectEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.TurtleGoHomeEvent',
        ...listeners: ((event: classes.cdpeeTurtleGoHomeEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.TurtleLayEggEvent',
        ...listeners: ((event: classes.cdpeeTurtleLayEggEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent',
        ...listeners: ((event: classes.cdpeeTurtleStartDiggingEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.command.UnknownCommandEvent',
        ...listeners: ((event: classes.obecUnknownCommandEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleBlockCollisionEvent',
        ...listeners: ((event: classes.obevVehicleBlockCollisionEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleCollisionEvent',
        ...listeners: ((event: classes.obevVehicleCollisionEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleCreateEvent',
        ...listeners: ((event: classes.obevVehicleCreateEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleDamageEvent',
        ...listeners: ((event: classes.obevVehicleDamageEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleDestroyEvent',
        ...listeners: ((event: classes.obevVehicleDestroyEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleEnterEvent',
        ...listeners: ((event: classes.obevVehicleEnterEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleEntityCollisionEvent',
        ...listeners: ((event: classes.obevVehicleEntityCollisionEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleEvent',
        ...listeners: ((event: classes.obevVehicleEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleExitEvent',
        ...listeners: ((event: classes.obevVehicleExitEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleMoveEvent',
        ...listeners: ((event: classes.obevVehicleMoveEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleUpdateEvent',
        ...listeners: ((event: classes.obevVehicleUpdateEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.VillagerAcquireTradeEvent',
        ...listeners: ((event: classes.obeeVillagerAcquireTradeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.VillagerCareerChangeEvent',
        ...listeners: ((event: classes.obeeVillagerCareerChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.VillagerReplenishTradeEvent',
        ...listeners: ((event: classes.obeeVillagerReplenishTradeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.WeatherChangeEvent',
        ...listeners: ((event: classes.obewWeatherChangeEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.WeatherEvent',
        ...listeners: ((event: classes.obewWeatherEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.WhitelistToggleEvent',
        ...listeners: ((event: classes.cdpesWhitelistToggleEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.WitchConsumePotionEvent',
        ...listeners: ((event: classes.cdpeeWitchConsumePotionEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.WitchReadyPotionEvent',
        ...listeners: ((event: classes.cdpeeWitchReadyPotionEvent) => any)[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.WitchThrowPotionEvent',
        ...listeners: ((event: classes.cdpeeWitchThrowPotionEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldEvent',
        ...listeners: ((event: classes.obewWorldEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldInitEvent',
        ...listeners: ((event: classes.obewWorldInitEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldLoadEvent',
        ...listeners: ((event: classes.obewWorldLoadEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldSaveEvent',
        ...listeners: ((event: classes.obewWorldSaveEvent) => any)[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldUnloadEvent',
        ...listeners: ((event: classes.obewWorldUnloadEvent) => any)[]
    ): void;
    static event (
        name: 'net.md_5.bungee.api.chat.ClickEvent',
        ...listeners: ((event: classes.nmbacClickEvent) => any)[]
    ): void;
    static event (
        name: 'net.md_5.bungee.api.chat.HoverEvent',
        ...listeners: ((event: classes.nmbacHoverEvent) => any)[]
    ): void;
}
