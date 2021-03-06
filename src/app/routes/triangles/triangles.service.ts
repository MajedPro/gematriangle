import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { TriangleToolboxMessage } from './triangle-toolbox/triangle-toolbox-message.enum'
import { TriangleCounterValues } from './triangle/triangle-counter-values.enum'
import Decimal from 'decimal.js'

@Injectable({providedIn: 'root'})
export class TrianglesService {

  private triangleToolboxMessageSource = new Subject<{ name: TriangleToolboxMessage, value: any }>()
  triangleToolboxMessage$ = this.triangleToolboxMessageSource.asObservable()

  private totalValueUpdatedSource = new Subject<Decimal>()
  totalValueUpdated$ = this.totalValueUpdatedSource.asObservable()

  private onTriangleToolboxMessage(name: TriangleToolboxMessage, value: any) {
    this.triangleToolboxMessageSource.next({name, value})
  }

  onStarOfDavid() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.StarOfDavid, null)
  }

  onCenteredTriangle() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.CenteredTriangle, null)
  }

  onTriangleCorners() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.TriangleCorners, null)
  }

  onTriangleMidpoints() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.TriangleMidpoints, null)
  }

  onTriangleMidpointsPlus() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.TriangleMidpointsPlus, null)
  }

  onTriangleCenter() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.TriangleCenter, null)
  }

  onTriangleSide(side: string) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.TriangleSide, side)
  }

  onChangeColor(color: string) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ChangeColor, color)
  }

  onChangeCounterValues(counterValues: TriangleCounterValues) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ChangeCounterValues, counterValues)
  }

  onChangeMode(mode: string) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ChangeMode, mode)
  }

  onChangeRowCount(rowCount: number) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ChangeRowCount, rowCount)
  }

  onClearActive() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ClearActive, null)
  }

  onClearAll() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ClearAll, null)
  }

  onClearColor() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ClearColor, null)
  }

  onCycleLineDirections(direction) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.CycleLineDirections, direction)
  }

  onDrawLines() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.DrawLines, null)
  }

  onEraseLines() {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.EraseLines, null)
  }

  onToggleAlign(alignCenter: boolean) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ToggleAlign, alignCenter)
  }

  onToggleLineLength(shortLines) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ToggleLineLength, shortLines)
  }

  onToggleZoom(zoom: boolean) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.ToggleZoom, zoom)
  }

  onMultiple(multiple, offset) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.Multiple, {multiple, offset})
  }

  onTotalValueUpdated(value: Decimal) {
    this.totalValueUpdatedSource.next(value)
  }

  onCycleHebrewLetters(hebrewLetters: string) {
    this.onTriangleToolboxMessage(TriangleToolboxMessage.CycleHebrewLetters, hebrewLetters)
  }
}
