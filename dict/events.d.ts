import * as classes from './classes'
export class events {
    static event (
        name: 'java.awt.desktop.AboutEvent',
        ...listeners: ((event: classes.jadAboutEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.AccessWatchpointEvent',
        ...listeners: ((event: classes.csjeAccessWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ActionEvent',
        ...listeners: ((event: classes.jaeActionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.ActiveEvent',
        ...listeners: ((event: classes.jaActiveEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.AdjustmentEvent',
        ...listeners: ((event: classes.jaeAdjustmentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.AncestorEvent',
        ...listeners: ((event: classes.jseAncestorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppEvent',
        ...listeners: ((event: classes.jadAppEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppForegroundEvent',
        ...listeners: ((event: classes.jadAppForegroundEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppHiddenEvent',
        ...listeners: ((event: classes.jadAppHiddenEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.AppReopenedEvent',
        ...listeners: ((event: classes.jadAppReopenedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.AssociationChangeNotification.AssocChangeEvent',
        ...listeners: ((event: classes.csnsAAssocChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.AWTEvent',
        ...listeners: ((event: classes.jaAWTEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextEvent',
        ...listeners: ((event: classes.jbbBeanContextEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextMembershipEvent',
        ...listeners: ((event: classes.jbbBeanContextMembershipEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceAvailableEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceAvailableEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.beancontext.BeanContextServiceRevokedEvent',
        ...listeners: ((event: classes.jbbBeanContextServiceRevokedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.BreakpointEvent',
        ...listeners: ((event: classes.csjeBreakpointEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.CaretEvent',
        ...listeners: ((event: classes.jseCaretEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ChangeEvent',
        ...listeners: ((event: classes.jseChangeEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassPrepareEvent',
        ...listeners: ((event: classes.csjeClassPrepareEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ClassUnloadEvent',
        ...listeners: ((event: classes.csjeClassUnloadEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ComponentEvent',
        ...listeners: ((event: classes.jaeComponentEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.ConnectionEvent',
        ...listeners: ((event: classes.jsConnectionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ContainerEvent',
        ...listeners: ((event: classes.jaeContainerEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.DocumentEvent',
        ...listeners: ((event: classes.jseDocumentEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.DocumentEvent',
        ...listeners: ((event: classes.owdeDocumentEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragGestureEvent',
        ...listeners: ((event: classes.jadDragGestureEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDragEvent',
        ...listeners: ((event: classes.jadDragSourceDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceDropEvent',
        ...listeners: ((event: classes.jadDragSourceDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DragSourceEvent',
        ...listeners: ((event: classes.jadDragSourceEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDragEvent',
        ...listeners: ((event: classes.jadDropTargetDragEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetDropEvent',
        ...listeners: ((event: classes.jadDropTargetDropEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.dnd.DropTargetEvent',
        ...listeners: ((event: classes.jadDropTargetEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.Event',
        ...listeners: ((event: classes.csjeEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.Event',
        ...listeners: ((event: classes.jjEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.Event',
        ...listeners: ((event: classes.owdeEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ExceptionEvent',
        ...listeners: ((event: classes.csjeExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.FilesEvent',
        ...listeners: ((event: classes.jadFilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.datatransfer.FlavorEvent',
        ...listeners: ((event: classes.jadFlavorEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.FocusEvent',
        ...listeners: ((event: classes.jaeFocusEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.FormSubmitEvent',
        ...listeners: ((event: classes.jsthFormSubmitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.HandshakeCompletedEvent',
        ...listeners: ((event: classes.jnsHandshakeCompletedEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.HierarchyEvent',
        ...listeners: ((event: classes.jaeHierarchyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.text.html.HTMLFrameHyperlinkEvent',
        ...listeners: ((event: classes.jsthHTMLFrameHyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.HyperlinkEvent',
        ...listeners: ((event: classes.jseHyperlinkEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.IndexedPropertyChangeEvent',
        ...listeners: ((event: classes.jbIndexedPropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputEvent',
        ...listeners: ((event: classes.jaeInputEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InputMethodEvent',
        ...listeners: ((event: classes.jaeInputMethodEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.InternalFrameEvent',
        ...listeners: ((event: classes.jseInternalFrameEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.InvocationEvent',
        ...listeners: ((event: classes.jaeInvocationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.ItemEvent',
        ...listeners: ((event: classes.jaeItemEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.KeyEvent',
        ...listeners: ((event: classes.jaeKeyEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.sampled.LineEvent',
        ...listeners: ((event: classes.jssLineEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListDataEvent',
        ...listeners: ((event: classes.jseListDataEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.ListSelectionEvent',
        ...listeners: ((event: classes.jseListSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.LocatableEvent',
        ...listeners: ((event: classes.csjeLocatableEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSLoadEvent',
        ...listeners: ((event: classes.owdlLSLoadEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.ls.LSProgressEvent',
        ...listeners: ((event: classes.owdlLSProgressEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuDragMouseEvent',
        ...listeners: ((event: classes.jseMenuDragMouseEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuEvent',
        ...listeners: ((event: classes.jseMenuEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.MenuKeyEvent',
        ...listeners: ((event: classes.jseMenuKeyEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodEntryEvent',
        ...listeners: ((event: classes.csjeMethodEntryEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MethodExitEvent',
        ...listeners: ((event: classes.csjeMethodExitEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sound.midi.MidiEvent',
        ...listeners: ((event: classes.jsmMidiEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ModificationWatchpointEvent',
        ...listeners: ((event: classes.csjeModificationWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnteredEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnteredEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorContendedEnterEvent',
        ...listeners: ((event: classes.csjeMonitorContendedEnterEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitedEvent',
        ...listeners: ((event: classes.csjeMonitorWaitedEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.MonitorWaitEvent',
        ...listeners: ((event: classes.csjeMonitorWaitEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseEvent',
        ...listeners: ((event: classes.jaeMouseEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MouseEvent',
        ...listeners: ((event: classes.owdeMouseEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.MouseWheelEvent',
        ...listeners: ((event: classes.jaeMouseWheelEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.MutationEvent',
        ...listeners: ((event: classes.owdeMutationEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingEvent',
        ...listeners: ((event: classes.jneNamingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.event.NamingExceptionEvent',
        ...listeners: ((event: classes.jneNamingExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.NodeChangeEvent',
        ...listeners: ((event: classes.jupNodeChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenFilesEvent',
        ...listeners: ((event: classes.jadOpenFilesEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.OpenURIEvent',
        ...listeners: ((event: classes.jadOpenURIEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.PaintEvent',
        ...listeners: ((event: classes.jaePaintEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.nio.sctp.PeerAddressChangeNotification.AddressChangeEvent',
        ...listeners: ((event: classes.csnsPAddressChangeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.PopupMenuEvent',
        ...listeners: ((event: classes.jsePopupMenuEvent) => {})[]
    ): void;
    static event (
        name: 'java.util.prefs.PreferenceChangeEvent',
        ...listeners: ((event: classes.jupPreferenceChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PreferencesEvent',
        ...listeners: ((event: classes.jadPreferencesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintEvent',
        ...listeners: ((event: classes.jpePrintEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.PrintFilesEvent',
        ...listeners: ((event: classes.jadPrintFilesEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobAttributeEvent',
        ...listeners: ((event: classes.jpePrintJobAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintJobEvent',
        ...listeners: ((event: classes.jpePrintJobEvent) => {})[]
    ): void;
    static event (
        name: 'javax.print.event.PrintServiceAttributeEvent',
        ...listeners: ((event: classes.jpePrintServiceAttributeEvent) => {})[]
    ): void;
    static event (
        name: 'java.beans.PropertyChangeEvent',
        ...listeners: ((event: classes.jbPropertyChangeEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.QuitEvent',
        ...listeners: ((event: classes.jadQuitEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jfr.consumer.RecordedEvent',
        ...listeners: ((event: classes.jjcRecordedEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.RowSetEvent',
        ...listeners: ((event: classes.jsRowSetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.RowSorterEvent',
        ...listeners: ((event: classes.jseRowSorterEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.ScreenSleepEvent',
        ...listeners: ((event: classes.jadScreenSleepEvent) => {})[]
    ): void;
    static event (
        name: 'jdk.jshell.SnippetEvent',
        ...listeners: ((event: classes.jjSnippetEvent) => {})[]
    ): void;
    static event (
        name: 'javax.net.ssl.SSLSessionBindingEvent',
        ...listeners: ((event: classes.jnsSSLSessionBindingEvent) => {})[]
    ): void;
    static event (
        name: 'javax.sql.StatementEvent',
        ...listeners: ((event: classes.jsStatementEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.StepEvent',
        ...listeners: ((event: classes.csjeStepEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.SystemSleepEvent',
        ...listeners: ((event: classes.jadSystemSleepEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableColumnModelEvent',
        ...listeners: ((event: classes.jseTableColumnModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TableModelEvent',
        ...listeners: ((event: classes.jseTableModelEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.source.util.TaskEvent',
        ...listeners: ((event: classes.cssuTaskEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.TextEvent',
        ...listeners: ((event: classes.jaeTextEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadDeathEvent',
        ...listeners: ((event: classes.csjeThreadDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.ThreadStartEvent',
        ...listeners: ((event: classes.csjeThreadStartEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeExpansionEvent',
        ...listeners: ((event: classes.jseTreeExpansionEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeModelEvent',
        ...listeners: ((event: classes.jseTreeModelEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.TreeSelectionEvent',
        ...listeners: ((event: classes.jseTreeSelectionEvent) => {})[]
    ): void;
    static event (
        name: 'org.w3c.dom.events.UIEvent',
        ...listeners: ((event: classes.owdeUIEvent) => {})[]
    ): void;
    static event (
        name: 'javax.swing.event.UndoableEditEvent',
        ...listeners: ((event: classes.jseUndoableEditEvent) => {})[]
    ): void;
    static event (
        name: 'javax.naming.ldap.UnsolicitedNotificationEvent',
        ...listeners: ((event: classes.jnlUnsolicitedNotificationEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.desktop.UserSessionEvent',
        ...listeners: ((event: classes.jadUserSessionEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDeathEvent',
        ...listeners: ((event: classes.csjeVMDeathEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMDisconnectEvent',
        ...listeners: ((event: classes.csjeVMDisconnectEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.VMStartEvent',
        ...listeners: ((event: classes.csjeVMStartEvent) => {})[]
    ): void;
    static event (
        name: 'java.nio.file.WatchEvent',
        ...listeners: ((event: classes.jnfWatchEvent) => {})[]
    ): void;
    static event (
        name: 'com.sun.jdi.event.WatchpointEvent',
        ...listeners: ((event: classes.csjeWatchpointEvent) => {})[]
    ): void;
    static event (
        name: 'java.awt.event.WindowEvent',
        ...listeners: ((event: classes.jaeWindowEvent) => {})[]
    ): void;
    static event (
        name: 'javax.xml.stream.events.XMLEvent',
        ...listeners: ((event: classes.jxseXMLEvent) => {})[]
    ): void;

    static event (
        name: 'org.graalvm.polyglot.management.ExecutionEvent',
        ...listeners: ((event: classes.ogpmExecutionEvent) => {})[]
    ): void;
    static event (
        name: 'org.graalvm.polyglot.ResourceLimitEvent',
        ...listeners: ((event: classes.ogpResourceLimitEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.AnvilDamagedEvent',
        ...listeners: ((event: classes.cdpebAnvilDamagedEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.AreaEffectCloudApplyEvent',
        ...listeners: ((event: classes.obeeAreaEffectCloudApplyEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ArrowBodyCountChangeEvent',
        ...listeners: ((event: classes.obeeArrowBodyCountChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.AsyncPlayerChatEvent',
        ...listeners: ((event: classes.obepAsyncPlayerChatEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.AsyncPlayerPreLoginEvent',
        ...listeners: ((event: classes.obepAsyncPlayerPreLoginEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.AsyncTabCompleteEvent',
        ...listeners: ((event: classes.cdpesAsyncTabCompleteEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.BatToggleSleepEvent',
        ...listeners: ((event: classes.obeeBatToggleSleepEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.BeaconEffectEvent',
        ...listeners: ((event: classes.cdpebBeaconEffectEvent) => {})[]
    ): void;
    static event (
        name: 'io.papermc.paper.event.block.BellRingEvent',
        ...listeners: ((event: classes.ippebBellRingEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockBreakEvent',
        ...listeners: ((event: classes.obebBlockBreakEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockBurnEvent',
        ...listeners: ((event: classes.obebBlockBurnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockCanBuildEvent',
        ...listeners: ((event: classes.obebBlockCanBuildEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockCookEvent',
        ...listeners: ((event: classes.obebBlockCookEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDamageEvent',
        ...listeners: ((event: classes.obebBlockDamageEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.BlockDestroyEvent',
        ...listeners: ((event: classes.cdpebBlockDestroyEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDispenseArmorEvent',
        ...listeners: ((event: classes.obebBlockDispenseArmorEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDispenseEvent',
        ...listeners: ((event: classes.obebBlockDispenseEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockDropItemEvent',
        ...listeners: ((event: classes.obebBlockDropItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockEvent',
        ...listeners: ((event: classes.obebBlockEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockExpEvent',
        ...listeners: ((event: classes.obebBlockExpEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockExplodeEvent',
        ...listeners: ((event: classes.obebBlockExplodeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFadeEvent',
        ...listeners: ((event: classes.obebBlockFadeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFertilizeEvent',
        ...listeners: ((event: classes.obebBlockFertilizeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFormEvent',
        ...listeners: ((event: classes.obebBlockFormEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockFromToEvent',
        ...listeners: ((event: classes.obebBlockFromToEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockGrowEvent',
        ...listeners: ((event: classes.obebBlockGrowEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockIgniteEvent',
        ...listeners: ((event: classes.obebBlockIgniteEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockMultiPlaceEvent',
        ...listeners: ((event: classes.obebBlockMultiPlaceEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPhysicsEvent',
        ...listeners: ((event: classes.obebBlockPhysicsEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPistonEvent',
        ...listeners: ((event: classes.obebBlockPistonEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPistonExtendEvent',
        ...listeners: ((event: classes.obebBlockPistonExtendEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPistonRetractEvent',
        ...listeners: ((event: classes.obebBlockPistonRetractEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockPlaceEvent',
        ...listeners: ((event: classes.obebBlockPlaceEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockRedstoneEvent',
        ...listeners: ((event: classes.obebBlockRedstoneEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockShearEntityEvent',
        ...listeners: ((event: classes.obebBlockShearEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.BlockSpreadEvent',
        ...listeners: ((event: classes.obebBlockSpreadEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.BrewEvent',
        ...listeners: ((event: classes.obeiBrewEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.BrewingStandFuelEvent',
        ...listeners: ((event: classes.obeiBrewingStandFuelEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.BroadcastMessageEvent',
        ...listeners: ((event: classes.obesBroadcastMessageEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.CauldronLevelChangeEvent',
        ...listeners: ((event: classes.obebCauldronLevelChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkEvent',
        ...listeners: ((event: classes.obewChunkEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkLoadEvent',
        ...listeners: ((event: classes.obewChunkLoadEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkPopulateEvent',
        ...listeners: ((event: classes.obewChunkPopulateEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.ChunkUnloadEvent',
        ...listeners: ((event: classes.obewChunkUnloadEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.conversations.ConversationAbandonedEvent',
        ...listeners: ((event: classes.obcConversationAbandonedEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.CraftItemEvent',
        ...listeners: ((event: classes.obeiCraftItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.CreatureSpawnEvent',
        ...listeners: ((event: classes.obeeCreatureSpawnEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.CreeperIgniteEvent',
        ...listeners: ((event: classes.cdpeeCreeperIgniteEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.CreeperPowerEvent',
        ...listeners: ((event: classes.obeeCreeperPowerEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.enchantment.EnchantItemEvent',
        ...listeners: ((event: classes.obeeEnchantItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EnderDragonChangePhaseEvent',
        ...listeners: ((event: classes.obeeEnderDragonChangePhaseEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent',
        ...listeners: ((event: classes.cdpeeEnderDragonFireballHitEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EnderDragonFlameEvent',
        ...listeners: ((event: classes.cdpeeEnderDragonFlameEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent',
        ...listeners: ((event: classes.cdpeeEnderDragonShootFireballEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent',
        ...listeners: ((event: classes.cdpeeEndermanAttackPlayerEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EndermanEscapeEvent',
        ...listeners: ((event: classes.cdpeeEndermanEscapeEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityAddToWorldEvent',
        ...listeners: ((event: classes.cdpeeEntityAddToWorldEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityAirChangeEvent',
        ...listeners: ((event: classes.obeeEntityAirChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.EntityBlockFormEvent',
        ...listeners: ((event: classes.obebEntityBlockFormEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityBreakDoorEvent',
        ...listeners: ((event: classes.obeeEntityBreakDoorEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityBreedEvent',
        ...listeners: ((event: classes.obeeEntityBreedEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityChangeBlockEvent',
        ...listeners: ((event: classes.obeeEntityChangeBlockEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityCombustByBlockEvent',
        ...listeners: ((event: classes.obeeEntityCombustByBlockEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityCombustByEntityEvent',
        ...listeners: ((event: classes.obeeEntityCombustByEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityCombustEvent',
        ...listeners: ((event: classes.obeeEntityCombustEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDamageByBlockEvent',
        ...listeners: ((event: classes.obeeEntityDamageByBlockEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDamageByEntityEvent',
        ...listeners: ((event: classes.obeeEntityDamageByEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDamageEvent',
        ...listeners: ((event: classes.obeeEntityDamageEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDeathEvent',
        ...listeners: ((event: classes.obeeEntityDeathEvent) => {})[]
    ): void;
    static event (
        name: 'org.spigotmc.event.entity.EntityDismountEvent',
        ...listeners: ((event: classes.oseeEntityDismountEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityDropItemEvent',
        ...listeners: ((event: classes.obeeEntityDropItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityEnterBlockEvent',
        ...listeners: ((event: classes.obeeEntityEnterBlockEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityEnterLoveModeEvent',
        ...listeners: ((event: classes.obeeEntityEnterLoveModeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityEvent',
        ...listeners: ((event: classes.obeeEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityExplodeEvent',
        ...listeners: ((event: classes.obeeEntityExplodeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityInteractEvent',
        ...listeners: ((event: classes.obeeEntityInteractEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityJumpEvent',
        ...listeners: ((event: classes.cdpeeEntityJumpEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent',
        ...listeners: ((event: classes.cdpeeEntityKnockbackByEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.spigotmc.event.entity.EntityMountEvent',
        ...listeners: ((event: classes.oseeEntityMountEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityPathfindEvent',
        ...listeners: ((event: classes.cdpeeEntityPathfindEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPickupItemEvent',
        ...listeners: ((event: classes.obeeEntityPickupItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPortalEnterEvent',
        ...listeners: ((event: classes.obeeEntityPortalEnterEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPortalEvent',
        ...listeners: ((event: classes.obeeEntityPortalEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPortalExitEvent',
        ...listeners: ((event: classes.obeeEntityPortalExitEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPoseChangeEvent',
        ...listeners: ((event: classes.obeeEntityPoseChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityPotionEffectEvent',
        ...listeners: ((event: classes.obeeEntityPotionEffectEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityRegainHealthEvent',
        ...listeners: ((event: classes.obeeEntityRegainHealthEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent',
        ...listeners: ((event: classes.cdpeeEntityRemoveFromWorldEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityResurrectEvent',
        ...listeners: ((event: classes.obeeEntityResurrectEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityShootBowEvent',
        ...listeners: ((event: classes.obeeEntityShootBowEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntitySpawnEvent',
        ...listeners: ((event: classes.obeeEntitySpawnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntitySpellCastEvent',
        ...listeners: ((event: classes.obeeEntitySpellCastEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTameEvent',
        ...listeners: ((event: classes.obeeEntityTameEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTargetEvent',
        ...listeners: ((event: classes.obeeEntityTargetEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTargetLivingEntityEvent',
        ...listeners: ((event: classes.obeeEntityTargetLivingEntityEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent',
        ...listeners: ((event: classes.cdpeeEntityTeleportEndGatewayEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTeleportEvent',
        ...listeners: ((event: classes.obeeEntityTeleportEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityToggleGlideEvent',
        ...listeners: ((event: classes.obeeEntityToggleGlideEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityToggleSwimEvent',
        ...listeners: ((event: classes.obeeEntityToggleSwimEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityTransformEvent',
        ...listeners: ((event: classes.obeeEntityTransformEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.EntityUnleashEvent',
        ...listeners: ((event: classes.obeeEntityUnleashEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.EntityZapEvent',
        ...listeners: ((event: classes.cdpeeEntityZapEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.Event',
        ...listeners: ((event: classes.obeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ExpBottleEvent',
        ...listeners: ((event: classes.obeeExpBottleEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent',
        ...listeners: ((event: classes.cdpeeExperienceOrbMergeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ExplosionPrimeEvent',
        ...listeners: ((event: classes.obeeExplosionPrimeEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.FillProfileEvent',
        ...listeners: ((event: classes.cdpepFillProfileEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.FireworkExplodeEvent',
        ...listeners: ((event: classes.obeeFireworkExplodeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.FluidLevelChangeEvent',
        ...listeners: ((event: classes.obebFluidLevelChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.FoodLevelChangeEvent',
        ...listeners: ((event: classes.obeeFoodLevelChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.FurnaceBurnEvent',
        ...listeners: ((event: classes.obeiFurnaceBurnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.FurnaceExtractEvent',
        ...listeners: ((event: classes.obeiFurnaceExtractEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.FurnaceSmeltEvent',
        ...listeners: ((event: classes.obeiFurnaceSmeltEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.GS4QueryEvent',
        ...listeners: ((event: classes.cdpesGS4QueryEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingBreakByEntityEvent',
        ...listeners: ((event: classes.obehHangingBreakByEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingBreakEvent',
        ...listeners: ((event: classes.obehHangingBreakEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingEvent',
        ...listeners: ((event: classes.obehHangingEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.hanging.HangingPlaceEvent',
        ...listeners: ((event: classes.obehHangingPlaceEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.HorseJumpEvent',
        ...listeners: ((event: classes.obeeHorseJumpEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.IllegalPacketEvent',
        ...listeners: ((event: classes.cdpepIllegalPacketEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryClickEvent',
        ...listeners: ((event: classes.obeiInventoryClickEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryCloseEvent',
        ...listeners: ((event: classes.obeiInventoryCloseEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryCreativeEvent',
        ...listeners: ((event: classes.obeiInventoryCreativeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryDragEvent',
        ...listeners: ((event: classes.obeiInventoryDragEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryEvent',
        ...listeners: ((event: classes.obeiInventoryEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryInteractEvent',
        ...listeners: ((event: classes.obeiInventoryInteractEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryMoveItemEvent',
        ...listeners: ((event: classes.obeiInventoryMoveItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryOpenEvent',
        ...listeners: ((event: classes.obeiInventoryOpenEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.InventoryPickupItemEvent',
        ...listeners: ((event: classes.obeiInventoryPickupItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ItemDespawnEvent',
        ...listeners: ((event: classes.obeeItemDespawnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ItemMergeEvent',
        ...listeners: ((event: classes.obeeItemMergeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ItemSpawnEvent',
        ...listeners: ((event: classes.obeeItemSpawnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.LeavesDecayEvent',
        ...listeners: ((event: classes.obebLeavesDecayEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.LightningStrikeEvent',
        ...listeners: ((event: classes.obewLightningStrikeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.LingeringPotionSplashEvent',
        ...listeners: ((event: classes.obeeLingeringPotionSplashEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.LookupProfileEvent',
        ...listeners: ((event: classes.cdpepLookupProfileEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.loottable.LootableInventoryReplenishEvent',
        ...listeners: ((event: classes.cdplLootableInventoryReplenishEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.LootGenerateEvent',
        ...listeners: ((event: classes.obewLootGenerateEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.MapInitializeEvent',
        ...listeners: ((event: classes.obesMapInitializeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.MoistureChangeEvent',
        ...listeners: ((event: classes.obebMoistureChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.NotePlayEvent',
        ...listeners: ((event: classes.obebNotePlayEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.PaperServerListPingEvent',
        ...listeners: ((event: classes.cdpesPaperServerListPingEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent',
        ...listeners: ((event: classes.cdpeePhantomPreSpawnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PigZapEvent',
        ...listeners: ((event: classes.obeePigZapEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PigZombieAngerEvent',
        ...listeners: ((event: classes.obeePigZombieAngerEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent',
        ...listeners: ((event: classes.cdpepPlayerAdvancementCriterionGrantEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerAdvancementDoneEvent',
        ...listeners: ((event: classes.obepPlayerAdvancementDoneEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerAnimationEvent',
        ...listeners: ((event: classes.obepPlayerAnimationEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerArmorChangeEvent',
        ...listeners: ((event: classes.cdpepPlayerArmorChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerArmorStandManipulateEvent',
        ...listeners: ((event: classes.obepPlayerArmorStandManipulateEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent',
        ...listeners: ((event: classes.cdpepPlayerAttackEntityCooldownResetEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerAttemptPickupItemEvent',
        ...listeners: ((event: classes.obepPlayerAttemptPickupItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBedEnterEvent',
        ...listeners: ((event: classes.obepPlayerBedEnterEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBedLeaveEvent',
        ...listeners: ((event: classes.obepPlayerBedLeaveEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBucketEmptyEvent',
        ...listeners: ((event: classes.obepPlayerBucketEmptyEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBucketEvent',
        ...listeners: ((event: classes.obepPlayerBucketEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerBucketFillEvent',
        ...listeners: ((event: classes.obepPlayerBucketFillEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerChangedMainHandEvent',
        ...listeners: ((event: classes.obepPlayerChangedMainHandEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerChangedWorldEvent',
        ...listeners: ((event: classes.obepPlayerChangedWorldEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerChannelEvent',
        ...listeners: ((event: classes.obepPlayerChannelEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent',
        ...listeners: ((event: classes.cdpepPlayerClientOptionsChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerCommandPreprocessEvent',
        ...listeners: ((event: classes.obepPlayerCommandPreprocessEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerCommandSendEvent',
        ...listeners: ((event: classes.obepPlayerCommandSendEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent',
        ...listeners: ((event: classes.cdpepPlayerConnectionCloseEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PlayerDeathEvent',
        ...listeners: ((event: classes.obeePlayerDeathEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerDropItemEvent',
        ...listeners: ((event: classes.obepPlayerDropItemEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerEditBookEvent',
        ...listeners: ((event: classes.obepPlayerEditBookEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerEggThrowEvent',
        ...listeners: ((event: classes.obepPlayerEggThrowEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerElytraBoostEvent',
        ...listeners: ((event: classes.cdpepPlayerElytraBoostEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerEvent',
        ...listeners: ((event: classes.obepPlayerEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerExpChangeEvent',
        ...listeners: ((event: classes.obepPlayerExpChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerFishEvent',
        ...listeners: ((event: classes.obepPlayerFishEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerGameModeChangeEvent',
        ...listeners: ((event: classes.obepPlayerGameModeChangeEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerHandshakeEvent',
        ...listeners: ((event: classes.cdpepPlayerHandshakeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerHarvestBlockEvent',
        ...listeners: ((event: classes.obepPlayerHarvestBlockEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerInteractAtEntityEvent',
        ...listeners: ((event: classes.obepPlayerInteractAtEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerInteractEntityEvent',
        ...listeners: ((event: classes.obepPlayerInteractEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerInteractEvent',
        ...listeners: ((event: classes.obepPlayerInteractEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemBreakEvent',
        ...listeners: ((event: classes.obepPlayerItemBreakEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemConsumeEvent',
        ...listeners: ((event: classes.obepPlayerItemConsumeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemDamageEvent',
        ...listeners: ((event: classes.obepPlayerItemDamageEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemHeldEvent',
        ...listeners: ((event: classes.obepPlayerItemHeldEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerItemMendEvent',
        ...listeners: ((event: classes.obepPlayerItemMendEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerJoinEvent',
        ...listeners: ((event: classes.obepPlayerJoinEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerJumpEvent',
        ...listeners: ((event: classes.cdpepPlayerJumpEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerKickEvent',
        ...listeners: ((event: classes.obepPlayerKickEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent',
        ...listeners: ((event: classes.cdpepPlayerLaunchProjectileEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PlayerLeashEntityEvent',
        ...listeners: ((event: classes.obeePlayerLeashEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerLevelChangeEvent',
        ...listeners: ((event: classes.obepPlayerLevelChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerLocaleChangeEvent',
        ...listeners: ((event: classes.obepPlayerLocaleChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerLoginEvent',
        ...listeners: ((event: classes.obepPlayerLoginEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerMoveEvent',
        ...listeners: ((event: classes.obepPlayerMoveEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent',
        ...listeners: ((event: classes.cdpeePlayerNaturallySpawnCreaturesEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerPickupArrowEvent',
        ...listeners: ((event: classes.obepPlayerPickupArrowEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent',
        ...listeners: ((event: classes.cdpepPlayerPickupExperienceEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerPortalEvent',
        ...listeners: ((event: classes.obepPlayerPortalEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerPostRespawnEvent',
        ...listeners: ((event: classes.cdpepPlayerPostRespawnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerQuitEvent',
        ...listeners: ((event: classes.obepPlayerQuitEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerReadyArrowEvent',
        ...listeners: ((event: classes.cdpepPlayerReadyArrowEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent',
        ...listeners: ((event: classes.cdpepPlayerRecipeBookClickEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRecipeDiscoverEvent',
        ...listeners: ((event: classes.obepPlayerRecipeDiscoverEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRegisterChannelEvent',
        ...listeners: ((event: classes.obepPlayerRegisterChannelEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerResourcePackStatusEvent',
        ...listeners: ((event: classes.obepPlayerResourcePackStatusEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRespawnEvent',
        ...listeners: ((event: classes.obepPlayerRespawnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerRiptideEvent',
        ...listeners: ((event: classes.obepPlayerRiptideEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerShearEntityEvent',
        ...listeners: ((event: classes.obepPlayerShearEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.spigotmc.event.player.PlayerSpawnLocationEvent',
        ...listeners: ((event: classes.osepPlayerSpawnLocationEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent',
        ...listeners: ((event: classes.cdpepPlayerStartSpectatingEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerStatisticIncrementEvent',
        ...listeners: ((event: classes.obepPlayerStatisticIncrementEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent',
        ...listeners: ((event: classes.cdpepPlayerStopSpectatingEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerSwapHandItemsEvent',
        ...listeners: ((event: classes.obepPlayerSwapHandItemsEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerTakeLecternBookEvent',
        ...listeners: ((event: classes.obepPlayerTakeLecternBookEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent',
        ...listeners: ((event: classes.cdpepPlayerTeleportEndGatewayEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerTeleportEvent',
        ...listeners: ((event: classes.obepPlayerTeleportEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerToggleFlightEvent',
        ...listeners: ((event: classes.obepPlayerToggleFlightEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerToggleSneakEvent',
        ...listeners: ((event: classes.obepPlayerToggleSneakEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerToggleSprintEvent',
        ...listeners: ((event: classes.obepPlayerToggleSprintEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerUnleashEntityEvent',
        ...listeners: ((event: classes.obepPlayerUnleashEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerUnregisterChannelEvent',
        ...listeners: ((event: classes.obepPlayerUnregisterChannelEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent',
        ...listeners: ((event: classes.cdpepPlayerUseUnknownEntityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.player.PlayerVelocityEvent',
        ...listeners: ((event: classes.obepPlayerVelocityEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.PluginDisableEvent',
        ...listeners: ((event: classes.obesPluginDisableEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.PluginEnableEvent',
        ...listeners: ((event: classes.obesPluginEnableEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.PluginEvent',
        ...listeners: ((event: classes.obesPluginEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.PortalCreateEvent',
        ...listeners: ((event: classes.obewPortalCreateEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.PotionSplashEvent',
        ...listeners: ((event: classes.obeePotionSplashEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent',
        ...listeners: ((event: classes.cdpeePreCreatureSpawnEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.PreFillProfileEvent',
        ...listeners: ((event: classes.cdpepPreFillProfileEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.PreLookupProfileEvent',
        ...listeners: ((event: classes.cdpepPreLookupProfileEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.PrepareAnvilEvent',
        ...listeners: ((event: classes.obeiPrepareAnvilEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.PrepareItemCraftEvent',
        ...listeners: ((event: classes.obeiPrepareItemCraftEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.enchantment.PrepareItemEnchantEvent',
        ...listeners: ((event: classes.obeePrepareItemEnchantEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.inventory.PrepareResultEvent',
        ...listeners: ((event: classes.cdpeiPrepareResultEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.PrepareSmithingEvent',
        ...listeners: ((event: classes.obeiPrepareSmithingEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent',
        ...listeners: ((event: classes.cdpeePreSpawnerSpawnEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.profile.ProfileWhitelistVerifyEvent',
        ...listeners: ((event: classes.cdpepProfileWhitelistVerifyEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.ProjectileCollideEvent',
        ...listeners: ((event: classes.cdpeeProjectileCollideEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ProjectileHitEvent',
        ...listeners: ((event: classes.obeeProjectileHitEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.ProjectileLaunchEvent',
        ...listeners: ((event: classes.obeeProjectileLaunchEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidEvent',
        ...listeners: ((event: classes.oberRaidEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidFinishEvent',
        ...listeners: ((event: classes.oberRaidFinishEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidSpawnWaveEvent',
        ...listeners: ((event: classes.oberRaidSpawnWaveEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidStopEvent',
        ...listeners: ((event: classes.oberRaidStopEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.raid.RaidTriggerEvent',
        ...listeners: ((event: classes.oberRaidTriggerEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.RemoteServerCommandEvent',
        ...listeners: ((event: classes.obesRemoteServerCommandEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerCommandEvent',
        ...listeners: ((event: classes.obesServerCommandEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerEvent',
        ...listeners: ((event: classes.obesServerEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.ServerExceptionEvent',
        ...listeners: ((event: classes.cdpesServerExceptionEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerListPingEvent',
        ...listeners: ((event: classes.obesServerListPingEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServerLoadEvent',
        ...listeners: ((event: classes.obesServerLoadEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.ServerTickEndEvent',
        ...listeners: ((event: classes.cdpesServerTickEndEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.ServerTickStartEvent',
        ...listeners: ((event: classes.cdpesServerTickStartEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServiceEvent',
        ...listeners: ((event: classes.obesServiceEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServiceRegisterEvent',
        ...listeners: ((event: classes.obesServiceRegisterEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.ServiceUnregisterEvent',
        ...listeners: ((event: classes.obesServiceUnregisterEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SheepDyeWoolEvent',
        ...listeners: ((event: classes.obeeSheepDyeWoolEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SheepRegrowWoolEvent',
        ...listeners: ((event: classes.obeeSheepRegrowWoolEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.SignChangeEvent',
        ...listeners: ((event: classes.obebSignChangeEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent',
        ...listeners: ((event: classes.cdpeeSkeletonHorseTrapEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent',
        ...listeners: ((event: classes.cdpeeSlimeChangeDirectionEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimePathfindEvent',
        ...listeners: ((event: classes.cdpeeSlimePathfindEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SlimeSplitEvent',
        ...listeners: ((event: classes.obeeSlimeSplitEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeSwimEvent',
        ...listeners: ((event: classes.cdpeeSlimeSwimEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent',
        ...listeners: ((event: classes.cdpeeSlimeTargetLivingEntityEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.SlimeWanderEvent',
        ...listeners: ((event: classes.cdpeeSlimeWanderEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.SpawnChangeEvent',
        ...listeners: ((event: classes.obewSpawnChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.SpawnerSpawnEvent',
        ...listeners: ((event: classes.obeeSpawnerSpawnEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.block.SpongeAbsorbEvent',
        ...listeners: ((event: classes.obebSpongeAbsorbEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.StriderTemperatureChangeEvent',
        ...listeners: ((event: classes.obeeStriderTemperatureChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.StructureGrowEvent',
        ...listeners: ((event: classes.obewStructureGrowEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.server.TabCompleteEvent',
        ...listeners: ((event: classes.obesTabCompleteEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.ThrownEggHatchEvent',
        ...listeners: ((event: classes.cdpeeThrownEggHatchEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.ThunderChangeEvent',
        ...listeners: ((event: classes.obewThunderChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.TimeSkipEvent',
        ...listeners: ((event: classes.obewTimeSkipEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.block.TNTPrimeEvent',
        ...listeners: ((event: classes.cdpebTNTPrimeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.inventory.TradeSelectEvent',
        ...listeners: ((event: classes.obeiTradeSelectEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.TurtleGoHomeEvent',
        ...listeners: ((event: classes.cdpeeTurtleGoHomeEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.TurtleLayEggEvent',
        ...listeners: ((event: classes.cdpeeTurtleLayEggEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent',
        ...listeners: ((event: classes.cdpeeTurtleStartDiggingEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.command.UnknownCommandEvent',
        ...listeners: ((event: classes.obecUnknownCommandEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleBlockCollisionEvent',
        ...listeners: ((event: classes.obevVehicleBlockCollisionEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleCollisionEvent',
        ...listeners: ((event: classes.obevVehicleCollisionEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleCreateEvent',
        ...listeners: ((event: classes.obevVehicleCreateEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleDamageEvent',
        ...listeners: ((event: classes.obevVehicleDamageEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleDestroyEvent',
        ...listeners: ((event: classes.obevVehicleDestroyEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleEnterEvent',
        ...listeners: ((event: classes.obevVehicleEnterEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleEntityCollisionEvent',
        ...listeners: ((event: classes.obevVehicleEntityCollisionEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleEvent',
        ...listeners: ((event: classes.obevVehicleEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleExitEvent',
        ...listeners: ((event: classes.obevVehicleExitEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleMoveEvent',
        ...listeners: ((event: classes.obevVehicleMoveEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.vehicle.VehicleUpdateEvent',
        ...listeners: ((event: classes.obevVehicleUpdateEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.VillagerAcquireTradeEvent',
        ...listeners: ((event: classes.obeeVillagerAcquireTradeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.VillagerCareerChangeEvent',
        ...listeners: ((event: classes.obeeVillagerCareerChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.entity.VillagerReplenishTradeEvent',
        ...listeners: ((event: classes.obeeVillagerReplenishTradeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.WeatherChangeEvent',
        ...listeners: ((event: classes.obewWeatherChangeEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.weather.WeatherEvent',
        ...listeners: ((event: classes.obewWeatherEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.server.WhitelistToggleEvent',
        ...listeners: ((event: classes.cdpesWhitelistToggleEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.WitchConsumePotionEvent',
        ...listeners: ((event: classes.cdpeeWitchConsumePotionEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.WitchReadyPotionEvent',
        ...listeners: ((event: classes.cdpeeWitchReadyPotionEvent) => {})[]
    ): void;
    static event (
        name: 'com.destroystokyo.paper.event.entity.WitchThrowPotionEvent',
        ...listeners: ((event: classes.cdpeeWitchThrowPotionEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldEvent',
        ...listeners: ((event: classes.obewWorldEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldInitEvent',
        ...listeners: ((event: classes.obewWorldInitEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldLoadEvent',
        ...listeners: ((event: classes.obewWorldLoadEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldSaveEvent',
        ...listeners: ((event: classes.obewWorldSaveEvent) => {})[]
    ): void;
    static event (
        name: 'org.bukkit.event.world.WorldUnloadEvent',
        ...listeners: ((event: classes.obewWorldUnloadEvent) => {})[]
    ): void;
    static event (
        name: 'net.md_5.bungee.api.chat.ClickEvent',
        ...listeners: ((event: classes.nmbacClickEvent) => {})[]
    ): void;
    static event (
        name: 'net.md_5.bungee.api.chat.HoverEvent',
        ...listeners: ((event: classes.nmbacHoverEvent) => {})[]
    ): void;
}
